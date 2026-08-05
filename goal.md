# /goal — Build and deploy the profile landing page

**Goal:** ship a single-page personal profile site for Visanu Mongsaithong that gets him hired as an AI/ML Engineer, Cloud Solution Architect, or Senior Software Engineer — designed with Impeccable, imagery generated with Higgsfield, deployed as a static site on Vercel with a live public URL.

**Definition of done:** a live Vercel URL loads the finished page, `npx impeccable detect src/` exits 0, the ship checklist in `prompt.md` §10 passes, and the repo redeploys on every push to `main`.

---

## Read this first

`./prompt.md` is the full brief. Read it end to end before writing any code. It contains the positioning, all content, the design constraints, the asset list, and the ship checklist. **This file does not repeat that content — it sequences the work and adds deployment.** Where the two disagree, `prompt.md` wins on content and design; this file wins on build order and infrastructure.

Non-negotiables carried up from `prompt.md` §1, because they are the ones most likely to get lost mid-build:

- **No dates anywhere.** No years, no ranges, no "N+ years." Grep the built output for four-digit numbers before shipping.
- **No fabricated metrics.** `[METRIC: …]` placeholders render numberless unless the owner supplies a real figure.
- **No internal identifiers** — no account numbers, VPC/subnet/KMS IDs, endpoints, ticket refs, internal namespaces, or coworker names.
- **No dead links.** Unfilled `[LINK: …]` rows are omitted, then listed in the README.

---

## Phase 1 — Repo and deploy skeleton (do this first, before design)

Get a live URL on day one. A deployed empty page beats a beautiful local one, and it makes every later phase verifiable in the real environment.

1. `git init`, create a public GitHub repo under `mvisanu`. Suggested name: `visanu-dev` or `profile-site`.
2. Scaffold: `index.html` (placeholder h1), `styles.css`, `/public/assets/`, `.gitignore`, `README.md`.
3. Add `vercel.json` at the repo root:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

Notes on this config:
- A plain HTML/CSS/JS site needs **no** `buildCommand` or `outputDirectory` — Vercel serves the repo root as static by default. Do not invent a build step that isn't there.
- `cleanUrls: true` serves `/index.html` at `/`. Since this is a single page, no rewrites are needed.
- The long cache header on `/assets/*` matters here: the Higgsfield imagery is the heaviest thing on the page. Asset filenames must change when content changes (immutable caching means stale files stick).
- If the signature element ends up requiring Next.js, Vercel auto-detects the framework and no config change is needed — but prefer plain HTML/CSS/JS per `prompt.md` §8.

4. Deploy — either route works:
   - **Dashboard:** vercel.com → Add New → Project → import the GitHub repo → Deploy. Framework preset: **Other**. Root directory: `./`.
   - **CLI:** `npm i -g vercel`, then `vercel` (preview) and `vercel --prod` (production) from the repo root.

   Confirm the placeholder page loads at the `*.vercel.app` URL.
5. Verify auto-deploy is wired: pushes to `main` deploy to production, and every pull request gets its own preview URL. **Preview URLs are the main reason this project is on Vercel** — use them in Phase 4 to compare design directions side by side rather than deciding from localhost.
6. Put the live URL at the top of the README, and report it back before moving on.

**Notes for the owner:**
- Vercel Hobby is free for personal, non-commercial projects — which a job-search portfolio is. If the site ever takes paid client work, that requires Pro.
- Hobby includes 100 GB of data transfer per month. Recruiter traffic won't approach it.
- A custom domain is strongly recommended before sharing the link widely — a personal domain reads better on a resume than `*.vercel.app`. Vercel supports custom domains on Hobby; the owner adds the domain and DNS records.
- Render stays in play for the owner's other projects (long-running services, cron, Postgres) — it just isn't the right host for a static page.

---

## Phase 2 — Design context

Follow `prompt.md` §0 exactly:

1. `npx impeccable install`, then `/impeccable init` inside the agent.
2. Answer the init prompts with the audience, product lane, voice, and anti-references pre-written in `prompt.md` §0. Do not answer from defaults.
3. Select a world matching the precision-instrumentation vernacular in §6, then plan to diverge from it.
4. Produce the token system (color / type / layout / signature) with ASCII wireframes. Critique it against §6's "do not ship" list, the anti-references, and the 8-second skim path. Revise and state what changed.
5. Write the result into `DESIGN.md`. Commit `PRODUCT.md` and `DESIGN.md`.

**Stop here and show me the design plan before building.** One round of feedback at this point is worth ten later.

---

## Phase 3 — Assets

Per `prompt.md` §7: install and authenticate the Higgsfield CLI, then generate the asset list using palette hex values pulled from `DESIGN.md`. Batch the six project visuals in one pass for consistency. Honor the blanket negatives — no text, no logos, no identifiable people, no real aircraft liveries. Do not generate a synthetic portrait.

Commit assets to the repo (they're small and static; no CDN needed at this size).

---

## Phase 4 — Build

Build with `/impeccable craft`, section by section, in this order — the order matters because the first three carry the hiring argument:

1. Hero + credential strip + contact CTA (the 8-second skim path, `prompt.md` §2)
2. Selected work cards, `prompt.md` §5 — including the "so what" line on each
3. Proof-of-work links strip, §4
4. Experience, §3
5. Capabilities, §6
6. Education, certifications, footer
7. Role-lens control (§2) as progressive enhancement — the page must read perfectly with JS off
8. Meta layer per §8: title, description, Open Graph + `og-image.png`, JSON-LD `Person`, print stylesheet

Use real content from `prompt.md` §3–§5 throughout. Never lorem ipsum — layouts that look good on placeholder text fall apart on real copy.

Use `/impeccable live` for the signature element and the role-lens control only. Everything else gets the command dials.

---

## Phase 5 — Review and ship

1. `/impeccable audit` → `/impeccable critique` → `/impeccable distill` → `/impeccable polish`. Address critique findings; don't just log them.
2. `npx impeccable detect src/` must exit 0. Run with **node**, not bun.
3. Lighthouse: performance ≥ 90, accessibility ≥ 95.
4. Screenshot pass at 360px, 768px, and desktop — once per role-lens state.
5. Grep the built output for four-digit numbers. Any hit is a date leak unless it's a hex value or a pixel size.
6. Run the full `prompt.md` §10 ship checklist.
7. Open a PR, review the preview URL, then merge to `main`. Confirm the production deploy and verify the live URL.
8. Update `README.md` with: the live URL, how to regenerate assets via the Higgsfield CLI, how the Vercel deploy and preview URLs work, and a **"fill these in"** checklist naming every remaining `[LINK: …]`, `[METRIC: …]`, and `[AVAILABILITY: …]` placeholder.

---

## How to work

- Work autonomously through each phase, but **stop after Phase 1 (report the live URL) and after Phase 2 (show the design plan)** for confirmation.
- Commit at meaningful checkpoints with real messages, not `wip`. This repo is itself a work sample — someone evaluating him may read its history.
- If a decision isn't covered by `prompt.md`, make the call that best serves "a skeptical principal engineer decides in under a minute whether to reach out," and note the decision in the README.
- If something in `prompt.md` turns out to be wrong or unbuildable, say so rather than silently working around it.