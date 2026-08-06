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
| **Higgsfield imagery** | `public/assets/` | Not generated. See below. |

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

## Regenerating imagery

Two of `prompt.md` §7's assets are Higgsfield-generated and in place:
`texture-substrate.webp` (page ground) and `texture-tagstock.webp` (the red tag panels).
Both are blended over the token colours with `soft-light` rather than replacing them —
that is load-bearing, because the generated red is lighter than `#D93A1E` and white body
text clears 4.5:1 on that red by only 0.09.

**Deviation from §7, owner-approved:** the six project-card figures are *authored SVG*, not
generated. Across four test generations the available free-plan model rendered pure
`#FF0000` instead of the palette red, defaulted to centred starbursts regardless of
instruction, and inserted stray numerals despite the blanket "no lettering" negative. The
models that accept a palette reference image (`seedream_v4_5`) require a paid plan. Drafted
linework is native to SVG, so the plates are exactly on-palette, carry no stray text, and
each one diagrams that project's actual mechanism. They live inline in `index.html` and are
styled by the `.plate` classes in `styles.css`.

```bash
higgsfield auth login          # browser OAuth; must be done by the account owner
higgsfield generate --help
```

Rules that matter when generating:

- Pull palette hex values from `DESIGN.md`, not from memory, and name them in every prompt.
- Batch `work-01` … `work-06` in a single pass so lighting and palette stay consistent.
- Generate large, then downscale. Never upscale.
- Blanket negatives: no text or lettering, no logos, no identifiable people, no real
  aircraft liveries, no stock-photo staging, no glossy 3D-render clichés.
- **Never generate a synthetic face.** A portrait requires owner-supplied source photos via
  the `soul` skill; otherwise the page ships without one.
- Because `/public/assets/*` is served `immutable`, **a changed asset needs a changed
  filename** or browsers will keep the stale one.

`public/assets/og-image.png` is composited in build from the page's own tokens rather than
generated. Its source is `tools/og-card.html`. Regenerate after any change to the visual
world:

```bash
npm i playwright                                # only dependency, only for this script
python -m http.server 8899 --bind 127.0.0.1     # or any static server
node tools/render-og.mjs http://127.0.0.1:8899/tools/og-card.html public/assets/og-image.png
```

Serve it over HTTP rather than opening the file directly — the self-hosted fonts will not
load over `file://`.

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

Lighthouse against the live deploy: **performance 98, accessibility 100, best practices 100,
SEO 100.** FCP 1.0s, LCP 1.6s, CLS 0. `npx impeccable detect` returns zero findings.

Fonts (Archivo variable, Courier Prime) are self-hosted latin subsets under
`public/assets/fonts/`, both SIL Open Font License 1.1. They were moved off Google Fonts
because the third-party stylesheet was render-blocking and cost ~2.3s.

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
- On the tag red, only white clears 4.5:1 for small text. Secondary text there separates by
  scale and tracking, never by tone.
