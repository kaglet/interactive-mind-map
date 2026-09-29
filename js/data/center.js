/* =========================================================
   The centre node of the whole map.
   ========================================================= */
MindMap.registerCenter({
  id: "center",
  w: 560,
  img: "images/metaverse2.jpg",
  tag: "INY 715 · Assignment 2",
  title: "Information Ethics in the Metaverse",
  teaser: "Five questions about how our ethics travel with us into virtual worlds.",
  detail: {
    kicker: "Start here",
    title: "Information Ethics in the Metaverse",
    media: [{ type: "image", src: "images/metaverse2.jpg", alt: "", at: "top" }],
    hook: "When we move our lives into virtual worlds — our friendships, our money, our identities — do our ethics come with us?",
    argument: {
      label: "How this map is organised",
      html: "<p>The map follows a path from <em>what</em> the Metaverse is, to <em>who</em> we are inside it, to <em>how we should behave</em> there. Each question is its own cluster. Click a question to fly into it, then open any ⊕ to explore.</p>"
    },
    sections: [
      { h: "The five questions", questions: true },
      { h: "How each node works", list: [
        "<strong>Hook</strong> — a provocative question to start you thinking.",
        "<strong>Core argument &amp; theory</strong> — the main point, linked to information ethics.",
        "<strong>Multimedia</strong> — images, video or interactive pieces that illustrate it.",
        "<strong>Think about it</strong> — a question for you, with a possible answer.",
        "<strong>Sources</strong> — the academic references behind every point."
      ]}
    ],
    reflect: {
      q: "Before you start: do you behave differently online than you do in person?",
      a: "Most people do, at least a little. Keep your answer in mind — several nodes (especially Q3 and Q5) explain why this happens and whether it matters ethically."
    },
    refs: []
  }
});
