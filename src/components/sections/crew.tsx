import { Eyebrow, ui } from '@/components/ui';

import s from './crew.module.css';

export function Crew() {
  return (
    <section className={s.crew} id="crew">
      <div className={ui.wrap}>
        <Eyebrow>The crew</Eyebrow>
        <p className={s.big} data-rv>
          <span className={s.dim}>No bloated teams.</span>
          <br />
          <span className={s.dim}>No founder salaries.</span>
          <br />
          Just builders <span className={s.lime}>executing.</span>
        </p>
      </div>
    </section>
  );
}
