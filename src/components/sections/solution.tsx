import { SectionHead, ui } from '@/components/ui';
import { brand } from '@/content/site';

import s from './solution.module.css';

const SIDES = [
  [
    'Dealers',
    'Inventory, work orders, point of sale, and customers in one shop system built around how a powersports dealership actually runs.',
  ],
  [
    'Riders',
    'Describe the problem, see the likely fix, compare prices across suppliers, and book the install with a shop nearby.',
  ],
  [
    'Parts',
    'OEM and aftermarket parts sold through Parteli, matched to the machine, with the best available price and shipping.',
  ],
] as const;

export function Solution() {
  return (
    <section className={s.solution} id="solution">
      <div className={ui.wrap}>
        <SectionHead eyebrow="The solution" title="Three sides of the industry. One system.">
          Every sale, service, and part order runs through the same data. Parteli owns and builds
          that database, so the dealer, the rider, and the parts counter all see the same thing at
          the same time.
        </SectionHead>
        <div className={s.grid}>
          <div className={s.diagram} data-rv>
            <SystemDiagram />
          </div>
          <div className={s.list}>
            {SIDES.map(([title, body]) => (
              <div className={s.item} key={title} data-rv>
                <span className={ui.k}>&#9670;</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemDiagram() {
  return (
    <svg viewBox="0 0 520 520" role="img" aria-label="Parteli connects dealers, riders, and parts">
      <title>Parteli at the centre, connected to dealers, riders, and parts</title>
      <circle cx="260" cy="260" r="206" fill="none" stroke="var(--line)" strokeWidth="1" />
      <circle cx="260" cy="260" r="140" fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 6" />
      <path className={s.flow} d="M260 260 L260 70" />
      <path className={s.flow} d="M260 260 L95 355" />
      <path className={s.flow} d="M260 260 L425 355" />
      <path className={`${s.flow} ${s.ring}`} d="M260 70 A190 190 0 0 1 425 355" />
      <path className={`${s.flow} ${s.ring}`} d="M425 355 A190 190 0 0 1 95 355" />
      <path className={`${s.flow} ${s.ring}`} d="M95 355 A190 190 0 0 1 260 70" />
      <rect x="196" y="226" width="128" height="68" fill="var(--lime)" />
      {/* Wordmark is 1690 × 236; 110 wide, centred over "CORE DATABASE". */}
      <image
        href={brand.wordmark}
        x="205"
        y="239"
        width="110"
        height="15.4"
        className={s.core}
        aria-hidden="true"
      />
      <text x="260" y="278" textAnchor="middle" className={s.coreSub}>CORE DATABASE</text>
      <g className={s.node} textAnchor="middle">
        <rect x="200" y="42" width="120" height="44" />
        <text x="260" y="69">DEALERS</text>
        <rect x="35" y="333" width="120" height="44" />
        <text x="95" y="360">RIDERS</text>
        <rect x="365" y="333" width="120" height="44" />
        <text x="425" y="360">PARTS</text>
      </g>
      <g className={s.nodeSub} textAnchor="middle">
        <text x="260" y="104">INVENTORY · SERVICE · SALES</text>
        <text x="95" y="395">DIAGNOSE · QUOTE · BOOK</text>
        <text x="425" y="395">OEM · AFTERMARKET</text>
      </g>
    </svg>
  );
}
