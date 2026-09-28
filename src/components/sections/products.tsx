import { SectionHead, ui } from '@/components/ui';

import s from './products.module.css';

const DATACLOUD_FEATURES = [
  'Inventory',
  'Work orders',
  'Point of sale',
  'Customer management',
  'Price holds up to 7 days',
  'Linked to the Let’s Ryde app',
];

const RYDE_FEATURES = [
  'AI symptom diagnostics',
  'Live parts pricing',
  'Best deal and shipping',
  'Parts + labour quotes',
  'Book an install',
  'Sleds, PWC, ATV, UTV',
];

const WORK_ORDER = [
  ['Summit X · preseason check', 'BOOKED', ''],
  ['Drive belt', 'RESERVED', s.ok],
  ['Ski carbides (pair)', 'PRICE HELD · 7 DAYS', s.hold],
  ['Rider notified', 'SENT', s.ok],
] as const;

/** Parteli DataCloud with its work-order card, then Let's Ryde on its own row. */
export function Products() {
  return (
    <section className={s.products} id="products">
      <div className={ui.wrap}>
        <SectionHead eyebrow="What we’re building" title="Two products. One system underneath.">
          Parteli DataCloud runs the dealership. The Let’s Ryde app puts the rider in touch with
          it. Both are built on the same Parteli database.
        </SectionHead>

        <article className={s.prod}>
          <div className={s.copy} data-rv>
            <span className={s.pill}><i />In development</span>
            <h3>Parteli DataCloud</h3>
            <div className={s.tag}>Built by dealers for dealers.</div>
            <p className={s.desc}>
              A dealer management system for powersports shops, from single-location dealers to
              multi-store groups across Alberta and beyond.
            </p>
            <ul className={s.feats}>
              {DATACLOUD_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div className={s.visual}>
            <div className={s.spec}>
              <div className={s.wo} role="img" aria-label="Example Parteli DataCloud work order">
                <div className={s.woHead}>
                  <span>PARTELI DATACLOUD · WORK ORDER</span>
                  <b>WO-0001</b>
                </div>
                {WORK_ORDER.map(([item, state, tone]) => (
                  <div className={s.woRow} key={item}>
                    <span>{item}</span>
                    <span className={tone}>{state}</span>
                  </div>
                ))}
                <div className={s.woFoot}>Illustrative example · not live data</div>
              </div>
            </div>
          </div>
        </article>

        <article className={`${s.prod} ${s.solo}`}>
          <div className={s.copy} data-rv>
            <span className={s.pill}><i />Pre-launch</span>
            <h3>Let&apos;s Ryde</h3>
            <div className={s.tag}>The Parteli rider app.</div>
            <p className={s.desc}>
              For the rider. Tell it what your machine is doing, and it tells you what&apos;s
              likely wrong, what part fixes it, where to get it for the best price, and which shop
              can put it in.
            </p>
            <ul className={s.feats}>
              {RYDE_FEATURES.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
