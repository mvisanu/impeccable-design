---
name: One Drenched Field
description: A white candidate document split once by a full-bleed ultramarine field whose edge runs between the two lines of the name.
colors:
  paper: "#FFFFFF"
  ink: "#0C1017"
  ink-2: "#3D4855"
  rule: "#DCE1E8"
  rule-2: "#C2CAD4"
  tint: "#F2F5F9"
  tint-2: "#DFE6EF"
  field: "#1B2ECF"
  field-deep: "#1424A6"
  on-field: "#FFFFFF"
  on-field-rule: "rgba(255, 255, 255, 0.34)"
  print-ink: "#000000"
  print-ink-2: "#333333"
  print-rule: "#BBBBBB"
  print-rule-2: "#999999"
  print-tint-2: "#EEEEEE"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', 'Arial Black', system-ui, sans-serif"
    fontSize: "clamp(2.55rem, 11.6vw, 8.2rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.045em"
    fontVariation: "'opsz' 96, 'wght' 800"
  headline:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.85rem, 1.35rem + 2.1vw, 3.05rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.038em"
    fontVariation: "'opsz' 40, 'wght' 700"
  title-lead:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.55rem, 1.28rem + 1.3vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 32, 'wght' 700"
  title:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.3rem, 1.12rem + 0.9vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 24, 'wght' 700"
  subtitle:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(1.05rem, 0.99rem + 0.36vw, 1.28rem)"
    fontWeight: 700
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "'Public Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.16rem, 1.04rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.42
  body:
    fontFamily: "{typography.lead.fontFamily}"
    fontSize: "clamp(1rem, 0.97rem + 0.18vw, 1.08rem)"
    fontWeight: 400
    lineHeight: 1.6
  pull:
    fontFamily: "{typography.lead.fontFamily}"
    fontSize: "1.12rem"
    fontWeight: 600
    lineHeight: 1.45
  inline-strong:
    fontFamily: "{typography.lead.fontFamily}"
    fontSize: "1rem"
    fontWeight: 600
  meta:
    fontFamily: "{typography.lead.fontFamily}"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "{typography.lead.fontFamily}"
    fontSize: "0.86rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  label:
    fontFamily: "{typography.lead.fontFamily}"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
  micro:
    fontFamily: "{typography.lead.fontFamily}"
    fontSize: "0.7rem"
    fontWeight: 500
rounded:
  r-0: "0"
  r-1: "6px"
spacing:
  s1: "0.35rem"
  s2: "0.7rem"
  s3: "1.1rem"
  s4: "1.8rem"
  s5: "2.8rem"
  s6: "4.4rem"
  s7: "7rem"
components:
  act-primary:
    backgroundColor: "{colors.on-field}"
    textColor: "{colors.field}"
    typography: "{typography.action}"
    rounded: "{rounded.r-1}"
    padding: "0.7rem 1.8rem"
  act-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  act-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-field}"
    typography: "{typography.action}"
    rounded: "{rounded.r-1}"
    padding: "0.7rem 1.8rem"
  act-ghost-hover:
    backgroundColor: "{colors.on-field}"
    textColor: "{colors.field}"
  cred-chip:
    backgroundColor: "transparent"
    textColor: "{colors.on-field}"
    typography: "{typography.label}"
    rounded: "{rounded.r-1}"
    padding: "0.7rem 1.1rem"
  lens-btn:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.r-1}"
    padding: "0.7rem 1.1rem"
  lens-btn-hover:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
  lens-btn-pressed:
    backgroundColor: "{colors.field}"
    textColor: "{colors.on-field}"
  lens-btn-clear-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-field}"
  plate:
    backgroundColor: "{colors.tint}"
    rounded: "{rounded.r-1}"
    padding: "1.1rem"
    width: "15.5rem"
  plate-lead:
    backgroundColor: "{colors.tint}"
    rounded: "{rounded.r-1}"
    padding: "1.1rem"
    width: "21rem"
  status:
    backgroundColor: "transparent"
    textColor: "{colors.field}"
    typography: "{typography.label}"
    rounded: "{rounded.r-1}"
    padding: "0.35rem 1.1rem"
  pending:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.r-1}"
    padding: "0.7rem 1.1rem"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.r-1}"
    padding: "0.7rem 1.1rem"
---

# Design System: One Drenched Field

## Overview

**Creative North Star: "The Cut Document"**

This is a white page that behaves like one continuous document rather than a grid of
project cards. It spends its entire colour budget in a single place: a full-bleed
ultramarine field that opens the page, whose top edge slices horizontally through the
name set at display scale. The first line of the name is ink on white; the second is
white on ultramarine; one name, two grounds. Everything after that opening is ink,
hairlines and air.

The density is editorial, not dashboard. There are no cards, no tiles, no shadows and no
containers-within-containers. Structure comes from hairline rules, one-directional
vertical rhythm, and a right-floated figure per work record. The reader is meant to scroll
one document from the name to the sign-off without ever hitting a visual restart.

Confirmed rejections, pinned by the owner after two re-rolls of the world: no metaphor
world or themed object, no near-black portfolio grid, no cream editorial ground, and no
second drenched region anywhere below the hero.

**Key Characteristics:**
- One saturated ultramarine field; the rest of the page is white, ink and hairline.
- A two-line display name split by the field's edge, one line per ground, at every viewport.
- Two type families only, both self-hosted variable subsets.
- Flat by construction: no shadow token exists.
- Six authored line figures on a shared 240×160 grid, uniform stroke weight.
- One authored motion moment; everything else is a sub-0.3s state transition.
- A print ramp re-pointed to points, shipped in the same pass as the screen ramp.

## Colors

A near-monochrome document with one violent exception: the palette is white, near-black
ink and four greys, plus a single ultramarine that carries all the saturation the page
owns.

### Primary
- **Drenched Ultramarine** (`{colors.field}`): The hero field, and the only saturated
  colour in the system. Outside the field it is rationed to exactly three uses: link
  colour, the 3px section tick, and the traced/verified strokes inside the figures. The
  pressed lens button and the status chip's border take it as a control accent.
- **Deep Ultramarine** (`{colors.field-deep}`): Reserved shade of the field. Declared in
  `:root` and currently unreferenced by the shipped stylesheet; it is the sanctioned
  darker step if a pressed or active field state is ever needed, not an in-use token.

### Neutral
- **Paper White** (`{colors.paper}`): The page ground, and the same value as the on-field
  foreground. There is no off-white, no cream, no tinted body background.
- **Near-Black Ink** (`{colors.ink}`): All body and display type on white (19.1:1). Also
  the focus-ring colour, the skip-link ground, the capability cluster's 2px top rule, and
  the 3px rule that closes the document.
- **Slate Secondary** (`{colors.ink-2}`): Secondary copy — record bullets, summaries,
  field labels, notes, the footer (9.3:1 on white). It is a demotion, never a decoration.
- **Hairline** (`{colors.rule}`): The default 1px separator between sections, records,
  roles, and list rows. This rule does the work cards would otherwise do.
- **Hairline Strong** (`{colors.rule-2}`): The heavier hairline — list-item ticks, the
  lens button's resting border, the `.pending` dashed border, and `.hair` guide strokes
  inside figures.
- **Plate Tint** (`{colors.tint}`): The figure plate's ground, and the lens button's hover
  ground. The only fill that is neither white nor ink.
- **Plate Tint Deep** (`{colors.tint-2}`): One use — the `.soft` fill inside figures, for
  a body that must read as filled but not as ink.
- **Field Hairline** (`{colors.on-field-rule}`): The 34% white rule and chip border used
  *inside* the field, where the neutral hairlines would disappear.

### Print
The paper palette is a real, separate set of tokens, not a fallback. `@media print`
re-points the whole `:root` colour set: ink and the field both collapse to
`{colors.print-ink}`, secondary copy to `{colors.print-ink-2}`, hairlines to
`{colors.print-rule}` / `{colors.print-rule-2}`, the plate ground to white and the plate
fill to `{colors.print-tint-2}`. Ultramarine does not survive to paper at all — the field
prints as a black-on-white heading block, so the document does not depend on a colour
printer.

### Named Rules

**The One Region Rule.** The page gets exactly one drenched region, and it is the hero
field. Colour outside it survives in exactly three places: link colour, the 3px section
tick, and the traced stroke inside a figure. Everything else earns its emphasis from scale,
weight and space. The sign-off closes on a 3px **ink** edge, not a second coloured band,
and `.contact` explicitly suppresses its tick — a 3px blue segment inside a 3px black rule
reads as a smudge. A fourth colour use — an ultramarine left rule on the `.rec__so` line —
was built and then removed: it read as the generic accent-bar tell, and the emphasis it was
doing is carried by type instead.

**The Only-White-On-Field Rule.** White is the sole foreground on ultramarine (9.0:1).
Ink on the field is 2.1:1 and is never used; there is no second foreground colour, no
tinted-blue text, and no lowered-opacity white below the 0.82 used on the location label.
Separation inside the field is achieved by scale, weight and tracking.

**The Dim-Never-Delete Rule.** The role lens de-emphasises to `opacity: 0.55` and never
hides. 0.55 is a floor, not a starting point: at that value ink body copy still composites
to about 4.2:1 on white. Secondary `{colors.ink-2}` copy composites to roughly 2.8:1, which
is below the small-text threshold and is accepted **only** because the state is
user-initiated, reversible in one click, announced in a live region, and never the page's
default. Do not lower it, and do not introduce a second dim level.

## Typography

**Display Font:** Bricolage Grotesque (fallback `'Arial Black', system-ui, sans-serif`)
**Body Font:** Public Sans (fallback `system-ui, -apple-system, 'Segoe UI', sans-serif`)

Both are self-hosted latin variable subsets under OFL 1.1, both `<link rel=preload>`ed,
both `font-display: swap`, `font-synthesis-weight: none`. The shipped Bricolage subset
carries `opsz` and `wght` axes **only** — there is no `wdth` axis in the file, so never
write one.

**Character:** A wide, slightly eccentric grotesque cut very large against a quiet,
highly legible civic sans. The display face never sets prose and the body face never sets
the name; the contrast between them is the page's only ornament.

### Hierarchy
- **Display** (`{typography.display}`, opsz 96): The name, and only the name. Line height
  is sub-1 (0.86) so the two lines lock into a single block, and `--name-line`
  (`--d-name × --name-lh`) is what the field's edge is pinned to.
- **Headline** (`{typography.headline}`, opsz 40): Section headings. `text-wrap: balance`.
- **Title (lead)** (`{typography.title-lead}`, opsz 32): The first work record's name only.
- **Title** (`{typography.title}`, opsz 24 on contact links): Work-record names, the lens
  question, and the contact links.
- **Subtitle** (`{typography.subtitle}`): Job titles in the field, role titles, verify-row
  links, and the demoted record's name.
- **Lead** (`{typography.lead}`): The hero thesis (max 46ch) and the sign-off lead (48ch).
- **Body** (`{typography.body}`): All prose, capped at `--measure` (66ch).
- **Pull** (`{typography.pull}`): The `.rec__so` "so what" line — the record's argument.
  Emphasis is type-only: one step above body at 600 weight, isolated by `--s4` of space
  above and below. It carries no rule, no border and no colour. The demoted record sets the
  same line at 500.
- **Meta** (`{typography.meta}`): Notes, capability definitions, credential rows.
- **Action** (`{typography.action}`): Buttons and hero actions, uppercase.
- **Label** (`{typography.label}`): The `.lbl` uppercase field label and the chips.
- **Micro** (`{typography.micro}`): Declared step, currently unreferenced on screen; it
  exists so the print ramp has a bottom rung. Do not reach for it on screen.

### Named Rules

**The Two Families Rule.** Bricolage Grotesque and Public Sans. There is no third face —
in particular, no monospace. Small uppercase labels are Public Sans at 600 with 0.1em
tracking, never a mono costume.

**The Explicit Optical Size Rule.** `opsz` is driven explicitly at four steps — 96 (name),
40 (section heading), 32 (lead record name), 24 (contact links) — and every
`font-variation-settings` declaration pairs its `opsz` with an explicit `wght`, because
the shorthand otherwise clobbers the `font-weight` property.

**The Every-Size-Is-A-Token Rule.** Six fixed steps (`--t-3xs`…`--t-lg`) and seven fluid
steps (`--d-name`, `--d-section`, `--d-record-lead`, `--d-record`, `--d-title`,
`--d-lead`, `--d-body`). A literal `font-size` on screen is a defect. The only literal
sizes in the build are inside `@media print`, where the whole ramp is re-pointed.

## Layout

A single centred column: `--wrap` 64rem, `--gut` `--s4` (1.8rem), dropping to `--s3`
(1.1rem) below 40rem. Prose is additionally capped at `--measure` (66ch); the two lead
paragraphs run tighter at 46ch and 48ch.

Spacing is a seven-step ramp at roughly a 1.6 ratio (`--s1` 0.35rem → `--s7` 7rem).
`--s7` is declared but unused on screen; it exists as the ramp's top rung and is
re-pointed for print. Sections separate on `--s6` above / `--s5` below a 1px hairline;
records and roles separate on `--s5` and `--s4` respectively.

Two grids exist, both `auto-fit`: capabilities at `minmax(15rem, 1fr)` and credentials at
`minmax(16rem, 1fr)`, each on `--s4` gap. The contact rows are a `7rem 1fr` two-column
grid that collapses to one column below 40rem. Everything else is flow or flex-wrap.

Three breakpoints, all max-width and all rem-based:
- **54rem** — figure plates unfloat, go full width to a 21rem cap.
- **40rem** — gutter and hero top tighten, hero actions become a 2-up grid, contact rows
  and the hero foot go single-column. The split needs no re-point at any width — it is
  derived from `--name-line`, so it follows the type ramp automatically.
- **24rem** — hero actions stack 1-up and the hero pays for the extra row out of its own
  vertical budget so the contact action stays in the first viewport.

**The Print Is A Deliverable Rule.** Screen type and space steps are viewport-fluid; paper
has no viewport. `@media print` re-points every colour, type and space token to paper
values (`pt`) and sets `@page { margin: 12mm 14mm }`. Without it the document sets to ten
pages; with it, four. The field flattens to black-on-white, the lead record and contact
links set back down to the ramp, records and roles get `break-inside: avoid`, dimming is
forced off with `opacity: 1 !important`, and external links print their URL. **Any new
component ships with its print behaviour in the same pass**, or the deliverable regresses.

## Elevation & Depth

There are no shadows. Not one `box-shadow` exists in the build, and no shadow token should
be added. Depth is entirely a matter of ink weight and hairline hierarchy: 1px `--rule`
for ordinary separation, 1.5px for control borders, 2px for a capability cluster's top
edge, and 3px for the document's closing rule. The hero field reads as "in front" only
because it is saturated and full-bleed, and it is placed with `z-index: -1` under an
`isolation: isolate` context — it sits *behind* its own text, not above the page.

**The Flat-By-Rule Rule.** Separation is a line or a colour change, never a lift. If a
surface needs to feel distinct, give it the `{colors.tint}` ground and a 6px radius — the
figure plate is the only example, and it is the pattern to copy.

## Shapes

Square by default. `--r-0` (0) is the page's shape: every rule, edge, section and figure
corner is unrounded. `--r-1` (6px) is the single radius and it is reserved for things you
can act on or that are boxed as a unit — hero actions, lens buttons, credential chips, the
status chip, the `.pending` block, the figure plate, and the skip link. No other radius
value exists; do not introduce one.

Borders carry the form language: 1px hairlines to separate, 1.5px to bound a control,
2px on a hero action (so it holds its own against the field), 2px above a capability
cluster, and 3px for exactly two things — the section tick and the document's closing edge.
1px **dashed** is reserved for the one thing that is deliberately not a control. No
component carries a left or side border; emphasis inside prose is type and space.

## Components

### Buttons and Actions
- **Shape:** Small rounded rectangle (6px), 2px border on hero actions, 1.5px on lens
  buttons.
- **Primary (`act-primary`):** White ground, ultramarine text — a white block inside the
  field. Hovers to ink ground / paper text, borrowing the page's ink rather than a new
  colour.
- **Ghost (`act-ghost`):** `border: 2px solid currentColor` in white on the field,
  inverting to white ground / ultramarine text on hover and focus.
- **Focus:** A global 3px ink outline at 3px offset, overridden to white inside the field
  so the ring never disappears against ultramarine.
- **Transitions:** 0.18s on colour properties with `--ease`
  (`cubic-bezier(0.16, 1, 0.3, 1)`). Nothing moves position.

### Chips
- **Credential chip:** Transparent, bordered 1.5px in 34%-white, uppercase label above a
  display-face value on its own line. Static — it is a statement, not a control.
- **Status chip:** Inline-flex, 1.5px ultramarine border with ultramarine label and value.
  The only chip that takes the accent, alongside the three sanctioned colour uses outside
  the field.

### Containers
There are no cards. The one boxed surface is the **figure plate**: `{colors.tint}` ground,
6px radius, `--s3` padding, right-floated at 15.5rem (21rem for the lead record),
unfloating to full width at 54rem.

### Navigation
There is none. A skip link (ink ground, revealed on focus) and in-page anchors are the
entire navigation model. Do not add a header bar.

### Role Lens
A four-button filter that de-emphasises rather than filters. Buttons carry
`aria-pressed`; the pressed state is ultramarine ground, except "Show all" which presses
to **ink** ground so the reset never competes with a selection. A live region announces
the change. Controls ship `hidden` and JS reveals them, so the page reads in full with JS
off.

**The Scoped Lens Rule.** The lens target selector is
`.rec[data-lens], .role[data-lens], .caps__cluster[data-lens]`. A bare `[data-lens]`
sweep also matches the lens buttons themselves and would dim the reader's way back to
"Show all".

### The Split Name (signature)
The page's defining device. The name is two block-level spans inside one `<h1>`, each
filled with a **solid** colour: the first `{colors.ink}`, the second `{colors.on-field}`.
The field's top edge (`.lede::before`) is pinned to
`calc(var(--lede-top) + var(--name-line))`, which lands on the boundary between the two
line boxes — so the name is split by a ground change, one line per ground, with no
per-line colour ever set by hand.

- `--name-line` is `--d-name × --name-lh` (0.86). It is the only arithmetic in the device:
  change `--d-name` or `--name-lh` and the edge follows on its own. There is no ratio and
  no breakpoint override.
- `white-space: nowrap` on `.name` is load-bearing. It guarantees exactly two lines, which
  is the assumption `--name-line` encodes; a third line would put the edge in the wrong
  place at every width.
- The colour lives on the spans, not on `.name`. `.name` itself keeps `color: var(--ink)`
  as the fallback for any text not inside a span.
- `forced-colors: active` sets `.name span { color: CanvasText }` and hides the field.
  Print sets the name to 26pt and both spans to black, since the field does not print.
- History, so nobody reinstates it: an earlier pass painted the split *through the glyph
  bodies* with a two-stop `background-clip: text` gradient driven by a `--name-cut` token.
  It was flagged as `gradient-text` and dropped for solid colour on the owner's explicit
  decision. `--name-cut`, the gradient, and its `@supports` fallback are gone. Do not
  bring them back.

### Record Figures
Six authored SVG plates on a shared **240×160** viewBox, each with a `<title>` carrying
real alt text and `role="img"` + `aria-labelledby`. Exactly four stroke classes plus two
fills:
- `.ink` — 1.4px ink, structure.
- `.hair` — 1px `--rule-2`, guides, grids and the shared baseline scale.
- `.mark` / `.markf` — 2px ultramarine, for the *one* thing the figure traces.
- `.ok` / `.okf` — 1.8px ultramarine, for a verified state.
- `.dot` (`--ink-2` fill) and `.soft` (`--tint-2` fill, 1px `--ink-2` stroke) for bodies.

Stroke weight is uniform across the series. The lead record's plate is larger (21rem vs
15.5rem) but stays a right float so the weight stays consistent; it is never scaled up as
an image. Generation was tried and rejected on evidence — the model could not hold the
palette and inserted stray lettering.

### Pending Block
- **Style:** 1px dashed `--rule-2`, 6px radius, uppercase label with an ink value.
- **Behaviour:** No `href`, no pointer, no hover, no focus. It states an artifact that does
  not exist yet. Making it look interactive is the defect.

### Motion
One authored moment: `field-wipe`, a `clip-path` inset on `.lede::before` running
0.72s with a 0.08s delay on `--ease`, dropping the field past the name so the second line
appears as it passes. It is wrapped in `prefers-reduced-motion: no-preference` and
animates *toward* the base state, so nothing is hidden if the animation never runs.
Everything else that moves is a 0.18s (colour) or 0.28s (opacity) transition.

## Do's and Don'ts

### Do:
- **Do** keep the field's edge derived from `--name-line`, and confirm the name still sets
  to exactly two lines — one per ground — at 320px, 768px and 1440px after any change to
  `--d-name`, `--name-lh` or the name markup.
- **Do** ration colour outside the hero field to link colour, the 3px section tick, and
  one traced stroke per figure.
- **Do** make in-prose emphasis out of scale, weight and space — the `.rec__so` line is the
  pattern.
- **Do** use white as the only foreground on ultramarine.
- **Do** pair every `opsz` with an explicit `wght` in `font-variation-settings`.
- **Do** ship every new component's `@media print` behaviour in the same pass, and re-check
  the page count.
- **Do** separate with a hairline and a spacing step; 1px `--rule` is the default answer.
- **Do** give any new figure the 240×160 viewBox, the four stroke classes, a real `<title>`,
  and one ultramarine trace.
- **Do** keep the page fully readable with JavaScript off: reveal enhancements, never
  depend on them.

### Don't:
- **Don't** add a second drenched region, a coloured section band, or a tick on `.contact`.
  The document closes on ink.
- **Don't** put a thick coloured border on one side of anything. The accent bar is the most
  recognisable AI-generated tell; the `.rec__so` line had one and it was removed.
- **Don't** put ink, tinted blue, or any non-white foreground on the field (2.1:1).
- **Don't** lower `.is-dimmed` below 0.55, add a second dim level, or let the lens hide
  anything — including "Show all".
- **Don't** target `[data-lens]` unscoped; always `.rec, .role, .caps__cluster`.
- **Don't** write a literal `font-size` outside `@media print`; add a token instead.
- **Don't** introduce a third font family, a monospace face, or a `wdth` axis — the shipped
  Bricolage subset has only `opsz` and `wght`.
- **Don't** add a `box-shadow`, a card, or a third radius value. Square by default, 6px for
  controls.
- **Don't** use `background-clip: text` or gradient fills on type anywhere, including the
  name. The through-the-glyphs version was built and dropped; there is no standing
  exception left in this system.
- **Don't** give `.pending` an href, a pointer cursor, or a hover state.
- **Don't** animate anything outside `prefers-reduced-motion: no-preference`, or animate
  away from the base state.
