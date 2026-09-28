import { Eyebrow, Mark, ui } from '@/components/ui';

import s from './mission.module.css';

/** The one light section: snow ground, ink text, lime highlighter marks. */
export function Mission() {
  return (
    <section className={s.mission} id="mission">
      <div className={ui.wrap}>
        <div className={s.top}>
          <Eyebrow tick="var(--ink)">Our mission</Eyebrow>
          <Mark dark />
        </div>
        <h2 className={s.h2} data-rv>
          To revolutionize the powersports industry by connecting <mark>dealers</mark>,{' '}
          <mark>riders</mark>, and <mark>parts</mark> into one definitive system.
        </h2>
        <div className={s.body}>
          <div className={s.sig} data-rv>
            Let&apos;s
            <br />
            Ryde<span>.</span>
          </div>
          <p data-rv>
            Today, a dealer&apos;s inventory, a rider&apos;s problem, and the part that fixes it
            live in three different places. We&apos;re putting them in one.
          </p>
        </div>
      </div>
    </section>
  );
}
