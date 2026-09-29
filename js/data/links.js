/* =========================================================
   Cross-links between questions.
   They show up in the detail panel as "Across the map" buttons,
   so readers can jump between related ideas in different questions.
   Format: "branchId.nodeId"
   ========================================================= */
MindMap.registerCrossLinks([
  { a: "q3.infosphere",    b: "q4.datafication",  label: "Floridi's infosphere" },
  { a: "q3.sph-privacy",   b: "q2.realnames",     label: "Pseudonyms vs real names" },
  { a: "q3.disinhibition", b: "q5.hub",           label: "Behaviour behind an avatar" },
  { a: "q3.root",          b: "q1.examples",      label: "Second Life as a virtual world" },
  { a: "q2.metaverse-id",  b: "q3.infosphere",    label: "Avatars as inforgs" },
  { a: "q4.banality",      b: "q5.hub",           label: "Virtual violence" },
  { a: "q1.economy",       b: "q3.ownership",     label: "Virtual property" },
  { a: "q3.dis-virtue",    b: "q5.virtue",        label: "Virtue in virtual worlds" },
  { a: "q1.hub",           b: "q4.hub",           label: "From the Metaverse to its ethics" },
  { a: "q2.footprint",     b: "q3.sph-monitor",   label: "Data trails & monitoring" }
]);
