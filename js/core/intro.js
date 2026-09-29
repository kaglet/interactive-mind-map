/* =========================================================
   intro.js — the opening "film" sequence
   ---------------------------------------------------------
   1. Title card with letterbox bars (Enter with sound / quietly)
   2. Camera starts close on the centre node...
   3. ...then pulls back to the overview while each question's
      trunk line draws and its cluster fades in.
   4. Letterbox bars retract, dock + hint appear.
   ========================================================= */
(function (M) {
  "use strict";
  const U = M.util;
  const I = M.intro = {};
  let token = 0;

  I.init = function () {
    const list = U.$("#introQuestions");
    list.innerHTML = M.clusters.map((c, i) =>
      `<li class="c-${c.color}" style="--i:${i}"><span class="iq-num">Q${c.number}</span>${c.title}</li>`).join("");
    U.$("#enterSound").addEventListener("click", () => enter(true));
    U.$("#enterQuiet").addEventListener("click", () => enter(false));
    U.$("#skipIntro").addEventListener("click", I.finish);
  };

  I.showTitle = function () {
    const intro = U.$("#intro");
    document.body.classList.add("cinema");
    intro.hidden = false;
    requestAnimationFrame(() => intro.classList.add("show"));
    setTimeout(() => U.$("#enterSound").focus({ preventScroll: true }), 2600);
  };

  function enter(withSound) {
    M.sound.setEnabled(withSound);
    M.sound.play("intro");
    const intro = U.$("#intro");
    intro.classList.add("leaving");
    setTimeout(() => { intro.hidden = true; intro.classList.remove("show", "leaving"); }, 1300);
    I.playMap(700);
  }

  /* the map part of the intro (also used by the replay button) */
  I.playMap = async function (delay = 0) {
    const t = ++token;
    M.state.introDone = false;
    document.body.classList.add("cinema", "intro-running");
    U.$("#skipIntro").classList.remove("gone");
    M.panel.isOpen() && M.panel.close();
    M.setFocus(null, { silent: true });
    M.render.resetAll();

    if (U.reduceMotion) return I.finish();

    // start close on the centre card
    const center = M.byId.center;
    const cb = M.render.nodeBox(center);
    M.camera.setLook({ cx: cb.x + cb.w / 2, cy: cb.y + cb.h / 2, s: Math.min(1.05, M.camera.safeArea().w / (cb.w * 1.9)) });

    await U.wait(delay);
    if (t !== token) return;
    M.render.showNode(center);
    await U.wait(900);
    if (t !== token) return;

    // pull back to the overview while the questions appear
    const flight = M.camera.flyTo(M.camera.overviewLook(), { duration: 3400, arc: 0, ease: t2 => 1 - Math.pow(1 - t2, 2.4) });
    const trunks = M.edges.filter(e => e.kind === "trunk");
    for (let i = 0; i < M.clusters.length; i++) {
      await U.wait(i === 0 ? 350 : 420);
      if (t !== token) return;
      M.render.drawEdge(trunks[i], 700);
      setTimeout(() => { if (t === token) M.render.previewCluster(M.clusters[i]); }, 380);
    }
    await flight;
    if (t !== token) return;
    await U.wait(300);
    I.finish();
  };

  I.finish = function () {
    token++;
    const intro = U.$("#intro");
    if (!intro.hidden) { intro.hidden = true; intro.classList.remove("show", "leaving"); }
    M.render.showNode(M.byId.center);
    M.edges.filter(e => e.kind === "trunk").forEach(e => M.render.drawEdge(e, 0));
    M.clusters.forEach(c => { if (!c.built) M.render.previewCluster(c); });
    M.render.showHotspot(M.byId.center, 200);
    if (!M.state.focus && !M.camera.flying) M.camera.flyTo(M.camera.overviewLook(), { duration: 500, arc: 0, sound: false });
    M.state.introDone = true;
    document.body.classList.remove("intro-running");
    setTimeout(() => document.body.classList.remove("cinema"), 200);
    U.$("#skipIntro").classList.add("gone");
    M.emit("intro:done");
  };
})(window.MindMap);
