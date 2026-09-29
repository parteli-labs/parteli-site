# TODO

Ordered roughly by what blocks a public launch.

## Before this is public

- [x] **Send one real test request through the deployed form.** Cam set the Resend env vars
      on 2026-09-19; nothing in this repo can confirm they are correct. Submit the live form
      once and confirm the mail arrives. If it does not, the two usual causes are
      `CONTACT_FROM_EMAIL` still on `onboarding@resend.dev` (which only delivers to the
      address owning the Resend account) or `CONTACT_TO_EMAIL` pointing at a mailbox that
      does not exist. A 503 in the browser means the key is not reaching the function;
      a 502 means Resend rejected it, and the reason is in the Vercel function log.
- [x] **Confirm `ryder@parteli.ca` is a real, monitored mailbox.** It is `CONTACT_TO_EMAIL`'s
      default and the address the form shows as its fallback.
- [ ] **Decide on indexing.** `src/app/layout.tsx` currently sets `robots: { index: false }`.
      That is deliberate for a pre-launch page — remove it when you want to be found.

## Brand

- [ ] **Vectorise the wordmark.** It ships as `public/brand/parteli-wordmark.png`
      (1741×824, transparent). It renders fine at 36–52px but it is raster: it will be soft
      on high-DPI displays at larger sizes, cannot be recoloured in CSS, and cannot be used
      as a favicon or OG asset cleanly. Trace to SVG, keep the lime→red gradient as a real
      `linearGradient`. Sampled source colours: `#C3FE06` lime, `#FF2200` red.
- [ ] **Decide whether the wordmark is locked.** `PRODUCT.md` still records it as a
      candidate, not a commitment.
- [x] **Favicon.** The logomark, traced from a screenshot: `src/app/icon.svg`, plus
      `favicon.ico` and `apple-icon.png` rendered from it. Colours are estimated; swap in
      the source file's values if Ryder supplies one.

## Page

- [ ] **Confirm the share card resolves once DNS lands.** `metadataBase` now defaults to
      `https://www.parteli.ca` in code, so nothing needs setting for production. Paste the
      live URL into a link preview checker and confirm `og.png` loads. Preview deploys
      point at themselves automatically; `NEXT_PUBLIC_SITE_URL` overrides both if needed.
- [ ] **Regenerate `public/og.png` if the headline, hero photo or wordmark changes.** It is a
      static 1200×630 render of the home hero, not generated at build time. The template is
      `tools/og-template.html`: open it from `tools/` (its image paths are relative) and
      screenshot it at exactly 1200×630. Re-rendered for the redesign on 2026-09-28.
- [ ] Consider a spam/rate limit on `/api/walkthrough` beyond the honeypot if it gets
      scraped. Vercel's firewall or a simple IP throttle would do.

## Cross-repo

- [x] The consumer brand is **"Let's Ryde"**, confirmed by Ryder on 2026-09-28. The app
      repo (`../parteli-app-mvp-57`) already spells it that way.

## Recoverable, if wanted

- [ ] The product-screen section (rider garage, service board, job ticket) and the
      three-outcome list were cut when the page was trimmed to a teaser. Both are intact in
      commit `08e2503`, along with the four unchosen drafts, if the page ever reads thin.
