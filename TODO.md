# TODO

Ordered roughly by what blocks a public launch.

## Before this is public

- [ ] **Set `RESEND_API_KEY`.** Copy `.env.example` → `.env.local` and fill it in, then add
      the same variable in Vercel → Project → Settings → Environment Variables. Without it
      the form returns 503 and falls back to the `mailto:` link, which is safe but not the
      intended path. **Do not commit the key or paste it into a chat.**
- [ ] **Verify a sending domain in Resend** and set `CONTACT_FROM_EMAIL` to an address on
      it. The default `onboarding@resend.dev` only delivers to the address that owns the
      Resend account — fine for testing, silently useless in production.
- [ ] **Set `CONTACT_TO_EMAIL`** to wherever requests should actually land. Defaults to
      `hello@parteli.com`; confirm that mailbox exists and someone reads it.
- [ ] **Decide on indexing.** `src/app/layout.tsx` currently sets `robots: { index: false }`.
      That is deliberate for a pre-launch page — remove it when you want to be found.
- [ ] **Confirm `hello@parteli.com` is real.** It is used as the mailto fallback in the form
      error state and would be visible to a dealer if the API is down.

## Brand

- [ ] **Vectorise the wordmark.** It ships as `public/brand/parteli-wordmark.png`
      (1741×824, transparent). It renders fine at 36–52px but it is raster: it will be soft
      on high-DPI displays at larger sizes, cannot be recoloured in CSS, and cannot be used
      as a favicon or OG asset cleanly. Trace to SVG, keep the lime→red gradient as a real
      `linearGradient`. Sampled source colours: `#C3FE06` lime, `#FF2200` red.
- [ ] **Decide whether the wordmark is locked.** `PRODUCT.md` still records it as a
      candidate, not a commitment.
- [ ] **Favicon and OG image.** Still the Next.js scaffold default. Both want the vector
      wordmark first.

## Page

- [ ] Add a `<meta>` description and Open Graph tags — the page has a title only, so any
      link to it previews badly.
- [ ] Consider a spam/rate limit on `/api/walkthrough` beyond the honeypot if it gets
      scraped. Vercel's firewall or a simple IP throttle would do.

## Cross-repo

- [ ] The app repo (`../parteli-app-mvp-57`) still spells the Phase 3 consumer brand
      **"Let's Ryde"** in its `PRODUCT.md`. Cam has settled on **"Let's Ride"**. Correct it
      next time that repo is touched.

## Recoverable, if wanted

- [ ] The product-screen section (rider garage, service board, job ticket) and the
      three-outcome list were cut when the page was trimmed to a teaser. Both are intact in
      commit `08e2503`, along with the four unchosen drafts, if the page ever reads thin.
