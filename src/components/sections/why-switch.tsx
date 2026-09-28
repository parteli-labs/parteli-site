import { SectionHead, ui } from '@/components/ui';

import s from './why-switch.module.css';

const ROWS = [
  ['Built', 'Years old, with updates bolted on', 'Built new for today’s powersports shop'],
  ['Day to day', 'Clunky screens and heavy training', 'Simple screens around how a dealership actually runs'],
  ['Price', 'Expensive, with add-ons on top', 'Priced to undercut the incumbents'],
  ['Parts', 'One catalogue at a time', 'Live pricing across suppliers, with 7-day price holds'],
  ['Riders', 'No connection to the rider', 'Linked to the Let’s Ryde app for quotes and bookings'],
] as const;

/** Legacy dealer systems vs Parteli DataCloud. */
export function WhySwitch() {
  return (
    <section className={s.switch} id="switch">
      <div className={ui.wrap}>
        <SectionHead eyebrow="Why dealers switch" title="The old system is old, clunky, and pricey.">
          Most powersports dealers run on legacy software they tolerate rather than like. Parteli
          DataCloud is built to replace it.
        </SectionHead>
        <div
          className={s.table}
          role="table"
          aria-label="Legacy dealer systems compared with Parteli DataCloud"
          data-rv
        >
          <div role="row" className={s.row}>
            <div role="columnheader" className={`${s.hd} ${s.corner}`} />
            <div role="columnheader" className={s.hd}>Legacy dealer systems</div>
            <div role="columnheader" className={`${s.hd} ${s.us}`}>Parteli DataCloud</div>
          </div>
          {ROWS.map(([label, old, next]) => (
            <div role="row" className={s.row} key={label}>
              <div role="rowheader" className={s.label}>{label}</div>
              <div role="cell" className={s.old}>{old}</div>
              <div role="cell" className={s.new}>{next}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
