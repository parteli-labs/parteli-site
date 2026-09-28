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
            <li><a href="#mission">Mission</a></li>
            <li><a href="#opportunity">Opportunity</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            <li><a href="#products">Parteli DataCloud</a></li>
            <li><a href="#products">Let’s Ryde app</a></li>
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
