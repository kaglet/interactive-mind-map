/* =========================================================
   Q1 · What is the Metaverse?
   Owner: [Member 2 name]
   ---------------------------------------------------------
   HOW TO EDIT (see MEDIA-GUIDE.md for all media types)
   - x, y, w are LOCAL to this cluster (0,0 = its top-left).
   - Each node's `detail` follows the house structure:
       hook      -> provocative question
       argument  -> core argument & theoretical connection
       sections  -> extra points
       media     -> images / YouTube / audio / video / interactive
       reflect   -> "Think about it" question + possible answer
       refs      -> keys from `refs` below
   ========================================================= */
MindMap.registerBranch({
  id: "q1",
  number: 1,
  color: "sky",
  title: "What is the Metaverse?",
  short: "What is the Metaverse?",
  size: { w: 1760, h: 1080 },
  hub: "hub",

  refs: {
    bojic: {
      short: "Bojic, 2022",
      full: "Bojic, L. (2022) ‘Metaverse through the prism of power and addiction: what will happen when the virtual world becomes more attractive than reality?’, <em>European Journal of Futures Research</em>, 10, Article 22.",
      doi: "https://doi.org/10.1186/s40309-022-00208-4"
    },
    dolata: {
      short: "Dolata & Schwabe, 2023",
      full: "Dolata, M. and Schwabe, G. (2023) ‘What is the metaverse and who seeks to define it? Mapping the site of social construction’, <em>Journal of Information Technology</em>, 38(3), pp. 239–266.",
      doi: "https://doi.org/10.1177/02683962231159927"
    },
    ng: {
      short: "Ng, 2022",
      full: "Ng, D.T.K. (2022) ‘What is the metaverse? Definitions, technologies and the community of inquiry’, <em>Australasian Journal of Educational Technology</em>, 38(4), pp. 190–205.",
      doi: "https://doi.org/10.14742/ajet.7945"
    },
    weinberger: {
      short: "Weinberger, 2022",
      full: "Weinberger, M. (2022) ‘What is metaverse? — A definition based on qualitative meta-synthesis’, <em>Future Internet</em>, 14(11), Article 310.",
      doi: "https://doi.org/10.3390/fi14110310"
    },
    bbcMetaverse: {
      short: "BBC News, n.d.",
      full: "BBC News (n.d.) <em>What is the metaverse?</em> [YouTube video]. Available at: https://www.youtube.com/watch?v=V6VsxcVpBVY (Accessed: 29 September 2026).",
      verify: "Add the upload year from the YouTube page."
    }
  },

  nodes: [
    {
      id: "hub", level: 1, kind: "hub",
      x: 660, y: 430, w: 440,
      img: "images/what-is-metaverse.jpeg",
      tag: "Question 1 · The hub",
      title: "What is the Metaverse?",
      teaser: "A connected collection of persistent, 3D virtual worlds where people meet, act and create through avatars.",
      detail: {
        kicker: "The question",
        title: "What is the Metaverse?",
        media: [
          { type: "image", src: "images/what-is-metaverse.jpeg", alt: "Illustration of people in a virtual world", at: "top" },
          { type: "youtube", id: "V6VsxcVpBVY", title: "What is the metaverse? — BBC News", credit: "BBC News", at: "end" }
        ],
        hook: "What if the internet stopped being something you look <em>at</em>, and became somewhere you step <em>into</em>?",
        argument: {
          label: "Core idea",
          html: "<p>The metaverse can be understood as a <strong>connected collection of persistent, three-dimensional virtual worlds</strong>. People use digital avatars to interact, take part in activities, and create or experience content — so instead of viewing information on a screen, users feel as though they are <em>inside</em> a digital environment <cite>(Dolata &amp; Schwabe, 2023; Weinberger, 2022)</cite>.</p>"
        },
        sections: [
          { h: "Where the term comes from", p: "“Metaverse” combines <em>meta</em> (beyond) and <em>verse</em> (from universe). The term was coined by Neal Stephenson in his 1992 science-fiction novel <em>Snow Crash</em>." },
          { h: "The embodied internet", p: "The metaverse is often described as an <strong>embodied</strong> version of the internet: it shifts the experience from flat, two-dimensional screens to immersive, three-dimensional spaces <cite>(Ng, 2022)</cite>." },
          { h: "Three important characteristics", list: [
            "<strong>Interactivity</strong> — users engage with other people and the environment in real time.",
            "<strong>Corporeity</strong> — users are represented by a digital, often customisable, avatar.",
            "<strong>Persistence</strong> — the world keeps existing when individual users log off."
          ]}
        ],
        reflect: {
          q: "Which of the three characteristics do you think makes the biggest ethical difference?",
          a: "Persistence is a strong candidate: because the world keeps running, what you build, own or damage stays there — so actions have lasting consequences. Corporeity matters too, because an avatar makes other users feel present, which is why harm to avatars can feel personal."
        },
        refs: ["dolata", "weinberger", "ng", "bbcMetaverse"]
      }
    },

    {
      id: "works", level: 2,
      x: 70, y: 60, w: 360,
      tag: "Technology",
      title: "How the metaverse works",
      teaser: "XR, VR, AR, 5G, cloud & edge computing and AI — plus, on some platforms, blockchain.",
      detail: {
        kicker: "Technology",
        title: "How the metaverse works",
        hook: "Is the metaverse one technology — or many technologies pretending to be one place?",
        argument: {
          label: "Core idea",
          html: "<p>The metaverse brings together several technologies: <strong>extended reality (XR)</strong>, virtual reality (VR), augmented reality (AR), high-speed networks such as 5G, cloud and edge computing, and artificial intelligence (AI). Together they support immersive and responsive digital experiences <cite>(Dolata &amp; Schwabe, 2023; Ng, 2022)</cite>.</p>"
        },
        sections: [
          { h: "A decentralised Web3 economy?", p: "Some platforms also use <strong>blockchain, NFTs and cryptocurrencies</strong> to record digital assets, handle transactions and let creators earn money. However, not every virtual world uses blockchain or operates in a decentralised way <cite>(Bojic, 2022; Weinberger, 2022)</cite>." },
          { p: "Open the four smaller nodes for each technology." }
        ],
        reflect: {
          q: "Which of these technologies collects the most personal data about you?",
          a: "VR and AR headsets are strong candidates: their sensors can capture movement, voice and even eye-tracking data — far more intimate than a click on a website."
        },
        refs: ["dolata", "ng", "bojic", "weinberger"]
      }
    },
    {
      id: "vrar", level: 3, parent: "works",
      x: 40, y: 360, w: 200,
      tag: "Tech", title: "VR & AR",
      detail: {
        kicker: "Technology",
        title: "Virtual and augmented reality",
        hook: "Do you want to leave the real world — or decorate it?",
        argument: { label: "Core idea", html: "<p><strong>VR</strong> places users inside a computer-generated environment, usually through a headset. Displays, motion sensors, spatial audio and sometimes haptic feedback create the feeling of being present. <strong>AR</strong> adds digital information or objects to the physical world instead of replacing it, through smartphones, smart glasses or heads-up displays <cite>(Ng, 2022; Bojic, 2022)</cite>.</p>" },
        media: [{ type: "compare", at: "end",
          left: { title: "Virtual reality", tone: "a", items: ["Replaces your surroundings", "Headset, sensors, spatial audio", "Feeling of presence inside the world"] },
          right: { title: "Augmented reality", tone: "b", items: ["Adds to your surroundings", "Phone, smart glasses, HUD", "Digital objects beside real ones"] } }],
        reflect: { q: "Which would you trust more with your data: a VR headset or AR glasses?", a: "Both collect sensitive data. AR glasses also record the people and places around you, who never agreed to it, so they raise extra privacy questions for bystanders." },
        refs: ["ng", "bojic"]
      }
    },
    {
      id: "ai", level: 3, parent: "works",
      x: 260, y: 360, w: 200,
      tag: "Tech", title: "Artificial intelligence",
      detail: {
        kicker: "Technology",
        title: "Artificial intelligence in virtual worlds",
        hook: "When the characters around you are powered by AI, how do you know who is real?",
        argument: { label: "Core idea", html: "<p>AI makes virtual environments more responsive. It can support non-player characters, virtual assistants, speech recognition, translation, gesture recognition, content creation and learning tools <cite>(Ng, 2022; Dolata &amp; Schwabe, 2023)</cite>.</p>" },
        reflect: { q: "Should virtual worlds have to label which characters are AI?", a: "Labelling supports honesty and informed consent: users can decide how much to trust or share with a character when they know it is not a person." },
        refs: ["ng", "dolata"]
      }
    },
    {
      id: "chain", level: 3, parent: "works",
      x: 40, y: 470, w: 200,
      tag: "Tech", title: "Blockchain & NFTs",
      detail: {
        kicker: "Technology",
        title: "Blockchain and NFTs",
        hook: "If you ‘own’ an NFT, what exactly do you own?",
        argument: { label: "Core idea", html: "<p><strong>Blockchain</strong> is a distributed ledger that records transactions. <strong>NFTs</strong> are unique digital tokens that can represent items such as digital art or virtual goods. Some projects use them to record ownership or authenticity — but an NFT does <em>not</em> automatically guarantee unrestricted use or transfer across platforms <cite>(Dolata &amp; Schwabe, 2023; Ng, 2022; Bojic, 2022; Weinberger, 2022)</cite>.</p>" },
        reflect: { q: "Why might owning an NFT still leave you without control over the item?", a: "The token records ownership, but the platform decides whether the item can be displayed, used or moved. If the platform changes its rules or shuts down, the token may point to something you can no longer use." },
        refs: ["dolata", "ng", "bojic", "weinberger"]
      }
    },
    {
      id: "infra", level: 3, parent: "works",
      x: 260, y: 470, w: 200,
      tag: "Tech", title: "3D & infrastructure",
      detail: {
        kicker: "Technology",
        title: "3D modelling and internet infrastructure",
        hook: "What does it take to keep thousands of avatars in the same place at the same time?",
        argument: { label: "Core idea", html: "<p>3D modelling tools and real-time rendering engines such as Unreal Engine help developers build virtual environments and <strong>digital twins</strong>. Cloud computing, edge computing and high-speed networks deliver these experiences and keep many users synchronised <cite>(Dolata &amp; Schwabe, 2023; Weinberger, 2022; Bojic, 2022; Ng, 2022)</cite>.</p>" },
        reflect: { q: "Who is left out when a world needs fast networks and powerful devices?", a: "People with slow or expensive internet, older devices or unreliable power \u2014 so infrastructure choices can widen the digital divide." },
        refs: ["dolata", "weinberger", "bojic", "ng"]
      }
    },

    {
      id: "vs", level: 2,
      x: 640, y: 50, w: 400,
      tag: "Comparison",
      title: "Metaverse vs the traditional internet",
      teaser: "From looking at content on a 2D screen to taking part in a 3D space.",
      detail: {
        kicker: "Comparison",
        title: "The metaverse vs the traditional internet",
        hook: "Is the metaverse really new — or just the web with a body?",
        argument: { label: "Core idea", html: "<p>Traditional internet experiences are accessed through <strong>two-dimensional interfaces</strong> such as websites and browsers, where users view content from the outside. In a metaverse environment users <strong>enter</strong> a three-dimensional space and participate through an avatar <cite>(Dolata &amp; Schwabe, 2023; Weinberger, 2022)</cite>.</p>" },
        media: [{ type: "compare", at: "hook",
          left: { title: "Traditional internet", tone: "a", items: ["2D websites and browsers", "You look at content from outside", "Separate browsing sessions", "Mostly text, images and video"] },
          right: { title: "Metaverse", tone: "b", items: ["3D spaces you enter", "You take part through an avatar", "Persistent worlds between visits", "Marketplaces for digital goods (varies by platform)"] } }],
        sections: [
          { p: "Ownership and control of digital goods differ from one platform to another — which becomes an ethical question in Q3 (Second Life) and Q4." }
        ],
        reflect: { q: "What changes ethically when you are ‘inside’ the information instead of looking at it?", a: "Presence makes experiences feel real, so harassment, theft or manipulation can feel more personal. It also means platforms collect richer data — how you move, where you look, who you stand next to." },
        refs: ["dolata", "weinberger"]
      }
    },

    {
      id: "examples", level: 2,
      x: 1190, y: 40, w: 360,
      img: "images/metaverse.jpg",
      tag: "Examples",
      title: "Examples of virtual worlds",
      teaser: "Roblox, VRChat, Second Life, Decentraland and Otherside.",
      detail: {
        kicker: "Examples",
        title: "Examples of virtual worlds",
        media: [{ type: "image", src: "images/metaverse.jpg", alt: "A virtual world scene", at: "top" }],
        hook: "You have probably visited the metaverse already — did you notice?",
        argument: { label: "Core idea", html: "<p>The metaverse is not one place but many platforms with different rules, economies and communities.</p>" },
        sections: [
          { list: [
            "<strong>Roblox</strong> — a user-generated 3D platform to play games, move between social experiences and create content. Its virtual currency is Robux.",
            "<strong>VRChat</strong> — a social VR platform where people meet using personalised 3D avatars and build their own environments.",
            "<strong>Second Life</strong> — a desktop-based virtual world known for avatar-based socialising, user-created content and virtual property (see Q3).",
            "<strong>Decentraland &amp; Otherside</strong> — blockchain-related virtual world projects that have explored virtual land, events and digital fashion."
          ]}
        ],
        reflect: { q: "Which of these platforms would you trust with your personal data, and why?", a: "Consider who runs the platform, how it earns money, and what data it needs to function. Platforms funded by selling virtual goods or land may have different incentives from those funded by advertising." },
        refs: ["dolata", "ng"]
      }
    },

    {
      id: "apps", level: 2,
      x: 1290, y: 470, w: 380,
      tag: "Applications",
      title: "Everyday applications",
      teaser: "Gaming, classrooms, offices, healthcare and virtual tourism.",
      detail: {
        kicker: "Applications",
        title: "Everyday applications of the metaverse",
        hook: "Would you rather attend a lecture on campus — or inside a virtual lab where you can break things safely?",
        argument: { label: "Core idea", html: "<p>The metaverse is already used far beyond gaming: for learning, work, health care and culture <cite>(Bojic, 2022; Dolata &amp; Schwabe, 2023; Ng, 2022; Weinberger, 2022)</cite>.</p>" },
        sections: [
          { h: "Gaming and entertainment", p: "Roblox, Minecraft and Axie Infinity connect gaming with user-created content and digital economies. Virtual concerts and fashion events — Fortnite’s Travis Scott event, Justin Bieber’s Wave performance and Decentraland Fashion Week — show entertainment in shared digital spaces." },
          { h: "Virtual classrooms", p: "Students can explore subjects through simulations: virtual science labs, historical locations, or visualisations of complex ideas, supported by avatars and AI-based learning tools <cite>(Ng, 2022)</cite>." },
          { h: "Virtual offices and meetings", p: "Remote teams can meet and work with digital models in shared 3D spaces. Businesses use <strong>digital twins</strong> — virtual versions of physical sites or processes — to practise procedures." },
          { h: "Healthcare simulations", p: "VR and AR support medical training, rehabilitation, remote consultations and some therapeutic activities — supplementing, not automatically replacing, conventional clinical care <cite>(Ng, 2022; Bojic, 2022)</cite>." },
          { h: "Virtual tourism and culture", p: "Virtual tours of museums, heritage sites and cities can make experiences accessible to people facing geographical, financial or mobility barriers." }
        ],
        reflect: { q: "Who might be left out of these benefits?", a: "People without headsets, fast internet or reliable electricity. Equipment cost and technical demands can widen the digital divide rather than close it." },
        refs: ["bojic", "dolata", "ng", "weinberger"]
      }
    },

    {
      id: "economy", level: 2,
      x: 1200, y: 830, w: 380,
      tag: "Economy",
      title: "The virtual economy",
      teaser: "Creating, buying, selling and trading digital goods and services.",
      detail: {
        kicker: "Economy",
        title: "The virtual economy",
        hook: "Would you pay real money for a jacket that only exists in a game?",
        argument: { label: "Core idea", html: "<p>The virtual economy is how people <strong>create, buy, sell and exchange</strong> digital goods and services in virtual environments. Users are not only consumers — they can create content, run virtual businesses or trade items. Some economies are managed by a platform; others use blockchain-based systems <cite>(Bojic, 2022; Dolata &amp; Schwabe, 2023; Weinberger, 2022)</cite>.</p>" },
        sections: [
          { list: [
            "<strong>Virtual shopping</strong> — brands experiment with digital showrooms; some connect to physical products.",
            "<strong>Digital assets &amp; collectibles</strong> — virtual clothing, art, event passes. Their value depends on the platform and the rights attached.",
            "<strong>Virtual currencies</strong> — Robux (Roblox), MANA (Decentraland), SAND (The Sandbox). Cryptocurrency values can change.",
            "<strong>Digital fashion &amp; property</strong> — avatar clothing and virtual land for shops, events or galleries, with real financial risk.",
            "<strong>Interoperability</strong> — using assets across platforms is not yet universal."
          ]}
        ],
        reflect: { q: "If a platform closes, should users be compensated for their virtual goods?", a: "This is the ownership-versus-control problem explored in Q3: users may ‘own’ items, but the platform controls the servers and the rules. Many argue platforms have at least a duty of transparency about this risk." },
        refs: ["bojic", "dolata", "weinberger"]
      }
    },

    {
      id: "social", level: 2,
      x: 660, y: 880, w: 420,
      tag: "Social",
      title: "Social interaction in virtual worlds",
      teaser: "Avatars, communities, concerts, relationships and collaboration.",
      detail: {
        kicker: "Social life",
        title: "Social interaction in virtual environments",
        hook: "Can a friendship between two avatars be as real as one between two people?",
        argument: { label: "Core idea", html: "<p>Social interaction in the metaverse happens in shared digital spaces where people interact through avatars in real time, instead of relying only on text or video calls <cite>(Ng, 2022; Weinberger, 2022; Bojic, 2022)</cite>.</p>" },
        sections: [
          { list: [
            "<strong>Communication through avatars</strong> — gestures, expressions and spatial audio make it feel like being in the same place.",
            "<strong>Virtual communities</strong> — VRChat, Roblox and Second Life bring together people who share interests, even when far apart.",
            "<strong>Concerts and events</strong> — audiences gather in digital spaces and interact with performers and each other.",
            "<strong>Presence</strong> — sharing a space can make interactions meaningful, but researchers warn about excessive use replacing offline life.",
            "<strong>Collaboration</strong> — teams brainstorm and work on shared 3D models remotely."
          ]}
        ],
        reflect: { q: "What would make a virtual friendship less trustworthy than an offline one?", a: "You may not know who is behind the avatar, their age or intentions, and identity deception is easier. That links to digital identity (Q2) and the disinhibition effect (Q3)." },
        refs: ["ng", "weinberger", "bojic", "dolata"]
      }
    },

    {
      id: "balance", level: 2,
      x: 70, y: 760, w: 380,
      tag: "Evaluation",
      title: "Benefits & challenges",
      teaser: "Immersive learning and connection — versus data capture, power and addiction.",
      detail: {
        kicker: "Evaluation",
        title: "Benefits and challenges of the metaverse",
        hook: "What happens when the virtual world becomes more attractive than reality?",
        argument: { label: "Core idea", html: "<p>The metaverse offers real benefits, but it also concentrates power in platform providers and collects deeply personal data <cite>(Bojic, 2022; Dolata &amp; Schwabe, 2023)</cite>.</p>" },
        media: [{ type: "compare", at: "hook",
          left: { title: "Benefits", tone: "good", items: ["Immersive learning and practice in simulations", "Social connection and collaboration across distance", "Creator marketplaces for digital content", "Digital twins and fewer journeys"] },
          right: { title: "Challenges", tone: "bad", items: ["Excessive screen time and withdrawal from offline life", "Power of platform providers and recommendation systems", "Collection of movement, voice and eye-tracking data", "Equipment cost and limited interoperability"] } }],
        reflect: { q: "Who should be responsible for limiting addictive design in virtual worlds — users, platforms or governments?", a: "Bojic (2022) links the metaverse to power and addiction. A shared-responsibility answer is common: platforms design ethically, governments set rules, and users manage their own use." },
        refs: ["ng", "bojic", "dolata", "weinberger"]
      }
    }
  ],

  edges: [
    { from: "hub", to: "works", fs: "left", ts: "right" },
    { from: "works", to: "vrar", fs: "bottom", ts: "top" },
    { from: "works", to: "ai", fs: "bottom", ts: "top" },
    { from: "works", to: "chain", fs: "bottom", ts: "top" },
    { from: "works", to: "infra", fs: "bottom", ts: "top" },
    { from: "hub", to: "vs", label: "differs from", fs: "top", ts: "bottom" },
    { from: "hub", to: "examples", fs: "right", ts: "bottom" },
    { from: "hub", to: "apps", label: "used for", fs: "right", ts: "left" },
    { from: "hub", to: "economy", label: "runs on a", fs: "bottom", ts: "left" },
    { from: "hub", to: "social", label: "lived through", fs: "bottom", ts: "top" },
    { from: "hub", to: "balance", label: "weighed up", fs: "left", ts: "right" }
  ],

  tour: ["hub", "vs", "works", "vrar", "ai", "chain", "infra", "examples", "apps", "economy", "social", "balance"]
});
