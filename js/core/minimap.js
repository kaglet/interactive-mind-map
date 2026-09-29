/* =========================================================
   minimap.js — small overview in the corner; click to jump
   ========================================================= */
(function (M) {
  "use strict";
  const U = M.util;
  const MM = M.minimap = {};
  let svg, view;

  MM.init = function () {
    const host = U.$("#minimap");
    if (!host) return;
    const { w, h } = M.world;
    host.innerHTML = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      ${M.clusters.map(c => `<rect class="mm-cluster c-${c.color}" x="${c.halo.x}" y="${c.halo.y}" width="${c.halo.w}" height="${c.halo.h}" rx="120" data-id="${c.id}"/>
        <text class="mm-num c-${c.color}" x="${c.cx}" y="${c.cy}" text-anchor="middle" dominant-baseline="middle">${c.number}</text>`).join("")}
      <circle class="mm-center" cx="${M.world.cx}" cy="${M.world.cy}" r="140"/>
      <rect class="mm-view" x="0" y="0" width="10" height="10" rx="40"/>
    </svg>`;
    svg = host.querySelector("svg");
    view = svg.querySelector(".mm-view");

    host.addEventListener("click", e => {
      const pt = svg.createSVGPoint();
      pt.x = e.clientX; pt.y = e.clientY;
      const p = pt.matrixTransform(svg.getScreenCTM().inverse());
      const hit = M.clusters.find(c => p.x >= c.halo.x && p.x <= c.halo.x + c.halo.w && p.y >= c.halo.y && p.y <= c.halo.y + c.halo.h);
      if (hit) M.focusBranch(hit.id);
      else M.overview();
    });

    M.on("camera", update);
    M.on("focus", id => svg.querySelectorAll(".mm-cluster").forEach(r => r.classList.toggle("on", r.dataset.id === id)));
    update();
  };

  function update() {
    if (!view) return;
    const v = M.camera.view, vp = U.$("#viewport");
    const x = -v.tx / v.s, y = -v.ty / v.s, w = vp.clientWidth / v.s, h = vp.clientHeight / v.s;
    view.setAttribute("x", x); view.setAttribute("y", y);
    view.setAttribute("width", w); view.setAttribute("height", h);
  }
})(window.MindMap);
