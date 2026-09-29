import { Eyebrow, ui } from '@/components/ui';

import s from './crew.module.css';

export function Crew() {
  return (
    <section className={s.crew} id="crew">
      <div className={ui.wrap}>
        <Eyebrow>The crew</Eyebrow>
        <p className={s.big} data-rv>
          <span className={s.dim}>One strategic team.</span>
          <br />
          <span className={s.dim}>No founder salaries.</span>
        </p>
      </div>
    </section>
  );
}
