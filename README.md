# Visanu Mongsaithong — profile landing page

Single-page static profile site. Plain HTML + CSS + minimal vanilla JS, deployed on Vercel.

**Live URL:** https://visanu-dev.vercel.app

## Deploys

Vercel project `visanu-dev`, connected to this GitHub repo. Pushes to `main` deploy to
production; every pull request gets its own preview URL. No build step — Vercel serves the
repo root as static.

`vercel.json` pins `outputDirectory` to `.`. This is load-bearing: Vercel's zero-config
static detection treats an existing `public/` directory as the output root, which would
stop `index.html` from being served. The `Cache-Control` header targets
`/public/assets/(.*)` to match where the imagery actually lives. Because that cache is
`immutable`, **asset filenames must change when their content changes.**

## Repo layout

| Path | What it is |
| --- | --- |
| `index.html` · `styles.css` | The page. One stylesheet, CSS custom properties for the token system. |
| `public/assets/` | Higgsfield-generated imagery. |
| `prompt.md` | The full build brief — positioning, content, design constraints, ship checklist. |
| `goal.md` | Build sequencing and deployment. |
| `DESIGN.md` · `PRODUCT.md` | Impeccable design context. DESIGN.md is the source of truth for tokens. |
| `CLAUDE.md` | Guidance for Claude Code working in this repo. |

## Status

Phase 1 (deploy skeleton) in progress. The designed page has not been built yet.

## Fill these in

Tracked in full once the page is built. Open placeholders so far, from `prompt.md`:

- `[LINK: paper — arXiv / IEEE / PDF]` — RAG vs. GraphRAG paper. **The #1 conversion lever on the page.**
- `[LINK: live demo]` — NextGen Trading
- `[LINK: linkedin.com/in/…]`
- `[LINK]` — Google Scholar / ORCID, only if it exists
- `[METRIC: …]` ×3 in the experience section — render numberless until real figures are supplied
- `[AVAILABILITY: …]` — "open to remote / relocation", only if confirmed
- Two resume PDFs (AI/ML Engineer · Senior Software Engineer / Platform) — currently stub anchors
