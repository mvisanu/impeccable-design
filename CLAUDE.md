# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static profile site for Visanu Mongsaithong, built and deployed. Plain HTML +
CSS + ~40 lines of vanilla JS, no build step, served from the repo root by Vercel.

**Live:** https://visanu-dev.vercel.app · Vercel project `visanu-dev`, auto-deploys on push
to `main`.

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
`og:image` pixel dimension (`1200`), and hex values. Anything else is a date leak.

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

- **Contrast on the tag red is a hard constraint, not taste.** On `#D93A1E` only pure white
  clears 4.5:1 for small text (4.59:1). A tint of the hue tops out at ~3.44:1 and will fail
  the accessibility audit. Slate `#16222B` clears 3:1, so it is valid **only** at display
  sizes — that is why the name is slate and body copy on red is white. Secondary text on the
  tag separates by scale and tracking, never by tone.
- **Every font size is a token.** `--t-3xs` … `--t-lg` for fixed steps, `--d-name`,
  `--d-signoff`, `--d-section`, `--d-record`, `--d-lead`, `--d-body` for fluid ones. A literal
  `font-size` will trip `design-system-font-size` and fail the gate.
- **The role lens dims, never filters.** Its target selector is scoped to
  `.rec, .role, .caps__cluster` — a bare `[data-lens]` sweep also matches the lens buttons and
  will dim the reader's way back to "Show all".
- **The page must read in full with JavaScript off.** Lens controls ship `hidden` and JS
  reveals them; the email anchor has no `href` until JS assembles the `mailto:`.
- **Tag geometry repeats at three scales** via `clip-path`: hero shoulder, each work record's
  shoulder, section headings' stock edge, and the sign-off's opposite-corner notch.
- `vercel.json` pins `outputDirectory` to `.`. Without it, Vercel's zero-config static
  detection treats `public/` as the output root and stops serving `index.html`.
- `/public/assets/*` is cached `immutable` — **a changed asset needs a changed filename.**

## Known-open work

- **Imagery is partly generated, partly authored.** The two stock-grain textures are
  Higgsfield-generated; the six record plates are authored SVG, with the owner's agreement,
  because the free-plan model could not hold the palette and inserted stray lettering
  (recorded in README and DESIGN.md). `og-image.png` is composited in build from page tokens.
  Textures blend `soft-light` over the token colour and must never replace it — the computed
  tag background has to stay `rgb(217, 58, 30)` or the contrast audit fails.
  Higgsfield is authenticated; the account is on the free plan with limited credits, and
  `seedream_v4_5`/`nano_banana` (which accept palette reference images) need a paid plan.
- LinkedIn URL, RAG paper URL, two resume PDFs, and per-record source links — all pending
  owner input. Tracked in README.md under "Fill these in".
- The print stylesheet produces 4 clean pages, not the one-pager `prompt.md` §8 asks for. A
  true one-pager is not reachable without dropping content the brief also requires.

## Working style for this repo

Commit messages are part of the deliverable — the repo is itself a work sample someone may
read. Explain why, not what. Never `wip`.
