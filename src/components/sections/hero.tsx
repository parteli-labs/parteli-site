import Image from 'next/image';

import { Arrow, ui } from '@/components/ui';

import heroCliff from '../../../public/photos/hero-cliff.webp';

import s from './hero.module.css';

export function Hero() {
  return (
    <header className={s.hero}>
      <div className={s.copy}>
        <h1 className={s.h1}>
          <span className={s.ln}><span>Where the</span></span>
          <span className={s.ln}><span>future of</span></span>
          <span className={s.ln}><span><em>powersports</em></span></span>
          <span className={s.ln}><span>gets built.</span></span>
        </h1>
        <p className={s.lede}>
          Parteli Labs builds and maintains cutting edge software solutions to North American dealerships + the riders they serve.
        </p>
        <div className={s.ctas}>
          <a className={ui.btn} href="#contact">
            Join the Ryde <Arrow />
          </a>
          <a className={`${ui.btn} ${ui.ghost}`} href="#problem">
            See the opportunity
          </a>
        </div>
      </div>
      <div className={s.photo} aria-hidden="true">
        {/* PageEffects moves this wrapper for the parallax. */}
        <div className={s.photoInner} id="heroImg">
          <Image src={heroCliff} alt="" fill priority sizes="(max-width: 860px) 100vw, 46vw" />
        </div>
      </div>
      <div className={s.meta}>
        Real riders
        <br />
        Real backcountry
      </div>
    </header>
  );
}
