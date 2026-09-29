import Link from 'next/link';

import { Arrow, Mark, ui } from '@/components/ui';

import s from './nav.module.css';

export type Page = 'dealers' | 'riders' | 'company';

const LINKS: readonly [Page, string, string][] = [
  ['dealers', '/', 'Dealers'],
  ['riders', '/lets-ryde', 'Riders'],
  ['company', '/company', 'Company'],
];

/**
 * Fixed top bar. On the home page it starts transparent over the hero and
 * PageEffects sets `data-solid` once the page scrolls; pages without a dark hero
 * pass `solid` to keep it opaque from the start.
 */
export function Nav({ current, solid = false }: { current: Page; solid?: boolean }) {
  return (
    <nav className={s.nav} id="nav" aria-label="Primary" data-always-solid={solid || undefined}>
      <div className={`${ui.wrap} ${s.inner}`}>
        <Link className={s.brand} href="/" aria-label="Parteli Labs home">
          <Mark />
        </Link>
        <ul className={s.links}>
          {LINKS.map(([page, href, label]) => (
            <li key={page}>
              <Link href={href} aria-current={page === current ? 'page' : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className={`${ui.btn} ${s.cta}`} href="/#contact">
          Request a demo <Arrow />
        </Link>
      </div>
    </nav>
  );
}
