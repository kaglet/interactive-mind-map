/* =========================================================
   MindMap namespace + registry
   ---------------------------------------------------------
   Every other file adds itself to window.MindMap.
   Load order (see index.html):
     1. core/namespace.js      <- this file
     2. data/*.js              <- centre node, team, cross-links, config
     3. branches/*.js          <- one file per question (content only)
     4. core/*.js              <- engine modules
     5. app.js                 <- boots everything
   Plain <script> tags (no ES modules) so the site also works
   when opened straight from a folder (file://).
   ========================================================= */
(function () {
  "use strict";

  const M = {
    version: "2.0.0",
    config: {},          // data/config.js
    center: null,        // data/center.js
    team: null,          // data/team.js
    crossLinks: [],      // data/links.js
    branches: [],        // branches/*.js (raw, as registered)

    // filled in by core/layout.js when the map is compiled
    nodes: [], byId: {}, edges: [], tour: [], refs: {}, clusters: [], world: null,

    state: {
      visited: new Set(),
      focus: null,          // branch id the camera is focused on, or null (overview)
      openNode: null,       // gid of the node open in the detail panel
      introDone: false
    }
  };

  /* ---------- registration API (used by data + branch files) ---------- */
  M.registerBranch = function (branch) {
    if (!branch || !branch.id) throw new Error("registerBranch: branch needs an id");
    if (M.branches.some(b => b.id === branch.id)) throw new Error("registerBranch: duplicate id " + branch.id);
    M.branches.push(branch);
  };
  M.registerCenter = c => { M.center = c; };
  M.registerTeam = t => { M.team = t; };
  M.registerCrossLinks = list => { M.crossLinks.push(...list); };
  M.configure = cfg => { Object.assign(M.config, cfg); };

  /* ---------- tiny event bus ---------- */
  const listeners = {};
  M.on = (evt, fn) => { (listeners[evt] = listeners[evt] || []).push(fn); };
  M.emit = (evt, data) => { (listeners[evt] || []).forEach(fn => fn(data)); };

  /* ---------- shared helpers ---------- */
  M.util = {
    $: (s, el = document) => el.querySelector(s),
    $$: (s, el = document) => [...el.querySelectorAll(s)],
    wait: ms => new Promise(r => setTimeout(r, ms)),
    clamp: (v, a, b) => Math.max(a, Math.min(b, v)),
    lerp: (a, b, t) => a + (b - a) * t,
    easeInOut: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    easeOut: t => 1 - Math.pow(1 - t, 3),
    stripTags(html) { const d = document.createElement("div"); d.innerHTML = html; return d.textContent || ""; },
    esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
    reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    isDev: /[?&]dev(=1|=true)?(&|$)/.test(location.search)
  };

  /* pastel colour tokens, mirrored from css/tokens.css (used for SVG strokes) */
  M.COLORS = {
    cyan:   { accent: "#9dbcdc", deep: "#44698f" },  // blue
    pink:   { accent: "#e9aab4", deep: "#a14f5e" },  // rose
    green:  { accent: "#a9cdb3", deep: "#4b7a5a" },  // sage
    violet: { accent: "#bdb1e0", deep: "#66589b" },  // lilac
    amber:  { accent: "#f0c79c", deep: "#97652c" },  // peach
    sky:    { accent: "#a5d3cf", deep: "#3e7a75" },  // mint
    white:  { accent: "#cfc5ba", deep: "#4a423c" }   // stone
  };

  window.MindMap = M;
})();
