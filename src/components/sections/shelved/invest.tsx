import { Eyebrow, ui } from '@/components/ui';

import s from './invest.module.css';

/**
 * Shelved 2026-09-28: taken off the landing page; investor enquiries go to #contact.
 * Restore by rendering <Invest /> in src/app/page.tsx.
 */
export function Invest() {
  return (
    <section className={s.invest} id="invest">
      <div className={`${ui.wrap} ${s.grid}`}>
        <div>
          <Eyebrow tick="var(--red)">Join the Ryde</Eyebrow>
          <div className={s.raise} data-rv>
            $2M<span>USD</span>
          </div>
        </div>
        <div className={s.copy}>
          <h2 data-rv>Back the system powersports runs on.</h2>
          <p data-rv>
            Parteli Labs is taking on early investors in a $2M USD round to bring Parteli to market
            with Alberta dealers and build toward every dealer in North America. We&apos;re a lean
            team with no founder salaries, so capital goes into the product and the dealers.
          </p>
          <div className={s.mailbox} data-rv>
            <a className={s.addr} href="mailto:ryder@parteli.ca?subject=Parteli%20Labs%20investment">
              ryder@parteli.ca
            </a>
            <span className={s.who}>Investors · Ryder MacLeod, President &amp; CEO</span>
          </div>
          <p className={s.fine} data-rv>
            This page is for information only and is not an offer to sell or a solicitation to buy
            securities.
          </p>
        </div>
      </div>
    </section>
  );
}
