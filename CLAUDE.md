# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static profile site for Visanu Mongsaithong, built and deployed. Plain HTML +
CSS + ~40 lines of vanilla JS, no build step, served from the repo root by Vercel.

**Live:** https://visanu-dev.vercel.app · Vercel project `visanu-dev`, auto-deploys on push
to `main`.

The visual world was replaced once. The original "Inspection Record" build — signal-red hold
tag on galvanized steel, Archivo + Courier Prime — is gone. Anything describing punched
eyelets, struck stamps, clip-path shoulders, or a tag-red contrast constraint is stale; the
current world is white with one drenched ultramarine field.

## Commands

There is no build, no test suite, and no package.json — do not invent one.

```bash
# Serve locally (any static server works)
python -m http.server 8899 --bind 127.0.0.1

# Design-quality gate. MUST exit 0. Run with node, not bun.
node ~/.claude/skills/impeccable/scripts/detect.mjs .

# Deploy (auto on push to main; manual if needed)
vercel --prod

# Date-leak check — the one grep that must be run before shipping
grep -oE '[0-9]{4}' index.html | sort -u
```

The only legitimate four-digit hits are the phone number (`1429`, `9241`, `1850`), an
`og:image` pixel dimension (`1200`), hex values in the direction contract (`1017` from
`#0C1017`), and the concept-seed key `9103` in that contract's FORM line. Anything else is a
date leak.

### Screenshots, print check, and the OG card

There is no `render-og.mjs`; Playwright's CLI does all three and needs no install step.
Serve over HTTP first — self-hosted fonts do not load over `file://`.

```bash
# Screenshots
npx playwright screenshot --viewport-size="1440,1000" --full-page http://127.0.0.1:8899/ desktop.png
npx playwright screenshot --viewport-size="390,844"  --full-page http://127.0.0.1:8899/ mobile.png

# Print deliverable — currently 5 pages
npx playwright pdf http://127.0.0.1:8899/ print.pdf

# OG card, 1200x630, composited from the page's own tokens
npx playwright screenshot --viewport-size="1200,630" \
  http://127.0.0.1:8899/tools/og-card.html public/assets/og-image-v2.png
```

## Authoritative files, in order

1. **`prompt.md`** — the build brief. Content, positioning, hard constraints, ship checklist.
2. **`goal.md`** — build sequencing and deployment. Wins on infrastructure; `prompt.md` wins
   on content and design.
3. **`PRODUCT.md`** — durable product truth. Confirmed by the owner, not inferred.
4. **`DESIGN.md`** — the visual system as built. The detector reads its type ramp and palette,
   so a token added to `styles.css` without a matching DESIGN.md entry will fail the gate.
5. **`document.md`** — drafted GitHub profile README. Content source, not the page.

## Hard constraints — these fail the deliverable, not just the lint

- **No dates anywhere** in rendered output.
- **No fabricated metrics.** The owner confirmed no real figures exist for the three
  `[METRIC: …]` slots, so those sentences render numberless. This is a settled decision.
- **No fabricated URLs.** LinkedIn and the RAG paper are deliberately absent because no URL
  was supplied. Do not guess them, and do not wire a work record to a repo without evidence
  that repo is that artifact.
- **No internal identifiers** — no account numbers, VPC/KMS IDs, endpoints, ticket refs,
  internal namespaces, or coworker names.
- **No dead links.** There are currently zero `href="#"` in the page; keep it that way.

## Design system facts that break things if forgotten

- **The split name is the signature, and `--name-line` is what keeps it exact.**
  `.lede::before` starts at `calc(var(--lede-top) + var(--name-line))`, which is precisely the
  boundary between the name's two line boxes — so `Visanu` sits ink-on-white above the field
  edge and `Mongsaithong` white-on-field below it. Change `--name-lh`, `--d-name` or the
  lede's top padding without re-deriving that expression and the edge drifts off the line,
  which reads as a misaligned band rather than a split word.
- **`white-space: nowrap` on `.name` is load-bearing.** It guarantees exactly two lines, which
  is what makes the field edge's arithmetic exact at every width.
- **The two lines are `<span>`s carrying solid colours, not a gradient.** An earlier pass
  painted the split through the glyph bodies so the edge severed the letters themselves.
  It rendered well, but it tripped the detector's `gradient-text` rule and the owner chose
  solid colour over a suppression. Do not reintroduce it without that decision being retaken.
- **Only white goes on the field.** White on `#1B2ECF` is 9.0:1, so there is no tightrope
  here — but ink on the field is 2.1:1. There is no second foreground on ultramarine.
- **One drenched region, and only one.** The user pinned this. Colour survives outside the
  hero field in exactly three places: link colour, the 3px section tick, and one traced
  stroke per figure. A second full-bleed coloured band breaks the pin. The sign-off closes
  on a 3px **ink** edge instead, deliberately, and `.contact` carries no tick.
- **No component takes a coloured border down one side.** `.rec__so` had one and it was
  removed: the detector calls a thick coloured side-border the most recognizable tell of a
  generated interface, which is the exact failure the owner asked this build to avoid.
  In-prose emphasis comes from scale, weight and space.
- **Every font size is a token.** `--t-3xs` … `--t-lg` for fixed steps, `--d-name`,
  `--d-section`, `--d-record`, `--d-record-lead`, `--d-title`, `--d-lead`, `--d-body` for
  fluid ones. A literal `font-size` will trip `design-system-font-size` and fail the gate.
- **The print ramp is re-pointed, not inherited.** The screen steps are `vw`-fluid and paper
  has no viewport, so `@media print` re-points every type and space token to `pt`. Skip that
  and the document sets to ten pages instead of five. Any new component ships with its print
  behaviour in the same pass.
- **The role lens dims, never filters.** Its target selector is scoped to
  `.rec, .role, .caps__cluster` — a bare `[data-lens]` sweep also matches the lens buttons and
  will dim the reader's way back to "Show all". `.is-dimmed` is 0.55, not lower: dimmed copy
  still has to be readable, because nothing is ever removed from the DOM. Know the cost —
  at 0.55, ink body copy composites to ~4.2:1 and `--ink-2` secondary copy to ~2.8:1. That
  is acceptable only because the state is user-initiated and reversible. If the lens ever
  becomes default-on, this stops being acceptable and the mechanism has to change.
- **The page must read in full with JavaScript off.** Lens controls ship `hidden` and JS
  reveals them; the email anchor has no `href` until JS assembles the `mailto:`.
- **Two families only.** Bricolage Grotesque (display) and Public Sans (body/UI), self-hosted
  latin variable subsets under OFL 1.1. The shipped Bricolage subset carries `opsz` and
  `wght` only — there is no `wdth` axis in the file, so do not write `font-stretch` or a
  `'wdth'` variation and expect it to do anything.
- `vercel.json` pins `outputDirectory` to `.`. Without it, Vercel's zero-config static
  detection treats `public/` as the output root and stops serving `index.html`.
- `/public/assets/*` is cached `immutable` — **a changed asset needs a changed filename.**
  That is why the card is `og-image-v2.png`.

## Known-open work

- **The page ships zero raster imagery** beyond the 1200×630 Open Graph card; the favicon is
  SVG. The world is carried entirely by fill, geometry and type. The previous build's two
  Higgsfield-generated grain textures were dropped with the world they belonged to — grain
  was load-bearing there only because white-on-red cleared 4.5:1 by 0.09, and that constraint
  no longer exists. Image is an addition here, never a rescue.
- **The six record figures are authored SVG**, not generated, and re-inked into the new
  palette via the `.plate` stroke classes. Generation was tried and rejected on evidence: the
  free-plan model could not hold the palette and inserted stray lettering into work whose
  whole argument is that nothing is fabricated. Anything with type in it is authored.
- **Two copy strings are world-bound leftovers.** The lens sub-line "Stamp the record and the
  matching work comes forward." refers to a stamp that no longer exists anywhere in the
  design, and "Sign off" is a heading inherited from the tag world. Both survive because the
  owner required copy verbatim. Raise them before rewriting either.
- LinkedIn URL, RAG paper URL, two resume PDFs, and per-record source links — all pending
  owner input. Tracked in README.md under "Fill these in".
- The print stylesheet produces 5 clean pages, not the one-pager `prompt.md` §8 asks for. A
  true one-pager is not reachable without dropping content the brief also requires.

## Working style for this repo

Commit messages are part of the deliverable — the repo is itself a work sample someone may
read. Explain why, not what. Never `wip`.
