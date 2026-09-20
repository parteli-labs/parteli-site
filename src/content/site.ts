/**
 * Factual copy and demonstration data for the Parteli landing drafts.
 *
 * CLAIM RULES (PRODUCT.md → Capabilities and Constraints; confirmed with the user):
 *   - No named partners, dealers, or logos.
 *   - No traction, funding, pricing, benchmarks, testimonials, or integration status.
 *   - No market-size or geography framing asserted as a claim.
 *   - Outcomes only. The landed-cost ranking that makes the product work is NOT
 *     explained or demonstrated here.
 *
 * Everything under `demo` is authored illustration, not a record of anything real.
 * Every draft that renders it must label it synthetic where a visitor could
 * mistake it for live data.
 */

export const brand = {
  name: 'Parteli',
  entity: 'Parteli Labs',
  wordmark: '/brand/parteli-wordmark.png',
} as const;

/** One line, no mechanism. What a shop owner gets. */
export const promise =
  'The parts, the bays and the money for an independent powersports shop, in one system.';

export const subPromise =
  'Parteli runs the work your shop already does — sourcing parts, tracking who is on the clock, getting the invoice out — and charges a flat subscription instead of taking a cut of what you make.';

/**
 * The three outcomes. Each resolves to something an owner feels.
 * No draft may render these as three identical icon cards; each expresses them
 * in its own world's grammar.
 */
export const outcomes = [
  {
    key: 'margin',
    short: 'Your margin stays yours',
    title: 'Your margin stays yours',
    body: 'Parteli makes money on a subscription, not on your parts. Nothing the platform does is funded by shaving the spread you earn on a job.',
  },
  {
    key: 'sourcing',
    short: 'Stop working the phones',
    title: 'Stop working the phones',
    body: 'The parts for a job get found and priced without a morning of calls and six browser tabs. You approve what you want and it goes on the ticket.',
  },
  {
    key: 'visibility',
    short: 'See the whole floor',
    title: 'See the whole floor',
    body: 'Bays, technicians, hours logged, parts attached, invoice out. One board instead of a whiteboard, a clipboard and somebody’s memory.',
  },
] as const;

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

export const footer = {
  legal: `© ${new Date().getFullYear()} Parteli Labs`,
  /** For a surface that renders the product interface. */
  disclosure:
    'Interface shown is the product in development, rendered with sample data. Nothing on this page reports a real shop, customer or transaction.',
  /** For a surface that shows no interface, so there is nothing to caveat as sample. */
  disclosureNoUi:
    'Parteli is in development. Nothing on this page reports a real shop, customer or transaction.',
} as const;

/* ------------------------------------------------------------------ */
/* Demonstration data — authored, synthetic, labelled wherever rendered */
/* ------------------------------------------------------------------ */

export type Tone = 'critical' | 'due' | 'ok';

export type Machine = {
  id: string;
  kind: 'dirt' | 'road' | 'utv';
  name: string;
  serial: string;
  /** Rendered as the mono readout under the name. */
  usage: string;
  tone: Tone;
  /** Left label of the meter. */
  meterLabel: string;
  /** Right mono readout of the meter. */
  meterValue: string;
  /** 0–1, clamped. */
  meterFill: number;
  /** The worded state. Status is never carried by colour alone. */
  state: string;
  health: number;
};

export const demoMachines: Machine[] = [
  {
    id: 'm1',
    kind: 'dirt',
    name: '350 SX-F',
    serial: 'SN 4821',
    usage: '84.2 h',
    tone: 'critical',
    meterLabel: 'Top end',
    meterValue: '84.2 / 80 h',
    meterFill: 1,
    state: 'Past interval',
    health: 41,
  },
  {
    id: 'm2',
    kind: 'utv',
    name: 'RZR Pro XP',
    serial: 'SN 7730',
    usage: '1,284 km',
    tone: 'due',
    meterLabel: 'Next service',
    meterValue: '1,284 / 1,624 km',
    meterFill: 0.79,
    state: 'Due soon',
    health: 72,
  },
  {
    id: 'm3',
    kind: 'road',
    name: 'MT-07',
    serial: 'SN 2194',
    usage: '8,410 km',
    tone: 'ok',
    meterLabel: 'Next service',
    meterValue: '1,550 / 5,000 km',
    meterFill: 0.31,
    state: 'Nothing outstanding',
    health: 92,
  },
];

export type Job = {
  id: string;
  ticket: string;
  unit: string;
  work: string;
  tech: string;
  status: 'Queued' | 'In progress' | 'Complete';
  clock: string;
  bay: string;
};

export const demoJobs: Job[] = [
  {
    id: 'j1',
    ticket: 'JOB 2841',
    unit: '350 SX-F',
    work: 'Top-end rebuild',
    tech: 'D. Okafor',
    status: 'In progress',
    clock: '01:42:08',
    bay: 'Bay 2',
  },
  {
    id: 'j2',
    ticket: 'JOB 2839',
    unit: 'RZR Pro XP',
    work: 'Belt + fluid service',
    tech: 'M. Lavoie',
    status: 'Queued',
    clock: '00:00:00',
    bay: 'Bay 3',
  },
  {
    id: 'j3',
    ticket: 'JOB 2836',
    unit: 'MT-07',
    work: 'Fork seals',
    tech: 'R. Singh',
    status: 'Complete',
    clock: '02:15:30',
    bay: 'Bay 1',
  },
];

/** Part rows, used where a draft's world wants a keyed table. No prices. */
export type PartRow = { ref: string; number: string; name: string; qty: number; state: string };

export const demoParts: PartRow[] = [
  { ref: '01', number: '77330-039-000', name: 'Piston kit, A', qty: 1, state: 'On the ticket' },
  { ref: '02', number: '77330-041-002', name: 'Ring set, std', qty: 1, state: 'On the ticket' },
  { ref: '03', number: '77112-508-100', name: 'Gasket, cylinder head', qty: 1, state: 'On the ticket' },
  { ref: '04', number: '90201-06M00', name: 'Nut, flange 6mm', qty: 4, state: 'In stock' },
  { ref: '05', number: '77330-112-000', name: 'Circlip, piston pin', qty: 2, state: 'In stock' },
];

export const SYNTHETIC_LABEL = 'Sample data';
