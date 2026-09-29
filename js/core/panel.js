/* =========================================================
   panel.js — the detail "portal" that opens from a ⊕
   ---------------------------------------------------------
   Render order for every node:
     media(top) → HOOK → media(hook) → CORE ARGUMENT → sections
     → media(end) → THINK ABOUT IT → connections → sources
   ========================================================= */
(function (M) {
  "use strict";
  const U = M.util;
  const P = M.panel = {};
  let portal, panel, body, lastFocus = null, current = null, cameraMoved = false;

  P.init = function () {
    portal = U.$("#portal");
    panel = U.$("#panel");
    body = U.$("#panelBody");
    U.$("#panelClose").addEventListener("click", P.close);
    U.$("#portalBg").addEventListener("click", P.close);
    U.$("#prevBtn").addEventListener("click", () => step(-1));
    U.$("#nextBtn").addEventListener("click", () => step(1));
  };

  P.isOpen = () => !portal.hidden;
  P.current = () => current;

  function step(dir) {
    const i = M.tour.indexOf(current);
    const j = i + dir;
    if (j < 0) return;
    if (j >= M.tour.length) { P.close(); M.overview(); return; }
    P.switchTo(M.tour[j]);
  }

  /* ---------- rendering ---------- */
  function sectionHTML(s, n) {
    const out = [];
    if (s.h) out.push(`<h4>${s.h}</h4>`);
    if (s.p) out.push(`<p>${s.p}</p>`);
    if (s.list) out.push(`<ul>${s.list.map(li => `<li>${li}</li>`).join("")}</ul>`);
    if (s.chips) out.push(`<div class="chips">${s.chips.map(c => `<span class="chip">${c}</span>`).join("")}</div>`);
    if (s.quote) out.push(`<blockquote class="quote">${s.quote}${s.cite ? `<footer>— ${s.cite}</footer>` : ""}</blockquote>`);
    if (s.split) out.push(M.media.render({ type: "compare",
      left: { title: s.split.bad.h, items: s.split.bad.items, tone: "bad" },
      right: { title: s.split.good.h, items: s.split.good.items, tone: "good" } }));
    if (s.questions) out.push(`<div class="q-list">${M.clusters.map(c =>
      `<button type="button" class="q-btn c-${c.color}" data-fly="${c.id}"><span class="q-num">Q${c.number}</span><span>${c.title}</span></button>`).join("")}</div>`);
    return out.join("");
  }

  function render(n) {
    const d = n.detail || {};
    const branch = n.branchId ? M.clusterById[n.branchId] : null;
    const media = [...(d.media || [])];
    if (d.hero) media.unshift({ type: "image", src: d.hero, alt: "", at: "top" });
    const at = pos => media.filter(m => (m.at || M.media.defaultPosition(m)) === pos).map(M.media.render).join("");

    const out = [];
    out.push(at("top"));
    if (d.hook) out.push(`<div class="hook"><span class="block-label">Provocative hook</span><p>${d.hook}</p></div>`);
    out.push(at("hook"));
    if (d.argument) out.push(`<div class="argument"><span class="block-label">${d.argument.label || "Core argument"}</span>${d.argument.html}</div>`);
    if (d.lead) out.push(`<p class="lead">${d.lead}</p>`);
    (d.sections || []).forEach(s => out.push(sectionHTML(s, n)));
    out.push(at("end"));

    if (d.reflect) out.push(`<div class="reflect">
        <span class="block-label">Think about it</span>
        <p class="reflect-q">${d.reflect.q}</p>
        <button type="button" class="reflect-toggle">Show a possible answer</button>
        <div class="reflect-a"><div><p>${d.reflect.a}</p></div></div>
      </div>`);

    // connections inside this question
    const rel = new Set();
    M.edges.forEach(e => {
      if (e.kind !== "inner") return;
      if (e.from === n.gid) rel.add(e.to);
      if (e.to === n.gid) rel.add(e.from);
    });
    if (rel.size) out.push(`<div class="related"><p class="related-label">Connected in this question</p>${[...rel].map(g => relBtn(M.byId[g])).join("")}</div>`);
    if (n.cross && n.cross.length) out.push(`<div class="related"><p class="related-label">Across the map</p>${n.cross.map(x => relBtn(M.byId[x.gid], x.label)).join("")}</div>`);

    if (d.refs && d.refs.length) {
      const refs = d.refs.map(k => M.refFor(n.branchId, k)).filter(Boolean);
      out.push(`<div class="refs"><p><strong>Sources for this node</strong></p>${refs.map(r =>
        `<p>${r.full}${r.doi ? ` <a href="${r.doi}" target="_blank" rel="noopener">${r.doi}</a>` : ""}${U.isDev && r.verify ? ` <span class="dev-verify">⚠ ${U.esc(r.verify)}</span>` : ""}</p>`).join("")}</div>`);
    }

    body.innerHTML = out.filter(Boolean).join("");
    [...body.children].forEach((c, i) => c.style.setProperty("--i", i));

    body.querySelectorAll(".reflect-toggle").forEach(btn => btn.addEventListener("click", () => {
      const box = btn.closest(".reflect");
      const open = box.classList.toggle("open");
      btn.textContent = open ? "Hide answer" : "Show a possible answer";
    }));
    body.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => P.switchTo(btn.dataset.go)));
    body.querySelectorAll("[data-fly]").forEach(btn => btn.addEventListener("click", () => { P.close(); M.focusBranch(btn.dataset.fly); }));
    M.media.hydrate(body, media);

    const kicker = branch ? `Q${branch.number} · ${d.kicker || ""}` : (d.kicker || "");
    U.$("#panelKicker").textContent = kicker;
    U.$("#panelTitle").innerHTML = d.title || n.title;
    U.$("#panelQuestion").textContent = branch && U.stripTags(d.title || "") !== branch.title ? branch.title : "";
    panel.className = `panel c-${n.color}`;
    const idx = M.tour.indexOf(n.gid);
    U.$("#panelStep").textContent = `${idx + 1} of ${M.tour.length}`;
    U.$("#prevBtn").disabled = idx <= 0;
    U.$("#nextBtn").innerHTML = idx >= M.tour.length - 1 ? "Finish ✓" : "Next ›";
    body.scrollTop = 0;
  }

  function relBtn(r, label) {
    return `<button type="button" class="related-btn c-${r.color}" data-go="${r.gid}"><span class="dot"></span>${U.stripTags(r.title)}${label ? `<em>${label}</em>` : ""}</button>`;
  }

  /* ---------- open / switch / close ---------- */
  function ensureVisible(n) {
    if (n.branchId && !M.clusterById[n.branchId].built) M.render.buildCluster(n.branchId, { instant: true });
  }

  P.open = function (gid, originEl) {
    const n = M.byId[gid];
    if (!n) return;
    if (!M.state.introDone) M.intro.finish();
    ensureVisible(n);
    const r = (originEl || n.el).getBoundingClientRect();
    portal.style.setProperty("--cx", r.left + r.width / 2 + "px");
    portal.style.setProperty("--cy", r.top + r.height / 2 + "px");
    lastFocus = document.activeElement;
    current = gid;
    cameraMoved = false;
    render(n);
    M.render.setActive(gid);
    M.markVisited(gid);
    portal.hidden = false;
    void portal.offsetWidth;
    portal.classList.add("open");
    document.body.classList.add("panel-open");
    M.sound && M.sound.play("open");
    M.emit("panel:open", gid);
    setTimeout(() => U.$("#panelClose").focus({ preventScroll: true }), 320);
  };

  P.switchTo = function (gid) {
    if (!gid || gid === current) return;
    const n = M.byId[gid];
    const prevBranch = current && M.byId[current].branchId;
    current = gid;
    ensureVisible(n);
    body.classList.remove("swap-in");
    body.classList.add("swap-out");
    M.sound && M.sound.play("tick");
    setTimeout(() => {
      render(n);
      body.classList.remove("swap-out");
      void body.offsetWidth;
      body.classList.add("swap-in");
      M.render.setActive(gid);
      M.markVisited(gid);
      // move the map behind the panel to the node
      if (n.branchId && n.branchId !== M.state.focus) M.setFocus(n.branchId);
      if (!n.branchId && M.state.focus) M.setFocus(null);
      M.camera.flyTo(nodeLook(n), { duration: prevBranch && prevBranch !== n.branchId ? 1300 : 700, sound: false });
      cameraMoved = true;
      M.emit("panel:open", gid);
    }, U.reduceMotion ? 0 : 200);
  };

  function nodeLook(n) {
    const b = M.render.nodeBox(n);
    return { cx: b.x + b.w / 2, cy: b.y + b.h / 2, s: Math.max(0.55, Math.min(0.95, M.camera.view.s)) };
  }

  P.close = function () {
    if (portal.hidden) return;
    portal.classList.remove("open");
    document.body.classList.remove("panel-open");
    M.render.setActive(null);
    M.sound && M.sound.play("close");
    body.querySelectorAll("iframe, video, audio").forEach(m => m.remove()); // stop playback
    const n = M.byId[current];
    current = null;
    if (cameraMoved) {
      cameraMoved = false;
      setTimeout(() => n && n.branchId ? M.focusBranch(n.branchId) : M.overview(), 250);
    }
    setTimeout(() => { portal.hidden = true; }, U.reduceMotion ? 0 : 620);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    M.emit("panel:close");
  };
})(window.MindMap);
