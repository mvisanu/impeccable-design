# prompt.md — Build: Visanu Mongsaithong · Profile Landing Page (v2)

**Read this whole file before writing any code.**

You are building a single-page personal profile site for an AI/ML + platform engineer. This is a portfolio landing page, not a resume dump. It must look like it came from a design studio, and it must convert: the reader is a hiring manager or principal engineer deciding in under a minute whether to reach out.

---

## 0. Toolchain — install and initialize before writing any code

Two tools do two different jobs. **Impeccable** governs design quality and kills AI slop. **Higgsfield** generates the imagery. Neither replaces the judgment in §6.

### Impeccable setup

```bash
npx impeccable install        # detects the harness, installs the skill build + design hook
npx impeccable check          # confirm you're on the latest release
```

Then, inside the agent:

```
/impeccable init              # scans the repo, writes PRODUCT.md and DESIGN.md
```

**`/impeccable init` is the most important step — design without context produces generic output.** When it prompts for project context, answer from this brief, not from defaults:

- **Audience** — hiring managers and principal engineers at defense primes, healthcare platforms, and AI product teams. Technical, skimming, skeptical.
- **Product lane** — personal portfolio / credibility page for a cleared AI engineer. Not SaaS, not startup marketing.
- **Voice** — plain, specific, engineer-to-engineer. Active verbs, sentence case, no hype.
- **Anti-references** — SaaS landing pages, agency portfolios, dev-influencer personal sites, and the three AI defaults named in §6. Also: Inter for everything, purple-to-blue gradients, cards nested in cards, rounded-square icon tiles above headings.
- **Colors / type / components** — leave open at init; they get decided in the §6 planning pass and written into DESIGN.md before any component is built.

**DESIGN.md is the source of truth.** Once the §6 token system is settled, write it into DESIGN.md (palette hex values, display/body/mono faces, spacing scale, component patterns, button styles). Every later command and every Higgsfield prompt reads from it. Do not let tokens live only in CSS.

### Worlds (aesthetic starting points)

Browse the bundled design worlds and pick one that supports the **precision-instrumentation vernacular** in §6 — technical linework, measurement notation, terminal/telemetry registers, dossier or archival treatments. Then run through layout variations for the hero and work sections.

Hard rule: **a world is a starting point, never the finish line.** After selecting one, diverge deliberately — the whole point of §6 is that this page is specific to this subject. If the selected world still reads as a template after the first pass, that's a failed pass; run `/impeccable distill` or switch worlds rather than shipping it. A recruiter who has seen the same world on three other portfolios has learned nothing about this candidate.

### Command sequence

| Stage | Command | Purpose |
| --- | --- | --- |
| Setup | `/impeccable init` | PRODUCT.md + DESIGN.md context |
| Build | `/impeccable craft` | full UX-to-build flow for a section |
| Iterate | `/impeccable live` | browser overlay; select elements, generate variants, accept = writes to source. Needs a dev server with HMR. |
| Dial | `bolder` · `quieter` · `animate` · `typeset` · `colorize` | targeted adjustments — use on the signature element, not everywhere |
| Simplify | `/impeccable distill` | when a section accumulates decoration |
| Review | `/impeccable audit` → `/impeccable critique` → `/impeccable polish` | second set of eyes before ship |
| Gate | `npx impeccable detect src/` | deterministic slop detector — must exit 0 |

Notes: run `detect` with **node**, not bun. Live Mode is beta. Keep PRODUCT.md and DESIGN.md tracked in git — they're project artifacts, not scratch files.

### Reference images (taste vault)

Feed reference images to trigger larger design shifts rather than nudging CSS by hand. For this brief, the useful references are the §6 vernacular sources: engineering drawings with dimension callouts, inspection tags and stamps, instrument panels, archival dossiers, terminal UI. **Do not** feed portfolio sites or SaaS landing pages as references — that's how the page ends up looking like everyone else's.

### Higgsfield setup (do this before generating assets)

**CLI path (preferred, since you are a coding agent):**

```bash
npm i -g @higgsfield/cli
higgsfield auth login          # completes sign-in in the browser
npx skills add higgsfield-ai/skills   # installs: generate, soul, product-photoshoot
```

**MCP path (fallback / for chat-side iteration):**
Add the hosted server `https://mcp.higgsfield.ai/mcp` as a custom connector and authenticate through the Higgsfield account. No API key.

Rules for Higgsfield use:
- Use the `generate` skill for stills; let it pick the model unless a shot below names one.
- Generate at the largest size the layout needs, then downscale — never upscale.
- Save everything under `/public/assets/` with descriptive kebab-case filenames.
- Batch related shots in one pass so the palette stays consistent across the page.
- Name the exact palette hex values inside every generation prompt. If a return doesn't match, regenerate — don't color-correct with CSS filters.
- **Pull the palette from DESIGN.md, not from memory.** Impeccable owns the tokens; Higgsfield consumes them. When DESIGN.md changes, regenerate affected assets.
- Generate assets against **real content** — the actual project names and copy from §3–§5 — so what you see in the browser is the shipping page, not a lorem-ipsum preview that falls apart when filled.

---

## 1. Hard constraints (non-negotiable)

- **NO DATES ANYWHERE.** No years, no month/year ranges, no "since," no "N+ years," no award years, no graduation years. Seniority is conveyed by sequence, titles, and depth of work. Scan the final HTML for four-digit numbers before shipping.
- **No confidential or internal identifiers.** Never render account numbers, VPC/subnet/security-group IDs, KMS key IDs, service endpoints, ticket numbers, internal repo or namespace names, or coworker names. Project descriptions ship at the capability level.
- **No invented facts, and especially NO INVENTED METRICS.** Every claim traces to §3, §4, or §5. Where a `[METRIC: …]` placeholder appears, render the sentence *without* a number unless the owner has replaced the placeholder with a real value. A page with few numbers beats a page with fake ones — fabricated metrics fail reference checks and interviews.
- Accessible floor, unannounced: responsive to 360px, visible keyboard focus, `prefers-reduced-motion` respected, semantic landmarks, alt text on every generated image.

---

## 2. Positioning — what gets this person hired

**The rare intersection.** Very few engineers sit at the overlap of all four of these; the page's core argument is that this person does:

1. Production AI/ML — trained, shipped, and operated real models (CV, NLP, RAG, agents), not notebooks.
2. Cleared + regulated delivery — DoD TS/SCI, restricted government cloud, HIPAA. Where most AI talent can't legally work.
3. Enterprise platform depth — .NET, SOAP-to-OpenAPI modernization, document platforms, high-volume integrations. Where most AI talent won't work.
4. Independent builder — multi-agent orchestration, LLM cost tooling, published retrieval research. Proof of initiative beyond the job description.

**One sentence version (this is the hero thesis):**
*"I ship production AI inside environments most AI engineers can't touch — cleared, regulated, permission-boundaried — and I build agentic systems on my own time to stay ahead of it."*

**Three audiences, one page.** The reader arrives hiring for one of three titles. Don't build three pages — build one page whose sections map to all three, and add a **role lens** device (see §6, signature candidates): a small three-way toggle or highlight control labeled **AI/ML Engineer · Cloud Solution Architect · Senior Software Engineer** that visually foregrounds the projects and experience bullets most relevant to the selected lens. Default state: all visible, none dimmed. This is a progressive enhancement — the page must read perfectly with JS off.

- **AI/ML Engineer lens** foregrounds: object detection delivery, RAG research, NCR agent, MLOps pipelines, model fine-tuning.
- **Cloud Solution Architect lens** foregrounds: ML platform architecture, restricted-cloud delivery, SageMaker/Bedrock/Neptune infrastructure, governance design.
- **Senior Software Engineer lens** foregrounds: document platform API, SOAP→OpenAPI modernization, security hardening, .NET depth, integration reliability.

**The 8-second skim path.** Design the visual hierarchy so a skimmer who never scrolls past the first viewport still gets, in order: (1) name, (2) the three target titles, (3) "TS/SCI · GovCloud · HIPAA" credential strip, (4) one proof link, (5) the contact CTA. Everything else is for the reader who stays.

**The page's single job:** get the reader to open the contact link or download the matching resume.

**Voice:** plain, specific, engineer-to-engineer. Active verbs. Sentence case. No "passionate," no "leveraging," no "synergies."

---

## 3. Content — identity and experience

### Header / hero
- **Visanu Mongsaithong**
- Role line: *AI/ML Engineer · Cloud Solution Architect · Senior Software Engineer*
- Thesis sub-line (from §2): production AI in environments most AI engineers can't touch.
- Credential strip: **DoD TS/SCI Cleared · AWS GovCloud · HIPAA** — rendered as three quiet chips, not a headline flex. This strip is a primary differentiator; it earns first-viewport placement.
- Location: Ft. Walton Beach, FL *(add "open to remote / relocation" only if the owner confirms — placeholder `[AVAILABILITY: …]`)*
- Contact: `mvisanu@gmail.com` · `850-924-1429` — JS-assembled `mailto:` against scrapers, still copyable.
- **Two resume downloads, labeled by role:** "Resume — AI/ML Engineer" and "Resume — Senior Software Engineer / Platform." Stub anchors (`#`) in this pass; the owner wires the PDFs. Matching the resume to the reader's role is itself a hiring signal.

### Summary (rewrite, don't paste)
Software engineer and AI/ML practitioner who moved from data-intensive defense systems into building and deploying production AI: computer vision, NLP, retrieval systems, and multi-agent orchestration. End-to-end ownership from data pipeline through model training to containerized inference APIs. Domain depth in aerospace manufacturing quality, defense, and HIPAA-regulated healthcare. The specialty: making research-grade approaches actually run inside auditable, permission-boundaried cloud environments — and documenting it well enough to survive a compliance review.

### Experience (titles + orgs, in this order, NO dates)
1. **Cloud Solution Architect** — The Boeing Company · Ft. Walton Beach, FL
   - Designed and trained an object detection model for 737 factory operations — data pipeline through training to deployed inference. `[METRIC: detection accuracy / inspection time saved / defect escapes reduced]`
   - Led cloud architecture for data analytics and ML workloads: standardized training, experiment tracking, and deployment patterns that shortened data-scientist ramp time. `[METRIC: teams or scientists onboarded / time-to-first-model]`
   - Delivered AI systems inside a restricted government cloud region, working within service control policies and IAM permission boundaries.
2. **Senior Software Engineer** — Healthcare platform integration (HIPAA-regulated)
   - Built record-centric document ingestion, metadata management, and lifecycle tracking across enterprise workflows. `[METRIC: document volume / day]`
   - Developed and maintained REST and SOAP integrations between enterprise document platforms and external systems in C#/.NET.
   - Hardened file-handling paths: content sniffing, extension allowlists, MIME detection, and remediation of a path-traversal vulnerability class.
   - Reverse-engineered a legacy SOAP contract (~28 operations) into a generated OpenAPI 3.0.3 specification to front it with a modern API gateway.
3. **Senior Software Engineer** — Jacobs Engineering Group · Ft. Walton Beach, FL
   - Trained and deployed object detection and NLP models on AWS SageMaker and Google Cloud (Vertex AI, AutoML).
   - Built FastAPI and .NET inference endpoints, containerized with Docker, shipped through CI/CD.
   - Architected ASP.NET / Angular applications for government clients with auditability and access control as first-order requirements.
4. **Senior Programmer, Healthcare AI** — Ocare Co., Ltd. · Chiang Mai, Thailand
   - Built NLP pipelines translating clinical records into patient-readable language.
   - Built object detection and image-analysis models for medical imaging, integrated into clinical decision-support tools and backend healthcare APIs.
5. **Software Engineer** — The Boeing Company · Ft. Walton Beach, FL
   - Built data-intensive software and database systems across enterprise defense programs — the large-dataset and distributed-systems foundation the AI work stands on.

### Education & research standing
- M.S. Computer Science / Software Engineering — University of West Florida
- B.S. Information Systems Management — University of Maryland
- Pursuing PhD-level research in retrieval-augmented generation and agentic AI systems *(render adjacent to the RAG paper card — degree-in-progress plus published artifact reads far stronger together)*

### Certifications & recognition (no years)
- CompTIA Advanced Security Practitioner (CASP+)
- Microsoft Certified Systems Engineer (MCSE)
- 39 EWS SPECTRE Team Award · 39 EWS Project 212 Team Award · Boeing ATLAS Award

---

## 4. Proof of work — links section (NEW, high priority)

Claims are table stakes; links are what separate this page from every other AI-engineer landing page. Render a compact **"Verify it"** strip near the top of the work section. Use these placeholders; render only rows the owner fills in, and never fabricate a URL:

| Label | Placeholder | Notes |
| --- | --- | --- |
| RAG vs. GraphRAG paper | `[LINK: paper — arXiv / IEEE / PDF]` | The single strongest artifact on the page. If unpublished, link the PDF self-hosted. |
| GitHub profile | `https://github.com/mvisanu` | Link is live — but see the README note: the profile needs its pinned set curated before this link converts (pin `nextgenai-rag`, TokenLedger, BULL/regime work, MLOps-FastAPI; every pin needs a one-line description; unpin forks and empty-description repos). |
| nextgenai-rag (direct) | `https://github.com/mvisanu/nextgenai-rag` | Candidate for a direct card-level link on the RAG project — only after its README shows architecture + results. |
| NextGen Trading (live app) | `[LINK: live demo]` | A deployed, working product — include once auth flow is presentable. |
| LinkedIn | `[LINK: linkedin.com/in/…]` | Recruiters will look regardless; control the path. |
| Google Scholar / ORCID | `[LINK]` | Only if it exists. |

If zero links are supplied, omit the strip entirely rather than shipping dead anchors — but flag it loudly in the build README: **this section is the #1 conversion lever on the page.**

---

## 5. Content — selected work (the centerpiece)

Each card: name · one-line thesis · **one "so what" line in the employer's terms** · 2–3 detail bullets · stack strip · generated visual. The "so what" line answers *why a hiring manager cares*, not what the tech is. Sanitized wording below is what ships — do not add internal detail.

**1. Enterprise RAG research — Vector RAG vs. GraphRAG**
Comparative study of retrieval architectures validated across aerospace maintenance records and clinical documentation.
*So what: retrieval architecture decisions backed by a reproducible dual-domain benchmark — on production-grade infrastructure, not a toy corpus.*
- Dual-domain evaluation harness with reproducible metrics.
- Compared pgvector, managed HNSW vector search, and property-graph traversal under FedRAMP-class infrastructure constraints.
- Formal paper (LaTeX/IEEEtran) plus evaluation-harness artifacts; feeds an ongoing dissertation arc on enterprise-constrained retrieval and agentic AI.
- Stack: PostgreSQL/pgvector · OpenSearch Serverless (HNSW) · Neptune/Gremlin · Python

**2. Aerospace quality AI agent — semantic search over nonconformance data**
Conversational agent letting quality engineers query nonconformance reports in natural language.
*So what: LLM capability delivered where external model endpoints aren't permitted — the hard version of enterprise AI.*
- Managed knowledge bases with a serverless vector collection inside a restricted government cloud region.
- Scheduled pipeline vectorizes relational quality records into the search index.
- Open-weight 20B model, self-hosted inference.
- Stack: Amazon Bedrock Knowledge Bases · OpenSearch Serverless · Aurora PostgreSQL · open-weight LLM

**3. OpenClaw — multi-agent orchestration platform**
A fleet of ~22 sandboxed specialist agents with an operator console, running continuously.
*So what: hands-on answers to the questions every enterprise is now asking — agent governance, cost control, model routing — learned by operating a live fleet, not reading about one.*
- Mission Control dashboard (Next.js); voice assistant front-end on FastAPI.
- Self-improvement loop; gateway integrations across Discord, Telegram, Slack, and web.
- Central gateway meters every provider call; per-task model tiering keeps reasoning-heavy jobs on frontier models and routine jobs on cheap ones.
- Governance harness in design: hash-chained event log, graduated trust levels, shared memory, tool factory.
- Stack: Python · FastAPI · Next.js · SQLite · multi-provider LLM gateway

**4. TokenLedger — LLM cost metering and optimization**
Gateway proxy plus ledger tracking token spend across every provider and project, with a dashboard.
*So what: LLM spend is the #1 objection to enterprise AI adoption; this is a working answer to it.*
- Normalizes pricing across model families into one comparable catalog.
- Goes past reporting into active reduction — surfaces where prompts and routing waste spend.
- Pairs with the orchestration platform: ledger owns metering, OS owns budget enforcement, joined by a shared trace ID.
- Stack: FastAPI · SQLite · proxy gateway · dashboard UI

**5. BULL — regime-aware automated swing trading**
Trading bot that adapts position behavior to a classified market regime.
*So what: unsupervised ML making real decisions with real money under an explicit risk framework — accountability most portfolio projects never face.*
- Hidden Markov Model classifies the market into five regimes, crash through euphoria.
- Scheduled job pipeline drives the full cycle; Discord alerting; disciplined risk management over raw signal chasing.
- Stack: Python · HMM · Alpaca API · cron

**6. MLOps and data pipelines in restricted cloud**
End-to-end pipelines built where the usual managed conveniences are unavailable.
*So what: most SageMaker tutorials die on contact with customer-managed keys and missing VPC endpoints; this work shipped through exactly those constraints.*
- Training-to-endpoint pipeline under CMK encryption on every step, multi-AZ endpoint placement, private container-registry endpoints.
- Graph pipeline loading supply-chain watchlist data from object storage into a managed graph database.
- Stack: AWS SageMaker · Neptune · S3 · KMS · VPC endpoints

**7. Document platform integration API**
Enterprise document ingestion and retrieval serving high-volume healthcare workflows.
*So what: the unglamorous integration reliability that regulated businesses actually run on.*
- Streaming download endpoint with multi-page TIF→PDF conversion for browser delivery.
- OpenAPI documentation generated by reflecting over legacy SOAP contracts (~28 operations) to enable gateway fronting.
- Zero-dependency companion tooling built to work around a restricted internal package feed.
- Stack: C#/.NET · ASP.NET Web API · SQL Server · DB2 · OpenAPI

*(If seven cards over-stuffs the layout, ship 1–6 as full cards and fold 7 into a compact "also" strip. Never drop 1, 2, or 3 — they are the three-role proof set: research, cleared AI delivery, and independent agentic engineering.)*

---

## 6. Capability groupings + visual direction

### Capabilities — compact labeled clusters, no star ratings, no logo soup
- **AI / ML** — NLP · Computer Vision · Object Detection · Transformers · RAG & GraphRAG · LLM Integration · Fine-Tuning · MLOps
- **Frameworks** — PyTorch · TensorFlow · Hugging Face · scikit-learn · OpenCV · FastAPI · Flask · ASP.NET · Next.js · Angular
- **Cloud & MLOps** — AWS SageMaker · Bedrock · OpenSearch Serverless · Neptune · GovCloud · Google Vertex AI / AutoML · Azure ML · Docker · CI/CD
- **Agentic tooling** — Claude & Claude Code · OpenAI Codex · Gemini · Llama · local inference via Ollama · multi-provider gateways
- **Languages** — Python · C# / .NET · SQL · TypeScript / JavaScript · Java
- **Security & compliance** — DoD cleared environments · HIPAA · RBAC · auditability · IAM permission boundaries · service control policies

### Visual direction
Set your own token system per the design skill, within these boundaries:

**Do not ship** the three current AI-design defaults: cream `#F4F1EA` + high-contrast serif + terracotta accent; near-black + single acid-green accent; broadsheet hairline-rule newspaper grid.

**Where to look instead** — the subject's actual world: factory floor markings, nonconformance tags, inspection stamps, engineering drawing linework, dimension callouts and tolerance notation, telemetry readouts, air-gapped terminal UI, vector-embedding space. Pull **one** vernacular and commit fully. Precision instrumentation is the register — the differentiator is working correctly under constraint.

**Hero is a thesis.** Open with the most characteristic thing in this world. Big-number-with-gradient is the template answer; justify it or skip it.

**Signature element** — exactly one, all boldness spent there. Candidates (choose or beat):
- The **role lens** from §2, executed as a genuinely designed control — not three gray tabs.
- A retrieval visualization where a query traverses from vector neighbors into a graph on scroll.
- An inspection-tag treatment where each project card is a tagged, stamped artifact — and the credential strip uses the same stamp language.
Everything around the signature stays quiet.

**Typography** — characterful display face + clean body face + a technical/mono utility face doing real work in stack strips, credential chips, and callouts.

**Motion** — one orchestrated moment beats scattered effects; scroll-linked reveal on the work section is the likely home. Honor `prefers-reduced-motion`.

---

## 7. Higgsfield asset list

| File | Purpose | Prompt direction |
| --- | --- | --- |
| `hero-primary.png` | Hero visual, 4K, wide crop | Match the chosen vernacular. E.g. instrumentation direction: precision engineering abstraction — layered technical linework, measurement notation, depth-of-field over a matte surface, cool desaturated palette with one restrained accent, no text, no faces, no logos. Name exact palette hex values. |
| `texture-substrate.png` | Background substrate | Subtle material grain — brushed metal, coated paper, or anodized surface; extremely low contrast; must sit under body text. |
| `work-01`…`work-06` | One visual per project card | Abstract consistent series: retrieval/graph topology · document-and-search abstraction · agent swarm topology · metering/flow instrumentation · regime state transitions · pipeline geometry. Same lighting, palette, and abstraction level — generate in one batch. |
| `divider-detail.png` | Optional section break | Narrow strip, same visual language. |
| `hero-loop.mp4` | Optional ambient hero motion ≤6s | Only if the plan calls for it. Slow drift, muted, looping, poster-framed by `hero-primary.png`, disabled under reduced-motion. Skip rather than ship something busy. |

**Blanket negatives for every generation:** no text or lettering, no logos or trademarks, no identifiable people, no real aircraft liveries or manufacturer marks, no stock-photo staging, no glossy 3D-render clichés.

**Portrait:** if source photos are supplied, use the `soul` skill to train a likeness and generate one editorial headshot. **Never** generate a synthetic face without source photos — ship without a portrait instead.

---

## 8. Build spec + discoverability (NEW items marked ★)

- Single-page static site. Plain HTML + CSS + minimal vanilla JS unless the signature element genuinely needs a framework; if so, Next.js static export.
- One stylesheet driven by CSS custom properties for the full token system. No utility-class soup.
- Watch selector specificity between section-level and element-level rules — that's where section spacing collapses.
- Images: correct intrinsic dimensions, `loading="lazy"` below the fold, modern format with fallback, real alt text.
- ★ **`<title>` and meta description written for the recruiter search, not vanity:** e.g. `Visanu Mongsaithong — AI/ML Engineer & Cloud Solution Architect · TS/SCI · GovCloud · HIPAA`. The description mentions all three target titles.
- ★ **Open Graph + Twitter card** with a purpose-cropped `og-image.png` (generate via Higgsfield, same visual language, 1200×630, name overlaid in build not in generation) — this is what shows when the link is dropped in Slack by whoever's referring him.
- ★ **JSON-LD `Person` schema**: name, jobTitle array (all three titles), alumniOf, knowsAbout, sameAs (the §4 links once real). Costs nothing, helps recruiter-side search.
- ★ **Print stylesheet** — a hiring manager printing the page should get a clean one-pager, not a broken layout.
- Lighthouse: performance ≥ 90, accessibility ≥ 95.
- Deliverables: `index.html`, `styles.css`, `main.js` (if needed), `/public/assets/*`, and a `README.md` covering asset regeneration via the Higgsfield CLI **plus a "fill these in" checklist listing every `[LINK: …]`, `[METRIC: …]`, and `[AVAILABILITY: …]` placeholder still open.**

---

## 9. Order of operations

1. `npx impeccable install` → `/impeccable init`, answering the context prompts from §0. Read §2–§6 as the brief.
2. Select a world matching the §6 vernacular; compare layout variations for hero and work sections.
3. Brainstorm the token system with ASCII wireframes. Critique against §6's "do not ship" list, the anti-references, and the 8-second skim path. Revise; state what changed and why. **Write the result into DESIGN.md.**
4. Write Higgsfield prompts using the DESIGN.md palette; generate in batches.
5. Build with `/impeccable craft`, section by section, using real §3–§5 content throughout.
6. `/impeccable live` for the signature element and the role-lens control — the two things worth iterating visually.
7. `/impeccable audit` → `/impeccable critique` → `/impeccable distill` (remove one accessory) → `/impeccable polish`.
8. `npx impeccable detect src/` must exit 0. Then run the ship checklist.
9. Screenshot pass once per role-lens state before calling it done.

## 10. Ship checklist

- [ ] Zero four-digit years anywhere in rendered output
- [ ] Zero internal identifiers, account numbers, endpoints, ticket refs, or coworker names
- [ ] Zero fabricated metrics — every `[METRIC]` either replaced with an owner-supplied number or the sentence renders numberless
- [ ] Zero dead links — unfilled `[LINK]` rows omitted, flagged in README
- [ ] 8-second skim path verified: name → titles → credential strip → one proof link → CTA, all in first viewport
- [ ] Role lens works, degrades gracefully with JS off
- [ ] `npx impeccable detect src/` exits 0 — zero anti-patterns
- [ ] `/impeccable critique` run and its findings addressed, not just noted
- [ ] DESIGN.md matches what actually shipped; both it and PRODUCT.md committed
- [ ] Selected world is no longer recognizable as a template — the page reads as specific to this subject
- [ ] Visual direction is none of the three default AI looks; exactly one signature element
- [ ] All imagery Higgsfield-generated; og-image present and purpose-cropped
- [ ] JSON-LD validates; title/meta/OG mention all three target titles
- [ ] Print stylesheet produces a clean one-pager
- [ ] Responsive to 360px; keyboard focus visible; reduced-motion honored
- [ ] Email obfuscated but copyable; contact + role-matched resume downloads are the clearest CTAs
- [ ] No console errors