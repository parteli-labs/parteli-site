# parteli-site

Public marketing site for Parteli — a SaaS platform for independent powersports
dealerships. Next.js 16 (App Router) + TypeScript, deployed on Vercel.

**Styling is CSS Modules, not Tailwind.** `tailwindcss` is installed and wired into
`postcss.config.mjs` by the `create-next-app` scaffold, but `globals.css` never imports
it, so no utilities are generated and a Tailwind class in this codebase does nothing.
The whole visual system lives in `src/app/page.module.css` as custom properties. See
`DESIGN.md`, and `TODO.md` for the decision to either remove Tailwind or wire it up.

## The page

One page at `/`, in the "livery" direction — the wordmark's own world played straight:
race bodywork, number plate, checkered bands, vinyl lime on black. Three blocks and one
action: hero → "built for shops that are not a chain" → request a walkthrough.

It was chosen from five drafts, all of which are in commit `08e2503` if you want to look
back at the parts counter, the parts fiche, the repair order or the pit wall.

## The form

`POST /api/walkthrough` sends a walkthrough request by email through Resend. It needs
environment variables to work — see `.env.example` and the top of `TODO.md`. **Never
commit the API key.** Without `RESEND_API_KEY` the route returns 503 and the form shows
a `mailto:` fallback rather than pretending to have sent.

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
- `DESIGN.md` — the built visual system.
- `TODO.md` — what is left before this is public.
- `.impeccable/evidence/` — the business manager's rider-app and dealer-console mockups,
  kept as evidence, not authority.
- `../parteli-app-mvp-57/DESIGN.md` — the MVP app's own system ("Glacial Ridgeline").
  The machine line art in the number plate is that app's own
  `assets/art/machine-dirt.svg` geometry, transcribed to inline SVG.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
