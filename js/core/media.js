/* =========================================================
   media.js — every multimedia type used inside a node panel
   ---------------------------------------------------------
   Add media to a node:   detail.media = [ { type: "...", at: "top" | "hook" | "end", ... } ]
     at "top"  -> above the hook (good for images)
     at "hook" -> right after the hook, before the argument
     at "end"  -> after the argument (default for video/audio)
   Types: image, gallery, youtube, video, audio, compare,
          dilemma, chart, embed, slot   (see MEDIA-GUIDE.md)
   ========================================================= */
(function (M) {
  "use strict";
  const U = M.util;
  const X = M.media = {};

  X.defaultPosition = item => (item.type === "image" || item.type === "gallery") ? "top" : "end";

  const cap = (item) => {
    const bits = [];
    if (item.caption) bits.push(item.caption);
    if (item.credit) bits.push(`<span class="m-credit">${item.credit}</span>`);
    return bits.length ? `<figcaption>${bits.join(" · ")}</figcaption>` : "";
  };

  const R = {
    image(it) {
      return `<figure class="m m-image"><img src="${it.src}" alt="${U.esc(it.alt || "")}" loading="lazy"
        onerror="this.closest('figure').classList.add('missing'); this.closest('figure').dataset.src='${it.src}'">${cap(it)}</figure>`;
    },

    gallery(it) {
      return `<div class="m m-gallery">${(it.items || []).map(g =>
        `<figure><img src="${g.src}" alt="${U.esc(g.alt || "")}" loading="lazy" onerror="this.closest('figure').classList.add('missing')">${g.caption ? `<figcaption>${g.caption}</figcaption>` : ""}</figure>`
      ).join("")}</div>`;
    },

    youtube(it) {
      const title = U.esc(it.title || "Video");
      const local = location.protocol === "file:";
      return `<figure class="m m-video m-youtube" data-yt="${it.id}" data-start="${it.start || 0}">
        <button class="yt-lite" type="button" aria-label="Play video: ${title}">
          <img src="https://i.ytimg.com/vi/${it.id}/hqdefault.jpg" alt="" loading="lazy">
          <span class="yt-shade"></span>
          <span class="yt-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg></span>
          <span class="yt-title">${title}</span>
        </button>
        <figcaption>${it.caption ? it.caption + " · " : ""}${it.credit ? `<span class="m-credit">${it.credit}</span> · ` : ""}<a href="https://www.youtube.com/watch?v=${it.id}${it.start ? "&t=" + it.start + "s" : ""}" target="_blank" rel="noopener">Watch on YouTube ↗</a>
        ${local ? `<span class="m-note">Opened from a local file? If the player shows an error, use “Watch on YouTube” or the hosted link.</span>` : ""}</figcaption>
      </figure>`;
    },

    video(it) {
      return `<figure class="m m-video"><video controls preload="none" playsinline ${it.poster ? `poster="${it.poster}"` : ""} src="${it.src}"></video>${cap(it)}${it.transcript ? transcript(it.transcript) : ""}</figure>`;
    },

    audio(it) {
      return `<figure class="m m-audio">
        <div class="m-audio-head"><span class="m-audio-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z M16 8.5a5 5 0 0 1 0 7 M18.5 6a8.5 8.5 0 0 1 0 12"/></svg></span><strong>${it.title || "Listen"}</strong></div>
        <audio controls preload="none" src="${it.src}"></audio>${cap(it)}${it.transcript ? transcript(it.transcript) : ""}</figure>`;
    },

    compare(it) {
      const col = (c, side) => `<div class="cmp-col tone-${c.tone || side}"><h5>${c.title}</h5><ul>${(c.items || []).map(i => `<li>${i}</li>`).join("")}</ul></div>`;
      return `<div class="m m-compare">${it.title ? `<p class="m-title">${it.title}</p>` : ""}<div class="cmp">${col(it.left, "a")}<span class="cmp-vs" aria-hidden="true">vs</span>${col(it.right, "b")}</div></div>`;
    },

    dilemma(it) {
      return `<div class="m m-dilemma">
        <p class="m-title">${it.title || "What would you do?"}</p>
        <p class="dl-scenario">${it.scenario}</p>
        <div class="dl-choices">${it.choices.map((c, i) => `<button type="button" class="dl-choice" data-i="${i}"><span class="dl-letter">${String.fromCharCode(65 + i)}</span>${c.label}</button>`).join("")}</div>
        <div class="dl-result" aria-live="polite"></div>
        ${it.note ? `<p class="m-note">${it.note}</p>` : ""}
      </div>`;
    },

    chart(it) {
      const ready = it.years && it.years.length > 1 && it.series.every(s => s.values && s.values.length === it.years.length);
      if (!ready) return R.slot({ kind: "chart", brief: it.brief || "Chart needs data." });
      return `<div class="m m-chart"><p class="m-title">${it.title || ""}</p>
        <div class="ch-svg"></div>
        <div class="ch-controls"><input type="range" min="0" max="${it.years.length - 1}" value="${it.years.length - 1}" aria-label="Scrub through years"><span class="ch-read"></span></div>
        <p class="m-note">Each line is shown as an index (first year = 100) so both trends share one scale.${it.source ? " Source: " + it.source : ""}</p></div>`;
    },

    embed(it) {
      return `<figure class="m m-embed" style="aspect-ratio:${it.ratio || "16/9"}"><iframe src="${it.src}" title="${U.esc(it.title || "Embedded content")}" loading="lazy" allowfullscreen></iframe>${cap(it)}</figure>`;
    },

    slot(it) {
      if (!U.isDev) return "";
      return `<div class="m m-slot"><p class="slot-kind">📌 Media needed · ${it.kind || "media"}</p><p>${it.brief || ""}</p>${it.tips ? `<p class="slot-tips"><strong>How:</strong> ${U.esc(it.tips)}</p>` : ""}</div>`;
    }
  };

  function transcript(t) {
    return `<details class="m-transcript"><summary>Transcript</summary><p>${t}</p></details>`;
  }

  X.render = function (item) {
    const fn = R[item.type];
    if (!fn) { console.warn("[MindMap] unknown media type:", item.type); return ""; }
    return fn(item);
  };

  /* wire up interactive media after the panel HTML is inserted */
  X.hydrate = function (root, items) {
    // YouTube: swap the thumbnail for the real player only when clicked
    root.querySelectorAll(".m-youtube .yt-lite").forEach(btn => {
      btn.addEventListener("click", () => {
        const fig = btn.closest(".m-youtube");
        const id = fig.dataset.yt, start = +fig.dataset.start || 0;
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1${start ? "&start=" + start : ""}`;
        iframe.title = btn.getAttribute("aria-label");
        iframe.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        const wrap = document.createElement("div");
        wrap.className = "yt-frame";
        wrap.appendChild(iframe);
        btn.replaceWith(wrap);
        M.sound && M.sound.duck();
      });
    });

    const dilemmas = items.filter(i => i.type === "dilemma");
    root.querySelectorAll(".m-dilemma").forEach((el, k) => {
      const it = dilemmas[k];
      const out = el.querySelector(".dl-result");
      el.querySelectorAll(".dl-choice").forEach(btn => btn.addEventListener("click", () => {
        const c = it.choices[+btn.dataset.i];
        el.querySelectorAll(".dl-choice").forEach(b => b.classList.toggle("chosen", b === btn));
        out.classList.remove("show");
        void out.offsetWidth;
        out.innerHTML = `<p class="dl-outcome">${c.outcome}</p>${(c.lenses || []).map((l, i) =>
          `<div class="dl-lens" style="--i:${i}"><strong>${l.name}</strong><span>${l.text}</span></div>`).join("")}`;
        out.classList.add("show");
        M.sound && M.sound.play("tick");
      }));
    });

    const charts = items.filter(i => i.type === "chart");
    root.querySelectorAll(".m-chart").forEach((el, k) => drawChart(el, charts[k]));
  };

  /* small dependency-free line chart with a year scrubber */
  function drawChart(el, it) {
    const W = 640, H = 260, P = { l: 40, r: 16, t: 16, b: 30 };
    const idx = it.series.map(s => s.values.map(v => (v / s.values[0]) * 100));
    const all = idx.flat();
    const lo = Math.min(...all) * 0.9, hi = Math.max(...all) * 1.05;
    const x = i => P.l + (i / (it.years.length - 1)) * (W - P.l - P.r);
    const y = v => H - P.b - ((v - lo) / (hi - lo)) * (H - P.t - P.b);
    const cols = ["var(--c-deep)", "var(--muted)"];
    const lines = idx.map((vals, si) =>
      `<path d="${vals.map((v, i) => (i ? "L" : "M") + x(i) + "," + y(v)).join(" ")}" fill="none" stroke="${cols[si % 2]}" stroke-width="3" stroke-linecap="round" ${si ? 'stroke-dasharray="6 6"' : ""}/>`).join("");
    const legend = it.series.map((s, si) => `<tspan fill="${cols[si % 2]}" dx="${si ? 18 : 0}">● ${s.name}</tspan>`).join("");
    el.querySelector(".ch-svg").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${U.esc(it.title || "Chart")}">
      <line x1="${P.l}" x2="${W - P.r}" y1="${H - P.b}" y2="${H - P.b}" stroke="var(--line)"/>
      ${lines}
      <line class="ch-cursor" y1="${P.t}" y2="${H - P.b}" stroke="var(--c)" stroke-width="2"/>
      <text x="${P.l}" y="${H - 8}" font-size="12" fill="var(--muted)">${it.years[0]}</text>
      <text x="${W - P.r}" y="${H - 8}" font-size="12" fill="var(--muted)" text-anchor="end">${it.years[it.years.length - 1]}</text>
      <text x="${P.l}" y="12" font-size="12">${legend}</text></svg>`;
    const range = el.querySelector("input"), read = el.querySelector(".ch-read"), cursor = el.querySelector(".ch-cursor");
    const upd = () => {
      const i = +range.value;
      cursor.setAttribute("x1", x(i)); cursor.setAttribute("x2", x(i));
      read.innerHTML = `<strong>${it.years[i]}</strong> · ` + it.series.map(s => `${s.name}: ${s.values[i]}${s.unit || ""}`).join(" · ");
    };
    range.addEventListener("input", upd);
    upd();
  }

  /* list of every media item + slot, for the dev checklist */
  X.inventory = function () {
    return M.nodes.map(n => {
      const d = n.detail || {};
      const items = [...(d.media || [])];
      if (d.hero) items.unshift({ type: "image", src: d.hero });
      return { node: n, items };
    });
  };
})(window.MindMap);
