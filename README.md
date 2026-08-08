# Visanu Mongsaithong — profile landing page

Single-page static profile site. Plain HTML, CSS, and ~40 lines of vanilla JS. No build step.

**Live:** https://visanu-dev.vercel.app

## Fill these in

Everything below is deliberately absent rather than guessed. The brief forbids fabricated
URLs and metrics, so each of these is a real gap only the owner can close.

**Highest value first — the "Verify it" strip is the single biggest conversion lever on the page.**

| What | Where it goes | Status |
| --- | --- | --- |
| **RAG vs. GraphRAG paper** | New row in the `.verify__list` in `index.html` | Missing. The strongest artifact on the page. A URL, or drop the PDF in `public/assets/` and link it. |
| **LinkedIn URL** | New row in `.verify__list`, and add to `sameAs` in the JSON-LD block | Missing. Not listed on the GitHub profile, so it could not be sourced. |
| **Two resume PDFs** | Replace the two `<p class="pending">` elements in the sign-off | Currently render as "On request, by email" placeholders, not as links. |
| **Per-record source links** | Inside each `<article class="rec">` | None wired. See "Open question" below. |
| **Three `[METRIC: …]` figures** | Experience bullets in `index.html` | Owner confirmed no real figures exist. Sentences render numberless by design — do not add numbers that cannot survive a reference check. |
| **Photography or portrait** | `public/assets/` | None. The page carries its world on fill, geometry and type. A portrait needs owner-supplied source photos; no synthetic face will be generated. |

**Also worth doing, outside this repo:** `prompt.md` §4 notes the GitHub profile needs its
pinned set curated before that link converts — pin the substantial work, give every pin a
one-line description, unpin forks and empty-description repos. `nextgenai-rag` currently has
no description at all.

### Open question for the owner

No work record links to a source, because no mapping could be verified. `document.md`
describes `nextgenai-rag` as "RAG pipeline behind my trading research app", which is not
obviously the same artifact as the aerospace/clinical comparative study in work record 1.
Wiring them together would assert something the evidence does not support. Confirm the
mapping and the links go in.

## Imagery

The page ships **no raster imagery** except the Open Graph card. The favicon is SVG and the
world is carried entirely by fill, geometry and type. Image is an addition here, never a
rescue.

The six project figures are *authored SVG*, not generated, and live inline in `index.html`
styled by the `.plate` classes in `styles.css`. Generation was tried and rejected on
evidence: across four test passes the available free-plan model would not hold the palette,
defaulted to centred starbursts regardless of instruction, and inserted stray numerals
despite a blanket "no lettering" negative — unacceptable in work whose whole argument is
that nothing on the page is fabricated. The models that accept a palette reference image
(`seedream_v4_5`, `nano_banana`) require a paid plan. Anything with type in it is authored.

Each plate uses four stroke classes and no others: `.ink` (1.4px near-black structure),
`.hair` (1px guides and scales), `.mark`/`.markf` (2px ultramarine — the one thing being
traced), `.ok`/`.okf` (a verified state). Uniform stroke weight across the series, a 240×160
viewBox, and a `<title>` carrying real alt text.

### Regenerating the Open Graph card

`public/assets/og-image-v3.png` is composited from the page's own tokens rather than
generated. Its source is `tools/og-card.html`, which links the site's real `styles.css` and
reuses its real classes, so the card cannot drift from the page. It is a fixed 1200×630
raster, so the whole rem ramp is scaled from the root (`--og-canvas-scale`) instead of any
individual size being overridden.

```bash
python -m http.server 8899 --bind 127.0.0.1     # or any static server
npx playwright screenshot --viewport-size="1200,630" \
  http://127.0.0.1:8899/tools/og-card.html public/assets/og-image-v3.png
```

Serve it over HTTP rather than opening the file directly — the self-hosted fonts will not
load over `file://`. Because `/public/assets/*` is served `immutable`, **a changed asset
needs a changed filename** or browsers will keep the stale one; that is why the card carries
a `-v3` suffix. Bump it again on the next change and update both `og:image` and
`twitter:image` in `index.html`.

`tools/og-card.html` links the site's own `styles.css` and reuses its real classes rather
than restating the world in parallel values, so the card cannot drift from the page. It is a
fixed 1200×630 raster, so the whole rem ramp is scaled from the root
(`--og-canvas-scale`) instead of any individual size being overridden.

## Deploys

Vercel project `visanu-dev`, connected to this repo. Pushes to `main` deploy to production;
every pull request gets its own preview URL.

`vercel.json` pins `outputDirectory` to `.`. This is load-bearing: Vercel's zero-config
static detection treats an existing `public/` directory as the output root, which would stop
`index.html` from being served at all. The `Cache-Control` header targets
`/public/assets/(.*)` to match where the imagery actually lives; the `/assets/(.*)` pattern
never matched anything.

## Measured state

The design gate (`impeccable detect`) returns **zero findings**. The print stylesheet
produces **5 pages**. Zero dead links, zero date leaks.

Lighthouse 13.4.1 against the live deploy:

| | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Mobile | 99 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Mobile FCP 0.9s · LCP 1.5s · CLS 0 · TBT 0ms · Speed Index 3.6s.
Desktop FCP 0.3s · LCP 0.4s · CLS 0 · TBT 0ms · Speed Index 0.4s.

Speed Index is the only soft number, and it is the display face swapping in above the fold.
With TBT and CLS both at zero it is not worth trading the type for.

These numbers were measured before the display face changed. That swap cut the font payload
from ~101KB to ~82KB and touched no other asset, so they should hold or improve; re-measure
on the next deploy to be sure.

Fonts (Anybody variable for display, Public Sans variable for body and UI) are self-hosted
latin subsets under `public/assets/fonts/`, both SIL Open Font License 1.1, both preloaded.
They are self-hosted rather than pulled from Google Fonts because the third-party stylesheet
was render-blocking and cost ~2.3s. Anybody carries `wdth` 50–150 and `wght` 100–900 in
55.6KB; the width axis is driven only at the small end, where opening the face out keeps
tracked uppercase legible.

## Repo layout

| Path | What it is |
| --- | --- |
| `index.html` · `styles.css` · `main.js` | The page. The direction contract is an HTML comment at the top of `<body>`. |
| `public/assets/` | Imagery and self-hosted fonts. |
| `PRODUCT.md` | Durable product truth — users, positioning, hard constraints, evidence on hand. |
| `DESIGN.md` | The visual system as built. Source of truth for tokens. |
| `prompt.md` · `goal.md` | The original brief and build sequencing. |
| `CLAUDE.md` | Guidance for Claude Code working in this repo. |

## Constraints that must survive future edits

- **No dates anywhere.** Grep the output for four-digit numbers before shipping; the only
  legitimate hits are the phone number, an `og:image` pixel dimension, and hex values.
- **No invented metrics** and **no invented URLs.**
- The role lens dims, never filters, and the page must read in full with JavaScript off.
- **One drenched region.** White page, one full-bleed ultramarine field opening the document.
  Outside it, colour survives only as link colour, the 3px section tick, and one traced
  stroke per figure. A second full-bleed coloured band breaks the design.
- Only white goes on the field. White on `#1B2ECF` is 9.0:1; ink on it is 2.1:1. There is no
  second foreground on ultramarine.
- No component takes a thick coloured border down one side — it is the most recognizable
  tell of a generated interface. In-prose emphasis comes from scale, weight and space.
