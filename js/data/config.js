/* =========================================================
   Global settings. Safe to tweak.
   ========================================================= */
MindMap.configure({
  title: "Information Ethics in the Metaverse",
  course: "INY 715 · Assignment 2 · Interactive mind map",

  /* Where each question's cluster sits around the centre.
     angle: degrees (0 = right, 90 = down), clockwise.
     rx / ry: distance from the centre (ellipse radii, map pixels).
     Add dx / dy to nudge a single cluster.                      */
  layout: {
    rx: 2500, ry: 1350,
    clusters: {
      q1: { angle: -90 },
      q2: { angle: -18 },
      q3: { angle: 58, dx: 180 },
      q4: { angle: 122, dx: -180 },
      q5: { angle: 198 }
    },
    padding: 260
  },

  /* camera */
  camera: {
    minScale: 0.03,
    maxScale: 2.2,
    farThreshold: 0.33,     // below this zoom the map switches to "overview" detail level
    flyDuration: 1500       // ms for a normal camera flight
  },

  /* intro */
  intro: {
    showTitleCard: true      // false = skip the cinematic title card
  },

  /* sounds: leave a value null to use the built-in soft synth sound,
     or put a path to a file in /audio (e.g. "audio/open.mp3").       */
  sounds: {
    open: null,
    close: null,
    whoosh: null,
    tick: null,
    intro: null
  }
});
