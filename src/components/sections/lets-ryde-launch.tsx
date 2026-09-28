import Image from 'next/image';

import { ui } from '@/components/ui';

import garage from '../../../public/app/garage.png';
import tabbar from '../../../public/app/tabbar.png';

import s from './lets-ryde-launch.module.css';

/**
 * For the Let's Ryde announcement page, not the landing page (moved off it
 * 2026-09-28). The phone shows the rider app's My Garage screen, captured on an
 * iPhone 17 Pro in Expo Go with seed data, and scrolls through the list on a loop.
 *
 * public/app/garage.png is two device screenshots stitched into the full list
 * (1206px wide), with the real status bar and Expo Go's developer-menu button
 * painted out. public/app/tabbar.png is the tab bar cut from the same capture; it
 * stays put while the list scrolls. Overlay positions in the CSS are fractions of
 * the 1206 × 2622 screenshot.
 */
export function LetsRydeLaunch() {
  return (
    <section className={s.ryde} aria-label="Let's Ryde">
      <div className={`${ui.wrap} ${s.grid}`}>
        <div>
          <h2 className={s.h2} data-rv>
            <span className={s.o}>Let&apos;s</span>
            <br />
            <span className={s.l}>Ryde</span>
            <span className={s.o}>.</span>
          </h2>
          <p className={s.cap} data-rv>
            The Parteli rider app. Built by people who ride. Every screen we design gets judged
            against one question: does it get someone back on the snow, the water, or the trail
            faster?
          </p>
        </div>

        <div className={s.stage} data-rv>
          <div className={s.phone} role="img" aria-label="The Let's Ryde app showing My Garage">
            <div className={s.screen}>
              <Image src={garage} alt="" className={s.shot} sizes="320px" placeholder="blur" />
              <div className={s.status} aria-hidden="true">
                <span>9:41</span>
                <span className={s.island} />
                <StatusIcons />
              </div>
              <Image src={tabbar} alt="" className={s.tabbar} sizes="300px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusIcons() {
  return (
    <svg className={s.icons} viewBox="0 0 68 12" fill="currentColor">
      <rect x="0" y="8" width="3" height="4" rx="1" />
      <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
      <rect x="10" y="3" width="3" height="9" rx="1" />
      <rect x="15" y="0.5" width="3" height="11.5" rx="1" />
      <path d="M31 2.2a10 10 0 0 1 7 2.8l-1.3 1.3a8.2 8.2 0 0 0-11.4 0L24 5a10 10 0 0 1 7-2.8Zm0 3.6a6.3 6.3 0 0 1 4.4 1.8l-1.3 1.3a4.5 4.5 0 0 0-6.2 0l-1.3-1.3A6.3 6.3 0 0 1 31 5.8Zm0 3.6a2.6 2.6 0 0 1 1.8.7L31 12l-1.8-1.9a2.6 2.6 0 0 1 1.8-.7Z" />
      <rect x="44.5" y="1" width="20" height="10" rx="3" fill="none" stroke="currentColor" opacity="0.45" />
      <rect x="46.5" y="3" width="16" height="6" rx="1.5" />
      <rect x="65.5" y="4" width="1.8" height="4" rx="0.9" opacity="0.45" />
    </svg>
  );
}
