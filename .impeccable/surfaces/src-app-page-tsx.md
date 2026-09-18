---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

## Scope

The public marketing site at `/`. Visitor mode: **Persuade**.

## Audience and job

An independent powersports dealer arriving cold, usually on a phone, giving the page
well under a minute, deciding only whether this is worth a conversation. A curious
investor reads the same page and must find the dealer pitch itself convincing — there
is no separate investor story.

## Action

Exactly one: request a walkthrough (mailto). No signup, no pricing, no second CTA
competing with it.

## Proof and content

The MVP app's interface, recreated in HTML/CSS from `../parteli-app-mvp-57`
(`DESIGN.md` tokens, `assets/art/machine-*.svg` geometry), labelled as sample data
wherever it appears. This is the only proof available and it is the page's centre.

## Constraints

Binding, from PRODUCT.md: no named partners, no traction/funding/pricing/testimonials,
no market or geography claim, and **outcomes only** — the landed-cost ranking that makes
the product work is never explained or demonstrated here.

## Direction round

Seed key `173c3e44`, scope `direction`, mode `persuade`, assigned index **5**. Seven
grounded candidates were derived from the dealer's own world; six catalog challengers
(ASCII scene, nixie counter, socialist kiosk print, Hoffmann showroom, pickling calendar,
origami crane) were fused and all lost on audience identification.

Five drafts were built rather than one, because the brief asked for 3–5 to choose from:

| Route | World | List position |
|---|---|---|
| `/v1-counter` | Parts counter — bin labels, thermal ink, shelving, catalog tab | 5 (assigned) |
| `/v2-fiche` | Parts fiche — exploded figure keyed to a table | 1 |
| `/v3-workorder` | Repair order — NCR carbon copy, typed entries, stamp | 2 |
| `/v4-pitwall` | Pit wall — the service board as a timing board (continues the app's system) | 4 |
| `/v5-livery` | Race livery — the wordmark's own world played straight | 7 |

## Memorable moment

Per draft: V1's scannable Code 39 barcodes; V2's exploded assembly with ghosted
component; V3's headline typed into DESCRIPTION OF WORK plus the rubber stamp; V4's
live-pulse on the running job; V5's number plate behind the machine.

## Unresolved

- Which draft becomes the site. The other four come down.
- Whether the wordmark is locked (currently a candidate) and whether it should be
  vectorised — it ships as a 1741×824 PNG.
- "Let's Ryde" vs "Let's Ride" spelling, before any consumer-facing copy.
- Whether a form backend replaces the mailto.
