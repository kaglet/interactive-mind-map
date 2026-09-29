/* =========================================================
   Q4 · How does ethics of the Metaverse connect with Information Ethics?
   Owner: [Member 3 name]
   ---------------------------------------------------------
   The "slot" media items below are the teammate's multimedia cues.
   They are ONLY visible in dev mode (open index.html?dev) so the
   multimedia person can see exactly what still needs to be sourced.
   Replace a slot with a real media item when ready (MEDIA-GUIDE.md).
   ========================================================= */
MindMap.registerBranch({
  id: "q4",
  number: 4,
  color: "amber",
  title: "How does ethics of the Metaverse connect with Information Ethics?",
  short: "Metaverse ethics & IE",
  size: { w: 1620, h: 1010 },
  hub: "hub",

  refs: {
    himma2008: {
      short: "Himma & Tavani, 2008",
      full: "Himma, K.E. and Tavani, H.T. (eds) (2008) <em>The handbook of information and computer ethics</em>. Hoboken, NJ: John Wiley &amp; Sons.",
      verify: "Teammate cited this as @himma2008. Confirm it is the Handbook (and cite the specific chapter, e.g. Floridi’s chapter, if that is where homo poieticus / entropy come from)."
    },
    capurro2006: {
      short: "Capurro, 2006",
      full: "Capurro, R. (2006) ‘Towards an ontological foundation of information ethics’, <em>Ethics and Information Technology</em>, 8(4), pp. 175–186.",
      verify: "Check volume/issue/pages against the PDF."
    },
    sicart2009: {
      short: "Sicart, 2009",
      full: "Sicart, M. (2009) ‘The banality of simulated evil: designing ethical gameplay’, <em>Ethics and Information Technology</em>, 11(3), pp. 191–202.",
      verify: "Check volume/issue/pages against the PDF."
    },
    sicart2008: {
      short: "Sicart, 2008",
      full: "Sicart, M. (2008) [Full reference needed — teammate cited @sicart2008].",
      verify: "No full reference was supplied for @sicart2008. Add it, or change the citation to Sicart (2009) if that was meant."
    },
    floridiTuring: {
      short: "Alan Turing Institute, n.d.",
      full: "The Alan Turing Institute (n.d.) <em>Ethics in the age of information</em> [YouTube video, lecture by L. Floridi]. Available at: https://www.youtube.com/watch?v=lLH70qkROWQ (Accessed: 29 September 2026).",
      verify: "Add the upload year from the YouTube page."
    },
    floridiTedx: {
      short: "TEDx Talks, n.d.",
      full: "TEDx Talks (n.d.) <em>TEDxMaastricht – Luciano Floridi – ‘The fourth technological revolution’</em> [YouTube video]. Available at: https://www.youtube.com/watch?v=c-kJsyU8tgI (Accessed: 29 September 2026).",
      verify: "Add the upload year from the YouTube page."
    }
  },

  nodes: [
    {
      id: "hub", level: 1, kind: "hub",
      x: 580, y: 380, w: 460,
      img: "images/metaverseNethics2.jpg",
      tag: "Question 4 · The hub",
      title: "How does ethics of the Metaverse connect with Information Ethics?",
      teaser: "The Metaverse is part of Floridi’s infosphere — so information ethics applies inside it.",
      detail: {
        kicker: "The question",
        title: "How does ethics of the Metaverse connect with Information Ethics?",
        media: [
          { type: "image", src: "images/metaverseNethics2.jpg", alt: "Metaverse and ethics illustration", at: "top" },
          { type: "youtube", id: "lLH70qkROWQ", title: "Ethics in the Age of Information — Luciano Floridi (The Alan Turing Institute)", credit: "The Alan Turing Institute", at: "end" }
        ],
        hook: "Is the Metaverse a lawless playground — or just more of the same world, made of information?",
        argument: {
          label: "Core argument & IE connection",
          html: "<p>Information Ethics (IE) treats virtual reality as an extension of Floridi’s <strong>infosphere</strong> <cite>(Himma &amp; Tavani, 2008)</cite>. If the Metaverse is part of the infosphere, it is not an amoral playground: the same duties to protect informational entities — including the people behind avatars — apply there <cite>(Capurro, 2006)</cite>.</p>"
        },
        sections: [
          { h: "Three connections explored here", list: [
            "<strong>Datafication vs stewardship</strong> — does the Metaverse free us, or turn us into data?",
            "<strong>The “NPC-ification” of real humans</strong> — the danger of treating people as data streams.",
            "<strong>The banality of virtual evil</strong> — how game design can switch off moral thinking."
          ]}
        ],
        reflect: {
          q: "If nothing in the Metaverse is ‘physical’, can anything in it be morally wrong?",
          a: "From an IE view, yes: harm is measured by damage to informational entities and the people they represent (entropy), not by physical damage. Lies, harassment and data exploitation are harms in the infosphere."
        },
        refs: ["himma2008", "capurro2006", "floridiTuring"]
      }
    },

    {
      id: "datafication", level: 2,
      x: 50, y: 60, w: 400,
      tag: "Node 4.1",
      title: "Datafication vs stewardship",
      teaser: "An expansion of human freedom — or a raw data prison?",
      detail: {
        kicker: "Node 4.1 · The Metaverse as an embodiment space",
        title: "Datafication vs stewardship",
        hook: "Is the Metaverse an expansion of human freedom, or a raw data prison?",
        argument: {
          label: "Core argument & IE connection",
          html: "<p>Information Ethics views virtual reality as an extension of Floridi’s infosphere <cite>(Himma &amp; Tavani, 2008)</cite>. Instead of entering an amoral playground, users enter as <em>homo poieticus</em> — creative <strong>stewards</strong> duty-bound to prevent <strong>informational entropy</strong> (the degradation of reality and truth) <cite>(Himma &amp; Tavani, 2008)</cite>.</p><p>The core ethical dilemma is whether the Metaverse fosters human flourishing, or <strong>commodifies human existence into data streams</strong> <cite>(Capurro, 2006)</cite>.</p>"
        },
        media: [
          { type: "youtube", id: "c-kJsyU8tgI", title: "TEDxMaastricht — Luciano Floridi, ‘The fourth technological revolution’", credit: "TEDx Talks", at: "end" },
          { type: "slot", kind: "video", at: "end",
            brief: "Split-screen or video essay: Second Life virtual land speculation and data surveillance compared with physical environmental degradation / real-world corporate monopolies.",
            tips: "Search YouTube for a Second Life land-boom or virtual-real-estate documentary clip. Use a { type: \"youtube\", id: \"...\" } item." }
        ],
        reflect: {
          q: "Are you a steward of the Metaverse, or a product sold inside it?",
          a: "Both roles can exist at once. As a creator you add to the infosphere (homo poieticus); as a user your behaviour becomes data the platform can sell. IE asks platforms and users to reduce entropy — protect truth and people — rather than exploit them."
        },
        refs: ["himma2008", "capurro2006", "floridiTedx"]
      }
    },
    {
      id: "poieticus", level: 3, parent: "datafication",
      x: 70, y: 380, w: 240,
      tag: "Concept", title: "Homo poieticus",
      detail: {
        kicker: "Concept",
        title: "Homo poieticus — the user as creator",
        hook: "What if every user were responsible for the world they help build?",
        argument: { label: "Theoretical connection", html: "<p>In Information Ethics, <em>homo poieticus</em> describes people as <strong>creators</strong> of the infosphere, not just consumers of it. In the Metaverse, where residents build the content, this makes them stewards with responsibility for what they create <cite>(Himma &amp; Tavani, 2008)</cite>.</p>" },
        reflect: { q: "What is one thing you have created online that others rely on?", a: "A review, a guide, a mod, a post that answered someone\u2019s question \u2014 as homo poieticus you are responsible for its accuracy and effects." },
        refs: ["himma2008"]
      }
    },
    {
      id: "entropy", level: 3, parent: "datafication",
      x: 70, y: 490, w: 240,
      tag: "Concept", title: "Informational entropy",
      detail: {
        kicker: "Concept",
        title: "Informational entropy",
        hook: "Can you ‘pollute’ a world made of information?",
        argument: { label: "Theoretical connection", html: "<p><strong>Entropy</strong> in Information Ethics is the degradation or destruction of informational entities — the loss of reality and truth. Misinformation, data exploitation and destroying others’ creations all increase entropy in the infosphere <cite>(Himma &amp; Tavani, 2008)</cite>.</p>" },
        reflect: { q: "Name one action in a virtual world that increases entropy.", a: "Spreading false information, griefing someone\u2019s build, or leaking private data all degrade the infosphere." },
        refs: ["himma2008"]
      }
    },

    {
      id: "npc", level: 2,
      x: 1160, y: 60, w: 420,
      tag: "Node 4.2",
      title: "The “NPC-ification” of real humans",
      teaser: "Treating people as data streams — Capurro’s critique of digital metaphysics.",
      detail: {
        kicker: "Node 4.2 · Digital metaphysics",
        title: "The “NPC-ification” of real humans",
        hook: "If you can torture hyper-realistic AI avatars in VR with zero consequences, how long until you start viewing real humans as disposable NPCs?",
        argument: {
          label: "Core argument & IE connection",
          html: "<p>Setting aside clichéd debates about “AI rights”, Capurro critiques <strong>digital metaphysics</strong> — the dangerous tendency to equate human beings with mere data streams <cite>(Capurro, 2006)</cite>. AI avatars lack will and embodied consciousness. The real danger is not hurting an AI’s feelings; it is the erosion of <em>parrhesia</em> (truth-telling) and human dignity when real people treat the virtual world as a place beyond moral accountability <cite>(Capurro, 2006)</cite>.</p>"
        },
        media: [
          { type: "slot", kind: "video", at: "hook",
            brief: "Interactive split-screen: VR harassment reports/logs contrasted with clips from Westworld or Detroit: Become Human.",
            tips: "Use a news report on VR harassment (YouTube) on one side and an official game/series trailer on the other. Use { type: \"compare\" } with two YouTube items, or two separate youtube items." }
        ],
        reflect: {
          q: "Does being cruel to an NPC say anything about how you treat people?",
          a: "Capurro’s point is that the risk lies in the habit of seeing people as data. If cruelty in virtual spaces becomes normal, it can erode the respect and truthfulness we owe real people behind other avatars."
        },
        refs: ["capurro2006"]
      }
    },
    {
      id: "metaphysics", level: 3, parent: "npc",
      x: 1200, y: 380, w: 260,
      tag: "Concept", title: "Digital metaphysics",
      detail: {
        kicker: "Concept",
        title: "Digital metaphysics",
        hook: "Are you a person — or a very detailed dataset?",
        argument: { label: "Theoretical connection", html: "<p>Capurro uses <strong>digital metaphysics</strong> for the view that everything, including human beings, can be reduced to digital information. He warns that this view hides what makes humans different: embodied existence, freedom and dignity <cite>(Capurro, 2006)</cite>.</p>" },
        reflect: { q: "Is there anything about you that cannot be captured as data?", a: "Capurro would point to embodied, lived experience and human dignity \u2014 which is why reducing people to data streams is ethically dangerous." },
        refs: ["capurro2006"]
      }
    },
    {
      id: "parrhesia", level: 3, parent: "npc",
      x: 1200, y: 490, w: 260,
      tag: "Concept", title: "Parrhesia (truth-telling)",
      detail: {
        kicker: "Concept",
        title: "Parrhesia — truth-telling",
        hook: "When nobody knows who you are, does telling the truth still matter?",
        argument: { label: "Theoretical connection", html: "<p><em>Parrhesia</em> is the Greek idea of frank, courageous truth-telling. In the Metaverse, anonymity and “no consequences” can erode it — undermining the trust that online communities depend on <cite>(Capurro, 2006)</cite>.</p>" },
        reflect: { q: "Does anonymity make people more honest or less honest?", a: "Both: it can free people to speak truth to power (benign), or remove accountability for lies (toxic) \u2014 compare the disinhibition effect in Q3." },
        refs: ["capurro2006"]
      }
    },

    {
      id: "banality", level: 2,
      x: 580, y: 830, w: 460,
      tag: "Node 4.3",
      title: "The banality of virtual evil",
      teaser: "How game interfaces turn players into unthinking bureaucrats of destruction.",
      detail: {
        kicker: "Node 4.3 · Social complacency in multiplayer games",
        title: "The banality of virtual evil",
        hook: "How do video game interfaces turn ordinary 20-somethings into cold, button-pushing virtual war criminals?",
        argument: {
          label: "Core argument & IE connection",
          html: "<p>In MMOGs and strategy games such as <em>Defcon</em> and <em>EVE Online</em>, games reward mechanical efficiency — points, numbers going up — while stripping away semantic and emotional feedback <cite>(Sicart, 2008; Sicart, 2009)</cite>.</p><p>Sicart calls this the <strong>“banality of simulated evil”</strong>: when rule engines abstract human suffering into interface metrics, players become unthinking bureaucrats of virtual destruction <cite>(Sicart, 2009)</cite>.</p>"
        },
        media: [
          { type: "slot", kind: "audio", at: "hook",
            brief: "Audio-visual node: Defcon’s nuclear strikes (minimalist radar + muffled crying audio) alongside player voice-chat cheering for kill counts.",
            tips: "Embed an official Defcon gameplay trailer via YouTube, or add a short licensed clip as { type: \"audio\", src: \"audio/defcon.mp3\", transcript: \"...\" }. Always add a transcript." }
        ],
        reflect: {
          q: "When a game turns casualties into a score, who is responsible for the moral numbness — the designer or the player?",
          a: "Sicart argues designers shape how ethically players can engage, but players remain moral agents who can reflect. Good ethical game design gives feedback that makes players think about consequences."
        },
        refs: ["sicart2008", "sicart2009"]
      }
    },
    {
      id: "defcon", level: 3, parent: "banality",
      x: 1120, y: 860, w: 280,
      tag: "Example", title: "Defcon & EVE Online",
      detail: {
        kicker: "Example",
        title: "Defcon and EVE Online",
        hook: "Is it still a war crime if it’s just a number on a radar screen?",
        argument: { label: "Core idea", html: "<p>In <em>Defcon</em>, nuclear war is shown as clean radar blips and a score — millions of deaths become a number. In <em>EVE Online</em>, large-scale destruction is often managed through spreadsheets and interfaces. Both show how interfaces can hide the human meaning of actions <cite>(Sicart, 2009)</cite>.</p>" },
        reflect: { q: "Would adding the sounds of victims change how you play a strategy game?", a: "Sicart\u2019s argument suggests it would: meaningful feedback reconnects actions to their human meaning and invites moral reflection." },
        refs: ["sicart2009"]
      }
    }
  ],

  edges: [
    { from: "hub", to: "datafication", label: "the Metaverse as", fs: "left", ts: "right" },
    { from: "datafication", to: "poieticus", fs: "bottom", ts: "top" },
    { from: "datafication", to: "entropy", fs: "bottom", ts: "left" },
    { from: "hub", to: "npc", label: "risks", fs: "right", ts: "left" },
    { from: "npc", to: "metaphysics", fs: "bottom", ts: "top" },
    { from: "npc", to: "parrhesia", fs: "bottom", ts: "left" },
    { from: "hub", to: "banality", label: "and enables", fs: "bottom", ts: "top" },
    { from: "banality", to: "defcon", fs: "right", ts: "left" }
  ],

  tour: ["hub", "datafication", "poieticus", "entropy", "npc", "metaphysics", "parrhesia", "banality", "defcon"]
});
