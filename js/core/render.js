/* =========================================================
   render.js — draws clusters, nodes and edges into the stage,
   and runs the node-by-node "build" animation for a cluster.
   ========================================================= */
(function (M) {
  "use strict";
  const U = M.util;
  const NS = "http://www.w3.org/2000/svg";
  const CROSSHAIR = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17M3.5 12h17"/></svg>';

  const R = M.render = {};
  let stage, clusterLayer, edgesSvg, labelLayer, nodeLayer, clusterLabelLayer;

  /* ---------------- build DOM ---------------- */
  R.init = function () {
    stage = U.$("#stage");
    stage.innerHTML = `
      <div class="cluster-layer" id="clusterLayer"></div>
      <svg class="edges" id="edges" aria-hidden="true"></svg>
      <div class="edge-labels" id="edgeLabels" aria-hidden="true"></div>
      <div class="nodes" id="nodes"></div>
      <div class="cluster-labels" id="clusterLabels"></div>`;
    clusterLayer = U.$("#clusterLayer");
    edgesSvg = U.$("#edges");
    labelLayer = U.$("#edgeLabels");
    nodeLayer = U.$("#nodes");
    clusterLabelLayer = U.$("#clusterLabels");

    const { w, h } = M.world;
    Object.assign(stage.style, { width: w + "px", height: h + "px" });
    edgesSvg.setAttribute("width", w);
    edgesSvg.setAttribute("height", h);
    edgesSvg.setAttribute("viewBox", `0 0 ${w} ${h}`);

    buildClusters();
    buildNodes();
  };

  function buildClusters() {
    M.clusters.forEach(c => {
      const halo = document.createElement("div");
      halo.className = `cluster c-${c.color}`;
      halo.dataset.cluster = c.id;
      Object.assign(halo.style, { left: c.halo.x + "px", top: c.halo.y + "px", width: c.halo.w + "px", height: c.halo.h + "px" });
      halo.addEventListener("click", e => {
        if (M.camera.dragMoved || e.target !== halo) return;
        if (M.state.focus !== c.id) M.focusBranch(c.id);
      });
      clusterLayer.appendChild(halo);
      c.haloEl = halo;

      const label = document.createElement("button");
      label.type = "button";
      label.className = `cluster-label c-${c.color}`;
      label.innerHTML = `<span class="cl-num">Q${c.number}</span><span class="cl-title">${c.title}</span>`;
      Object.assign(label.style, { left: c.halo.x + "px", top: c.halo.y - 24 + "px", maxWidth: c.halo.w + "px" });
      label.addEventListener("click", () => { if (!M.camera.dragMoved) M.focusBranch(c.id); });
      clusterLabelLayer.appendChild(label);
      c.labelEl = label;
    });
  }

  function buildNodes() {
    M.nodes.forEach(n => {
      const el = document.createElement("div");
      el.className = `node ${n.kind} lvl-${n.level} c-${n.color}`;
      el.dataset.gid = n.gid;
      Object.assign(el.style, { left: n.x + "px", top: n.y + "px", width: n.w + "px" });

      let html = "";
      if (n.img) html += `<img class="thumb" src="${n.img}" alt="" onerror="this.classList.add('missing')">`;
      html += `<span class="node-tag">${n.tag || ""}</span><h3>${n.title}</h3>`;
      if (n.teaser) html += `<p>${n.teaser}</p>`;
      html += `<button class="hotspot" type="button" aria-label="Open: ${U.esc(U.stripTags(n.title))}">${CROSSHAIR}<span class="ring"></span><span class="ring r2"></span></button>`;
      if (U.isDev) html += `<span class="dev-id">${n.gid}</span>`;
      el.innerHTML = html;

      const hotspot = el.querySelector(".hotspot");
      hotspot.addEventListener("mouseenter", () => M.sound && M.sound.play("tick"));
      hotspot.addEventListener("click", e => {
        e.stopPropagation();
        if (M.camera.dragMoved) return;
        M.panel.open(n.gid, hotspot);
      });
      el.addEventListener("click", () => {
        if (M.camera.dragMoved) return;
        // far away / other question -> fly in first; close up -> open the node
        if (n.branchId && M.state.focus !== n.branchId && M.camera.view.s < 0.5) {
          M.focusBranch(n.branchId);
          return;
        }
        M.panel.open(n.gid, hotspot);
      });

      nodeLayer.appendChild(el);
      n.el = el;
      n.hotspot = hotspot;
    });
  }

  /* ---------------- edges ---------------- */
  function box(n) { return { x: n.x, y: n.y, w: n.el.offsetWidth, h: n.el.offsetHeight }; }

  function anchor(b, side) {
    switch (side) {
      case "left": return { x: b.x, y: b.y + b.h / 2 };
      case "right": return { x: b.x + b.w, y: b.y + b.h / 2 };
      case "top": return { x: b.x + b.w / 2, y: b.y };
      default: return { x: b.x + b.w / 2, y: b.y + b.h };
    }
  }
  function autoSides(a, b) {
    const dx = (b.x + b.w / 2) - (a.x + a.w / 2), dy = (b.y + b.h / 2) - (a.y + a.h / 2);
    if (Math.abs(dx) / (a.w / 2 + b.w / 2) > Math.abs(dy) / (a.h / 2 + b.h / 2))
      return dx > 0 ? ["right", "left"] : ["left", "right"];
    return dy > 0 ? ["bottom", "top"] : ["top", "bottom"];
  }
  const DIR = { left: [-1, 0], right: [1, 0], top: [0, -1], bottom: [0, 1] };

  function innerPath(e) {
    const a = box(M.byId[e.from]), b = box(M.byId[e.to]);
    let fs = e.fs, ts = e.ts;
    if (!fs || !ts) [fs, ts] = autoSides(a, b);
    const p1 = anchor(a, fs), p2 = anchor(b, ts);
    const horiz = fs === "left" || fs === "right";
    const k = Math.max(40, (horiz ? Math.abs(p2.x - p1.x) : Math.abs(p2.y - p1.y)) * 0.5);
    const c1 = { x: p1.x + DIR[fs][0] * k, y: p1.y + DIR[fs][1] * k };
    const c2 = { x: p2.x + DIR[ts][0] * k, y: p2.y + DIR[ts][1] * k };
    return `M${p1.x},${p1.y} C${c1.x},${c1.y} ${c2.x},${c2.y} ${p2.x},${p2.y}`;
  }

  function trunkPath(e) {
    const c = M.clusterById[e.toCluster];
    const cn = box(M.byId.center);
    const ccx = cn.x + cn.w / 2, ccy = cn.y + cn.h / 2;
    const p1 = M.rectEdgePoint(cn, c.cx, c.cy);
    const p2 = M.rectEdgePoint(c.halo, ccx, ccy);
    // gentle S-curve: offset control points perpendicular to the line
    const dx = p2.x - p1.x, dy = p2.y - p1.y, len = Math.hypot(dx, dy);
    const nx = -dy / len, ny = dx / len, bend = len * 0.12;
    const c1 = { x: p1.x + dx * 0.33 + nx * bend, y: p1.y + dy * 0.33 + ny * bend };
    const c2 = { x: p1.x + dx * 0.66 - nx * bend, y: p1.y + dy * 0.66 - ny * bend };
    e.end = p2;
    return `M${p1.x},${p1.y} C${c1.x},${c1.y} ${c2.x},${c2.y} ${p2.x},${p2.y}`;
  }

  R.buildEdges = function () {
    edgesSvg.innerHTML = "";
    labelLayer.innerHTML = "";
    M.edges.forEach(e => {
      const col = e.kind === "trunk"
        ? M.COLORS[M.clusterById[e.toCluster].color].accent
        : M.COLORS[M.byId[e.to].color].accent;
      const d = e.kind === "trunk" ? trunkPath(e) : innerPath(e);

      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("class", `edge ${e.kind}`);
      path.setAttribute("stroke", col);
      edgesSvg.appendChild(path);

      const flow = document.createElementNS(NS, "path");
      flow.setAttribute("d", d);
      flow.setAttribute("class", `edge-flow ${e.kind}`);
      flow.setAttribute("stroke", "#ffffff");
      edgesSvg.appendChild(flow);

      e.path = path; e.flow = flow; e.len = path.getTotalLength();
      path.style.strokeDasharray = e.len;
      path.style.strokeDashoffset = e.len;

      if (e.kind === "trunk") {
        const dot = document.createElementNS(NS, "circle");
        dot.setAttribute("cx", e.end.x); dot.setAttribute("cy", e.end.y); dot.setAttribute("r", 14);
        dot.setAttribute("class", "trunk-dot"); dot.setAttribute("fill", col);
        edgesSvg.appendChild(dot);
        e.dot = dot;
      }
      if (e.label) {
        const mid = path.getPointAtLength(e.len / 2);
        const lab = document.createElement("span");
        lab.className = "edge-label";
        lab.textContent = e.label;
        lab.style.left = mid.x + "px";
        lab.style.top = mid.y + "px";
        labelLayer.appendChild(lab);
        e.labelEl = lab;
      }
    });
  };

  /* ---------------- states ---------------- */
  R.drawEdge = function (e, dur) {
    if (!e) return;
    e.path.style.transition = dur ? `stroke-dashoffset ${dur}ms cubic-bezier(.65,0,.35,1)` : "none";
    requestAnimationFrame(() => { e.path.style.strokeDashoffset = 0; });
    setTimeout(() => {
      e.labelEl && e.labelEl.classList.add("in");
      e.flow.classList.add("on");
      e.dot && e.dot.classList.add("in");
    }, dur ? dur * 0.6 : 0);
  };
  R.hideEdge = function (e) {
    e.path.style.transition = "none";
    e.path.style.strokeDashoffset = e.len;
    e.flow.classList.remove("on");
    e.labelEl && e.labelEl.classList.remove("in");
    e.dot && e.dot.classList.remove("in");
  };

  R.showNode = function (n) {
    n.el.classList.remove("ghost");
    n.el.classList.add("in");
  };
  R.showHotspot = function (n, delay = 0) {
    setTimeout(() => {
      n.hotspot.classList.add("show");
      if (!M.state.visited.has(n.gid)) {
        n.hotspot.style.setProperty("--d", (Math.random() * 2.4).toFixed(2) + "s");
        n.hotspot.classList.add("beckon");
      }
    }, delay);
  };

  /* reset everything to the pre-intro state */
  R.resetAll = function () {
    M.nodes.forEach(n => {
      n.el.classList.remove("in", "ghost", "active");
      n.hotspot.classList.remove("show", "beckon");
    });
    M.edges.forEach(R.hideEdge);
    M.clusters.forEach(c => {
      c.built = false; c.building = null;
      c.haloEl.classList.remove("in");
      c.labelEl.classList.remove("in");
    });
  };

  /* overview state for one cluster: halo + label + hub visible, other nodes as ghosts */
  R.previewCluster = function (c) {
    c.haloEl.classList.add("in");
    c.labelEl.classList.add("in");
    M.nodes.forEach(n => {
      if (n.branchId !== c.id) return;
      if (n.gid === c.hubGid) { R.showNode(n); R.showHotspot(n, 300); }
      else if (!n.el.classList.contains("in")) n.el.classList.add("ghost");
    });
  };

  /* node-by-node build of one question (the original Second Life animation) */
  R.buildCluster = function (id, { instant = false } = {}) {
    const c = M.clusterById[id];
    if (c.built) return Promise.resolve();
    const inner = M.edges.filter(e => e.kind === "inner" && e.branchId === id);
    const nodes = M.nodes.filter(n => n.branchId === id);
    if (c.building) return instant ? (finish(c), Promise.resolve()) : c.building;

    function finish(c) {
      c.token = (c.token || 0) + 1;
      nodes.forEach(R.showNode);
      inner.forEach(e => R.drawEdge(e, 0));
      nodes.forEach((n, i) => R.showHotspot(n, instant ? 0 : i * 45));
      c.built = true; c.building = null;
    }

    if (instant || U.reduceMotion) { finish(c); return Promise.resolve(); }

    const token = c.token = (c.token || 0) + 1;
    c.building = (async () => {
      const hub = M.byId[c.hubGid];
      R.showNode(hub);
      await U.wait(250);
      for (const e of inner) {
        if (c.token !== token) return;
        const src = M.byId[e.from], dst = M.byId[e.to];
        if (!src.el.classList.contains("in")) { R.showNode(src); await U.wait(320); }
        const leaf = dst.level === 3;
        const dur = leaf ? 300 : 560;
        R.drawEdge(e, dur);
        await U.wait(dur * 0.7);
        if (c.token !== token) return;
        R.showNode(dst);
        await U.wait(leaf ? 110 : 300);
      }
      if (c.token !== token) return;
      finish(c);
    })();
    return c.building;
  };

  R.buildAll = function () { M.clusters.forEach(c => R.buildCluster(c.id, { instant: true })); };

  R.setFocus = function (id) {
    M.clusters.forEach(c => {
      const dim = !!id && c.id !== id;
      c.haloEl.classList.toggle("dimmed", dim);
      c.haloEl.classList.toggle("focused", c.id === id);
      c.labelEl.classList.toggle("dimmed", dim);
    });
    M.nodes.forEach(n => n.el.classList.toggle("dimmed", !!id && n.branchId && n.branchId !== id));
    M.edges.forEach(e => {
      const dim = !!id && e.branchId !== id;
      e.path.classList.toggle("dimmed", dim);
      e.flow.classList.toggle("dimmed", dim);
      e.labelEl && e.labelEl.classList.toggle("dimmed", dim);
    });
  };

  R.setActive = function (gid) {
    M.nodes.forEach(n => n.el.classList.toggle("active", n.gid === gid));
  };

  R.nodeBox = n => box(n);
})(window.MindMap);
