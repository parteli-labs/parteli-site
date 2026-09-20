import Image from 'next/image';
import Link from 'next/link';

import { brand } from '@/content/site';
import s from './page.module.css';

export const metadata = { title: 'Parteli — landing drafts' };

const DRAFTS = [
  {
    href: '/v1-counter',
    no: '01',
    name: 'The parts counter',
    what: 'Bin labels, thermal ink, steel shelf rail, catalog tab. Light, printed, industrial. Scannable Code 39 barcodes that actually encode.',
    swatches: ['#e6e1d5', '#cfd91f', '#d1331a', '#35383a'],
  },
  {
    href: '/v2-fiche',
    no: '02',
    name: 'The parts fiche',
    what: 'An OEM catalogue leaf: an exploded figure with numbered callout balloons keyed to a table. The quietest of the five.',
    swatches: ['#eceae3', '#f9f8f4', '#d5301a', '#15191b'],
  },
  {
    href: '/v3-workorder',
    no: '03',
    name: 'The repair order',
    what: 'A multi-part NCR work order. Canary shop copy, process-blue pre-printing, the headline typed into DESCRIPTION OF WORK, one rubber stamp.',
    swatches: ['#efe6bd', '#faf6e8', '#2f5069', '#b3342a'],
  },
  {
    href: '/v4-pitwall',
    no: '04',
    name: 'The pit wall',
    what: 'Your own Glacial Ridgeline system, continued: the service board read as a timing board. Ice for position, one orange action.',
    swatches: ['#07090a', '#5ccbe2', '#e8873a', '#64b98c'],
  },
  {
    href: '/v5-livery',
    no: '05',
    name: 'The livery',
    what: 'Chosen. The wordmark’s own world played straight: race bodywork, number plate, checkered bands, vinyl lime on black. Trimmed to hero, audience and close.',
    swatches: ['#080906', '#c8e81f', '#ff3417', '#1a1d10'],
  },
] as const;

export default function Index() {
  return (
    <main className={s.root}>
      <div className={s.wrap}>
        <header className={s.head}>
          <Image
            src={brand.wordmark}
            alt="Parteli"
            width={1741}
            height={824}
            className={s.mark}
            priority
          />
          <h1 className={s.h1}>Five first drafts of the Parteli landing page</h1>
          <p className={s.lede}>
            One page of content in five visual worlds, each derived from something an
            independent powersports dealer already reads every day. Same facts, same
            single action, same product screens — the argument is which world the brand
            should live in.
          </p>
          <p className={s.note}>
            All five are built to the same claim rules: no named partners, no traction or
            pricing, outcomes rather than mechanism, and every interface labelled as sample
            data. Nothing here asserts anything that is not true today.
          </p>
        </header>

        <nav className={s.list}>
          {DRAFTS.map((d) => (
            <Link key={d.href} href={d.href} className={s.item}>
              <span className={s.itemNo}>{d.no}</span>
              <span className={s.itemName}>{d.name}</span>
              <span className={s.itemWhat}>{d.what}</span>
              <span className={s.swatches} aria-hidden="true">
                {d.swatches.map((c) => (
                  <span key={c} className={s.sw} style={{ background: c }} />
                ))}
              </span>
            </Link>
          ))}
        </nav>

        <p className={s.foot}>
          Draft 05 is the chosen direction and has been trimmed to three blocks. The other
          four are kept here for comparison until it is locked, then they come down.
        </p>
      </div>
    </main>
  );
}
