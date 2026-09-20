import Image from 'next/image';
import { Archivo, Chakra_Petch, JetBrains_Mono } from 'next/font/google';

import { Machine } from '@/components/machine';
import { WalkthroughForm } from '@/components/walkthrough-form';
import { audience, brand, cta, footer, plateRows, subPromise } from '@/content/site';

import s from './page.module.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

/* A true italic with a motorsport character — the wordmark's own posture,
   available as a typeface rather than faked by skewing a roman. */
const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['italic'],
  variable: '--font-chakra',
  display: 'swap',
});

const jet = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jet',
  display: 'swap',
});

export default function Home() {
  return (
    <main className={`${s.root} ${archivo.variable} ${chakra.variable} ${jet.variable}`}>
      {/*
        THESIS: The wordmark is already a race decal, so this page stops treating
          that as a problem and builds the bodywork it belongs on — checkered bands,
          number plate, vinyl lime on black. It refuses the neutral-SaaS arrangement
          that would sand the mark down to fit, and it refuses the feature-tour
          arrangement: three blocks, one action, nothing else.
        OWN-WORLD: Black bodywork (#080906) with panels #111309 and #1a1d10; the
          wordmark's own colours sampled and tamed one step, lime #c8e81f and red
          #ff3417; lime is the action and the only large colour field. Chakra Petch
          italic — a true italic, never a skewed roman — for every display line;
          Archivo for text; JetBrains Mono tabular for numbers. Checkered bands are
          built from repeating gradients, not an image. Controls are cut on a 10px
          slant, the way vinyl is trimmed.
        STORY: A shop owner sees a brand that looks like the machines on their floor,
          learns in one line what it runs and who it is for, and asks for a walkthrough.
        FIRST VIEWPORT: Lime checker band across the top, topbar, then a two-column
          split — headline at up to 5.2rem in 16ch with one lime phrase, the qualifier
          and the single slant-cut lime action on the left; on the right the number
          plate, a machine in lime line art over an oversize italic race number.
        FORM: Race livery / decal kit — the brief's own literal reading, spent as the
          single candidate it is allowed. Candidate 7 of the grounded list; chosen by
          the user over the assigned candidate 5; seed key 173c3e44.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the
        finish review, the verdict, and DESIGN.md.
      */}

      <div className={s.checker} aria-hidden="true" />

      <div className={s.wrap}>
        <header className={s.topbar}>
          <Image
            src={brand.wordmark}
            alt="Parteli"
            width={1741}
            height={824}
            className={s.mark}
            priority
          />
        </header>

        {/* ------------------------------------------------------- hero --- */}
        <section className={s.hero}>
          <div>
            <h1 className={`${s.h1} ${s.display}`}>
              The parts, the bays and the money — <em>one system</em>
            </h1>
            <p className={s.heroSub}>{subPromise}</p>
            <div className={s.heroActions}>
              <a className={s.btn} href="#request">
                {cta.action}
              </a>
            </div>
          </div>

          <div className={s.plateCard}>
            <div className={s.plateTop}>
              <span>Shop system</span>
              <span className={s.mono}>No. 01</span>
            </div>
            <div className={s.plateBody}>
              <span className={s.plateNumber} aria-hidden="true">
                01
              </span>
              <Machine kind="dirt" strokeWidth={1.6} className={s.plateMachine} />
            </div>
            <dl className={s.plateRows}>
              {plateRows.map((row) => (
                <div key={row.key} className={s.plateRow}>
                  <dt className={s.plateRowLabel}>{row.label}</dt>
                  <dd className={s.plateRowValue}>{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className={s.plateFoot}>
              <span>Independent powersports dealers</span>
            </div>
          </div>
        </section>
      </div>

      <div className={`${s.checker} ${s.checkerRed}`} aria-hidden="true" />

      {/* ------------------------------------------------------ audience --- */}
      <div className={s.wrap}>
        <section className={s.decalWrap}>
          <div className={s.decal}>
            <h2 className={`${s.decalTitle} ${s.display}`}>{audience.title}</h2>
            <p className={s.decalBody}>{audience.body}</p>
          </div>
        </section>

        {/* --------------------------------------------------------- cta --- */}
        <section className={s.cta} id="request">
          <div>
            <h2 className={`${s.ctaTitle} ${s.display}`}>{cta.heading}</h2>
            <p className={s.ctaText}>{cta.body}</p>
            <p className={s.ctaNote}>{cta.note}</p>
          </div>

          <div className={s.ctaForm}>
            <WalkthroughForm styles={s} />
          </div>
        </section>

        <footer className={s.footer}>
          <span className={s.mono}>{footer.legal}</span>
          <p className={s.footerNote}>{footer.disclosure}</p>
        </footer>
      </div>
    </main>
  );
}
