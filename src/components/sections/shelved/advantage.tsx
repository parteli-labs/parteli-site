import { Eyebrow, ui } from '@/components/ui';

import s from './advantage.module.css';

/**
 * "We own the database." Shelved 2026-09-28. Restore by rendering <Advantage />
 * in src/app/page.tsx.
 */
export function Advantage() {
  return (
    <section className={s.advantage} id="advantage">
      <div className={ui.wrap}>
        <div className={s.moat} data-rv>
          <Eyebrow tick="var(--ink)">Our advantage</Eyebrow>
          <h2>We own the database.</h2>
          <p>
            Every part, price, service record, and customer interaction runs through data Parteli
            builds and controls. We don&apos;t license it from a third party and we don&apos;t
            depend on anyone else&apos;s system. It gets more valuable with every dealer and every
            rider we add.
          </p>
        </div>
      </div>
    </section>
  );
}
