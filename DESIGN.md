---
name: Parteli
description: Race livery for a shop system — vinyl lime on black bodywork, checkered bands, one action.
colors:
  black: "#080906"
  panel: "#111309"
  panel-2: "#1a1d10"
  line: "#2b2f1c"
  plate-ink: "#0a0b06"
  text: "#f3f2ea"
  dim: "#9b9d8c"
  faint: "#8a8c7c"
  lime: "#c8e81f"
  red: "#ff3417"
  decal-ink: "#2c3107"
  error-ink: "#ffb3a3"
  line-hover: "#464b2e"
  lime-mid: "#7d8f16"
  lime-deep: "#47500f"
typography:
  display:
    fontFamily: "Chakra Petch, Archivo, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 5.6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Chakra Petch, Archivo, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Chakra Petch, Archivo, sans-serif"
    fontSize: "clamp(1.8rem, 3.8vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.028em"
  number:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "clamp(9rem, 22vw, 16rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.16em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  success-title:
    fontFamily: "Chakra Petch, Archivo, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.02rem, 1.3vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-cta:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.2vw, 1.08rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  input:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  note:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.87rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  button:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  plate-row-label:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.04em"
rounded:
  none: "0"
spacing:
  gutter: "1rem"
  row: "0.6rem"
  stack: "1rem"
  card: "clamp(1.25rem, 3vw, 1.75rem)"
  section: "clamp(2rem, 4vw, 3rem)"
  block: "clamp(3rem, 8vw, 6.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.none}"
    padding: "0 2rem"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.plate-ink}"
  button-primary-focus:
    backgroundColor: "{colors.text}"
    textColor: "{colors.plate-ink}"
  input-field:
    backgroundColor: "{colors.black}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "0 0.85rem"
    height: "48px"
  input-field-focus:
    backgroundColor: "{colors.black}"
    textColor: "{colors.text}"
  card-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: "{spacing.card}"
  decal-panel:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(2rem, 4.5vw, 3.75rem) clamp(1.25rem, 3vw, 3rem)"
  plate-header:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.plate-ink}"
    typography: "{typography.label}"
    padding: "0.65rem 1rem"
  plate-row:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.dim}"
    padding: "0.6rem 1rem"
  plate-foot:
    backgroundColor: "{colors.black}"
    textColor: "{colors.faint}"
    padding: "0.6rem 1rem"
  checker-band:
    backgroundColor: "{colors.black}"
    height: "16px"
---

# Design System: Parteli

## Overview

**Creative North Star: "The Race Livery"**

The wordmark is already a racing decal — italic, checkered lead-in, lime-to-red gradient. This
system stops treating that as a problem to be sanded down and instead builds the bodywork the
decal belongs on. Everything on the page is a part of a machine's livery: checkered bands at the
edges, a number plate carrying the machine, vinyl lime cut on a slant and laid over black. The
brand is not applied to a neutral SaaS layout; the layout *is* the brand's own world played
straight.

The register is hard and industrial. Black ground, hairline borders, zero corner radius, no
shadows, no gradients as decoration, no glass. Type carries the aggression: a true motorsport
italic in uppercase for every display line, tight negative tracking at size, wide positive
tracking on the small caps labels. Density is generous rather than packed — with only three
blocks and one action on the page, the hero and the close each take more vertical room than
they would on a longer page, because a short page paced like a long one reads as a page with
sections missing.

The discipline that keeps this from turning into a motocross poster is colour restraint. Lime is
the only large colour field on the page and it belongs to the action. Red appears exactly once,
in one band. Everything else is black, panel, and three steps of desaturated warm grey. The
audience is a shop owner deciding in under a minute whether this is a real company, so the world
is loud but nothing in it is decorative.

**Key Characteristics:**

- Black bodywork ground (`#080906`) with two tonal panel steps above it and one below.
- Lime as the single action colour and the page's only large colour field; red used once.
- True italic display face (Chakra Petch), uppercase, never a skewed roman.
- Zero border radius everywhere; the only cut geometry is a 10px vinyl slant on the button.
- No shadows for depth — tonal layering plus 1px hairlines carry all structure.
- Exactly one authored motion moment on the whole page.
- Checkered pattern is built from repeating CSS gradients, never an image.

## Colors

A black-bodywork ground with one acid accent and one red spark, both sampled from the wordmark
itself and tamed one step for screen — the mark's true `#C3FE06` and `#FF2200` are too hot to
sit as a large field behind text.

### Primary

- **Vinyl Lime** (`--lime`): The action colour and the page's only large colour field. It carries
  the button, the plate header band, the plate row labels, the machine line art, the emphasised
  phrase in the headline, the input focus border, the success title, and the audience decal panel.
  At 14.28:1 against the ground and 14.12:1 with plate ink reversed out of it, it is legible in
  either direction, which is what allows it to work both as ink and as ground.

### Secondary

- **Racing Red** (`--red`): The flag spark. It appears in exactly one place on the page — the
  second checker band, between the hero and the audience panel — and in the matching band on the
  share card. It is never used for text, never for state, never for error.

### Neutral

- **Bodywork Black** (`--black`): The page ground, the input field ground, and the sunk ground
  under the plate foot. Also the theme colour for mobile browser chrome.
- **Panel** (`--panel`): One step up from the ground. Carries the number plate card and the form
  card — anything that should read as a component sitting on the bodywork.
- **Panel Two** (`--panel-2`): One step further up, used only as the fill of the oversize race
  number behind the machine. At 1.09:1 against panel it is deliberately at the threshold of
  visibility: a ghosted number, not a readable one.
- **Line** (`--line`): The hairline border on every card, plate row, and the footer rule. At
  1.45:1 it is a structural whisper, not a drawn line.
- **Plate Ink** (`--plate-ink`): The near-black that reverses out of lime — button label, plate
  header text, decal panel heading. Slightly warmer and deeper than the ground so lime fields
  read as printed vinyl rather than as a hole punched through the page.
- **Bone** (`--text`): Body and display text on dark ground (17.78:1).
- **Dim** (`--dim`): Secondary prose — the hero qualifier, the CTA body, plate row values, the
  success body, form labels (7.22:1 on ground).
- **Faint** (`--faint`): The quietest tier — plate foot, CTA note, form privacy line, input
  placeholders, the footer (5.82:1 on ground).
- **Decal Ink** (`decal-ink`): Body text inside the lime panel, a step softer than plate ink so
  the heading still leads (9.69:1 on lime).
- **Error Ink** (`error-ink`): Form error text. A warm salmon, not the racing red — error is a
  message to read, not a flag to wave (10.91:1 on panel).

### Named Rules

**The One Field Rule.** Lime is the only large colour field on the page. Exactly one section — the
audience decal — is a lime ground; everything else uses lime as ink, border, or a single control.
If a second lime field appears, the action stops being the loudest thing on the page.

**The One Band Rule.** Red appears exactly once, as one checker band. It is the flag's spark, not
a second accent. Do not give it text, state, hover, or a second placement.

**The Measured Floor Rule.** The neutral text tiers are set by measurement, not by taste.
`--faint` is `#8a8c7c` because its predecessor `#6a6c5e` measured 3.73:1 against the ground and
was carrying body text. The shipped ratios are `--text` 17.78:1, `--dim` 7.22:1, `--faint`
5.82:1, lime-on-black 14.28:1, plate-ink-on-lime 14.12:1, decal body on lime 9.69:1. Darkening any
of these to "calm the page down" re-opens a closed accessibility finding. Re-measure before
changing a grey.

**The Sampled-and-Tamed Rule.** Lime and red are derived from the wordmark, not chosen against it.
If the wordmark is revised or vectorised, re-sample and re-tame rather than keeping these hexes by
inertia — but re-measure against the ground before shipping the new values.

## Typography

**Display Font:** Chakra Petch (italic, 600/700), falling back to Archivo then `sans-serif`
**Body Font:** Archivo (400–700), falling back to `system-ui` then `sans-serif`
**Label/Mono Font:** JetBrains Mono (400/500), falling back to `ui-monospace` then `monospace`

All three load through `next/font/google` with `display: swap`, exposed as `--font-chakra`,
`--font-archivo`, and `--font-jet` on the page root.

**Character:** A motorsport italic against a neutral industrial grotesque. Chakra Petch is doing
the shouting — uppercase, tightly tracked, leading under 1 so the lines stack like a decal sheet.
Archivo is deliberately unremarkable underneath it, and JetBrains Mono with tabular figures
appears only where something is numbered or dated.

### Hierarchy

- **Display** (Chakra Petch italic 700, `clamp(2.5rem, 6.4vw, 5.2rem)`, line-height 0.94,
  tracking -0.028em, uppercase): The hero headline only. Capped at 16ch with `text-wrap: balance`,
  so it breaks into a stacked block rather than a wide banner. One phrase inside it is lime.
- **Headline** (Chakra Petch italic 700, `clamp(2rem, 4.4vw, 3.5rem)`, line-height 0.98,
  tracking -0.03em, uppercase): The closing CTA heading. Capped at 18ch.
- **Title** (Chakra Petch italic 700, `clamp(1.8rem, 3.8vw, 3.1rem)`, line-height 1,
  tracking -0.028em, uppercase): The audience decal heading, reversed out of lime.
- **Number** (Chakra Petch italic 700, `clamp(9rem, 22vw, 16rem)`, line-height 1): The race number
  behind the machine in the plate. Filled in `--panel-2`, absolutely positioned, `user-select:
  none` and `pointer-events: none`, marked `aria-hidden`. It is texture, not content.
- **Body** (Archivo 400, 16px base / 1.6): Prose. Measures are capped per block — 54ch for the
  hero qualifier, 52ch for the decal body, 50ch for the CTA text, 62ch for the footer note.
  Fluid sizes stay inside a narrow band (`clamp(1rem, 1.3vw, 1.15rem)`); body text never scales
  dramatically.
- **Label** (Archivo 700, 11px, tracking 0.16em, uppercase): Form field labels and the plate
  header band (0.18em there). The plate foot is the same idea one step quieter (10.5px, 0.16em,
  `--faint`).
- **Plate row label** (Chakra Petch italic 700, 13px, tracking 0.04em, uppercase, lime): The
  display face used small. This is the only place the italic appears below 14px.
- **Button** (Chakra Petch italic 700, 14px, tracking 0.1em, uppercase): See Components.
- **Mono** (JetBrains Mono, `font-variant-numeric: tabular-nums`): Used twice — the plate's
  "No. 01" and the footer copyright line. Nothing else.

### Named Rules

**The True Italic Rule.** The display face is a real italic cut (Chakra Petch loaded with
`style: ['italic']`), never `transform: skewX()` and never a roman with a synthesised oblique.
The posture is the wordmark's own. A faked slant reads as a broken font on the one page whose
entire premise is that the lettering is correct.

**The Tracking Inversion Rule.** Display type tracks negative (-0.025em to -0.03em); small
uppercase labels track wide positive (0.04em to 0.18em). The larger the type, the tighter it sets.
There is no neutral tracking on any uppercase run in this system.

**The Mono Is For Numbers Rule.** JetBrains Mono appears only where a figure is being presented as
a figure. It is not a texture, not a code-aesthetic device, and not an alternative body face.

## Layout

The page is a single centred column: `min(1280px, 100% - 2rem)` below 900px and
`min(1280px, 100% - 4.5rem)` above it, so the gutter widens with the viewport rather than the
measure running to the edge. The checker bands are the only elements that break this container —
they are full-bleed siblings of the wrap, which is what makes them read as edges of bodywork
rather than as rules inside a document.

**The page is three blocks and one action, and that is a structural commitment, not a stage of
completion.** Hero, audience decal, close. There is no navigation, no card grid, no feature tour,
no footer link columns, and exactly one call to action on the page. The single action is the
walkthrough form; the button in the hero is an in-page anchor to that same form, not a second CTA.

Each two-column block breaks at its own width rather than at a shared breakpoint, because each
one's content fails at a different measure: the wordmark grows at 700px, the footer splits at
760px, the CTA splits at 860px, the decal at 880px, the container gutter widens at 900px, and the
hero splits at 960px. There is no grid system here and no token scale of breakpoints — the
numbers are per-component and content-derived.

Vertical rhythm is fluid rather than stepped. Block padding runs on `clamp()` pairs
(`clamp(3rem, 8vw, 6.5rem)` at the hero's top down to `clamp(2rem, 4vw, 3rem)` where the decal
meets the close), and internal gaps do the same. The fixed values that recur are small and
structural: `1rem` horizontal padding inside every plate row, plate header, plate foot and form
gap; `0.6rem` vertical on plate rows.

Column ratios lean slightly away from centre in both two-column blocks: the hero is
`1.1fr / 0.9fr` (text over plate), the decal is `0.9fr / 1.1fr` (heading under body), and the CTA
is `1fr / 24rem` (a fixed-width form against fluid prose).

## Elevation & Depth

**This system has no shadow vocabulary.** There is no `box-shadow` anywhere in the page's
stylesheet except as a focus ring, and no shadow is ever used to lift, float, or separate a
surface. Depth is entirely tonal and linear.

Four grounds stack from `--black` through `--panel` to `--panel-2`, with `--plate-ink` sitting
below the ground as the reverse-out ink for lime fields. Separation between them is carried by
1px `--line` hairlines at 1.45:1 — visible as structure, never as a drawn frame.

The one inversion is deliberate: the plate foot drops back to `--black` beneath a `--line` rule,
so the plate's last row reads as the foot of the plate rather than as a fourth spec row with a
missing value.

### Named Rules

**The No-Shadow Rule.** Surfaces are flat. Depth comes from the tonal step and the hairline. If a
new surface needs to feel raised, give it `--panel` and a `--line` border — do not introduce a
shadow token, and do not reach for a gradient, a blur, or a glass effect.

**The Ghost Number Rule.** `--panel-2` exists to sit just above `--panel` at the threshold of
visibility (1.09:1). Anything filled in it is texture and must be `aria-hidden`, non-selectable,
and never load-bearing for meaning.

## Shapes

**Every corner on this page is square.** There is no radius scale; `.formInput` carries an explicit
`border-radius: 0` to override the UA default, and nothing else declares a radius at all.

The one piece of cut geometry is the button: `clip-path: polygon(10px 0, 100% 0, calc(100% - 10px)
100%, 0 100%)` — a 10px parallelogram slant, the way vinyl is trimmed off a roll. It is the only
non-rectangular silhouette in the system.

The recurring texture is the checkered band: two 45° `linear-gradient` layers on a 16px tile,
offset `0 0` and `8px 8px`, over a black background colour. **It is drawn, not an image.** A 16px
band height means each band is exactly one tile tall — two rows of half-squares reading as one row
of a flag. The share-card template scales the same construction to an 18px tile at 18px height.

Line art follows the same logic: the machine is inline SVG (130×62 viewBox, `fill: none`,
`stroke: currentColor`, round caps and joins) rather than a baked PNG, so its colour and weight
come from the world it sits in. Its geometry is transcribed unchanged from the sibling Expo app's
`assets/art/machine-dirt.svg`.

### Named Rules

**The Square Corner Rule.** Radius is zero everywhere, including inputs and buttons. The button's
slant is the entire form language's exception, and it is a cut, not a curve.

**The Drawn-Not-Shipped Rule.** Pattern and illustration are authored in CSS and SVG. The only
raster asset in the visual system is the wordmark PNG, and that is a known open item, not a
precedent.

## Components

### Buttons

There is one button. It is the page's only action, and it appears twice: as an in-page anchor in
the hero and as the form's submit.

- **Shape:** Square (0 radius) with a 10px vinyl slant cut via `clip-path`. Minimum height 50px,
  2rem horizontal padding, 2px solid border in the same lime as the fill.
- **Primary:** Lime ground, plate-ink label. Chakra Petch italic 700 at 14px, 0.1em tracking,
  uppercase. Inline-flex with a 0.6rem gap. Inside the form it goes full width and centres.
- **Hover** (`@media (hover: hover)` only, so it never sticks on touch): ground and border both
  flip to `--text`. 140ms transition on background, colour, and border-color.
- **Focus:** Same bone flip as hover, plus `box-shadow: inset 0 0 0 3px var(--plate-ink)` with
  `outline: none`.

  **The `clip-path` clips the UA focus outline.** An outline paints outside the border box and is
  cut away by the clip; an inset ring paints inside it and survives. The inset ring is not a style
  preference — it is the only thing making keyboard focus visible on the one action this page has.
  Anyone who removes it, or who removes `outline: none` and expects the default outline to return,
  silently deletes keyboard focus from the page's entire conversion path. If the slant is ever
  removed, restore a normal outline in the same change.
- **Disabled:** 0.55 opacity, `cursor: progress`. Used only while the form is sending.

### Inputs / Fields

Instrument-panel register, not a signup widget.

- **Style:** Black ground (darker than the card it sits in), 1px `--line` border, square corners
  via explicit `border-radius: 0`, 48px minimum height, 0.85rem horizontal padding, 15px text.
  Placeholders in `--faint`.
- **Hover:** border lifts to `#464b2e` — a literal, the only interaction value in the sheet that
  is not a token.
- **Focus:** `outline: none`, border to lime, plus `box-shadow: 0 0 0 1px var(--lime)` to double
  the hairline's weight without shifting layout. No clip-path here, so an outer ring is safe.
- **Disabled:** 0.55 opacity, matching the button.
- **Label:** 11px Archivo 700, 0.16em tracking, uppercase, `--dim`, stacked 0.4rem above the field.
- **Error:** One `role="alert"` paragraph below the submit in `error-ink`, toggled by the `hidden`
  attribute. When the server reports the send path is unavailable it appends a `mailto:` fallback
  link in lime. Errors move focus to the email field, not to the message about it.

### Cards / Containers

Two cards exist, both the same material: `--panel` ground, 1px `--line` border, square corners, no
shadow. The form card pads at `clamp(1.25rem, 3vw, 1.75rem)`. The number plate clips its contents
(`overflow: hidden`) so the oversize race number is cropped by the card edge.

### The Number Plate (signature component)

The page's memorable moment, and the only remaining trace of the product on the surface.

- **Header band:** full-width lime strip, plate-ink text, 11px 700 uppercase at 0.18em tracking,
  a label on the left and a mono figure on the right.
- **Body:** minimum 200px tall, `display: grid; place-items: center`. The race number is absolutely
  positioned across the full inset in `--panel-2`; the machine SVG sits on top in lime at
  `min(100%, 340px)` with `position: relative` to raise it above the number.
- **Rows:** a `<dl>` of label/value pairs, hairline-separated, label in the small lime italic and
  value right-aligned in `--dim`. The rows restate the headline's three nouns — they carry no claim
  the headline has not already made.
- **Foot:** centred, sunk to `--black`, 10.5px 700 uppercase at 0.16em in `--faint`.

### Checker Band

A 16px-tall full-bleed divider built from two repeating 45° gradients. Two instances on the page:
lime at the top edge, red between the hero and the audience decal. Marked `aria-hidden`.

### The Decal Panel

The audience block: a full-width lime ground with plate-ink heading and decal-ink body, splitting
to `0.9fr / 1.1fr` at 880px. This is the page's single large colour field and the only place the
palette fully inverts.

### Motion

**The page has exactly one authored motion moment.** `flagSweep` runs once on load on both checker
bands — 900ms, `cubic-bezier(0.16, 1, 0.3, 1)` (exponential ease-out, the way a flag is waved and
then dropped), `both` fill, with the red band delayed 120ms behind the lime.

Two facts about it that are easy to break:

1. **The `from` offsets are exact multiples of the 16px tile, and that is load-bearing.** The
   keyframe runs from `-96px 0, -88px 8px` to `0 0, 8px 8px` — both layers travel exactly 96px,
   which is exactly 6 tiles. Because a repeating pattern offset by a whole number of tiles renders
   identically to one at zero, the start frame is visually indistinguishable from the rest frame.
   The bands are fully painted before, during, and after; the sweep is visible only as motion
   through the intermediate non-multiple positions. Change either offset to a value that is not a
   multiple of 16 and the pattern lands out of register — the band will be visibly misaligned at
   rest, and under `prefers-reduced-motion` it will be misaligned permanently.
2. **`animation-fill-mode: both` holds the rest state.** Nothing about the bands' appearance depends
   on the animation running to completion. `globals.css` collapses all animation and transition
   durations to 0.01ms under `prefers-reduced-motion: reduce`, and because of (1) the reduced-motion
   result is simply a correct static band.

Everything else that moves is a 140ms state transition on a control — button colours, input border
colour. There is no scroll-triggered animation, no parallax, no entrance stagger, and no
`scroll-behavior: smooth`.

### The Share Card

`public/og.png` (1200×630) is part of this system and is rendered from `tools/og-template.html`,
which reproduces the world at card scale: same ground, same palette, same Chakra Petch italic
headline with the lime phrase, same number plate with the same machine geometry, checker bands top
and bottom at an 18px tile. Its headline line breaks are explicit so the lime phrase never splits.

**It is a static render, not generated at build time.** Nothing regenerates it when the page
changes. If the headline, the wordmark, or the palette moves, the card has to be regenerated by
hand: substitute a data URI for `WORDMARK_SRC` in the template and screenshot at 1200×630.

### The Wordmark

Ships as `public/brand/parteli-wordmark.png` (1741×824, transparent), rendered at 36px tall,
52px above 700px viewport width, with `priority`. PRODUCT.md records it as **a candidate, not a
locked commitment** — drafts that reinterpret or argue against it are permitted. Its true sampled
colours are `#C3FE06` and `#FF2200`; the screen palette is the tamed step down from those.

## Do's and Don'ts

### Do:

- **Do** keep lime as the single large colour field and the single action colour. One lime ground
  per page.
- **Do** use the real italic cut for every display line. Load the italic weight; never skew a roman.
- **Do** measure text colours against their actual ground before changing one, and keep the shipped
  floors (`--dim` 7.22:1, `--faint` 5.82:1).
- **Do** keep the button's focus ring inset. If the `clip-path` slant goes, restore a real outline
  in the same change.
- **Do** build pattern and illustration in CSS and SVG. The checker is gradients; the machine is
  inline paths.
- **Do** keep checker offsets on exact multiples of the tile size.
- **Do** pace a short page like a short page — generous block padding is what keeps three blocks
  from reading as a page with sections missing.
- **Do** regenerate `public/og.png` by hand whenever the headline, wordmark, or palette changes.

### Don't:

- **Don't** add a second call to action, a navigation bar, a card grid, or a feature tour. The page
  is three blocks and one action by decision.
- **Don't** give red a second appearance. One checker band is its entire budget.
- **Don't** introduce a border radius, a shadow token, a gradient used as decoration, or a glass
  effect. Depth is tonal and hairline.
- **Don't** darken `--faint` or `--dim` toward their predecessors. `#6a6c5e` measured 3.73:1 and
  was carrying body text; that finding is closed and should stay closed.
- **Don't** remove `outline: none` + `inset 0 0 0 3px` from `.btn` and assume the browser default
  returns. The clip-path eats it.
- **Don't** use `--panel-2` for anything a reader needs to see, or for anything not marked
  `aria-hidden`.
- **Don't** use JetBrains Mono as a texture or a body alternative. Numbers only.
- **Don't** add a second authored animation without deciding what the first one costs. One moment is
  the budget.
- **Don't** ship raster art for new elements. The wordmark PNG is an open item, not a precedent.

## The pack

The hero plate carries three machines, not one, because the lead line reads "Many riders."
They are the same inline-SVG geometry at three tones, staggered left/right/left and
overlapped by 11%:

| Position | Token | Role |
|---|---|---|
| Front | `lime` `#c8e81f` | The lead machine, full accent |
| Middle | `lime-mid` `#7d8f16` | One step back |
| Rear | `lime-deep` `#47500f` | Two steps back |

**This is the only depth in the system, and it is tonal.** There are no shadows anywhere on
the page and this does not introduce one — recession is carried by the stroke colour alone,
which is why it survives the no-shadow rule. If a fourth machine is ever added, it needs a
fourth tone, not an opacity: opacity on a stroke over the panel ground reads as a different
grey than the token ramp and breaks the recession.

The ghost numeral behind the pack stays `01`. It is doing double duty — a race number, and
the "One system" the accent line names — so it should not be pluralised or removed when the
pack grows.

The plate's rows (Parts / Bays / Money) deliberately do **not** restate the headline. The
lead line says who the system is for; the rows say what it does. When the headline was still
"The parts, the bays and the money" those rows were an echo; they stopped being one when the
headline changed, and they should not be re-synced to it.

## Open

- **No `.impeccable/design.json` sidecar.** The frontmatter above carries the token
  primitives, but the motion tokens, breakpoints and tonal ramps that normally live in the
  sidecar are recorded as prose in this document instead. Regenerate it with
  `/impeccable doctor` if the live-iteration panel needs it.

A finish review closed all its material findings. What follows is recorded as unrealised potential
or as known state — not as defects to be silently patched, and not as rules for a future surface to
inherit.

**Unused capacity in the world.** The livery premise supports more than the build spends:

- **Depth.** Bodywork has panel gaps, seams, and layered material. The page uses a single flat
  stack of tonal grounds and has not explored the world's own depth vocabulary.
- **Cut geometry beyond the button.** The 10px vinyl slant appears on exactly one element. Panels,
  bands, and card corners could carry the same cut; none do.
- **The lime pinstripe.** Livery uses a thin accent line to trace a panel edge. Nothing in the build
  does this — every lime edge is either a full field or a 1–2px control border.
- **A second use of red.** Constrained to one band by The One Band Rule, which is a colour-discipline
  decision rather than an exhaustion of the material. If the page grows, red is the obvious reserve.
- **Raster material.** Livery is photographable — vinyl grain, flake, a machine photograph. The page
  carries no imagery at all beyond the wordmark, by choice and because PRODUCT.md records that no
  usable photography exists.

**Known state worth flagging.**

- **`overflow-x: hidden` on `.root`** suppresses horizontal overflow rather than proving there is
  none. It hides any future layout escape instead of surfacing it. Removing it and fixing whatever
  breaks would be the honest version; nothing currently overflows that the rule is known to be
  catching.
- **The desktop success state leaves a void.** The CTA grid is `1fr / 24rem` with `align-items:
  start`. When the form swaps to the short `.formDone` block, the right column collapses to a few
  lines and leaves a large empty area beside the heading. The mobile stacked layout is unaffected.
- **"No. 01" appears twice inside the plate** — once as the mono figure in the header band and once
  as the oversize ghosted race number in the body. Both are the same "01". It reads as a repeat
  rather than as two registers of the same number.
- **The wordmark is raster and unlocked.** A 1741×824 PNG that cannot be recoloured in CSS, will be
  soft on high-DPI at larger sizes, and cannot cleanly serve as a favicon or OG asset. The favicon
  is still the Next.js scaffold default pending a vector. PRODUCT.md also still records the mark as
  a candidate rather than a commitment, so the palette's derivation is provisional too.
- **Two literals are not tokens.** `#464b2e` (input hover border) and `#ffb3a3` (error text) are
  written inline in `page.module.css` rather than declared on `.root`. `error-ink` is recorded in
  the frontmatter because error is a role a future surface will need; the hover value is a one-off
  and stays a literal until something else needs it.
- **Tailwind v4 is installed and unused.** `tailwindcss` and `@tailwindcss/postcss` are in
  `devDependencies` and the PostCSS plugin is configured, but `globals.css` never imports Tailwind,
  so no utilities are generated and the page uses none. The entire visual system is CSS Modules and
  custom properties. Any claim that this project is styled with Tailwind — including the one in
  `README.md` and `PRODUCT.md` — does not describe the build.
- **The page asserts rather than demonstrates.** The product-screen recreations were cut when the
  page was trimmed to a teaser, so the machine line art in the number plate is the only product
  artefact left. Recorded here because it is the standing risk on this surface, and because a future
  contributor adding proof back should add it in this world rather than importing another.
