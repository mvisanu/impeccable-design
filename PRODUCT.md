# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + CSS + minimal vanilla JS, deployed on Vercel. Not delegated — fixed by the
brief (`prompt.md` §8), which permits a Next.js static export only if the signature element
genuinely requires it. One stylesheet driven by CSS custom properties; no utility-class soup.

## Users

Hiring managers and principal engineers at defense primes, healthcare platforms, and AI
product teams. They are technical, skimming, and skeptical — deciding in under a minute
whether to reach out. They arrive hiring for one of three distinct titles:

- **AI/ML Engineer**
- **Cloud Solution Architect**
- **Senior Software Engineer**

A secondary audience is the internal referrer who drops the link into Slack, which is why
the Open Graph card is a real requirement rather than a nicety.

## Product Purpose

A single-page personal profile site for Visanu Mongsaithong. Its one job is to get the
reader to open the contact link or download the role-matched resume. It is a portfolio
landing page and a credibility instrument — explicitly not a resume dump, and not SaaS or
startup marketing.

Success is a reply in the inbox, not time-on-page.

## Positioning

The claim a neighboring candidate page could not truthfully copy is a four-way
intersection:

1. **Production AI/ML** — trained, shipped, and operated real models (CV, NLP, RAG,
   agents), not notebooks.
2. **Cleared and regulated delivery** — DoD TS/SCI, restricted government cloud, HIPAA.
   Where most AI talent cannot legally work.
3. **Enterprise platform depth** — .NET, SOAP-to-OpenAPI modernization, document platforms,
   high-volume integrations. Where most AI talent will not work.
4. **Independent builder** — multi-agent orchestration, LLM cost tooling, retrieval
   research. Initiative beyond the job description.

Hero thesis, verbatim: *"I ship production AI inside environments most AI engineers can't
touch — cleared, regulated, permission-boundaried — and I build agentic systems on my own
time to stay ahead of it."*

The differentiator register is **working correctly under constraint** — not scale, not
speed, not novelty.

## Operating Context

The reader skims. The **8-second skim path** is a hard information-architecture
requirement: a visitor who never scrolls past the first viewport must get, in order —
name → three target titles → TS/SCI · GovCloud · HIPAA credential strip → one proof
link → contact CTA.

One page serves all three titles via a **role lens**: a control that foregrounds the
projects and experience bullets matching the selected title. Default state is all visible,
none dimmed. It is progressive enhancement — the page must read perfectly with JS off.

Readers may print the page; a hiring manager printing it should get a clean one-pager.

## Capabilities and Constraints

Hard content constraints, non-negotiable (`prompt.md` §1):

- **No dates anywhere.** No years, ranges, "since", "N+ years", award years, or graduation
  years. Seniority is conveyed by sequence, titles, and depth.
- **No confidential or internal identifiers.** No account numbers, VPC/subnet/security-group
  IDs, KMS key IDs, service endpoints, ticket numbers, internal repo or namespace names, or
  coworker names. Projects ship at capability level.
- **No invented facts, especially no invented metrics.** Confirmed by the owner: there are
  **no real figures available** for the three `[METRIC: …]` placeholders, so those sentences
  render numberless. This is a decision, not a gap to fill later.
- **No fabricated URLs.** Unverified links are omitted, not guessed.

Accessibility floor, unannounced: responsive to 360px, visible keyboard focus,
`prefers-reduced-motion` honored, semantic landmarks, alt text on every generated image.
Lighthouse targets: performance ≥ 90, accessibility ≥ 95.

All imagery is Higgsfield-generated. No stock photos, no Unsplash, no emoji, no icon-font
decoration. **No synthetic portrait may be generated** — a likeness requires owner-supplied
source photos, otherwise the page ships without one.

## Brand Commitments

**Voice:** plain, specific, engineer-to-engineer. Active verbs, sentence case. Banned:
"passionate", "leveraging", "synergies".

**Anti-references** (binding, from `prompt.md` §0 and §6): SaaS landing pages, agency
portfolios, dev-influencer personal sites. Inter for everything, purple-to-blue gradients,
cards nested in cards, rounded-square icon tiles above headings.

Three AI-design defaults that must not ship:
- cream `#F4F1EA` + high-contrast serif + terracotta accent
- near-black + single acid-green accent
- broadsheet hairline-rule newspaper grid

Confirmed identity facts: Ft. Walton Beach, FL · **open to remote** (owner-confirmed) ·
`mvisanu@gmail.com` · `850-924-1429`. Email is JS-assembled against scrapers but must stay
copyable.

## Evidence on Hand

Verified and shippable:

- **GitHub profile** — `https://github.com/mvisanu`, live, 101 public repos. Caveat: the
  pinned set is not curated and `nextgenai-rag` has an empty description, so the link does
  not yet convert as well as it should.
- **nextgenai-rag** — `https://github.com/mvisanu/nextgenai-rag`, public.
- **NextGen Trading** — `https://nextgenaitrading.vercel.app`, deployed and responding, but
  it 307-redirects to `/login`. A recruiter clicking it meets an auth wall.

Confirmed by the owner to exist, but **no URL supplied yet** — must not be invented:

- LinkedIn profile (not listed on the GitHub profile; no social accounts registered there)
- RAG vs. GraphRAG paper — the single strongest artifact on the page

Not yet supplied: two resume PDFs (AI/ML Engineer · Senior Software Engineer / Platform),
currently stub anchors. No portrait source photos.

No Google Scholar or ORCID established.

## Product Principles

1. **Credibility over polish.** A page with few numbers beats a page with fake ones.
   Every claim traces to the brief; unverifiable rows are omitted rather than softened.
2. **The skim is the product.** Anything that does not serve the 8-second path is for the
   reader who already decided to stay.
3. **Constraint is the story.** The work is distinctive because it shipped inside
   permission boundaries, not despite them. The design register should read as precision
   instrumentation, not as ambition.
4. **One page, three readers.** Never fork into three pages; foreground rather than filter,
   and never make JS a prerequisite for reading.
5. **Links are the conversion lever.** Claims are table stakes; verifiable artifacts are
   what separate this from every other AI-engineer landing page.

## Accessibility & Inclusion

No user-specific need established beyond the standard floor above. The floor is treated as
a requirement, not an enhancement, and is never announced on the page.
