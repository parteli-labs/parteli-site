import { Eyebrow, ui } from '@/components/ui';
import { WalkthroughForm } from '@/components/walkthrough-form';

import s from './contact.module.css';

/* The locked form reads shared names (btn, display) and its own form* names
   from one styles object. */
const formStyles = { ...ui, ...s };

export function Contact() {
  return (
    <section className={s.contact} id="contact">
      <div className={`${ui.wrap} ${s.inner}`}>
        <Eyebrow>Get in touch</Eyebrow>
        <h2 data-rv>
          Let&apos;s <span>connect.</span>
        </h2>
        <p data-rv>
          Request a demo, or reach Ryder MacLeod, President &amp; CEO, directly about investing or
          partnering.
        </p>
        <div className={s.formWrap}>
          <WalkthroughForm styles={formStyles} />
        </div>
        <p className={s.ask} data-rv>
          Run a powersports dealership? Join the founding dealer program at{' '}
          <a href="https://parteli.ca" target="_blank" rel="noopener">
            parteli.ca
          </a>
        </p>
      </div>
    </section>
  );
}
