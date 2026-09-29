/* =========================================================
   devtools.js — helpers for the team (only with ?dev in the URL)
   ---------------------------------------------------------
   Open  index.html?dev  to get:
   - node ids shown on every card
   - "📌 Media needed" slots visible inside panels
   - ⚠ reference warnings (references that still need checking)
   - a "Checklist" drawer: every node, its media, missing images,
     open slots and references to verify
   ========================================================= */
(function (M) {
  "use strict";
  const U = M.util;
  const D = M.dev = {};

  D.init = function () {
    if (!U.isDev) return;
    document.body.classList.add("dev");
    const btn = document.createElement("button");
    btn.className = "btn ghost";
    btn.type = "button";
    btn.innerHTML = "📋 <span>Checklist</span>";
    btn.addEventListener("click", open);
    U.$(".topbar-actions").prepend(btn);
    console.info("[MindMap] dev mode on:", M.nodes.length, "nodes,", Object.keys(M.refs).length, "references");
  };

  function checkImage(src) {
    return new Promise(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = src; });
  }

  async function open() {
    const inv = M.media.inventory();
    const imgs = [...new Set(inv.flatMap(r => r.items.filter(i => i.type === "image").map(i => i.src)).concat(M.nodes.filter(n => n.img).map(n => n.img)))];
    const ok = {};
    await Promise.all(imgs.map(async s => { ok[s] = await checkImage(s); }));

    const rows = M.clusters.map(c => {
      const list = inv.filter(r => r.node.branchId === c.id).map(({ node, items }) => {
        const tags = items.map(i => {
          if (i.type === "slot" || (i.type === "chart" && !(i.years && i.years.length))) return `<span class="dv bad">📌 ${i.kind || i.type} needed</span>`;
          if (i.type === "image") return `<span class="dv ${ok[i.src] ? "ok" : "bad"}">${ok[i.src] ? "✓" : "✗ missing"} image ${i.src.split("/").pop()}</span>`;
          return `<span class="dv ok">✓ ${i.type}</span>`;
        });
        if (node.img && !ok[node.img]) tags.push(`<span class="dv bad">✗ card image ${node.img.split("/").pop()}</span>`);
        if (!items.length) tags.push(`<span class="dv none">no media</span>`);
        if (!node.detail.hook) tags.push(`<span class="dv none">no hook</span>`);
        if (!node.detail.reflect) tags.push(`<span class="dv none">no question</span>`);
        return `<li><button type="button" data-go="${node.gid}">${node.gid}</button> ${U.stripTags(node.title)}<div>${tags.join(" ")}</div></li>`;
      }).join("");
      return `<h3>Q${c.number} · ${c.short}</h3><ul class="dv-list">${list}</ul>`;
    }).join("");

    const verify = Object.values(M.refs).filter(r => r.verify).map(r => `<li>${r.full}<br><span class="dv bad">⚠ ${U.esc(r.verify)}</span></li>`).join("");

    U.$("#drawerTitle").textContent = "Team checklist";
    U.$("#drawerBody").innerHTML = `<p class="dv-intro">Only visible with <code>?dev</code>. Green = done, red = still to do, grey = optional.</p>${rows}<h3>References to verify</h3><ol class="ref-list">${verify}</ol>`;
    U.$("#drawerBody").querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => { M.ui.toggleDrawer(false); M.panel.open(b.dataset.go); }));
    M.ui.toggleDrawer(true);
  }
})(window.MindMap);
