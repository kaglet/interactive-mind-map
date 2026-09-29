/* =========================================================
   app.js — boots the map and wires up the interface
   ========================================================= */
(function (M) {
  "use strict";
  const U = M.util;
  const UI = M.ui = {};

  /* ---------------- focus / overview ---------------- */
  M.setFocus = function (id, { silent } = {}) {
    M.state.focus = id;
    M.render.setFocus(id);
    document.body.classList.toggle("focused", !!id);
    updateDock();
    updateCrumb();
    if (!silent) M.emit("focus", id);
  };

  M.focusBranch = function (id) {
    const c = M.clusterById[id];
    if (!c) return;
    if (!M.state.introDone) M.intro.finish();
    M.setFocus(id);
    const look = M.camera.lookAtRect(M.focusRect(c), 24);
    return M.camera.flyTo(look).then(() => {
      if (M.state.focus === id) M.render.buildCluster(id);
    });
  };

  /* the area to frame when a question is focused (halo + its title above) */
  M.focusRect = c => ({ x: c.halo.x, y: c.halo.y - 200, w: c.halo.w, h: c.halo.h + 200 });

  M.overview = function () {
    M.setFocus(null);
    return M.camera.flyTo(M.camera.overviewLook());
  };

  /* ---------------- progress ---------------- */
  M.markVisited = function (gid) {
    if (M.state.visited.has(gid)) return;
    M.state.visited.add(gid);
    const n = M.byId[gid];
    n.el.classList.add("visited");
    n.hotspot.classList.remove("beckon");
    updateProgress();
  };

  function updateProgress() {
    const total = M.tour.length, done = M.tour.filter(g => M.state.visited.has(g)).length;
    U.$("#progressCount").textContent = done;
    U.$("#progressTotal").textContent = total;
    const C = 94.25;
    U.$("#progressFill").style.strokeDashoffset = C - C * done / total;
    M.clusters.forEach(c => {
      const ids = M.tour.filter(g => g.startsWith(c.id + "."));
      const d = ids.filter(g => M.state.visited.has(g)).length;
      const pill = U.$(`.dock-q[data-q="${c.id}"] .dq-bar i`);
      if (pill) pill.style.width = (100 * d / ids.length) + "%";
    });
    if (done === total) toast("✨ You’ve explored the whole map!");
  }

  /* ---------------- dock + breadcrumb ---------------- */
  function buildDock() {
    const dock = U.$("#dock");
    dock.innerHTML = `<button type="button" class="dock-home" data-q="" title="Overview (0)">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/></svg><span>Overview</span></button>` +
      M.clusters.map(c => `<button type="button" class="dock-q c-${c.color}" data-q="${c.id}" title="${U.esc(c.title)} (${c.number})">
        <span class="dq-num">Q${c.number}</span><span class="dq-title">${c.short}</span><span class="dq-bar"><i></i></span></button>`).join("");
    dock.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
      M.panel.isOpen() && M.panel.close();
      b.dataset.q ? M.focusBranch(b.dataset.q) : M.overview();
    }));
  }
  function updateDock() {
    U.$$("#dock button").forEach(b => b.classList.toggle("active", (b.dataset.q || null) === M.state.focus));
  }
  function updateCrumb() {
    const el = U.$("#crumb");
    const c = M.state.focus && M.clusterById[M.state.focus];
    el.innerHTML = c
      ? `<button type="button" id="crumbHome">Overview</button><span aria-hidden="true">›</span><span class="crumb-q c-${c.color}">Q${c.number} · ${c.short}</span>`
      : `<span>Overview · choose a question</span>`;
    const home = U.$("#crumbHome");
    home && home.addEventListener("click", M.overview);
  }

  /* ---------------- drawer (sources / checklist) ---------------- */
  UI.toggleDrawer = function (open) {
    U.$("#drawer").classList.toggle("open", open);
    U.$("#drawerScrim").classList.toggle("open", open);
    U.$("#drawer").setAttribute("aria-hidden", String(!open));
  };

  function openSources() {
    const team = (M.team && M.team.members) || [];
    const refs = Object.values(M.refs).sort((a, b) => U.stripTags(a.full).localeCompare(U.stripTags(b.full)));
    U.$("#drawerTitle").textContent = "Sources & team";
    U.$("#drawerBody").innerHTML = `
      <section class="credits"><h3>Group members &amp; roles</h3>
        ${team.map(m => `<div class="member"><p class="m-name">${m.name}</p>
          <p class="m-qs">${(m.questions || []).map(q => { const c = M.clusterById[q]; return c ? `<span class="chip c-${c.color}">Q${c.number}</span>` : ""; }).join("")}</p>
          <p>${m.role}</p></div>`).join("")}
      </section>
      <section><h3>Reference list</h3>
        <ol class="ref-list">${refs.map(r => `<li>${r.full}${r.doi ? ` Available at: <a href="${r.doi}" target="_blank" rel="noopener">${r.doi}</a>` : ""}
          <span class="ref-used">${[...r.usedBy].map(id => { const c = M.clusterById[id]; return `<span class="chip c-${c.color}">Q${c.number}</span>`; }).join("")}</span>
          ${U.isDev && r.verify ? `<span class="dev-verify">⚠ ${U.esc(r.verify)}</span>` : ""}</li>`).join("")}</ol>
        <p class="media-note">All videos are embedded from YouTube (not downloaded or re-uploaded) and cited above; interface sounds are generated in the browser. Practising the intellectual-property ethics discussed in this map.</p>
      </section>`;
    UI.toggleDrawer(true);
  }

  /* ---------------- misc UI ---------------- */
  function toast(msg) {
    const t = U.$("#toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 3800);
  }
  UI.toast = toast;

  function showHint() {
    const h = U.$("#hint");
    h.classList.add("show");
    setTimeout(() => h.classList.remove("show"), 7000);
  }

  function bindKeys() {
    document.addEventListener("keydown", e => {
      if (e.target.closest("input, textarea")) return;
      if (e.key === "Escape") {
        if (U.$("#drawer").classList.contains("open")) return UI.toggleDrawer(false);
        if (M.panel.isOpen()) return M.panel.close();
        if (!M.state.introDone) return M.intro.finish();
        if (M.state.focus) return M.overview();
      }
      if (M.panel.isOpen()) {
        if (e.key === "ArrowRight") U.$("#nextBtn").click();
        if (e.key === "ArrowLeft") U.$("#prevBtn").click();
        return;
      }
      if (/^[1-9]$/.test(e.key)) { const c = M.clusters[+e.key - 1]; c && M.focusBranch(c.id); }
      if (e.key === "0") M.overview();
    });
  }

  /* level of detail + auto-build when the user zooms into a question by hand */
  function bindLOD() {
    // thresholds are relative to the overview zoom, so phones and big screens behave the same
    const farAt = () => Math.min(M.config.camera.farThreshold, M.camera.overviewLook().s * 1.8);
    M.on("camera", v => document.body.classList.toggle("lod-far", v.s < farAt()));
    M.on("camera:settled", () => {
      if (!M.state.introDone || M.camera.view.s < M.camera.overviewLook().s * 2.4) return;
      const look = M.camera.getLook();
      M.clusters.forEach(c => {
        if (c.built || c.building) return;
        if (look.cx > c.halo.x && look.cx < c.halo.x + c.halo.w && look.cy > c.halo.y && look.cy < c.halo.y + c.halo.h) {
          M.setFocus(c.id);
          M.render.buildCluster(c.id);
        }
      });
    });
  }

  /* floating dust particles */
  function dust() {
    const c = U.$("#stars"), ctx = c.getContext("2d");
    let pts = [];
    function size() {
      c.width = innerWidth * devicePixelRatio;
      c.height = innerHeight * devicePixelRatio;
      pts = Array.from({ length: Math.round(innerWidth * innerHeight / 16000) }, () => ({
        x: Math.random() * c.width, y: Math.random() * c.height,
        r: (Math.random() * 1.3 + .3) * devicePixelRatio, p: Math.random() * 6.28, v: Math.random() * .15 + .05
      }));
    }
    function frame(t) {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.fillStyle = "#a8998b";
      for (const s of pts) {
        s.y -= s.v; if (s.y < -5) s.y = c.height + 5;
        ctx.globalAlpha = .12 + .25 * (0.5 + 0.5 * Math.sin(t / 1400 + s.p));
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
      }
      if (!U.reduceMotion && !document.hidden) requestAnimationFrame(frame);
    }
    size(); addEventListener("resize", size);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) requestAnimationFrame(frame); });
    requestAnimationFrame(frame);
  }

  /* ---------------- boot ---------------- */
  function boot() {
    U.$("#brandTitle").textContent = M.config.title;
    U.$("#brandKicker").textContent = M.config.course;

    M.compile();
    M.render.init();
    M.camera.init();
    M.panel.init();
    M.intro.init();
    buildDock();
    updateCrumb();
    M.minimap.init();
    M.dev.init();
    bindKeys();
    bindLOD();
    dust();
    updateProgress();

    U.$("#tourBtn").addEventListener("click", () => {
      const next = M.tour.find(g => !M.state.visited.has(g)) || M.tour[0];
      const n = M.byId[next];
      if (n.branchId) M.setFocus(n.branchId);
      M.panel.open(next);
    });
    U.$("#sourcesBtn").addEventListener("click", openSources);
    U.$("#drawerClose").addEventListener("click", () => UI.toggleDrawer(false));
    U.$("#drawerScrim").addEventListener("click", () => UI.toggleDrawer(false));
    U.$("#soundBtn").addEventListener("click", () => { M.sound.setEnabled(!M.sound.enabled); M.sound.play("tick"); });
    U.$("#replayBtn").addEventListener("click", () => M.intro.playMap(200));
    M.on("intro:done", showHint);

    let saved = null;
    try { saved = localStorage.getItem("mm-sound"); } catch (_) { /* ignore */ }
    M.sound.setEnabled(saved === "1");

    M.camera.setLook(M.camera.overviewLook());

    // wait for fonts + card images so node sizes are final before lines are drawn
    const imgs = U.$$("#nodes img").map(img => img.complete ? null : new Promise(r => {
      img.addEventListener("load", r, { once: true });
      img.addEventListener("error", r, { once: true });
    }));
    const timeout = new Promise(r => setTimeout(r, 2500));
    Promise.race([Promise.all([document.fonts ? document.fonts.ready : null, ...imgs]), timeout]).then(() => {
      M.render.buildEdges();
      document.body.classList.add("ready");
      if (M.config.intro.showTitleCard && !U.reduceMotion && !/[?&]nointro/.test(location.search)) M.intro.showTitle();
      else M.intro.playMap(0);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})(window.MindMap);
