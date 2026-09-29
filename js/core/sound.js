/* =========================================================
   sound.js — soft interface sounds
   ---------------------------------------------------------
   - OFF by default; turned on by "Enter with sound" or the 🔈 button.
   - Built-in sounds are synthesised with the Web Audio API
     (no files, no downloads, no licensing issues).
   - To use your own files instead, set paths in data/config.js:
       sounds: { open: "audio/open.mp3", ... }
     Keep each file small (< 50 KB) and royalty-free; cite it.
   ========================================================= */
(function (M) {
  "use strict";
  const S = M.sound = { enabled: false };
  let ctx = null, master = null, lastPlay = {};

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.55;
    master.connect(ctx.destination);
    return ctx;
  }

  function tone(freq, start, dur, { type = "sine", gain = 0.12, attack = 0.01, glideTo = null } = {}) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, start);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, start + dur);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(gain, start + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(g); g.connect(master);
    o.start(start); o.stop(start + dur + 0.05);
  }

  function noiseSweep(start, dur, from, peak, to, gain) {
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.Q.value = 1.2;
    f.frequency.setValueAtTime(from, start);
    f.frequency.exponentialRampToValueAtTime(peak, start + dur * 0.45);
    f.frequency.exponentialRampToValueAtTime(to, start + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(gain, start + dur * 0.4);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(start); src.stop(start + dur);
  }

  const SYNTH = {
    open()   { const t = ctx.currentTime; tone(659, t, 0.35, { gain: 0.09 }); tone(988, t + 0.07, 0.45, { gain: 0.07 }); },
    close()  { const t = ctx.currentTime; tone(880, t, 0.25, { gain: 0.06, glideTo: 587 }); },
    tick()   { const t = ctx.currentTime; tone(1320, t, 0.06, { type: "triangle", gain: 0.03, attack: 0.004 }); },
    whoosh() { noiseSweep(ctx.currentTime, 1.1, 280, 1600, 380, 0.18); },
    intro()  {
      const t = ctx.currentTime;
      [220, 277.2, 329.6, 440].forEach((f, i) => tone(f, t + i * 0.18, 4.2, { gain: 0.05, attack: 1.4 }));
      noiseSweep(t + 0.2, 3.2, 200, 900, 250, 0.06);
    }
  };

  const files = {};
  S.play = function (name) {
    if (!S.enabled || M.util.reduceMotion && name === "whoosh") return;
    const now = performance.now();
    if (lastPlay[name] && now - lastPlay[name] < 90) return; // no machine-gun ticks
    lastPlay[name] = now;
    const path = (M.config.sounds || {})[name];
    if (path) {
      const a = files[name] || (files[name] = new Audio(path));
      a.currentTime = 0; a.volume = 0.5;
      a.play().catch(() => {});
      return;
    }
    if (!ensure()) return;
    if (ctx.state === "suspended") ctx.resume();
    (SYNTH[name] || (() => {}))();
  };

  /* quiet the UI sounds while a video is playing */
  S.duck = function () { if (master) master.gain.setTargetAtTime(0.15, ctx.currentTime, 0.2); };
  S.unduck = function () { if (master) master.gain.setTargetAtTime(0.55, ctx.currentTime, 0.2); };

  S.setEnabled = function (on) {
    S.enabled = !!on;
    if (on) { ensure(); ctx && ctx.state === "suspended" && ctx.resume(); }
    const btn = document.getElementById("soundBtn");
    if (btn) {
      btn.setAttribute("aria-pressed", String(S.enabled));
      btn.title = S.enabled ? "Sound on (click to mute)" : "Sound off (click to turn on)";
      btn.classList.toggle("on", S.enabled);
    }
    try { localStorage.setItem("mm-sound", S.enabled ? "1" : "0"); } catch (_) { /* ignore */ }
  };

  M.on("panel:close", () => S.unduck());
})(window.MindMap);
