---
name: Inspection Record
description: Signal-red tag stock on cool galvanized steel — a candidate page built as a conformance hold tag.
colors:
  tag: "#D93A1E"
  tag-deep: "#A82A12"
  ink: "#16222B"
  ink-soft: "#3E4B54"
  steel: "#E4E4E1"
  steel-deep: "#CBCAC4"
  paper: "#F2F1ED"
  stamp: "#2E6B4F"
  on-tag: "#FFFFFF"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 12.4vw, 6rem)"
    fontVariation: "'wdth' 74, 'wght' 800"
    lineHeight: 0.87
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1.4vw, 2.2rem)"
    fontVariation: "'wdth' 78, 'wght' 700"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.16rem, 1rem + 0.6vw, 1.5rem)"
    fontVariation: "'wdth' 84, 'wght' 700"
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.1rem, 1rem + 0.5vw, 1.4rem)"
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.09rem)"
    fontVariation: "'wdth' 100, 'wght' 400"
    lineHeight: 1.6
  label:
    fontFamily: "Courier Prime, ui-monospace, Courier New, monospace"
    fontSize: "0.66rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  value:
    fontFamily: "Courier Prime, ui-monospace, Courier New, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  none: "0"
  full: "50%"
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
    backgroundColor: "{colors.ink}"
    textColor: "{colors.steel}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.8rem"
  act-primary-hover:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.ink}"
  act:
    backgroundColor: "transparent"
    textColor: "{colors.on-tag}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.8rem"
  act-hover:
    backgroundColor: "{colors.on-tag}"
    textColor: "{colors.tag}"
  lens-btn:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
  lens-btn-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  lens-btn-pressed:
    backgroundColor: "{colors.stamp}"
    textColor: "{colors.on-tag}"
  stamp:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.ink}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
  stamp-conform:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.stamp}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
  record:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.8rem 1.8rem 1.8rem 2.8rem"
  pending:
    backgroundColor: "transparent"
    textColor: "{colors.on-tag}"
    typography: "{typography.value}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
  punch:
    backgroundColor: "{colors.steel}"
    rounded: "{rounded.full}"
    size: "2.1rem"
---

# Design System: Inspection Record

## Overview

**Creative North Star: "The Conformance Hold Tag"**

This is a record, not a portfolio. The whole world is built from one physical object — the signal-red hold tag wired to a part that has been inspected: punched shoulder, reinforced eyelet, ruled fields, struck stamps, typewriter field values, and a disposition block at the foot where somebody signs off. Every claim on the page is carried in that vocabulary, so the reader is looking at evidence with a disposition attached rather than at a marketing surface.

The material behavior is flat and printed, not glassy or lit. Red tag stock and galvanized steel are the two grounds; ink is stamped onto them. Nothing floats, nothing glows, nothing has a soft corner except the punched eyelet holes, which are round because holes are round. Density is high and rhythmic: rules and hairlines subdivide the page the way a form does, and body copy holds to a 68ch measure so the record stays readable at record length.

Confirmed rejections: the dark developer-portfolio card grid, and its predictable opposite, the cream editorial personal site. Neither is a fallback here. The build also refuses image-as-atmosphere — it ships with zero raster imagery and carries the world entirely on fill, geometry and type.

**Key Characteristics:**
- Committed color: red tag stock carries whole regions full-bleed, it is not an accent on neutral.
- Two type families only, with Archivo's width axis doing the hierarchy work (68–88).
- Square by default; the only curves are punched holes.
- Flat stock — no drop shadows anywhere; depth is inset punches and struck stamp rings.
- One authored motion moment, and one green stamp, both rationed.
- A complete print stylesheet is a first-class deliverable, not an afterthought.

## Colors

A three-material palette — red tag stock, cool galvanized steel, slate stamp ink — plus a single green reserved for conformance.

### Primary
- **Signal-Red Tag Stock** (`{colors.tag}`): The committed field. It fills the hero header and the sign-off section edge-to-edge, top and tail of the document. It is never used as a small highlight on a neutral ground, and never as a text color except on white print output.
- **Punched-Edge Red** (`{colors.tag-deep}`): The darker cut edge. Used only for the hero eyelet ring, where the stock is shown in section.

### Secondary
- **Conformance Green** (`{colors.stamp}`): The verified state, and only that. It appears in exactly three places: the struck conformance stamp in the sign-off, the verification links in the "Verify it" strip, and the pressed state of a role-lens button. Green means something has been checked.

### Neutral
- **Galvanized Steel** (`{colors.steel}`): The page ground, the punched-hole fill, and the light-on-dark text color inside the primary action.
- **Steel Hairline** (`{colors.steel-deep}`): Every 1px rule, list divider and section hairline on the light ground (`--rule: 1px solid`).
- **Record Stock** (`{colors.paper}`): The slightly warmer sheet each work record is printed on, separating it from the steel bench behind it.
- **Slate Stamp Ink** (`{colors.ink}`): Body text, headings, 2px structural rules, focus outlines, and the display type struck into the red field.
- **Secondary Ink** (`{colors.ink-soft}`): Supporting copy on light stock — bullet points, stack strips, org lines, notes, field labels.
- **Tag White** (`{colors.on-tag}`): The only foreground for small text on red.

### Named Rules

**The Committed Field Rule.** Red is a region, not an accent. If red appears, it fills a whole band of the page and the content sits inside it. Do not sprinkle red onto the steel ground as a highlight, a link color, or an icon tint; its only intrusions on light ground are the 3px top edge of a work record and the record's eyelet ring.

**The White-On-Tag Rule.** On the red field, only pure white clears 4.5:1 (4.59:1) for small text. A tint of the red hue tops out near 3.44:1 and was removed from the build for that reason. Slate ink clears only 3:1 on red and is therefore reserved for display sizes — which is exactly why the name and the sign-off heading are slate while every line of body copy on red is white. There is no third foreground on red.

**The Scale-And-Tracking Rule.** Because there is no legal second tone on red, secondary text on the tag recedes by size and letter-spacing instead: field labels drop to 0.66rem and open to 0.22em tracking while staying pure white. Never invent a muted white or a low-opacity text color to create hierarchy on the tag.

**The One Stamp Rule.** Conformance green marks verification only. A green element must correspond to a fact somebody could check.

## Typography

**Display Font:** Archivo variable (with Arial Narrow, system-ui)
**Body Font:** Archivo variable (with system-ui, -apple-system)
**Label/Mono Font:** Courier Prime 400/700 (with ui-monospace, Courier New)

Both families are self-hosted latin woff2 under OFL 1.1, with `font-display: swap`; the Archivo variable face and Courier Prime 400 are preloaded.

**Character:** Archivo's width axis is genuinely driven, not decorated — condensed and heavy for the struck-in name, progressively wider and lighter as the type gets smaller, so hierarchy reads as pressure rather than as size alone. Courier Prime is the form's typewriter: it appears where a field label or a field value would appear on a real tag, never as a generic "technical" costume.

### Hierarchy
- **Display** (`wdth` 74 / `wght` 800, clamp 2.6–6rem, line-height 0.87, tracking −0.035em, uppercase, slate on red): The name, and only the name. Below 24rem viewport the width axis narrows to 68 so it still fits on two lines.
- **Sign-off Display** (`wdth` 76 / `wght` 800, clamp 2.6–3.2rem, tracking −0.03em, uppercase, slate on red — sharing the Display step's floor so both display voices sit on one scale): The closing "Sign off" heading — the display voice returning at the tail.
- **Headline** (`wdth` 78 / `wght` 700, clamp 1.5–2.2rem, tracking −0.02em, uppercase): Section headings, each sitting under a 3px signal-red stock edge with a punched eyelet at its left end and `--s7` of air above it — the record's tag shoulder repeated at section scale, so the world runs the whole spine rather than stopping below the work stack.
- **Title** (`wdth` 84 / `wght` 700, clamp 1.16–1.5rem, tracking −0.015em): Work record names, role titles, capability cluster terms (0.94rem, uppercase, +0.04em).
- **Sub-title** (`wdth` 86–88 / `wght` 600, 1.02–1.15rem): The ruled title fields in the hero and the role-lens prompt — the widest, lightest step in the Archivo ramp.
- **Lead** (400, clamp 1.1–1.4rem, line-height 1.45): The hero thesis (max 46ch) and the sign-off lead (max 48ch).
- **Body** (`wdth` 100 / `wght` 400, clamp 1–1.09rem, line-height 1.6, max 68ch): All record prose and experience copy.
- **Label** (Courier Prime 400, 0.66rem, +0.14em, uppercase; +0.22em on the tag): "Inspection record", "Role", "Stack", "Email" — the printed field names.
- **Value** (Courier Prime 400/700, 0.70–1.02rem, +0.06em to +0.16em): Stamp text, stack strips, verification links, contact values, actions, and the role-lens controls.

### Named Rules

**The Two Families Rule.** Archivo and Courier Prime. There is no third face, and no icon font. If something needs to feel different, move the width axis or switch families — do not add one.

**The Width-Axis Rule.** Hierarchy runs 68 → 88 on `wdth` across the page, tightening as type grows. A new heading level must pick a width consistent with its size: bigger is narrower. Never set display type at `wdth` 100.

**The Field-Data Rule.** Courier Prime marks something that would be written into a field on the physical tag — a label, a value, a stamp, a link to verify. Prose never runs in mono.

## Layout

A single centered column: `main` and the hero body both cap at 62rem with `--s4` (1.8rem) side padding, dropping to `--s3` under 40rem. Text measure is separately constrained at `--measure` (68ch) for records and experience, and tighter at 46–48ch for the two lead paragraphs on red.

Vertical rhythm runs on a seven-step scale (`--s1` 0.35rem through `--s7` 7rem, roughly a 1.6 ratio). Section headings claim `--s7` of top padding, sub-blocks open at `--s6`, and intra-record spacing lives in `--s1`–`--s4`. Rules do the rest of the work: a 3px signal-red stock edge with a punched eyelet above each section heading, a 2px slate rule above each capability cluster, a 1px `--steel-deep` hairline between list rows, and 1px white 40% rules on the red field.

Only two grids exist, both intrinsic and unbreakpointed: capabilities at `repeat(auto-fit, minmax(15rem, 1fr))` and education at `minmax(16rem, 1fr)`, each gapped at `--s4`. Everything else is flex with wrapping.

Two breakpoints, both narrow-side only. At 40rem the hero compresses hard so the first viewport still reaches the contact action: padding drops, the three ruled title fields collapse into one line with middot separators and their labels hidden, stamps shrink to 0.62rem, and the two disposition actions go full-width and split the row. At 24rem only the name's width axis narrows.

**The Fold-Reaches-Contact Rule.** The hero is compressed at narrow widths rather than allowed to push the contact action below the fold. Any hero addition must be paid for out of the same budget.

## Elevation & Depth

Flat stock, no elevation. There is not a single drop shadow in the build, and nothing is layered by lift. Depth is entirely physical-print: an *inset* shadow inside each punched hole so the hole reads as pierced, and hard offset rings on stamps so the ink reads as struck through a die. Separation between the record sheets and the page ground is done tonally (`{colors.paper}` on `{colors.steel}`) plus a 3px red top edge — never by shadow.

### Shadow Vocabulary
- **Punched hole, large** (`box-shadow: inset 0 1px 3px rgba(22, 34, 43, 0.45)`): The hero and sign-off eyelets.
- **Punched hole, small** (`box-shadow: inset 0 1px 2px rgba(22, 34, 43, 0.4)`): The work-record eyelet.
- **Struck stamp, ink** (`box-shadow: 0 0 0 1px var(--steel), 0 0 0 3px var(--ink)`): The double-rule impression around a stamp, with a stock-colored gap between the two lines.
- **Struck stamp, conformance** (`box-shadow: 0 0 0 1px var(--steel), 0 0 0 3px var(--stamp)`): The same die in green, used once.

### Named Rules

**The Flat-Stock Rule.** No `box-shadow` that casts outward and blurred. Shadows are either inset (a hole) or hard-offset rings (a stamp). If a surface needs to separate, change its tone or rule it, do not lift it.

## Shapes

Square by default: zero border-radius on every panel, button, stamp, record and field. The only round things are the punched eyelets, which are true circles (`50%`) filled with the steel of the bench behind, ringed by a 2px `--tag-deep` (hero) or 1.5px `--tag` (record) reinforcing eyelet drawn on an inset of −0.42rem / −0.28rem.

The tag silhouette is the recurring geometry, and it repeats at three scales via `clip-path`, always as a cut corner:
1. **Hero shoulder** — `polygon(0 4.5rem, 3.2rem 0, 100% 0, 100% 100%, 0 100%)`, a large top-left bevel.
2. **Record shoulder** — the same cut at 1.6rem on every work record, so the world holds through the middle of the page and not only at the bookends.
3. **Sign-off notch** — the cut inverted to the bottom-right (`calc(100% - 3rem)` / `100% - 3.4rem`), closing the document with the opposite corner.

Borders are structural and carry meaning by weight: 3px red = a record's top edge; 2px slate = a section or cluster boundary; 2px currentColor = an action; 1px `--steel-deep` = a row divider on light; 1px white 40–50% = a ruled field on red; 1px dashed white 65% = deliberately not a control.

**The Three-Scale Shoulder Rule.** The cut corner is the world's signature and appears at exactly three scales. A new panel either takes one of those three cuts or stays square. The "also-ran" record variant (`.rec--also`) proves the inverse: dropping the clip and the red edge is how a record is demoted.

## Imagery

Two kinds, and they do different jobs. Neither is decoration.

**Stock grain (generated).** `texture-substrate.webp` on the page ground and
`texture-tagstock.webp` on the two red panels, both Higgsfield-generated photographs of
blank card stock. They are applied as `background-image` blended with `soft-light` over
`background-color`, never as the background itself.

**The White-On-Tag Rule extends to imagery.** The generated red stock is lighter than
`--tag`, and white small text clears 4.5:1 on `#D93A1E` by only 0.09. Letting a texture
become the background would fail the contrast audit. The token colour stays the authority;
grain is layered over it, and the computed background must remain `rgb(217, 58, 30)`.
Textures are dropped entirely in print.

**Record plates (authored SVG).** Each work record carries a figure diagramming that
project's mechanism, drawn inline in the page's own tokens: `.ink` 1.4px slate strokes,
`.hair` 1px `--steel-deep` for guides and scales, `.mark` 2px `--tag` for the one thing
being traced, `.ok` 1.8px `--stamp` for a verified state. Uniform stroke weight across the
series, a 240×160 viewBox, a measurement scale along one edge, and a `<title>` carrying
real alt text. The plate floats right at ≥54rem and leads the record below it.

**The Authored-Plate Rule.** A new figure is drawn, not generated, and uses only these four
stroke classes. Generation was tried and rejected on evidence: the available model could not
hold the palette, defaulted to centred starbursts, and inserted stray lettering into work
whose whole argument is that nothing is fabricated. Anything with type in it is authored.

## Components

### Buttons (Actions)
Field-stamped rectangles: uppercase Courier Prime, 0.78rem, +0.12em tracking, `--s2 --s4` padding, hard square, 2px border.
- **Shape:** Square (0 radius), 2px solid border.
- **Primary:** Slate fill, steel text, slate border — the one filled control on the red field.
- **Secondary:** Transparent with a 2px `currentColor` border, inheriting white on the tag.
- **Hover / Focus:** Both invert on a 0.18s `--ease` (`cubic-bezier(0.16, 1, 0.3, 1)`) background/color transition — secondary goes white-on-red-text, primary goes steel fill with slate text. Focus is the global 3px slate outline at 3px offset.
- **Disabled:** `aria-disabled="true"` renders at 0.62 opacity with `cursor: not-allowed`.

### Chips (Role-lens buttons)
- **Style:** Transparent with a 1px slate border, uppercase mono at 0.74rem/+0.1em, `--s2 --s3` padding.
- **State:** Hover fills `--paper`. `aria-pressed="true"` fills conformance green with a white label; the "Show all" clear variant fills slate instead, so the way back is visually distinct from a selection.

### Cards (Work records)
- **Corner Style:** Square, with the 1.6rem clipped shoulder at top-left.
- **Background:** Record stock on the steel ground, with a 3px signal-red top edge.
- **Shadow Strategy:** None — see Elevation & Depth. The punched eyelet's inset shadow is the only depth cue.
- **Internal Padding:** `--s4` on three sides, `--s5` on the left to clear the punched shoulder.
- **Structure:** Title, one-line thesis, then a **so-what** line set apart by a 1px slate left rule and `wght` 600 at `wdth` 100, then dashed-bullet points (a 6px × 1px `--ink-soft` bar, not a disc), then a mono stack strip above a hairline.
- **Demoted variant:** Transparent background, `--steel-deep` top border, no clip, no eyelet.

### Stamps
- **Style:** A patch of steel stock on the red field, 2px slate border plus the struck double-rule ring, uppercase mono 0.7rem, `--s2 --s3` padding, and rotated off-square (−1.4deg, alternating +1.1deg) so the impression looks hand-struck.
- **Composition:** A quiet qualifier line above a bold value (`<b>`, 700, 0.86rem, +0.06em) — the pattern every stamp follows.
- **Conformance variant:** Green ink and green ring, rotated −2.2deg, used exactly once in the sign-off.

### Fields (Label + value rows)
- **Style:** No boxes. A field is a mono uppercase label followed by its value, sitting on a 1px hairline — `--steel-deep` on light stock, white 40% on the tag. The hero's head field ends in a `field__rule` flex spacer that runs the line out to the margin.
- **Focus:** Links inside fields carry 1px underline at 3–4px offset; hover flips a verification link from green to slate and a contact link from white to slate.

### Pending marker
Not a control, deliberately: dashed 1px white border, no fill, no hover, no href, on the sign-off field. It states an artifact that does not exist yet and must never acquire the solid border, the pointer, or the hover inversion that would make it look clickable.

### Signature: the tag panel
A full-bleed red region with a clipped shoulder, a punched eyelet in the corner, slate display type, white body copy, ruled fields, and struck stamps. It opens the document (hero) and closes it (sign-off, with the cut mirrored to the opposite corner). These are the only two of them; a third would spend the device.

### Motion
One authored moment. `settle` rotates and translates each work record from −1.6deg / +1.1rem into place over 0.9s on `--ease`, scroll-linked with `animation-timeline: view()` over `entry 0% → entry 46%`, `transform-origin: 8% 0` — the record hanging on its eyelet and settling like a tag on a wire. It is wrapped in `@media (prefers-reduced-motion: no-preference)` and animates from an already-visible state, so nothing is hidden waiting for scroll. Everything else that moves is a 0.16–0.28s color or opacity transition on hover, press, or lens change.

**The One Authored Moment Rule.** The page gets one motion idea. New motion must be either a state transition under 0.3s or a reuse of `settle`.

### Print
The print stylesheet is a real deliverable and must stay one: tag stock drops to white, all red and green go to black, `clip-path` and punches and eyelets are removed, the role lens / skip link / footer / field rules are hidden, `is-dimmed` resets to full opacity, records get `break-inside: avoid` with a 1pt rule, type resets to a 10.5pt/1.35 body with 26pt display, and external URLs are expanded after their links via `a[href^='http']::after`. Any new component ships with its print behavior.

## Do's and Don'ts

### Do:
- **Do** let red carry whole regions full-bleed, with content sitting inside the field.
- **Do** use pure white for every piece of small text on red, and reserve slate on red for display sizes only.
- **Do** create hierarchy on the tag with size and tracking (0.66rem / +0.22em labels), since tone is unavailable there.
- **Do** drive Archivo's width axis (68–88) as the hierarchy control, narrowing as type grows.
- **Do** reserve Courier Prime for labels, values, stamps and actions — the things a form would actually have printed.
- **Do** take one of the three established clip-path shoulders, or stay square.
- **Do** separate surfaces tonally (`paper` on `steel`) and with ruled weights (3px red / 2px slate / 1px hairline).
- **Do** ship interactive enhancements `hidden` in the markup and reveal them from JS, so the page reads in full with JS off.
- **Do** dim to foreground (0.34 opacity, 0.28s) and keep every element in the DOM.
- **Do** write the print rules for any new component in the same pass.

### Don't:
- **Don't** use a tint of the red hue for text on the tag; it tops out near 3.44:1 and was removed from the build for that reason.
- **Don't** add a third font family, an icon font, or an icon package.
- **Don't** use conformance green for anything that isn't a verified, checkable fact.
- **Don't** add outward drop shadows or lift a surface to separate it; inset punches and struck rings are the only shadows.
- **Don't** round a corner. The only curves are the punched eyelets.
- **Don't** filter, hide or remove content in response to the role lens.
- **Don't** style an unavailable artifact so it reads as a control — dashed border, no pointer, no hover.
- **Don't** add a third full-bleed tag panel; the hero and the sign-off are the pair.
- **Don't** add a second motion idea, or gate content visibility behind a scroll animation.
- **Don't** grow the hero at narrow widths in a way that pushes the contact action past the first viewport.

### Unfulfilled: imagery

The shipped page contains no raster imagery. Its only image asset is the 1200×630 Open Graph card; the favicon is SVG. The world is currently carried entirely by CSS fill, geometry and type, and it holds — image is an addition here, never a rescue. If the planned asset set (hero-primary, texture-substrate, work-01..06, divider-detail) is ever produced, the attachment points in the built system are: `texture-substrate` as a low-contrast overlay inside `.tag` / `.contact` (both already `position: relative; overflow: hidden`), which must not reduce white-on-red text contrast below 4.5:1; `hero-primary` as a right-hand element inside `.tag__body`, subject to the Fold-Reaches-Contact Rule; `work-01..06` as a fixed-ratio block at the head of `.rec__inner`, inside the record's clip and above the title; `divider-detail` as a repeating strip in place of a `--rule` hairline between sections. Any such image inherits the palette — it does not introduce a new hue.
