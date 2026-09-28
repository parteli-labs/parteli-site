import Image from 'next/image';

import { Eyebrow, ui } from '@/components/ui';

import riderPov from '../../../public/photos/rider-pov.webp';

import s from './problem.module.css';

export function Problem() {
  return (
    <section className={s.problem} id="problem">
      <div className={`${ui.wrap} ${s.grid}`}>
        <figure className={s.photo} data-rv>
          <Image
            src={riderPov}
            alt="A rider's view of a snow-covered yellow snowmobile on a trail"
            sizes="(max-width: 860px) 100vw, 45vw"
          />
          <figcaption>Somewhere on the trail. Something&apos;s wrong. Now what?</figcaption>
        </figure>
        <div className={s.copy}>
          <Eyebrow tick="var(--red)">The problem</Eyebrow>
          <h2 className={s.h2} data-rv>
            One broken part. Too many phone calls. <span>No clear answer.</span>
          </h2>
          <p data-rv>
            Powersports runs on fragments. Dealers juggle separate tools for inventory, service,
            and sales. Riders call around, guess at prices, and wait. The part that fixes the
            machine sits in a supplier&apos;s catalogue that neither of them can see in one place.
          </p>
          <div className={s.pains}>
            <div data-rv>
              <h3>For dealers</h3>
              <p>
                Disconnected systems, lost sales at the parts counter, and service bays waiting
                on parts.
              </p>
            </div>
            <div data-rv>
              <h3>For riders</h3>
              <p>No easy way to know what&apos;s wrong, what it costs, or who can fix it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
