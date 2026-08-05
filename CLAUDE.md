# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository state

Pre-implementation. The repo contains no source code and no commits yet — only two content/spec documents:

- **`prompt.md`** — the authoritative build brief for the deliverable. Read it in full before writing any code; it is the spec, not background reading.
- **`document.md`** — drafted GitHub profile README content for the same person. It is the source of truth for tone and for a subset of the claims; it is *not* the page being built. `prompt.md` §4 treats curating the GitHub profile as a prerequisite for the profile link converting.

There are therefore no build, lint, or test commands to document. Do not invent a toolchain. Once §8's stack decision is made (plain HTML/CSS/JS by default; Next.js static export only if the signature element genuinely requires it), add the real commands to this file.

## What is being built

A single-page static personal profile site for Visanu Mongsaithong, targeting three reader roles (AI/ML Engineer, Cloud Solution Architect, Senior Software Engineer). Its one job is to get a hiring manager to open the contact link or a role-matched resume download.

Deliverables per §8: `index.html`, `styles.css`, `main.js` (only if needed), `/public/assets/*`, and a `README.md` covering Higgsfield asset regeneration plus a checklist of every unfilled placeholder.

## Hard constraints — verify before claiming done

These are content-safety rules, not style preferences. Violating them fails the deliverable.

- **No dates anywhere in rendered output.** No years, month/year ranges, "since", "N+ years", award years, or graduation years. Seniority comes from sequence and depth. Grep the built HTML for four-digit numbers before shipping.
- **No fabricated metrics.** `[METRIC: …]` placeholders render *without a number* unless the owner supplied a real one. A numberless sentence ships; an invented number does not.
- **No internal identifiers** — account numbers, VPC/subnet/SG IDs, KMS key IDs, service endpoints, ticket numbers, internal repo or namespace names, coworker names. Projects ship at capability level only.
- **No dead links.** Unfilled `[LINK: …]` rows are omitted entirely, and the omission is flagged in the build README. If zero links are supplied, drop the "Verify it" strip rather than shipping empty anchors.
- **Accessibility floor, unannounced:** responsive to 360px, visible keyboard focus, `prefers-reduced-motion` honored, semantic landmarks, real alt text on every generated image.

Placeholder tokens to track across the build: `[METRIC: …]`, `[LINK: …]`, `[AVAILABILITY: …]`.

## Required workflow

`prompt.md` §9 defines a specific order of operations. The two steps most likely to be skipped, and must not be:

1. **Design pass is two-pass.** Activate the impeccable design skill, brainstorm a token system with ASCII wireframes, then *critique that plan* against §6 (including its "do not ship" list) and the 8-second skim path. State what changed and why. Do not go straight from brief to code.
2. **Screenshot self-critique** after building — once per role-lens state — then remove one accessory.

## Imagery

All imagery comes from Higgsfield. No stock photos, Unsplash, emoji, or icon-font decoration.

```bash
npm i -g @higgsfield/cli
higgsfield auth login                  # completes sign-in in the browser
npx skills add higgsfield-ai/skills    # installs: generate, soul, product-photoshoot
```

MCP fallback for chat-side iteration: add hosted server `https://mcp.higgsfield.ai/mcp` as a custom connector; no API key.

Generation rules that bite if ignored:

- Name the exact palette hex values inside every prompt. If a return is off-palette, **regenerate** — never color-correct with CSS filters.
- Batch related shots (especially the `work-01`…`work-06` card series) in a single pass so palette, lighting, and abstraction level stay consistent.
- Generate at the largest size the layout needs, then downscale. Never upscale.
- Save to `/public/assets/` with descriptive kebab-case filenames.
- Blanket negatives on every generation: no text or lettering, no logos or trademarks, no identifiable people, no real aircraft liveries or manufacturer marks, no stock-photo staging, no glossy 3D-render clichés.
- **Never generate a synthetic face.** A portrait requires owner-supplied source photos via the `soul` skill; otherwise ship without a portrait.

## Architectural decisions worth knowing up front

- **The role lens is progressive enhancement.** The three-way lens control (§2) foregrounds relevant projects and bullets, but the page must read perfectly with JS off, and the default state is all-visible / none-dimmed.
- **Exactly one signature element.** All visual boldness is spent there; everything around it stays quiet. §6 lists candidates and explicitly rules out three default AI-design looks (cream + serif + terracotta; near-black + acid green; broadsheet hairline grid).
- **Token system lives in CSS custom properties in one stylesheet.** No utility-class soup. §8 flags selector specificity between section-level and element-level rules as the known failure point for collapsed section spacing.
- **Project cards 1–3 are non-droppable** (RAG research, cleared AI delivery, agentic orchestration) — they are the three-role proof set. Card 7 may fold into a compact "also" strip if the layout over-stuffs.
- **Email is JS-assembled against scrapers but must stay copyable.**

## Ship checklist

`prompt.md` §10 holds the full checklist. Run it as an actual gate before reporting the build complete — not as a summary of intentions.
