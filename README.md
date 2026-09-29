# Information Ethics in the Metaverse — interactive mind map

INY 715 Assignment 2. Plain HTML, CSS and JavaScript with no build step and no libraries.

## Run it
- Double-click `index.html`, **or** (better, needed for YouTube) host the folder on GitHub Pages or Netlify.
- `index.html?dev` shows the team checklist and media slots.
- `index.html?nointro` skips the title card.
- Keys: `1`–`5` jump to a question, `0` = overview, `Esc` = back, `←`/`→` inside a panel.

## Folder structure
```
index.html
css/
  tokens.css      colours (pastel palette), fonts, background
  layout.css      top bar, dock, minimap, drawer, responsive
  map.css         clusters, nodes, lines, ⊕ buttons, zoom levels
  panel.css       the pop-up panel and its blocks (hook, argument, question…)
  media.css       images, YouTube, audio, compare, dilemma, chart
  cinematic.css   title card, letterbox bars, vignette, transitions
js/
  core/namespace.js   shared registry (loads first)
  data/config.js      layout, camera, intro, sound settings
  data/center.js      the centre node
  data/team.js        group members & roles  ← EDIT NAMES
  data/links.js       "Across the map" links between questions
  branches/q1-…q5-…   ONE FILE PER QUESTION (content only)
  branches/_template.js  copy this to start a new node / question
  core/layout.js      places clusters, merges refs/edges/tour
  core/render.js      draws nodes + lines, node-by-node build
  core/camera.js      pan / zoom / pinch + film-style flights
  core/media.js       all multimedia types
  core/panel.js       the pop-up panel
  core/sound.js       soft synthesised UI sounds (off by default)
  core/intro.js       title card + opening camera move
  core/minimap.js     corner overview
  core/devtools.js    ?dev checklist
  app.js              boots everything, dock, drawer, keys
images/  audio/
```

## Who edits what
| Person | Files |
|---|---|
| Content owners | their own `js/branches/qX-….js` |
| B (graphics, animation, sound) | `css/cinematic.css`, `css/map.css`, `css/tokens.css`, `js/core/intro.js`, `js/core/sound.js`, `config.js → camera / intro / sounds` |
| C (multimedia, references, QA) | `detail.media` + `refs` in the branch files, `images/`, `audio/`, `data/team.js`. See **MEDIA-GUIDE.md** |

## Node structure (every node)
`hook` → `argument` → optional `sections` → `media` → `reflect` (Think about it) → `refs`.

## Moving things
- A node: change its `x`, `y`, `w` (relative to its own question's area).
- A whole question: `data/config.js → layout.clusters.qX.angle` (or `dx` / `dy`).
- A question's area size: `size: { w, h }` at the top of its branch file.
