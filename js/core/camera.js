/* =========================================================
   camera.js — pan / zoom / pinch + film-style camera flights
   ---------------------------------------------------------
   view = { s, tx, ty }  -> stage transform: translate(tx,ty) scale(s)
   flyTo() arcs the zoom (pulls back mid-flight, like a crane shot)
   ========================================================= */
(function (M) {
  "use strict";
  const U = M.util;

  const C = M.camera = {
    view: { s: 1, tx: 0, ty: 0 },
    dragMoved: false,
    flying: false
  };
  let stage, viewport, flightId = 0, idleTimer;

  /* usable screen area (between top bar and bottom dock) */
  function safeArea() {
    const top = (U.$(".topbar") || {}).offsetHeight || 64;
    const dock = U.$(".dock");
    const bottom = dock ? dock.offsetHeight + 24 : 24;
    const w = viewport.clientWidth, h = viewport.clientHeight;
    return { x: 0, y: top, w, h: Math.max(200, h - top - bottom) };
  }
  C.safeArea = () => safeArea();

  C.apply = function () {
    const v = C.view;
    stage.style.transform = `translate(${v.tx}px, ${v.ty}px) scale(${v.s})`;
    M.emit("camera", v);
    // switch the stage to a GPU layer only while moving, so text re-renders crisp when still
    stage.classList.add("moving");
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => stage.classList.remove("moving"), 160);
  };

  /* camera as centre point + scale */
  C.getLook = function () {
    const a = safeArea(), v = C.view;
    return { cx: (a.x + a.w / 2 - v.tx) / v.s, cy: (a.y + a.h / 2 - v.ty) / v.s, s: v.s };
  };
  C.setLook = function ({ cx, cy, s }) {
    const a = safeArea();
    C.view.s = s;
    C.view.tx = a.x + a.w / 2 - cx * s;
    C.view.ty = a.y + a.h / 2 - cy * s;
    C.apply();
  };

  /* look that fits a world rect on screen */
  C.lookAtRect = function (r, pad = 40) {
    const a = safeArea();
    const s = U.clamp(Math.min((a.w - pad * 2) / r.w, (a.h - pad * 2) / r.h), M.config.camera.minScale, M.config.camera.maxScale);
    return { cx: r.x + r.w / 2, cy: r.y + r.h / 2, s };
  };
  C.overviewLook = function () {
    const a = safeArea();
    const narrow = a.w < 700;
    const look = C.lookAtRect({ x: 0, y: 0, w: M.world.w, h: M.world.h }, narrow ? 6 : 20);
    return look;
  };

  /* ---------- flights ---------- */
  C.cancel = function () { flightId++; C.flying = false; document.body.classList.remove("flying"); };

  C.flyTo = function (target, opts = {}) {
    const from = C.getLook();
    const id = ++flightId;
    const dur = U.reduceMotion ? 0 : (opts.duration != null ? opts.duration : M.config.camera.flyDuration);
    if (!dur) { C.setLook(target); M.emit("camera:settled"); return Promise.resolve(); }

    const a = safeArea();
    const distPx = Math.hypot(target.cx - from.cx, target.cy - from.cy) * Math.min(from.s, target.s);
    const arc = opts.arc != null ? opts.arc : U.clamp(distPx / (a.w * 2.2), 0, 0.45);
    const ls0 = Math.log(from.s), ls1 = Math.log(target.s);
    const t0 = performance.now();

    C.flying = true;
    document.body.classList.add("flying");
    if (opts.sound !== false && M.sound) M.sound.play("whoosh");

    return new Promise(resolve => {
      function frame(now) {
        if (id !== flightId) return resolve();
        const t = Math.min(1, (now - t0) / dur);
        const e = (opts.ease || U.easeInOut)(t);
        const s = Math.exp(U.lerp(ls0, ls1, e)) * (1 - arc * Math.sin(Math.PI * t));
        C.setLook({ cx: U.lerp(from.cx, target.cx, e), cy: U.lerp(from.cy, target.cy, e), s });
        if (t < 1) requestAnimationFrame(frame);
        else {
          C.flying = false;
          document.body.classList.remove("flying");
          M.emit("camera:settled");
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  };

  C.zoomAt = function (factor, sx, sy, smooth) {
    const cfg = M.config.camera;
    const v = C.view;
    const ns = U.clamp(v.s * factor, cfg.minScale, cfg.maxScale);
    if (smooth) {
      const wx = (sx - v.tx) / v.s, wy = (sy - v.ty) / v.s;
      const look = C.getLook();
      const f = v.s / ns;
      return C.flyTo({ cx: wx + (look.cx - wx) * f, cy: wy + (look.cy - wy) * f, s: ns }, { duration: 420, arc: 0, sound: false });
    }
    const f = ns / v.s;
    v.tx = sx - (sx - v.tx) * f;
    v.ty = sy - (sy - v.ty) * f;
    v.s = ns;
    C.apply();
  };

  /* ---------- input ---------- */
  C.init = function () {
    stage = U.$("#stage");
    viewport = U.$("#viewport");

    const pointers = new Map();
    let start = null, pinch = null;

    viewport.addEventListener("pointerdown", e => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      C.cancel();
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        start = { x: e.clientX, y: e.clientY, tx: C.view.tx, ty: C.view.ty };
        C.dragMoved = false;
      } else if (pointers.size === 2) {
        const [p, q] = [...pointers.values()];
        pinch = { d: Math.hypot(p.x - q.x, p.y - q.y), s: C.view.s };
      }
    });

    window.addEventListener("pointermove", e => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2 && pinch) {
        const [p, q] = [...pointers.values()];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        C.zoomAt((pinch.s * d / pinch.d) / C.view.s, (p.x + q.x) / 2, (p.y + q.y) / 2);
        C.dragMoved = true;
        return;
      }
      if (!start) return;
      const dx = e.clientX - start.x, dy = e.clientY - start.y;
      if (!C.dragMoved && Math.hypot(dx, dy) > 6) {
        C.dragMoved = true;
        viewport.classList.add("dragging");
        try { viewport.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
      }
      if (C.dragMoved) {
        C.view.tx = start.tx + dx;
        C.view.ty = start.ty + dy;
        C.apply();
      }
    });

    const end = e => {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinch = null;
      if (pointers.size === 0) {
        start = null;
        viewport.classList.remove("dragging");
        if (C.dragMoved) M.emit("camera:settled");
        setTimeout(() => { C.dragMoved = false; }, 0);
      }
    };
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);

    let wheelSettle;
    viewport.addEventListener("wheel", e => {
      e.preventDefault();
      C.cancel();
      C.zoomAt(Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY);
      clearTimeout(wheelSettle);
      wheelSettle = setTimeout(() => M.emit("camera:settled"), 180);
    }, { passive: false });

    const mid = () => { const a = safeArea(); return [a.x + a.w / 2, a.y + a.h / 2]; };
    U.$("#zoomIn").addEventListener("click", () => C.zoomAt(1.35, ...mid(), true));
    U.$("#zoomOut").addEventListener("click", () => C.zoomAt(0.74, ...mid(), true));
    U.$("#zoomFit").addEventListener("click", () => M.state.focus ? M.focusBranch(M.state.focus) : M.overview());

    let rt;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        if (M.state.focus) C.setLook(C.lookAtRect(M.focusRect(M.clusterById[M.state.focus]), 24));
        else C.setLook(C.overviewLook());
      }, 150);
    });
  };
})(window.MindMap);
