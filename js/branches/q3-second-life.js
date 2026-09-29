/* =========================================================
   Q3 · How does the game Second Life impact virtual ethics?
   Owner: [Member 1 name]  — content unchanged from the original branch.
   ---------------------------------------------------------
   Coordinates (x, y, w) are LOCAL to this question's cluster.
   The engine positions the whole cluster on the big map.
   ========================================================= */
MindMap.registerBranch({
  id: "q3",
  number: 3,
  color: "cyan",
  title: "How does the game Second Life impact virtual ethics?",
  short: "Second Life & virtual ethics",
  size: { w: 1900, h: 1160 },
  hub: "question",

  refs: {
    botterbusch: {
      short: "Botterbusch & Talab, 2009",
      full: 'Botterbusch, H.R. and Talab, R.S. (2009) ‘Ethical issues in Second Life’, <em>TechTrends</em>, 53(1), pp. 9–13.',
      doi: "https://doi.org/10.1007/s11528-009-0227-4"
    },
    burnett: {
      short: "Burnett & Burnett, 2019",
      full: 'Burnett, K. and Burnett, G. (2019) ‘Information domains, information ethics’, <em>Proceedings of the Tenth International Conference on Conceptions of Library and Information Science (CoLIS 10)</em>, Ljubljana, Slovenia, 16–19 June 2019.'
    },
    fisher: {
      short: "Fisher & Naumer, 2006",
      full: 'Fisher, K.E. and Naumer, C.M. (2006) ‘Information grounds: theoretical basis and empirical findings on information flow in social settings’, in Spink, A. and Cole, C. (eds) <em>New directions in human information behavior</em>. Information Science and Knowledge Management, vol. 8. Dordrecht: Springer.',
      doi: "https://doi.org/10.1007/1-4020-3670-1_6"
    },
    floridi2013: {
      short: "Floridi, 2013",
      full: 'Floridi, L. (2013) <em>The ethics of information</em>. Oxford: Oxford University Press.'
    },
    floridi2013ch: {
      short: "Floridi, 2013",
      full: 'Floridi, L. (2013) ‘Ethics after the information revolution’, in <em>The ethics of information</em>. Oxford: Oxford University Press.',
      doi: "https://doi.org/10.1093/acprof:oso/9780199641321.003.0001"
    },
    floridi2017: {
      short: "Floridi, 2017",
      full: 'Floridi, L. (2017) ‘Digital’s cleaving power and its consequences’, <em>Philosophy &amp; Technology</em>, 30(2), pp. 123–129.'
    },
    suler: {
      short: "Suler, 2004",
      full: 'Suler, J. (2004) ‘The online disinhibition effect’, <em>CyberPsychology &amp; Behavior</em>, 7(3), pp. 321–326.',
      doi: "https://doi.org/10.1089/1094931041291295"
    },
    slVideo: {
      short: "Jarrett, n.d.",
      full: 'Jarrett, J. (n.d.) <em>What is Second Life</em> [YouTube video]. Available at: https://www.youtube.com/watch?v=R0MloZC3WJQ (Accessed: 29 September 2026).',
      verify: "Add the upload year from the YouTube page."
    },
    vanwyk: {
      short: "Van Wyk, n.d.",
      full: 'Van Wyk, B. (n.d.) <em>IE and virtual worlds – a case of Second Life</em> [Lecture slides], INY 715 Information Ethics. Department of Information Science, University of Pretoria.'
    }
  },

  nodes: [
    {
      id: "root", level: 0, kind: "hero", color: "cyan",
      x: 50, y: 395, w: 370,
      img: "images/secondlife_main.png",
      tag: "Start here · The world",
      title: "Second Life",
      teaser: "A free, 3D online virtual world where people create avatars to socialise, explore, build — and buy and sell.",
      detail: {
        kicker: "The case",
        title: "What is Second Life?",
        hero: "images/secondlife_main.png",
        media: [{ type: "youtube", id: "R0MloZC3WJQ", title: "What is Second Life", credit: "Jason Jarrett", at: "end" }],
        lead: "Second Life (SL) is a 3D virtual environment, created by <em>Linden Lab</em>, in which users — called “residents” — are represented by an avatar of their choice and build almost all of the content themselves.",
        sections: [
          { h: "Why it is different from an ordinary game", list: [
            "<strong>Seamless &amp; persistent</strong> — the world carries on when a player logs off.",
            "<strong>User ownership of content</strong> — residents create and own what they build.",
            "<strong>Scale &amp; complexity</strong> — far more advanced than a typical game world.",
            "<strong>A real economy</strong> — a growing market of buying and selling (land, clothes, buildings, services).",
            "<strong>Dynamic</strong> — a constantly changing environment with no fixed storyline."
          ]},
          { h: "“But it is just a game?”", p: "Like an MMORPG, residents move a customisable 3D “puppet” through an online world. Unlike an MMORPG there are <em>no pre-determined goals or tasks</em> — just like the real world. Linden Lab itself describes SL as “an entirely open-ended experience” rather than a game <cite>(Van Wyk, n.d.)</cite>." },
          { h: "Who uses it", list: [
            "Roughly 60,000+ users per day at the time of the reading.",
            "Meetings, conferences, research, career exploration and teaching all take place in-world.",
            "A large share of users live outside the United States — it is <strong>transcultural</strong>, which makes shared ethical norms harder to agree on."
          ]}
        ],
        reflect: {
          q: "If there are no rules to “win”, whose rules decide what is right or wrong in Second Life?",
          a: "Several layers overlap: Linden Lab’s end-user agreement, the laws of each resident’s own country, community norms inside each region, and each person’s own moral code. Because these don’t always agree, Second Life is a good test case for information ethics."
        },
        refs: ["vanwyk", "botterbusch", "slVideo"]
      }
    },

    {
      id: "question", level: 1, kind: "hub", color: "white",
      x: 720, y: 470, w: 390,
      tag: "Question 6 · The hub",
      title: "How does Second Life impact virtual ethics?",
      teaser: "Avatars act, create and trade in a persistent world — so their choices carry real ethical weight.",
      detail: {
        kicker: "Level 1 · The question",
        title: "How does Second Life impact virtual ethics?",
        hero: "images/secondlife.jpg",
        lead: "Second Life turns ethics into an <em>information</em> problem: everything an avatar is, says, builds or owns is made of data. The question is how moral responsibility works when the “person” acting is an avatar.",
        sections: [
          { h: "What information ethics looks at", p: "Information ethics explores the relationship between the <em>creation, organisation, dissemination and use</em> of information, and the ethical standards and moral codes that govern human conduct <cite>(Burnett &amp; Burnett, 2019)</cite>." },
          { h: "Morals, ethics and law", list: [
            "<strong>Morals</strong> — customs and traditions.",
            "<strong>Ethics</strong> — critical reflection on those morals.",
            "<strong>Law</strong> — norms formally approved by the state or international bodies."
          ]},
          { p: "In Second Life these three often pull apart: something can be legal in-world, feel normal to the community, and still be unethical." },
          { quote: "Digital technology has a “cleaving power” — the power to couple, decouple and recouple the world.", cite: "Floridi, 2017" },
          { p: "SL is a clear example: it <em>decouples</em> a person from their body and identity, then <em>recouples</em> them to an avatar, a new name and a new economy." },
          { h: "So, how does SL impact virtual ethics? Five ways", list: [
            "It adds new <strong>domains</strong> where ethics must apply — the avatar, the community and the code.",
            "It <strong>changes behaviour</strong> through the online disinhibition effect — for better and worse.",
            "It works as an <strong>information ground</strong> where knowledge is shared freely — and sometimes carelessly.",
            "It places residents inside Floridi’s <strong>infosphere</strong> as inforgs, which puts <strong>privacy</strong> at stake.",
            "It raises hard questions about <strong>ownership and control</strong> of virtual property and data."
          ]}
        ],
        reflect: {
          q: "Is harming someone’s avatar the same as harming the person?",
          a: "From an information-ethics view the avatar is an informational extension of the person (an inforg). Damaging it, stealing from it or harassing it affects the real person’s reputation, money, time and wellbeing — so the harm is real even if the body is virtual."
        },
        refs: ["burnett", "floridi2017", "vanwyk"]
      }
    },

    {
      id: "domains", level: 2, color: "sky",
      x: 50, y: 70, w: 340,
      tag: "Framework",
      title: "Three information domains",
      teaser: "Individual · Social · Signification — the avatar, the community, and the code that represents them.",
      detail: {
        kicker: "Level 2 · Framework",
        title: "The three domains of information ethics",
        lead: "Burnett and Burnett (2019) argue that information ethics works across three domains that are <em>inextricably intertwined</em>. Second Life maps onto all three.",
        sections: [
          { h: "In Second Life", list: [
            "<strong>Individual domain</strong> — the resident and their avatar: identity, choices and moral agency.",
            "<strong>Social domain</strong> — avatars interacting in shared spaces: communities, clubs, classrooms, markets.",
            "<strong>Domain of signification</strong> — the medium itself: text chat, code (scripts), images, 3D objects and the data that represent everything."
          ]},
          { p: "Individuals occupy social worlds and interact with one another <em>through the mediation of signification</em>. In SL you never meet a person directly — only their representation." },
          { h: "Third-order technologies", p: "Information ethics works well for technologies that need a human to start and supervise them. But SL is persistent: objects, scripts and bots keep acting after the resident logs off. This raises the question: <em>can moral agency be sustained without ongoing human presence</em>, and how does that affect wellbeing across the three domains?" }
        ],
        reflect: {
          q: "A resident writes a script that keeps spamming a region after they log off. Who is responsible?",
          a: "The action happens in the domain of signification (the code), but its author is still the moral agent in the individual domain, and the harm lands in the social domain. The three domains can’t be separated — which is exactly Burnett and Burnett’s point."
        },
        refs: ["burnett", "vanwyk"]
      }
    },

    {
      id: "disinhibition", level: 2, color: "pink",
      x: 555, y: 40, w: 350,
      img: "images/disinhibition.jpg",
      tag: "Behaviour",
      title: "Disinhibition effect — toxic & benign",
      teaser: "Behind an avatar, people do things they wouldn’t do face to face.",
      detail: {
        kicker: "Level 2 · Behaviour",
        title: "The online disinhibition effect",
        hero: "images/disinhibition.jpg",
        lead: "Suler (2004) describes how people “self-disclose or act out more frequently or intensely” online than in person. In SL the resident feels separated from the avatar, so the avatar can do things the person never would.",
        sections: [
          { split: {
            bad: { h: "Toxic disinhibition", items: ["Rude language and harsh criticism", "Anger, hatred and threats", "Griefing and vandalism", "Exploring places and acts one would avoid offline"] },
            good: { h: "Benign disinhibition", items: ["Sharing personal feelings and fears", "Unusual acts of kindness and generosity", "Trying out new identities safely", "Support groups and communities"] }
          }},
          { h: "Why it happens (Suler’s six factors)", chips: ["Dissociative anonymity", "Invisibility", "Asynchronicity", "Solipsistic introjection", "Dissociative imagination", "Minimised authority"] },
          { p: "<strong>Dissociative imagination</strong> is the one SL triggers most: “it’s just a game”, so the avatar’s actions feel like they belong to a fictional character, not to me. The lecture adds a second driver: <em>no fear of consequences</em> <cite>(Van Wyk, n.d.)</cite>." }
        ],
        reflect: {
          q: "Does disinhibition reveal a person’s “true self”?",
          a: "Suler (2004) warns against that conclusion: the online self is not more ‘true’ than the offline one — it is a different expression of the same person, shaped by the environment. That is why the environment’s design and rules matter ethically."
        },
        refs: ["suler", "vanwyk"]
      }
    },
    {
      id: "dis-grief", level: 3, color: "pink", parent: "disinhibition",
      x: 960, y: 40, w: 230,
      tag: "Toxic in practice",
      title: "Griefing & unethical acts",
      detail: {
        kicker: "Level 3 · Behaviour",
        title: "Griefing and unethical behaviour in SL",
        lead: "A <em>griefer</em> (bad-faith player) deliberately irritates and harasses others by using the world in unintended ways — for example, destroying something another resident built <cite>(Van Wyk, n.d.)</cite>.",
        sections: [
          { h: "Unethical &amp; illegal behaviours recorded in SL", list: [
            "Illegal file-sharing (copyright infringement)",
            "Spamming",
            "Multiple identities and identity deception",
            "Illicit materials",
            "Breaches of privacy — monitoring and eavesdropping",
            "Leaking confidential and proprietary information",
            "Crimes such as harassment, vandalism and unauthorised use of computer information (e.g. passwords)",
            "Intellectual property and trademark infringement"
          ]},
          { p: "Botterbusch and Talab (2009) use case studies of these behaviours and place particular emphasis on <em>copyright infringement</em> — residents copying textures, logos and designs they would not be allowed to reproduce in real life." }
        ],
        reflect: {
          q: "Is destroying someone’s virtual house “real” vandalism?",
          a: "The resident may have paid real money and spent many hours on it. The object is data, but the loss of time, money and creative work is real — so the ethical harm is real."
        },
        refs: ["botterbusch", "vanwyk"]
      }
    },
    {
      id: "dis-virtue", level: 3, color: "pink", parent: "disinhibition",
      x: 960, y: 150, w: 230,
      tag: "Moral dilemma",
      title: "The virtuous-avatar dilemma",
      detail: {
        kicker: "Level 3 · Moral dilemma",
        title: "Should a good person be good in Second Life?",
        lead: "We expect a virtuous person to be virtuous everywhere. Yet disinhibition means some residents act in ways online that they never would in the physical world.",
        sections: [
          { p: "This creates a moral dilemma: if the avatar is just a character in a game, its actions might seem to “not count”. But SL is not a game with a fixed story — it is a shared world of real people, real money and real feelings <cite>(Van Wyk, n.d.)</cite>." },
          { quote: "Unlike MMORPGs, residents in Second Life aren’t in a game … they inhabit a virtual world free of pre-determined goals or tasks, just like the real world.", cite: "Van Wyk, n.d." },
          { p: "If SL is “just like the real world”, then the same moral expectations should follow the person into it. The person behind the avatar remains the moral agent <cite>(Suler, 2004; Floridi, 2013)</cite>." }
        ],
        reflect: {
          q: "Is it fair to judge someone’s character by what their avatar does?",
          a: "Consider: the avatar’s choices are made by a person, affect other people, and reveal how that person behaves when they think there are no consequences — which is arguably a strong test of character."
        },
        refs: ["vanwyk", "suler", "floridi2013"]
      }
    },

    {
      id: "infoground", level: 2, color: "green",
      x: 1250, y: 150, w: 350,
      tag: "Theory",
      title: "An information ground (Fisher)",
      teaser: "People gather for one reason — and end up sharing information spontaneously.",
      detail: {
        kicker: "Level 2 · Theory",
        title: "Second Life as an information ground",
        lead: "An <em>information ground</em> is an environment temporarily created when people come together for a singular purpose, but from whose behaviour emerges a social atmosphere that fosters the spontaneous and serendipitous sharing of information <cite>(Fisher &amp; Naumer, 2006)</cite>.",
        sections: [
          { h: "Why SL fits the theory", list: [
            "Residents gather for one purpose — a concert, a class, a conference, a shop — and end up swapping tips, news and advice.",
            "Meetings, research, career exploration and teaching all happen in-world <cite>(Van Wyk, n.d.)</cite>.",
            "Information flows between people who may never meet physically, across many countries."
          ]},
          { h: "Link to small worlds (Chatman)", p: "Inside SL communities, members share customs and language and can form a <em>small world</em> where information is socially constructed within the group and outside information is rarely sought <cite>(Van Wyk, n.d.)</cite>. Rumours or harmful norms can spread unchallenged." },
          { h: "The ethical side", list: [
            "<strong>Accuracy</strong> — information shared casually is seldom checked.",
            "<strong>Consent</strong> — something said in a ‘public’ in-world space can be logged and repeated elsewhere.",
            "<strong>Trust</strong> — you often don’t know who is really behind the avatar giving advice."
          ]}
        ],
        reflect: {
          q: "What SL information grounds can you imagine, and what could go wrong in them?",
          a: "Examples: an in-world lecture hall, a dance club, a virtual shop, a newcomer help island. Risks include spreading misinformation, scams disguised as friendly advice, and chat logs being shared without consent."
        },
        refs: ["fisher", "vanwyk"]
      }
    },
    {
      id: "ig-cib", level: 3, color: "green", parent: "infoground",
      x: 1640, y: 175, w: 215,
      tag: "Implication",
      title: "Collaborative information behaviour",
      detail: {
        kicker: "Level 3 · Implication",
        title: "Implications for collaborative information behaviour",
        lead: "Social systems such as Second Life, Facebook and instant messaging are designed with social interaction as a primary function. Information grounds can form in any of them and can lead to <em>collaborative information behaviour</em> <cite>(Van Wyk, n.d.)</cite>.",
        sections: [
          { h: "To support it well, platforms need to address", list: [
            "<strong>Awareness</strong> — knowing who is present and what others are doing.",
            "<strong>Common ground</strong> — shared understanding and language.",
            "<strong>Information fragmentation</strong> — knowledge scattered across chats, notecards and regions."
          ]},
          { p: "Each of these has an ethical dimension: awareness tools can become surveillance tools, and common ground can harden into exclusion of outsiders." }
        ],
        refs: ["vanwyk", "fisher"]
      }
    },

    {
      id: "infosphere", level: 2, color: "violet",
      x: 1250, y: 560, w: 350,
      tag: "Theory",
      title: "Part of the infosphere — avatars as inforgs",
      teaser: "Information is created and shared here, and that puts privacy on the line.",
      detail: {
        kicker: "Level 2 · Theory",
        title: "Second Life in Floridi’s infosphere",
        lead: "Floridi defines the infosphere as the whole informational environment constituted by all informational entities, their properties, interactions, processes and mutual relations <cite>(Floridi, 2013)</cite>. Second Life falls squarely within it.",
        sections: [
          { quote: "“The whole informational environment constituted by all informational entities (thus including informational agents as well), their properties, interactions, processes and mutual relations.”", cite: "Floridi, 2013" },
          { h: "Avatars as inforgs", p: "An <em>inforg</em> is an informationally embodied organism — an entity made up of information that exists in the infosphere. SL avatars are a clear example: they are a <em>digital depiction of self</em>, and they keep the physical and digital realms closely connected <cite>(Van Wyk, n.d.)</cite>." },
          { p: "Avatars play a pivotal role in shaping social interaction in the metaverse by creating a sense of presence and individuality. Everything they do — chat, move, buy, build — creates new information that can be stored, shared and analysed." },
          { h: "Why this matters ethically", p: "For Floridi, anything that damages or degrades informational entities (“entropy”) is a moral harm. Harassing an avatar, corrupting a build or leaking a resident’s data harms the infosphere and the person it represents <cite>(Floridi, 2013)</cite>." }
        ],
        reflect: {
          q: "If you are an inforg in SL, which parts of “you” are stored as data?",
          a: "Your avatar’s appearance and name, chat logs, friends list, inventory, transaction history, locations visited and time spent online. Together they form a detailed profile — which is exactly why privacy is the key problem here."
        },
        refs: ["floridi2013", "floridi2013ch", "vanwyk"]
      }
    },
    {
      id: "sph-privacy", level: 3, color: "violet", parent: "infosphere",
      x: 1640, y: 520, w: 215,
      tag: "Ethics problem",
      title: "Privacy vs pseudonymity",
      detail: {
        kicker: "Level 3 · Ethics problem",
        title: "Privacy vs pseudonymity",
        lead: "Many residents prefer pseudonyms. The ethical concern is what happens if their real-world identity can be linked to their virtual one <cite>(Van Wyk, n.d.)</cite>.",
        sections: [
          { h: "The tension", list: [
            "Pseudonyms protect privacy and allow safe self-expression (benign disinhibition).",
            "The same anonymity enables identity deception, multiple accounts and griefing (toxic disinhibition).",
            "Linking the two identities (“doxxing”) can expose people to real-world harm."
          ]},
          { p: "Privacy, ownership and control are the three core ethics problems of the metaverse identified in the lecture <cite>(Van Wyk, n.d.)</cite>." }
        ],
        reflect: {
          q: "Should Second Life require real names?",
          a: "Real names might reduce toxic behaviour, but would remove the privacy and freedom that make benign disinhibition possible, and could put vulnerable users at risk. Most ethicists prefer accountable pseudonymity over forced real names."
        },
        refs: ["vanwyk", "suler"]
      }
    },
    {
      id: "sph-monitor", level: 3, color: "violet", parent: "infosphere",
      x: 1640, y: 660, w: 215,
      tag: "Ethics problem",
      title: "Monitoring & eavesdropping",
      detail: {
        kicker: "Level 3 · Ethics problem",
        title: "Monitoring and eavesdropping",
        lead: "Because every action in SL is information, it can be watched and recorded — by the platform, by scripts, or by other residents.",
        sections: [
          { list: [
            "Scripted objects can log chat or track who visits a parcel.",
            "Residents can record or screenshot private conversations.",
            "The platform holds full records of activity and transactions."
          ]},
          { p: "Botterbusch and Talab (2009) list breaches of privacy, monitoring and eavesdropping, and leaks of confidential information among the unethical behaviours found in Second Life." }
        ],
        refs: ["botterbusch"]
      }
    },

    {
      id: "ownership", level: 2, color: "amber",
      x: 720, y: 800, w: 390,
      tag: "Ethics problem",
      title: "Who owns what you create in-world?",
      teaser: "Ownership and control of data, content and virtual property.",
      detail: {
        kicker: "Level 2 · Ethics problem",
        title: "Ownership and control in Second Life",
        lead: "Second Life’s defining feature is that <em>users own the content they create</em>. That makes it a real economy, and raises some of the hardest questions in metaverse ethics.",
        sections: [
          { h: "Three core ethics problems", chips: ["Privacy", "Ownership", "Control"] },
          { p: "Residents build clothing, buildings, art and scripts and sell them for Linden dollars, which can be exchanged for real money. But the whole world runs on Linden Lab’s servers under Linden Lab’s terms — so who really owns and controls the data?" },
          { p: "Open the four branches below for the detail: intellectual property, virtual property, jurisdiction &amp; contracts, and oversight." }
        ],
        reflect: {
          q: "If Linden Lab shut Second Life down tomorrow, what would residents actually own?",
          a: "Possibly very little: their items exist only as data on Linden Lab’s servers. This gap between ‘owning’ content and ‘controlling’ the platform is the core ownership problem."
        },
        refs: ["vanwyk", "botterbusch"]
      }
    },
    {
      id: "own-ip", level: 3, color: "amber", parent: "ownership",
      x: 330, y: 1040, w: 240,
      tag: "Ownership",
      title: "Intellectual property rights",
      detail: {
        kicker: "Level 3 · Ownership",
        title: "Intellectual property rights",
        lead: "The metaverse involves the creation and distribution of a vast amount of digital content, such as digital art. Who owns the rights to this content, and how can it be protected <cite>(Van Wyk, n.d.)</cite>?",
        sections: [
          { list: [
            "Residents copy real-world brands, logos and textures into SL products.",
            "Original creations can be copied by “copybot” tools and resold.",
            "Botterbusch and Talab (2009) single out copyright infringement as a key ethical issue in SL, alongside other misconduct."
          ]}
        ],
        refs: ["vanwyk", "botterbusch"]
      }
    },
    {
      id: "own-property", level: 3, color: "amber", parent: "ownership",
      x: 600, y: 1040, w: 240,
      tag: "Ownership",
      title: "Virtual property & economy",
      detail: {
        kicker: "Level 3 · Ownership",
        title: "Virtual property rights",
        lead: "Individuals in virtual worlds have the right to own virtual property, including buildings, land and enterprises <cite>(Van Wyk, n.d.)</cite>.",
        sections: [
          { p: "In SL, residents buy land, run businesses and trade goods in a growing economy. Theft, fraud or vandalism of that property therefore causes real financial loss — which blurs the line between a ‘game’ loss and a real-world harm." }
        ],
        refs: ["vanwyk"]
      }
    },
    {
      id: "own-jurisdiction", level: 3, color: "amber", parent: "ownership",
      x: 870, y: 1040, w: 240,
      tag: "Control",
      title: "Jurisdiction & contracts",
      detail: {
        kicker: "Level 3 · Control",
        title: "Jurisdiction and contractual issues",
        lead: "When disputes involve virtual or intellectual property, it is hard to decide which laws apply, because the metaverse is spread across many nations and territories <cite>(Van Wyk, n.d.)</cite>.",
        sections: [
          { list: [
            "<strong>Jurisdiction</strong> — a seller in South Africa, a buyer in Brazil, servers in the USA: whose law governs?",
            "<strong>Contracts</strong> — can in-world agreements for the sale and transfer of goods actually be enforced?"
          ]},
          { p: "This links back to the <em>transcultural</em> nature of SL: residents bring very different legal and moral norms into one shared space." }
        ],
        refs: ["vanwyk"]
      }
    },
    {
      id: "own-oversight", level: 3, color: "amber", parent: "ownership",
      x: 1140, y: 1040, w: 240,
      tag: "Control",
      title: "Oversight & monitoring",
      detail: {
        kicker: "Level 3 · Control",
        title: "Oversight and monitoring",
        lead: "Who keeps order in a world built by its users? The lecture points to two mechanisms <cite>(Van Wyk, n.d.)</cite>:",
        sections: [
          { list: [
            "<strong>Film and game rating boards</strong> — external classification of content, like the video game rating system.",
            "<strong>End-user agreements</strong> — the platform’s terms of service, which define what residents may do and what Linden Lab may do with their data."
          ]},
          { p: "The ethical tension: more oversight can reduce griefing and crime, but also increases monitoring — which brings us back to privacy." }
        ],
        reflect: {
          q: "Have you ever read the end-user agreement of a game you play?",
          a: "Most people haven’t, yet it usually decides who owns your content, what data is collected, and how disputes are settled. That makes it one of the most important — and least noticed — ethical documents in any virtual world."
        },
        refs: ["vanwyk"]
      }
    }
  ],

  edges: [
    { from: "root", to: "question", label: "click to enter", fs: "right", ts: "left" },
    { from: "root", to: "domains", label: "analysed through", fs: "top", ts: "bottom" },
    { from: "question", to: "disinhibition", label: "shapes behaviour via", fs: "top", ts: "bottom" },
    { from: "disinhibition", to: "dis-grief", fs: "right", ts: "left" },
    { from: "disinhibition", to: "dis-virtue", fs: "right", ts: "left" },
    { from: "question", to: "infoground", label: "functions as", fs: "right", ts: "left" },
    { from: "infoground", to: "ig-cib", fs: "right", ts: "left" },
    { from: "infoground", to: "infosphere", label: "forms part of the", fs: "bottom", ts: "top" },
    { from: "infosphere", to: "sph-privacy", fs: "right", ts: "left" },
    { from: "infosphere", to: "sph-monitor", fs: "right", ts: "left" },
    { from: "question", to: "ownership", label: "raises questions of", fs: "bottom", ts: "top" },
    { from: "ownership", to: "own-ip", fs: "bottom", ts: "top" },
    { from: "ownership", to: "own-property", fs: "bottom", ts: "top" },
    { from: "ownership", to: "own-jurisdiction", fs: "bottom", ts: "top" },
    { from: "ownership", to: "own-oversight", fs: "bottom", ts: "top" }
  ],

  tour: [
    "question", "root", "domains",
    "disinhibition", "dis-grief", "dis-virtue",
    "infoground", "ig-cib",
    "infosphere", "sph-privacy", "sph-monitor",
    "ownership", "own-ip", "own-property", "own-jurisdiction", "own-oversight"
  ]
});
