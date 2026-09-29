import { Eyebrow, ui } from '@/components/ui';

import s from './invest.module.css';

/** On the company page. */
export function Invest() {
  return (
    <section className={s.invest} id="invest">
      <div className={`${ui.wrap} ${s.grid}`}>
        <div>
          <Eyebrow tick="var(--red)">Join the Ryde</Eyebrow>
          <div className={s.raise} data-rv>
            $2.7M<span>CAD</span>
          </div>
        </div>
        <div className={s.copy}>
          <p data-rv>
            Parteli Labs is taking on early investors in a mobilizing round to bring our product to
            the North American market. We&apos;re a lean team without founder salaries, so capital
            goes into the product and the dealerships we serve.
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
