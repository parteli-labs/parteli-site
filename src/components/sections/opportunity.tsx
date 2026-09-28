import { SectionHead, ui } from '@/components/ui';

import s from './opportunity.module.css';

const STATS = [
  {
    num: '500,000',
    plus: true,
    label: 'Albertans in off-highway vehicle recreation',
    src: 'Source: Alberta Off-Highway Vehicle Association. Includes riders plus family and friends.',
  },
  {
    num: '~165,000',
    plus: false,
    label: 'Direct off-highway riders in Alberta alone',
    src: 'Source: Alberta Off-Highway Vehicle Association',
  },
];

export function Opportunity() {
  return (
    <section className={s.opportunity} id="opportunity">
      <div className={ui.wrap}>
        <SectionHead
          eyebrow="The opportunity"
          title="A big, loyal market with a fast system that keeps up."
        >
          We&apos;re starting in Western Canada, where the riding culture runs deep, and building for every dealer across North America. This isn&apos;t another DMS, Parteli is the future.
        </SectionHead>
        <div className={s.stats}>
          {STATS.map((st) => (
            <div className={s.stat} key={st.num} data-rv>
              <div className={s.num}>
                {st.num}
                {st.plus && <span>+</span>}
              </div>
              <h3>{st.label}</h3>
              <p className={s.src}>{st.src}</p>
            </div>
          ))}
          <div className={`${s.stat} ${s.live}`} data-rv>
            <div className={s.num}>
              <i />
              Active
            </div>
            <h3>Dealer conversations underway in Alberta</h3>
            <p className={s.src}>Founding dealer program</p>
          </div>
        </div>
      </div>
    </section>
  );
}
