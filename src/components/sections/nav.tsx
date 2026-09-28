import { Arrow, Mark, ui } from '@/components/ui';

import s from './nav.module.css';

const LINKS = [
  ['#mission', 'Our mission'],
  ['#opportunity', 'Opportunity'],
  ['#products', 'Products'],
] as const;

/** Fixed top bar. PageEffects sets `data-solid` on it once the page scrolls. */
export function Nav() {
  return (
    <nav className={s.nav} id="nav" aria-label="Primary">
      <div className={`${ui.wrap} ${s.inner}`}>
        <a className={s.brand} href="#top" aria-label="Parteli Labs home">
          <Mark />
        </a>
        <ul className={s.links}>
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <a className={`${ui.btn} ${s.cta}`} href="#contact">
          Request a demo <Arrow />
        </a>
      </div>
    </nav>
  );
}
