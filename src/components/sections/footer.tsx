import Link from 'next/link';

import { Mark, ui } from '@/components/ui';

import s from './footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`${ui.wrap} ${s.inner}`}>
        <div>
          <a className={s.brand} href="#top" aria-label="Back to top">
            <Mark />
          </a>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/company#mission">Mission</Link></li>
            <li><Link href="/company#opportunity">Opportunity</Link></li>
            <li><Link href="/company#invest">Invest</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            <li><Link href="/#datacloud">Parteli DataCloud</Link></li>
            <li><Link href="/lets-ryde">Let’s Ryde app</Link></li>
          </ul>
        </div>
        <div className={s.legal}>
          <span>© {new Date().getFullYear()} Parteli Labs Inc. · Calgary, Alberta, Canada</span>
          <span>General questions: support@parteli.ca</span>
        </div>
      </div>
    </footer>
  );
}
