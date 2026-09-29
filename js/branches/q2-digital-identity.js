/* =========================================================
   Q2 · Explain what digital identity is
   Owner: [Member 2 name]
   (Same structure as every branch — see MEDIA-GUIDE.md.)
   ========================================================= */
MindMap.registerBranch({
  id: "q2",
  number: 2,
  color: "violet",
  title: "What is digital identity?",
  short: "Digital identity",
  size: { w: 1880, h: 1060 },
  hub: "hub",

  refs: {
    johansen: {
      short: "Johansen et al., 2026",
      full: "Johansen, J., Hinds, J., Hajszan, P., Joinson, A. and Hamilton-Giachritsis, C. (2026) ‘What is digital identity? A transdisciplinary meta-synthesis’, <em>International Journal of Human-Computer Studies</em>, 216, Article 103901.",
      doi: "https://doi.org/10.1016/j.ijhcs.2026.103901"
    },
    rowland: {
      short: "Rowland & Estevens, 2025",
      full: "Rowland, J. and Estevens, J. (2025) ‘“What is your digital identity?” Unpacking users’ understandings of an evolving concept in datafied societies’, <em>Media, Culture &amp; Society</em>, 47(2), pp. 336–353.",
      doi: "https://doi.org/10.1177/01634437241282240"
    },
    uogLibrary: {
      short: "U of G Library, n.d.",
      full: "U of G Library (n.d.) <em>What is digital identity?</em> [YouTube video]. Available at: https://www.youtube.com/watch?v=OGV5OBa938I (Accessed: 29 September 2026).",
      verify: "Add the upload year from the YouTube page."
    }
  },

  nodes: [
    {
      id: "hub", level: 1, kind: "hub",
      x: 700, y: 420, w: 440,
      img: "images/Digital_id.jpg",
      tag: "Question 2 · The hub",
      title: "What is digital identity?",
      teaser: "The information that represents a person online — identifiers, credentials, activities and relationships.",
      detail: {
        kicker: "The question",
        title: "What is digital identity?",
        media: [
          { type: "image", src: "images/Digital_id.jpg", alt: "Illustration of digital identity", at: "top" },
          { type: "youtube", id: "OGV5OBa938I", title: "What is Digital Identity? — U of G Library", credit: "U of G Library", at: "end" }
        ],
        hook: "If someone collected every trace you have left online, would they know you better than your friends do?",
        argument: {
          label: "Core idea",
          html: "<p><strong>Digital identity</strong> is the information that represents a person or other entity online. It can include identifiers, login details, credentials, preferences, activities and relationships. It helps systems recognise users, confirm who they are and decide what they may access. It is not only technical — it can affect a person’s legal status and how they present themselves to others <cite>(Johansen et al., 2026)</cite>.</p>"
        },
        sections: [
          { h: "How it is created", p: "It can begin with information a person provides (a username, registration details), include credentials issued by an institution (a university or employer), and grow over time as online activity adds more data." },
          { h: "Digital vs physical identity", p: "Physical identity is tied to a body and physical documents. Digital identity is managed through software, databases and online services. Some digital identities are closely linked to a real person; others use usernames or pseudonyms." },
          { h: "Everyday examples", chips: ["Email accounts", "Social media profiles", "University learning platforms", "Online banking", "Government e-IDs"] }
        ],
        reflect: {
          q: "Is your digital identity something you create, or something that is created about you?",
          a: "Both. You create part of it (your profile, posts), institutions issue part of it (credentials), and platforms build part of it from your behaviour (data profiles) — often without you seeing it (Rowland & Estevens, 2025)."
        },
        refs: ["johansen", "rowland", "uogLibrary"]
      }
    },

    {
      id: "types", level: 2,
      x: 60, y: 60, w: 380,
      tag: "Types",
      title: "Types of digital identity",
      teaser: "Personal, professional, virtual, and institutional or transactional.",
      detail: {
        kicker: "Types",
        title: "Types of digital identity",
        hook: "How many different ‘yous’ exist online right now?",
        argument: { label: "Core idea", html: "<p>People hold several digital identities at once, each built for a different audience and purpose <cite>(Johansen et al., 2026)</cite>.</p>" },
        sections: [
          { list: [
            "<strong>Personal</strong> — social profiles for self-expression (Instagram, Facebook). People choose what to share.",
            "<strong>Professional</strong> — how you present education, skills and work (LinkedIn, online CVs).",
            "<strong>Virtual</strong> — avatars and gaming profiles in games and virtual worlds, which can differ from your physical appearance.",
            "<strong>Institutional &amp; transactional</strong> — university, workplace, government and banking accounts that give access to services."
          ]}
        ],
        reflect: { q: "Which of your identities would you least want mixed with another?", a: "For most people it is personal and professional: content meant for friends can harm a job application when seen by an employer — the ‘context collapse’ problem." },
        refs: ["johansen"]
      }
    },
    {
      id: "lenses", level: 3, parent: "types",
      x: 90, y: 330, w: 320,
      tag: "Theory", title: "Three ways of understanding identity",
      detail: {
        kicker: "Theory",
        title: "Three ways of understanding digital identity",
        hook: "Is your digital identity a key, a mirror, or a file someone keeps on you?",
        argument: { label: "Theoretical connection", html: "<p>Digital identity can be understood in three ways <cite>(Johansen et al., 2026; Rowland &amp; Estevens, 2025)</cite>:</p>" },
        sections: [
          { list: [
            "<strong>Identification</strong> — information used to verify who a person is (the key).",
            "<strong>Self-presentation</strong> — the image a person deliberately creates (the mirror).",
            "<strong>Data profile</strong> — the profile platforms build from online activity (the file)."
          ]}
        ],
        reflect: { q: "Which of the three \u2014 key, mirror or file \u2014 do you have least control over?", a: "Usually the data profile (the file): platforms build it from your behaviour, and you rarely see or correct it." },
        refs: ["johansen", "rowland"]
      }
    },

    {
      id: "footprint", level: 2,
      x: 660, y: 40, w: 420,
      tag: "Data trail",
      title: "Your digital footprint",
      teaser: "The trail of data you leave — on purpose and without noticing.",
      detail: {
        kicker: "Data trail",
        title: "The digital footprint",
        hook: "Deleting a post doesn’t delete the screenshot. Who controls your past?",
        argument: { label: "Core idea", html: "<p>A <strong>digital footprint</strong> is the trail of data created through a person’s online activities. These traces become part of the identity that platforms and other people associate with them <cite>(Rowland &amp; Estevens, 2025)</cite>.</p>" },
        media: [{ type: "compare", at: "hook",
          left: { title: "Active footprint", tone: "a", items: ["Created on purpose", "Posts and comments", "Uploaded photos", "Online forms"] },
          right: { title: "Passive footprint", tone: "b", items: ["Collected as you use services", "Browsing activity", "Location and IP address", "Interaction patterns — often unnoticed"] } }],
        sections: [
          { h: "Search history and reputation", p: "Searches and browsing can be used to build profiles about users. Posts may stay searchable or be copied even after deletion, affecting reputation — especially when content meant for one audience reaches another." }
        ],
        reflect: { q: "Is it ethical for platforms to collect passive data you don’t know about?", a: "Information ethics would ask whether there is meaningful awareness and consent. Collection without awareness undermines a person’s control over their own identity." },
        refs: ["rowland"]
      }
    },

    {
      id: "metaverse-id", level: 2,
      x: 1230, y: 40, w: 380,
      img: "images/Digital_id_2.jpg",
      tag: "In the Metaverse",
      title: "Digital identity in the metaverse",
      teaser: "Avatars, virtual names and assets make identity visible in 3D.",
      detail: {
        kicker: "In the Metaverse",
        title: "Digital identity in the metaverse",
        media: [{ type: "image", src: "images/Digital_id_2.jpg", alt: "Avatar identity illustration", at: "top" }],
        hook: "If your avatar looks nothing like you, which one is the ‘real’ you?",
        argument: { label: "Core idea", html: "<p>In the metaverse, digital identity takes a more <strong>visible</strong> form because people interact through avatars in 3D environments <cite>(Johansen et al., 2026)</cite>.</p>" },
        sections: [
          { list: [
            "<strong>Avatars and self-expression</strong> — users customise their appearance and explore new ways to present themselves.",
            "<strong>Virtual names and assets</strong> — usernames, handles, clothing and accessories help distinguish one user from another.",
            "<strong>Identity across worlds</strong> — people hold different accounts and avatars on different platforms. Moving identity or assets between worlds depends on compatible systems; interoperability remains a challenge."
          ]}
        ],
        reflect: { q: "Should your avatar be protected like your real identity?", a: "If avatars are informational extensions of the person (see Q3 — avatars as inforgs), then impersonating or harming an avatar affects the real person and deserves protection." },
        refs: ["johansen"]
      }
    },

    {
      id: "privacy", level: 2,
      x: 1280, y: 500, w: 360,
      tag: "Security",
      title: "Privacy & security",
      teaser: "Protecting accounts — and balancing privacy with accountability.",
      detail: {
        kicker: "Security",
        title: "Privacy and security",
        hook: "Your password protects your account. What protects your identity?",
        argument: { label: "Core idea", html: "<p>Protecting digital identity means keeping account information secure and thinking carefully about what personal data is shared. Strong passwords and <strong>multi-factor authentication (MFA)</strong> help protect accounts.</p>" },
        sections: [ { p: "Open the two smaller nodes for common threats and the real-name debate." } ],
        reflect: { q: "Whose job is it to keep your identity safe — yours or the platform’s?", a: "Both: users control their own behaviour (passwords, MFA, sharing), but weak or poorly protected systems make every user vulnerable, so platforms carry a duty of care." },
        refs: ["johansen"]
      }
    },
    {
      id: "threats", level: 3, parent: "privacy",
      x: 1670, y: 470, w: 200,
      tag: "Risk", title: "Common threats",
      detail: {
        kicker: "Risk",
        title: "Common threats to digital identity",
        hook: "How much of ‘you’ could a stranger steal with one password?",
        argument: { label: "Core idea", html: "<p>Digital identity is exposed to threats that can cause real harm, and weak systems make them worse.</p>" },
        sections: [ { chips: ["Phishing", "Stolen login details", "Impersonation", "Identity theft", "Financial fraud"] } ],
        reflect: { q: "What is the single most effective step to protect your identity?", a: "Turning on multi-factor authentication: even if a password is stolen through phishing, the attacker still cannot log in easily." },
        refs: ["johansen"]
      }
    },
    {
      id: "realnames", level: 3, parent: "privacy",
      x: 1670, y: 590, w: 200,
      tag: "Debate", title: "Real names vs pseudonyms",
      detail: {
        kicker: "Debate",
        title: "Privacy and real-name policies",
        hook: "Would the internet be kinder if everyone had to use their real name?",
        argument: { label: "Core idea", html: "<p>Some services allow pseudonyms; others require real names or verified details. Each approach balances <strong>privacy</strong> against <strong>accountability</strong>, and the right balance depends on the service and context <cite>(Johansen et al., 2026)</cite>.</p>" },
        reflect: { q: "In which settings should real names be required?", a: "Banking and government services need verified identity; social or creative spaces may benefit from pseudonyms that protect privacy and vulnerable users. Compare Q3’s ‘Privacy vs pseudonymity’ node." },
        refs: ["johansen"]
      }
    },

    {
      id: "managing", level: 2,
      x: 700, y: 890, w: 440,
      tag: "Practice",
      title: "Managing your digital identity",
      teaser: "Reputation, profile visibility, separate accounts and mindful sharing.",
      detail: {
        kicker: "Practice",
        title: "Managing your digital identity",
        hook: "Would you be comfortable if a future employer read everything you posted this year?",
        argument: { label: "Core idea", html: "<p>Managing digital identity means thinking about how public activity may be seen by different audiences, including employers and universities.</p>" },
        sections: [
          { list: [
            "<strong>Online reputation</strong> — consider how posts and comments may be read later.",
            "<strong>Profile visibility</strong> — check who can see your personal information.",
            "<strong>Separate accounts</strong> — keep personal and professional accounts apart.",
            "<strong>Privacy settings &amp; mindful sharing</strong> — review settings regularly and pause before posting."
          ]}
        ],
        reflect: { q: "Should people have a \u2018right to be forgotten\u2019 online?", a: "It protects people from being defined forever by old mistakes, but it must be balanced against public interest and freedom of information." },
        refs: ["rowland"]
      }
    },

    {
      id: "future", level: 2,
      x: 60, y: 480, w: 380,
      tag: "Future",
      title: "The future of digital identity",
      teaser: "Deepfakes, biometrics, self-sovereign identity and governance.",
      detail: {
        kicker: "Future",
        title: "The future of digital identity",
        hook: "If AI can make a perfect copy of your face and voice, what is left that is uniquely yours?",
        argument: { label: "Core idea", html: "<p>New technologies make identity more convenient but also easier to copy, misuse or control <cite>(Johansen et al., 2026)</cite>.</p>" },
        sections: [
          { list: [
            "<strong>AI-generated avatars and deepfakes</strong> — realistic digital copies of people raise questions of consent, authenticity and misuse of likeness.",
            "<strong>Biometric authentication</strong> — face and fingerprint checks are convenient, but biometric data is highly sensitive.",
            "<strong>Self-sovereign identity</strong> — digital identity wallets aim to give people control over their own credentials, reducing dependence on one provider.",
            "<strong>Ethical governance</strong> — policies must address privacy, security, fairness, human rights and control of personal data."
          ]}
        ],
        reflect: { q: "Should you need to give consent before an AI creates an avatar that looks like you?", a: "Most ethical frameworks say yes: your likeness is part of your identity, and using it without consent can deceive others and harm your reputation." },
        refs: ["johansen"]
      }
    },

    {
      id: "balance", level: 2,
      x: 60, y: 830, w: 400,
      tag: "Evaluation",
      title: "Benefits & risks",
      teaser: "Access and opportunity — versus surveillance and bias.",
      detail: {
        kicker: "Evaluation",
        title: "Benefits and risks of digital identity",
        hook: "Does digital identity open doors — or build a cage?",
        argument: { label: "Core idea", html: "<p>Digital identity brings real access and opportunity, but the same systems enable surveillance and automated judgement <cite>(Rowland &amp; Estevens, 2025; Johansen et al., 2026)</cite>.</p>" },
        media: [{ type: "compare", at: "hook",
          left: { title: "Benefits", tone: "good", items: ["Easier access to banking, education, health and government services", "Networking and collaboration", "Self-expression", "Social and economic opportunities"] },
          right: { title: "Risks", tone: "bad", items: ["Surveillance and data collection without meaningful consent", "Biased automated decisions (recruitment, credit, policing)", "Data that stays online for a long time", "Limited control over how you are interpreted"] } }],
        reflect: { q: "Do the benefits of digital identity outweigh the risks for you personally?", a: "It depends on control and consent: benefits are highest when you understand what is collected and can limit how it is used." },
        refs: ["rowland", "johansen"]
      }
    }
  ],

  edges: [
    { from: "hub", to: "types", label: "comes in", fs: "left", ts: "right" },
    { from: "types", to: "lenses", fs: "bottom", ts: "top" },
    { from: "hub", to: "footprint", label: "is built from a", fs: "top", ts: "bottom" },
    { from: "hub", to: "metaverse-id", label: "becomes visible", fs: "right", ts: "bottom" },
    { from: "hub", to: "privacy", label: "must be protected", fs: "right", ts: "left" },
    { from: "privacy", to: "threats", fs: "right", ts: "left" },
    { from: "privacy", to: "realnames", fs: "right", ts: "left" },
    { from: "hub", to: "managing", label: "is managed through", fs: "bottom", ts: "top" },
    { from: "hub", to: "future", label: "is changing", fs: "left", ts: "right" },
    { from: "hub", to: "balance", label: "weighed up", fs: "bottom", ts: "right" }
  ],

  tour: ["hub", "types", "lenses", "footprint", "metaverse-id", "privacy", "threats", "realnames", "managing", "future", "balance"]
});
