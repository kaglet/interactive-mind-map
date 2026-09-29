/* =========================================================
   TEMPLATE — not loaded by index.html.
   Copy a node object into a branch file's `nodes: [...]`,
   add an edge in `edges`, and add its id to `tour`.
   ========================================================= */

/* ---------- a normal node (level 2) ---------- */
const exampleNode = {
  id: "my-node",            // unique inside this question, lowercase, no spaces
  level: 2,                 // 1 = hub, 2 = main node, 3 = small leaf
  x: 100, y: 100, w: 380,   // position + width inside this question's area
  img: "images/optional.jpg", // optional picture on the card
  tag: "Theory",            // small label on the card
  title: "Card title",
  teaser: "One line shown on the card (optional for leaves).",
  detail: {
    kicker: "Theory",       // small label at the top of the panel
    title: "Panel title",
    hook: "A provocative question to open with?",
    argument: {
      label: "Core argument & IE connection",  // or "Theoretical connection" / "Core idea"
      html: "<p>Main argument with a citation <cite>(Author, 2020)</cite>.</p>"
    },
    sections: [              // optional extra blocks
      { h: "Sub-heading", p: "Paragraph." },
      { list: ["Point one", "Point two"] },
      { chips: ["Tag", "Tag"] },
      { quote: "A short quotation.", cite: "Author, 2020" }
    ],
    media: [                 // see MEDIA-GUIDE.md for every type
      { type: "youtube", id: "VIDEO_ID", title: "Video title", credit: "Channel", at: "end" }
    ],
    reflect: {
      q: "Think-about-it question for the reader?",
      a: "A possible answer."
    },
    refs: ["refKey"]         // keys from this branch's `refs` object
  }
};

/* ---------- an edge ---------- */
const exampleEdge = { from: "hub", to: "my-node", label: "optional label", fs: "right", ts: "left" };
// fs / ts = which side the line leaves / enters: "left" | "right" | "top" | "bottom" (optional)

/* ---------- a reference ---------- */
const exampleRef = {
  refKey: {
    short: "Author, 2020",
    full: "Author, A. (2020) ‘Title’, <em>Journal</em>, 1(2), pp. 3–4.",
    doi: "https://doi.org/...",
    verify: "Optional note shown only in ?dev"
  }
};
