/* =========================================================
   Q5 · Does violence in MMOGs have an impact on real life?
   Owner: [Member 3 name]
   ---------------------------------------------------------
   Includes two interactive media types:
     - "dilemma" : the Fallout 3 moral decision tree (Node 5.3)
     - "chart"   : game sales vs youth violent crime (Node 5.1)
                   -> needs REAL sourced numbers before it shows.
   ========================================================= */
MindMap.registerBranch({
  id: "q5",
  number: 5,
  color: "pink",
  title: "Does violence in MMOGs have an impact on real life?",
  short: "Violence in MMOGs",
  size: { w: 1680, h: 990 },
  hub: "hub",

  refs: {
    goerger2017: {
      short: "Goerger, 2017",
      full: "Goerger, M. (2017) ‘Value, violence, and the ethics of gaming’, <em>Ethics and Information Technology</em>, 19(2), pp. 95–105.",
      verify: "Check volume/issue/pages against the PDF."
    },
    schulzke2010: {
      short: "Schulzke, 2010",
      full: "Schulzke, M. (2010) ‘Defending the morality of violent video games’, <em>Ethics and Information Technology</em>, 12(2), pp. 127–138.",
      verify: "Check volume/issue/pages against the PDF."
    },
    ostritsch2017: {
      short: "Ostritsch, 2017",
      full: "Ostritsch, S. (2017) ‘The amoralist challenge to gaming and the gamer’s moral obligation’, <em>Ethics and Information Technology</em>, 19(2), pp. 117–128.",
      verify: "Check volume/issue/pages against the PDF."
    },
    wonderly2008: {
      short: "Wonderly, 2008",
      full: "Wonderly, M. (2008) ‘A Humean approach to assessing the moral significance of ultra-violent video games’, <em>Ethics and Information Technology</em>, 10(1), pp. 1–10.",
      verify: "Check volume/issue/pages against the PDF."
    },
    sicart2009: {
      short: "Sicart, 2009",
      full: "Sicart, M. (2009) ‘The banality of simulated evil: designing ethical gameplay’, <em>Ethics and Information Technology</em>, 11(3), pp. 191–202.",
      verify: "Check volume/issue/pages against the PDF."
    },
    asapscience: {
      short: "AsapSCIENCE, n.d.",
      full: "AsapSCIENCE (n.d.) <em>Do video games make you violent?</em> [YouTube video]. Available at: https://www.youtube.com/watch?v=-ixUGwk6IC8 (Accessed: 29 September 2026).",
      verify: "Add the upload year from the YouTube page."
    }
  },

  nodes: [
    {
      id: "hub", level: 1, kind: "hub",
      x: 600, y: 390, w: 460,
      tag: "Question 5 · The hub",
      title: "Does violence in MMOGs have an impact on real life?",
      teaser: "Not in the crime statistics — but the moral question moves to what games glorify.",
      detail: {
        kicker: "Node 5.1 · The question",
        title: "Does violence in MMOGs have an impact on real life?",
        media: [
          { type: "youtube", id: "-ixUGwk6IC8", title: "Do Video Games Make You Violent? — AsapSCIENCE", credit: "AsapSCIENCE", at: "end" }
        ],
        hook: "Crime rates drop as game sales rise — so why are we still obsessed with virtual slaughter?",
        argument: {
          label: "Core argument & theoretical connection",
          html: "<p>The <strong>“contamination thesis”</strong> claims that game violence leaks into real-world aggression <cite>(Goerger, 2017)</cite>. Macro-level data does not support it: games do not turn players into real-world mass shooters <cite>(Goerger, 2017; Schulzke, 2010)</cite>.</p><p>But focusing only on crime statistics ignores the <em>micro</em> lens: why players are drawn to virtual violence. Schulzke and Ostritsch argue games operate inside a <strong>“magic circle”</strong> where virtual actions have no real victims <cite>(Ostritsch, 2017; Schulzke, 2010)</cite>. The moral question therefore shifts to whether a game <strong>glorifies depravity or forces critical reflection</strong> <cite>(Goerger, 2017; Sicart, 2009)</cite>.</p>"
        },
        reflect: {
          q: "If games don’t make people violent, is there still anything wrong with enjoying virtual violence?",
          a: "That is exactly where the debate moves: not ‘does it cause crime?’ but ‘what does this game ask me to enjoy or endorse?’ — see Node 5.2 (satire vs atrocity) and Node 5.3 (games as moral gymnasiums)."
        },
        refs: ["goerger2017", "schulzke2010", "ostritsch2017", "sicart2009", "asapscience"]
      }
    },

    {
      id: "contamination", level: 2,
      x: 60, y: 70, w: 400,
      tag: "Theory",
      title: "Contamination thesis vs the magic circle",
      teaser: "Does violence leak out of the game — or stay inside it?",
      detail: {
        kicker: "Theory",
        title: "The contamination thesis vs the magic circle",
        hook: "Is a game a window onto the world — or a sealed room?",
        argument: {
          label: "Theoretical connection",
          html: "<p>Two positions frame the debate <cite>(Goerger, 2017; Schulzke, 2010; Ostritsch, 2017)</cite>:</p>"
        },
        media: [{ type: "compare", at: "hook",
          left: { title: "Contamination thesis", tone: "bad", items: ["Game violence ‘leaks’ into real life", "Players become more aggressive", "Not supported by macro-level crime data"] },
          right: { title: "The magic circle", tone: "good", items: ["Play happens in a bounded space", "Virtual acts have no real victims", "Moral focus moves to meaning and endorsement"] } }],
        reflect: {
          q: "Where does the magic circle break down in an MMOG?",
          a: "In MMOGs the other players are real people. Harassment, griefing or theft of items bought with real money cross the circle — which links back to Q3’s griefing and ownership nodes."
        },
        refs: ["goerger2017", "schulzke2010", "ostritsch2017"]
      }
    },
    {
      id: "data", level: 3, parent: "contamination",
      x: 80, y: 400, w: 280,
      tag: "Evidence", title: "The macro data: sales vs crime",
      detail: {
        kicker: "Evidence",
        title: "Game sales vs youth violent crime",
        hook: "If games caused violence, shouldn’t violence rise as games spread?",
        argument: { label: "Core idea", html: "<p>The claim behind this node is that video game sales have risen while youth violent crime has fallen over roughly 30 years — an inverse correlation <cite>(Schulzke, 2010)</cite>. A correlation does not prove games <em>reduce</em> crime, but it is hard to reconcile with the contamination thesis.</p>" },
        media: [
          { type: "chart", at: "end",
            title: "Video game sales vs youth violent crime",
            xLabel: "Year",
            series: [
              { name: "Video game sales", unit: "", values: [] },
              { name: "Youth violent crime rate", unit: "", values: [] }
            ],
            years: [],
            source: "",
            brief: "Interactive slider chart. Fill `years` and both `values` arrays with REAL figures from a citable source (e.g. ESA sales data and US OJJDP / FBI UCR juvenile arrest rates), and set `source`. The chart stays hidden until data is added."
          }
        ],
        reflect: { q: "Does a correlation between two trends prove one causes the other?", a: "No \u2014 other factors (policing, economics, demographics) also change over time. The data weakens the contamination thesis but does not prove games reduce crime." },
        refs: ["schulzke2010"]
      }
    },

    {
      id: "satire", level: 2,
      x: 1180, y: 70, w: 440,
      tag: "Node 5.2",
      title: "Satire vs atrocity porn",
      teaser: "Why GTA V can be defensible but KZ Manager is abhorrent.",
      detail: {
        kicker: "Node 5.2 · The Endorsement View",
        title: "Satire vs atrocity porn",
        hook: "Why is torturing in GTA V satirically defensible, but playing KZ Manager morally abhorrent?",
        argument: {
          label: "Core argument & theoretical connection",
          html: "<p>Goerger and Ostritsch argue that <strong>graphicness alone does not decide morality</strong>; context and how values are built into the game do <cite>(Goerger, 2017; Ostritsch, 2017)</cite>.</p><p>Under Ostritsch’s <strong>Endorsement View</strong>, <em>representing</em> evil (as GTA V does) is not immoral if it is framed satirically, whereas <em>endorsing</em> an abhorrent worldview (as in <em>KZ Manager</em> or <em>Hatred</em>) violates moral obligations <cite>(Ostritsch, 2017)</cite>.</p>"
        },
        media: [
          { type: "compare", at: "hook",
            left: { title: "Represents evil (can be defensible)", tone: "good", items: ["GTA V — violence framed as satire", "Spec Ops: The Line — forces the player to confront what they did", "Invites critical reflection"] },
            right: { title: "Endorses evil (abhorrent)", tone: "bad", items: ["KZ Manager — players run a concentration camp", "Hatred — violence against civilians as the goal", "Asks the player to enjoy the worldview"] } },
          { type: "slot", kind: "video", at: "end",
            brief: "Side-by-side gameplay analysis: GTA V’s satire vs Spec Ops: The Line’s white phosphorus scene (and a news item on banned titles).",
            tips: "Use a video-essay analysis from YouTube rather than raw gameplay footage (less graphic, more analytical). Add a content warning line in the caption." }
        ],
        reflect: {
          q: "Can the same violent scene be ethical in one game and unethical in another?",
          a: "Yes, on the Endorsement View: what matters is whether the game invites you to reflect on violence (satire, critique) or to celebrate a hateful worldview."
        },
        refs: ["goerger2017", "ostritsch2017"]
      }
    },
    {
      id: "endorsement", level: 3, parent: "satire",
      x: 1260, y: 420, w: 280,
      tag: "Concept", title: "The Endorsement View",
      detail: {
        kicker: "Concept",
        title: "Ostritsch’s Endorsement View",
        hook: "Is it what you show — or what you celebrate?",
        argument: { label: "Theoretical connection", html: "<p>The Endorsement View separates <strong>representing</strong> evil from <strong>endorsing</strong> it. Games may represent terrible acts, but they become morally problematic when they ask players to adopt or celebrate an abhorrent worldview <cite>(Ostritsch, 2017)</cite>.</p>" },
        reflect: { q: "Name a game that represents violence without endorsing it.", a: "Examples often given include Spec Ops: The Line or This War of Mine, which make the player reflect on the costs of violence." },
        refs: ["ostritsch2017"]
      }
    },

    {
      id: "virtue", level: 2,
      x: 600, y: 820, w: 460,
      tag: "Node 5.3",
      title: "Virtue scaffolding: games as moral gymnasiums",
      teaser: "Can playing a violent game make you a more virtuous person?",
      detail: {
        kicker: "Node 5.3 · Virtue scaffolding",
        title: "Games as moral gymnasiums",
        hook: "Can playing a violent game make you a more virtuous person?",
        argument: {
          label: "Core argument & theoretical connection",
          html: "<p>Wonderly uses <strong>Humean sentimentalism</strong> to argue that ultra-violent gaming can erode empathy <cite>(Wonderly, 2008)</cite>. Schulzke replies in two ways <cite>(Schulzke, 2010)</cite>:</p><ul><li>Through <strong>Kant</strong>: virtual attacks carry no intention to harm real people.</li><li>Through <strong>Aristotle</strong>: choice-driven games such as <em>Fallout 3</em> and <em>The Last of Us</em> work as moral simulators where players practise virtuous decision-making <cite>(Goerger, 2017; Schulzke, 2010)</cite>.</li></ul>"
        },
        media: [
          { type: "dilemma", at: "end",
            title: "Try it: the Megaton dilemma (Fallout 3)",
            scenario: "In <em>Fallout 3</em>, the town of Megaton is built around an unexploded atomic bomb. A stranger, Mr Burke, offers you a reward to detonate it and wipe the town off the map. What do you do?",
            choices: [
              {
                label: "Disarm the bomb and protect the town",
                outcome: "The town survives and its people thank you. You give up the reward.",
                lenses: [
                  { name: "Aristotle (Schulzke)", text: "You practised courage and justice under temptation — the kind of repeated choice that builds virtuous character." },
                  { name: "Wonderly", text: "Your empathy for the town’s people guided the choice — the game engaged your moral sentiments rather than dulling them." }
                ]
              },
              {
                label: "Detonate the bomb for the reward",
                outcome: "Megaton is destroyed. The game shows the blast and the loss — and other characters react to what you did.",
                lenses: [
                  { name: "Kant (Schulzke)", text: "No real person was harmed and you had no intention to harm anyone real — so, on this view, the act is not a real moral wrong." },
                  { name: "Wonderly", text: "If you felt nothing, repeated choices like this could dull the empathy that normally stops cruelty." },
                  { name: "Aristotle (Schulzke)", text: "The game still makes you face the consequences — reflecting on this choice is itself moral practice." }
                ]
              },
              {
                label: "Walk away and do nothing",
                outcome: "The bomb stays; the town’s fate is left to someone else.",
                lenses: [
                  { name: "Aristotle (Schulzke)", text: "Avoiding a choice is also a choice. Good games show that moral life involves responsibility, not just avoiding wrong." }
                ]
              }
            ],
            note: "Scenario described for discussion; lenses summarise Wonderly (2008) and Schulzke (2010)."
          }
        ],
        reflect: {
          q: "Which lens convinced you most after trying the dilemma?",
          a: "There is no single right answer: Wonderly focuses on what the game does to our feelings, Kant on intentions, and Aristotle on habits of choice. Schulzke’s point is that choice-based games can train moral reasoning rather than erode it."
        },
        refs: ["wonderly2008", "schulzke2010", "goerger2017"]
      }
    },
    {
      id: "wonderly", level: 3, parent: "virtue",
      x: 80, y: 860, w: 300,
      tag: "View", title: "Wonderly: violence erodes empathy",
      detail: {
        kicker: "View",
        title: "Wonderly: a Humean worry",
        hook: "What happens to your feelings after the thousandth virtual kill?",
        argument: { label: "Theoretical connection", html: "<p>Following Hume, morality rests on <strong>sentiments</strong> such as sympathy. Wonderly argues that ultra-violent games which reward cruelty may weaken these sentiments over time, which gives them moral significance even if no one is physically harmed <cite>(Wonderly, 2008)</cite>.</p>" },
        reflect: { q: "Have you ever felt less shocked by violence after seeing a lot of it in games or films?", a: "If so, that is the kind of sentiment-dulling Wonderly worries about \u2014 though it does not necessarily mean behaviour changes." },
        refs: ["wonderly2008"]
      }
    },
    {
      id: "schulzke", level: 3, parent: "virtue",
      x: 1200, y: 860, w: 320,
      tag: "View", title: "Schulzke: Kant & Aristotle reply",
      detail: {
        kicker: "View",
        title: "Schulzke’s defence of violent games",
        hook: "Can a game be a gym for your conscience?",
        argument: { label: "Theoretical connection", html: "<p>Schulzke defends the morality of violent games: on a <strong>Kantian</strong> view there is no intent to harm real people, and on an <strong>Aristotelian</strong> view games with meaningful choices let players rehearse moral decisions — a kind of virtue scaffolding <cite>(Schulzke, 2010)</cite>.</p>" },
        reflect: { q: "Can practising choices in a game really change how you choose in life?", a: "Aristotle held that virtue grows through practice; Schulzke argues games with real moral choices can be one (limited) place to rehearse deliberation." },
        refs: ["schulzke2010"]
      }
    }
  ],

  edges: [
    { from: "hub", to: "contamination", label: "two views", fs: "left", ts: "right" },
    { from: "contamination", to: "data", fs: "bottom", ts: "top" },
    { from: "hub", to: "satire", label: "shifts the question to", fs: "right", ts: "left" },
    { from: "satire", to: "endorsement", fs: "bottom", ts: "top" },
    { from: "hub", to: "virtue", label: "or even", fs: "bottom", ts: "top" },
    { from: "virtue", to: "wonderly", fs: "left", ts: "right" },
    { from: "virtue", to: "schulzke", fs: "right", ts: "left" }
  ],

  tour: ["hub", "contamination", "data", "satire", "endorsement", "virtue", "wonderly", "schulzke"]
});
