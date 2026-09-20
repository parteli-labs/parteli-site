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

Exactly one: request a walkthrough, via a two-field form (shop name optional, email
required) posting to `/api/walkthrough`, which sends through Resend. A `mailto:` link is
the fallback shown only when the API is unreachable or unconfigured. No signup, no
pricing, no second CTA competing with it.

## Proof and content

None rendered. The MVP interface recreations were cut when the page was trimmed to a
teaser, so the only product artefact left is the machine line art in the number plate —
`machine-dirt.svg` geometry from `../parteli-app-mvp-57`. The page asserts rather than
demonstrates; that is a known, user-chosen trade and the standing risk on this surface.

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

## Chosen

**`/v5-livery`** — the race livery. Chosen by the user over the assigned candidate 5,
which the roll permits: a user-pinned direction beats the roll. Reason given: the
checkered bands match the wordmark.

Trimmed on selection to three blocks and one action — hero, the "not a chain" decal
panel, and the close. The outcomes list and the product-screen section were cut at the
user's direction; both are recoverable from commit `08e2503`.

Consequence to watch: the product screens were the surface's only proof, so the page now
asserts rather than demonstrates. The machine line art in the number plate is all that
remains of the product. Flagged to the user; they chose the teaser.

## Shipped state

Promoted to `/` on 2026-09-19. The four unchosen drafts and the review index are removed;
they remain in commit `08e2503`.

## Unresolved

- See `TODO.md`. Blocking a public launch: Resend key and verified sender, the
  `robots: noindex` decision, and whether `hello@parteli.com` is a real mailbox.
- The wordmark is still a raster PNG and still recorded as a candidate, not a commitment.
- Whether the wordmark is locked (currently a candidate) and whether it should be
  vectorised — it ships as a 1741×824 PNG.
- Whether a form backend replaces the mailto.
