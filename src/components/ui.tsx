import Image from 'next/image';

import { brand } from '@/content/site';

import ui from './ui.module.css';

/**
 * Pieces shared by the page sections. Sections tune them through CSS variables
 * set on their own root rather than by reaching into these class names:
 *   --eyebrow-color   Eyebrow text colour
 *   --mark-h          Wordmark image height
 */

export { ui };

export function Eyebrow({ children, tick }: { children: React.ReactNode; tick?: string }) {
  return (
    <div className={ui.eyebrow}>
      <span className={ui.tick} style={tick ? { background: tick } : undefined} />
      {children}
    </div>
  );
}

export function Arrow() {
  return <span className={ui.arr}>→</span>;
}

/** Eyebrow and heading on the left, supporting line on the right. */
export function SectionHead({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${ui.secHead} ${className ?? ''}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 data-rv>{title}</h2>
      </div>
      {children && <p data-rv>{children}</p>}
    </div>
  );
}

/* The wordmark, flattened to white (or ink with `dark`). Chosen over the mark +
   text lockup on 2026-09-28; the mark itself is the favicon (src/app/icon.svg). */
export function Mark({ dark = false }: { dark?: boolean }) {
  return (
    <Image
      src={brand.wordmark}
      alt={brand.name}
      width={1690}
      height={236}
      className={`${ui.mark} ${dark ? ui.markDark : ''}`}
    />
  );
}
