/**
 * Factual copy for the Parteli landing page.
 *
 * CLAIM RULES (PRODUCT.md → Capabilities and Constraints; confirmed with the user):
 *   - No named partners, dealers, or logos.
 *   - No traction, funding, pricing, benchmarks, testimonials, or integration status.
 *   - No market-size or geography framing asserted as a claim.
 *   - Outcomes only. The landed-cost ranking that makes the product work is NOT
 *     explained or demonstrated here.
 *
 * The outcomes list, the product-screen recreations and their sample data lived here
 * until the page was trimmed to a teaser. They are recoverable from commit 08e2503.
 */

export const brand = {
  name: 'Parteli',
  entity: 'Parteli Labs',
  wordmark: '/brand/parteli-wordmark.png',
} as const;

/** One line, no mechanism. What a shop owner gets. */
export const promise = 'The parts, the bays and the money — one system.';

export const subPromise =
  'Parteli runs the work your shop already does — sourcing parts, tracking who is on the clock, getting the invoice out — and charges a flat subscription instead of taking a cut of what you make.';

export const audience = {
  title: 'Built for shops that are not a chain',
  body: 'Independent powersports dealers running a handful of bays, where the person who owns the place is also the person who answers the phone. The tools written for a twelve-location auto group have never fit that, and the paper it replaced worked better.',
} as const;

export const cta = {
  heading: 'We are opening a small alpha',
  body: 'A short trial with a limited number of shops, run directly with us. If your shop is a fit, we would rather talk than send you a deck.',
  action: 'Request a walkthrough',
  email: 'hello@parteli.com',
  note: 'No pricing page yet, because there is nothing to sign.',
} as const;

export const form = {
  shopLabel: 'Shop name',
  shopPlaceholder: 'Where you wrench',
  emailLabel: 'Email',
  emailPlaceholder: 'you@yourshop.com',
  submit: 'Request a walkthrough',
  submitting: 'Sending…',
  successTitle: 'Got it',
  successBody: 'We will come back to you directly, usually within a couple of days.',
  privacy: 'We use this to reply to you and nothing else.',
} as const;

export const footer = {
  legal: `© ${new Date().getFullYear()} Parteli Labs`,
  /** No interface is rendered on this page, so there is nothing to caveat as sample. */
  disclosure:
    'Parteli is in development. Nothing on this page reports a real shop, customer or transaction.',
} as const;
