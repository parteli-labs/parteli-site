import { SectionHead, ui } from '@/components/ui';

import s from './business-model.module.css';

const STREAMS = [
  ['Recurring', 'Dealer subscriptions', 'Dealers pay monthly for Parteli DataCloud to run inventory, service, and sales.'],
  ['Per transaction', 'Transaction fees', 'A fee on quotes, bookings, and orders that flow between riders and dealers.'],
  ['Per order', 'Parts sales', 'Parteli sells OEM and aftermarket parts directly, at the best available price and shipping.'],
] as const;

/**
 * "Three ways we make money." Shelved 2026-09-28. Restore by rendering
 * <BusinessModel /> in src/app/page.tsx.
 */
export function BusinessModel() {
  return (
    <section className={s.model} id="model">
      <div className={ui.wrap}>
        <SectionHead eyebrow="Business model" title="Three ways we make money.">
          Recurring revenue from dealers, plus revenue on every transaction that moves through the
          system.
        </SectionHead>
        <div className={s.streams}>
          {STREAMS.map(([k, title, body]) => (
            <div className={s.stream} key={title} data-rv>
              <span className={ui.k}>{k}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
