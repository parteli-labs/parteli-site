# parteli-site

Public marketing site for Parteli — a SaaS platform for independent powersports
dealerships. Next.js 16 (App Router) + TypeScript + Tailwind v4, deployed on Vercel.

## Right now: five landing drafts

`/` is a review index. Each route below is a complete first draft of the same page in
a different visual world:

| Route | World |
|---|---|
| `/v1-counter` | The parts counter — bin labels, thermal ink, steel shelving |
| `/v2-fiche` | The parts fiche — exploded figure keyed to a table |
| `/v3-workorder` | The repair order — NCR carbon copy, typed entries |
| `/v4-pitwall` | The pit wall — the service board as a timing board |
| `/v5-livery` | The livery — race bodywork, the wordmark's own world |

Pick one and it gets the finish pass (review, fixes, `DESIGN.md`). The other four come
down.

## Claim rules

These are binding and recorded in `PRODUCT.md`:

- No named partners or dealer logos.
- No traction, funding, pricing, benchmarks, testimonials, or integration status.
- No market-size or geography framing asserted as a claim.
- **Outcomes only** — the landed-cost ranking that makes the product work is not
  explained or demonstrated on this site.
- Every product interface on the page is labelled as sample data.

## Where the design came from

- `PRODUCT.md` — product truth and the claim rules above.
- `.impeccable/surfaces/src-app-page-tsx.md` — the surface brief and the direction round.
- `.impeccable/evidence/` — the business manager's rider-app and dealer-console mockups,
  kept as evidence, not authority.
- `../parteli-app-mvp-57/DESIGN.md` — the MVP app's own system ("Glacial Ridgeline").
  The product screens on every draft are recreated from its tokens and its
  `assets/art/machine-*.svg` geometry.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
