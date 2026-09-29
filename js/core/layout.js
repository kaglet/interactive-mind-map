/* =========================================================
   layout.js — compiles centre + branches into one world map
   ---------------------------------------------------------
   - places each question's cluster around the centre (config.layout)
   - converts LOCAL node coords into WORLD coords
   - gives every node a global id: "<branchId>.<nodeId>"
   - merges references, edges, tour order and cross-links
   ========================================================= */
(function (M) {
  "use strict";

  const HALO_PAD = 70;           // space between a cluster's nodes and its halo
  const CENTER_H_GUESS = 420;    // rough centre-card height (real size measured later)

  M.compile = function () {
    const cfg = M.config.layout;
    const branches = [...M.branches].sort((a, b) => a.number - b.number);

    /* ---- 1. clusters around (0,0) ---- */
    const clusters = branches.map(b => {
      const c = cfg.clusters[b.id] || { angle: 0 };
      const a = c.angle * Math.PI / 180;
      const cx = Math.cos(a) * cfg.rx + (c.dx || 0);
      const cy = Math.sin(a) * cfg.ry + (c.dy || 0);
      return {
        id: b.id, branch: b, number: b.number, color: b.color,
        title: b.title, short: b.short,
        x: cx - b.size.w / 2, y: cy - b.size.h / 2, w: b.size.w, h: b.size.h,
        built: false
      };
    });

    const center = M.center;
    const cBox = { x: -center.w / 2, y: -CENTER_H_GUESS / 2, w: center.w, h: CENTER_H_GUESS };

    /* ---- 2. world bounds, then shift everything to positive coords ---- */
    const pad = cfg.padding + HALO_PAD;
    const xs = clusters.flatMap(c => [c.x, c.x + c.w]).concat([cBox.x, cBox.x + cBox.w]);
    const ys = clusters.flatMap(c => [c.y, c.y + c.h]).concat([cBox.y, cBox.y + cBox.h]);
    const minX = Math.min(...xs) - pad, minY = Math.min(...ys) - pad - 160; // extra room for labels
    const maxX = Math.max(...xs) + pad, maxY = Math.max(...ys) + pad;
    const shiftX = -minX, shiftY = -minY;

    clusters.forEach(c => {
      c.x += shiftX; c.y += shiftY;
      c.halo = { x: c.x - HALO_PAD, y: c.y - HALO_PAD, w: c.w + HALO_PAD * 2, h: c.h + HALO_PAD * 2 };
      c.cx = c.x + c.w / 2; c.cy = c.y + c.h / 2;
    });

    M.world = { w: maxX - minX, h: maxY - minY, cx: shiftX, cy: shiftY };
    M.clusters = clusters;
    M.clusterById = Object.fromEntries(clusters.map(c => [c.id, c]));

    /* ---- 3. nodes ---- */
    const nodes = [];
    nodes.push({
      gid: "center", id: "center", branchId: null, level: 0, kind: "center",
      x: shiftX - center.w / 2, y: shiftY - CENTER_H_GUESS / 2, w: center.w,
      color: "white", img: center.img, tag: center.tag, title: center.title,
      teaser: center.teaser, detail: center.detail
    });

    clusters.forEach(c => {
      const b = c.branch;
      b.nodes.forEach(n => {
        nodes.push({
          gid: `${b.id}.${n.id}`, id: n.id, branchId: b.id, parent: n.parent ? `${b.id}.${n.parent}` : null,
          level: n.level, kind: n.kind || (n.level === 3 ? "leaf" : n.level === 1 ? "hub" : "branch"),
          x: c.x + n.x, y: c.y + n.y, w: n.w,
          color: n.color || b.color,
          img: n.img, tag: n.tag, title: n.title, teaser: n.teaser, detail: n.detail || {}
        });
      });
      const hubGid = `${b.id}.${b.hub}`;
      if (!b.nodes.some(n => n.id === b.hub)) console.warn(`[MindMap] ${b.id}: hub "${b.hub}" not found`);
      c.hubGid = hubGid;
    });

    M.nodes = nodes;
    M.byId = Object.fromEntries(nodes.map(n => [n.gid, n]));

    /* ---- 4. references (per-branch keys, merged; duplicates collapse) ---- */
    M.refs = {};
    M.refIndex = {};  // "branch:key" -> global ref id
    const byText = {};
    clusters.forEach(c => {
      Object.entries(c.branch.refs || {}).forEach(([key, r]) => {
        const text = M.util.stripTags(r.full).trim();
        let gid = byText[text];
        if (!gid) {
          gid = M.refs[key] ? `${c.id}.${key}` : key;
          M.refs[gid] = Object.assign({ usedBy: new Set() }, r);
          byText[text] = gid;
        }
        M.refs[gid].usedBy.add(c.id);
        M.refIndex[`${c.id}:${key}`] = gid;
      });
    });
    M.refFor = (branchId, key) => M.refs[M.refIndex[`${branchId}:${key}`]] || null;

    /* ---- 5. edges ---- */
    const edges = [];
    clusters.forEach(c => {
      (c.branch.edges || []).forEach(e => {
        const from = `${c.id}.${e.from}`, to = `${c.id}.${e.to}`;
        if (!M.byId[from] || !M.byId[to]) { console.warn(`[MindMap] ${c.id}: bad edge ${e.from} -> ${e.to}`); return; }
        edges.push({ kind: "inner", branchId: c.id, from, to, label: e.label, fs: e.fs, ts: e.ts });
      });
      edges.push({ kind: "trunk", branchId: c.id, from: "center", toCluster: c.id });
    });
    M.edges = edges;

    /* ---- 6. tour (centre, then each question in number order) ---- */
    M.tour = ["center"];
    clusters.forEach(c => {
      const t = c.branch.tour && c.branch.tour.length ? c.branch.tour : c.branch.nodes.map(n => n.id);
      t.forEach(id => { const gid = `${c.id}.${id}`; if (M.byId[gid]) M.tour.push(gid); });
    });

    /* ---- 7. cross-links ---- */
    nodes.forEach(n => { n.cross = []; });
    M.crossLinks.forEach(l => {
      const a = M.byId[l.a], b = M.byId[l.b];
      if (!a || !b) { console.warn("[MindMap] cross-link skipped:", l.a, l.b); return; }
      a.cross.push({ gid: b.gid, label: l.label });
      b.cross.push({ gid: a.gid, label: l.label });
    });
  };

  /* point where the line from (px,py) toward the rect's centre crosses the rect edge */
  M.rectEdgePoint = function (rect, px, py) {
    const cx = rect.x + rect.w / 2, cy = rect.y + rect.h / 2;
    const dx = px - cx, dy = py - cy;
    if (!dx && !dy) return { x: cx, y: cy };
    const tx = (rect.w / 2) / Math.abs(dx || 1e-9), ty = (rect.h / 2) / Math.abs(dy || 1e-9);
    const t = Math.min(tx, ty);
    return { x: cx + dx * t, y: cy + dy * t };
  };
})(window.MindMap);
