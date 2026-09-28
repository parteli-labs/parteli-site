/**
 * Shared copy for the Parteli landing page.
 *
 * Section copy lives inline in `src/app/page.tsx` while the page is being iterated
 * against the reference design Ryder approved. That reference supersedes the claim
 * rules in PRODUCT.md (funding, market stats, Alberta framing, and the rider app are
 * now on the page). PRODUCT.md gets rewritten once the content is locked.
 *
 * `cta.email` and `form` are read by the walkthrough form, which is locked.
 */

export const brand = {
  name: 'Parteli',
  entity: 'Parteli Labs',
  wordmark: '/brand/parteli-wordmark-tight.png',
} as const;

export const cta = {
  email: 'support@parteli.ca',
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
  /** Shown when the send path is unavailable; names the recovery, not the cause. */
  fallbackLead: 'Write to us directly at',
} as const;
