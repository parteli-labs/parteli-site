# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated. Next.js 16 (App Router) + TypeScript + Tailwind v4, deployed on Vercel — the user
named Vercel as the host and asked for the codebase to be set up, so the framework choice was
made for them rather than interviewed. Repo: `github.com/parteli-labs/parteli-site` (private).

## Users

1. **The independent powersports dealer (primary).** A shop owner or service manager who runs a
   small multi-bay operation and has never heard of Parteli. They arrive cold — a link from the
   business manager, a QR code, a search — and give the page well under a minute on a phone or a
   shop-counter desktop. The job: decide whether this is worth a conversation. Success is them
   asking for a walkthrough or joining the alpha.
2. **The curious investor (secondary).** Reads the same page looking for a different thing:
   is this a real product, does this team understand powersports retail, is there a business
   here. They must never be served a separate watered-down story — the dealer pitch *is* the
   investor proof.

This site is not for riders. The consumer marketplace is a later phase and is not this surface's
job.

## Product Purpose

Parteli is a SaaS platform for independent powersports dealerships: a dealer management system,
a parts-sourcing engine, and (later) a rider-facing marketplace that routes consumer demand back
to platform dealers.

This repository is the **public front door** — a landing page that gives investors and dealers a
credible face for the company and a teaser of the product, ahead of the Phase 1 alpha. It is
marketing, not product. Success is a qualified inbound conversation, not a signup funnel.

## Positioning

**Dealers make money; the platform does not take a cut of their margin.** Parteli monetizes
through SaaS subscription rather than skimming dealer margin, and sequences dealer-first: the
management system is the product, and consumer demand is later routed back to platform dealers
rather than competing with them.

## Operating Context

- **Cold arrival, short visit, small screen.** A dealer reaching this page is between jobs, often
  on a phone, often standing. There is no session, no login, no second visit assumed.
- **The page carries the whole pitch.** There is no deck attached, no demo video, no sales call
  preceding it. Whatever belief the page fails to earn is not recovered later.
- **The MVP demo exists and is the proof.** A working Expo app (`../parteli-app-mvp-57`) drives a
  seven-step dealer/rider loop. Its interface is the most credible asset this project has.

## Capabilities and Constraints

**In scope:** a single marketing surface — what Parteli does for a dealer, what the product looks
like, and one way to start a conversation.

**Out of scope for this surface:** authentication, pricing tables, a rider/consumer story, live
product functionality, a blog or docs.

**Claim constraints (confirmed with the user, and binding):**

- **Product UI may be shown.** Real screenshots or faithful recreations of the MVP demo interface
  are approved as the page's visual proof.
- **No named partners.** Cycle Works Red Deer and every other dealer stays unnamed. No logos, no
  "trusted by", no customer count.
- **No market or geography framing as a claim.** The Alberta focus and the dealer-consolidation
  thesis are not asserted on this page.
- **Outcomes, not mechanism.** The page describes what a dealer gets — margin kept, parts sourced
  faster, the shop's work visible in one place. It does not explain or demonstrate the landed-cost
  ranking that makes it work. The wedge stays unpublished.
- **No traction, funding, pricing, benchmarks, testimonials, or integration status.** None exist.
  Inventing any of them is the one unrecoverable failure on an investor-facing page.

**Terminology in use across the product** (available, not all of it appropriate for this surface):
Part Lock · Margin Capture · Tech Tracker · My Clients · Dealer Console · My Garage · service
board · job ticket · landed cost · rider price · dealer margin captured.

**Undecided:** whether the consumer brand is spelled "Let's Ryde" (the user's product docs) or
"Let's Ride" (the business manager's artifacts). Not needed for this surface; resolve before any
consumer-facing copy ships.

## Brand Commitments

- **The name is Parteli.** The company entity is Parteli Labs.
- **A wordmark exists and is a candidate, not locked.** An italic racing-decal lettermark with a
  checkered-flag lead-in, in a lime-to-red gradient, supplied by the business manager. Saved at
  `public/brand/parteli-wordmark.png` (1741×824, transparent). Its true colors are `#C3FE06`
  lime and `#FF2200` red; the business manager's own CSS already tames these to `#C6E82F` and
  `#FF4A28`. The user has approved drafts that reinterpret or argue against it.
- **Voice:** direct, concrete, industry-literate; no overclaiming. Inherited from the app's product
  record and reaffirmed here — on a page with no traction to show, credibility is the only asset.
- **No binding typeface or palette.** Two candidate systems exist as evidence (below); neither has
  authority over this surface.

## Evidence on Hand

- `../parteli-app-mvp-57/DESIGN.md` — the user's own design system for the MVP app ("Glacial
  Ridgeline"): `#0D1316` ground, ice `#5CCBE2` for identity only, trail orange `#E8873A` for the
  single primary action, Bricolage Grotesque / Archivo / IBM Plex Mono, hairline borders,
  line-art machines, and explicit refusals — no gradients, no glass, no shadows, status never
  carried by colour alone.
- `../parteli-app-mvp-57/PRODUCT.md`, `SPEC.md`, `PLAN.md` — product truth for the app.
- Business manager's artifacts (rider app + dealer console mockups), extracted to
  `.impeccable/evidence/`: ground `#0A0A0A`, acid lime `#C6E82F`, racing red `#FF4A28`, warm
  off-white `#F2F2ED`, Oswald / Inter / JetBrains Mono. Authored by a non-designer and explicitly
  non-binding.
- **Absent, and not to be fabricated:** real supplier pricing, dealer names, customer quotes,
  usage numbers, funding, pricing tiers, and integration status. No photography of real shops or
  real staff exists.

## Product Principles

1. **Credibility is the conversion.** A dealer decides in seconds whether this is a real company.
   Every element either earns that or costs it; nothing on the page is decorative filler.
2. **Show the product, don't describe it.** The MVP interface is the only proof available. Lead
   with it rather than with adjectives about it.
3. **Outcomes for the dealer, always.** Every claim resolves to something a shop owner feels:
   money kept, time saved, work visible. Platform capability that does not resolve that way is
   not on this page.
4. **Never overclaim.** No invented partners, numbers, or status. An honest teaser beats a
   confident fiction, because the audience includes people who can check.
5. **One conversation, one action.** The page asks for exactly one thing. A second competing
   call to action halves the first.

## Accessibility & Inclusion

No product-specific requirement established beyond meeting WCAG AA contrast. Assume a phone in
variable light and a desktop at a parts counter; both are ordinary web conditions.
