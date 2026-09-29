import Link from 'next/link';

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
  'AI diagnostics',
  'Live parts pricing',
  'Best deal and shipping',
  'Parts + labour quotes',
  'Book a repair',
  'Sleds, PWC, ATV, UTV',
];

const WORK_ORDER = [
  ['Summit X · preseason check', 'BOOKED', ''],
  ['Drive belt', 'RESERVED', s.ok],
  ['Ski carbides (pair)', 'PRICE HELD · 7 DAYS', s.hold],
  ['Rider notified', 'SENT', s.ok],
] as const;

/** Parteli DataCloud with its work-order card. On the dealers (home) page. */
export function DataCloud() {
  return (
    <section className={s.products} id="datacloud">
      <div className={ui.wrap}>
        <SectionHead eyebrow="What we’re building" title="Two products. One system underneath.">
          Parteli DataCloud runs the dealership. The{' '}
          <Link className={s.inlineLink} href="/lets-ryde">
            Let’s Ryde app
          </Link>{' '}
          puts the rider in touch with it. Both are built on the same Parteli database.
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
      </div>
    </section>
  );
}

/** The Let's Ryde product block. On the riders page, under the phone mockup. */
export function LetsRydeProduct() {
  return (
    <section className={s.products} id="features">
      <div className={ui.wrap}>
        <article className={`${s.prod} ${s.solo}`}>
          <div className={s.copy} data-rv>
            <span className={s.pill}><i />In deployment</span>
            <h3>The Parteli ryder app.</h3>
            <p className={s.desc}>
              Built by a Ryder, for riders. Using AI, Let&apos;s Ryde tells the user what&apos;s
              likely wrong, what part fixes it, where to get it for the best price, and which shops
              they can trust.
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
