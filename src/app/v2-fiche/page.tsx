import Image from 'next/image';
import Link from 'next/link';
import { Chivo, B612_Mono } from 'next/font/google';

import { Machine } from '@/components/machine';
import {
  audience,
  brand,
  cta,
  demoJobs,
  demoMachines,
  footer,
  outcomes,
  promise,
  subPromise,
} from '@/content/site';

import { Figure } from './figure';
import s from './page.module.css';

const chivo = Chivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-chivo',
  display: 'swap',
});

const b612 = B612_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-b612mono',
  display: 'swap',
});

export const metadata = { title: 'Parteli — draft 2, the parts fiche' };

const REFS = ['01', '02', '03'] as const;

export default function V2() {
  return (
    <main className={`${s.root} ${chivo.variable} ${b612.variable}`}>
      {/*
        THESIS: The one page every powersports counter reads daily is a parts
          fiche — an exploded figure keyed to a numbered table. The whole surface
          is that page, so the product's parts are drawn as an assembly and keyed.
          It refuses the dark-SaaS arrangement and the marketing-hero arrangement:
          the first viewport is a technical figure, not a picture of a screen.
        OWN-WORLD: Catalogue leaf on pale stock (#eceae3) over a bright sheet
          (#f9f8f4), hairline rules at #c6c5bd, a 2px ink rule closing the head
          and foot. One accent (#d5301a) and it marks exactly two things: the
          keyed component and the single action. Chivo for text, B612 Mono — a
          cockpit face — for every reference, number and code. Callout balloons,
          leader lines, dashed assembly axis. No shadow anywhere; depth is rules.
        STORY: A shop owner recognises the page before reading it, follows three
          callouts into what the product does for them, sees it running under
          FIG. 2, and orders a walkthrough off the foot of the sheet.
        FIRST VIEWPORT: Masthead rule, metadata strip, then a two-column split —
          headline at up to 3.6rem in 17ch on the left over the actions; on the
          right FIG. 1, the machine in outline with its front wheel pulled along a
          dashed axis in the accent, three numbered balloons on leader lines, and
          the keyed table of outcomes directly beneath it.
        FORM: Parts fiche / exploded assembly diagram. Candidate 1 of the grounded
          list, built as an alternate; assigned candidate was 5; seed key 173c3e44.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the
        finish review, the verdict, and DESIGN.md.
      */}

      <div className={s.sheet}>
        <div className={s.pad}>
          <header className={s.head}>
            <Link href="/" className={s.markLink} aria-label="Parteli — back to drafts">
              <Image
                src={brand.wordmark}
                alt="Parteli"
                width={1741}
                height={824}
                className={s.mark}
                priority
              />
            </Link>
            <div className={s.headMeta}>
              <span className={s.mono}>Draft 2 · Fiche</span>
              <Link href="/" className={s.headBack}>
                All drafts
              </Link>
            </div>
          </header>

          <div className={`${s.strip} ${s.mono}`}>
            <span className={s.stripItem}>
              Sheet <b>01</b>
            </span>
            <span className={s.stripItem}>
              Group <b>Shop system</b>
            </span>
            <span className={s.stripItem}>
              Applies to <b>Independent dealers</b>
            </span>
            <span className={s.stripItem}>
              Rev <b>A</b>
            </span>
          </div>

          {/* ------------------------------------------------------ hero --- */}
          <section className={s.hero}>
            <div>
              <h1 className={s.h1}>{promise}</h1>
              <p className={s.heroSub}>{subPromise}</p>
              <div className={s.heroActions}>
                <a className={s.btn} href={`mailto:${cta.email}`}>
                  {cta.action}
                </a>
                <a className={`${s.btn} ${s.btnGhost}`} href="#fig2">
                  See it running
                </a>
              </div>
            </div>

            <div className={s.figWrap}>
              <div className={`${s.figCap} ${s.mono}`}>
                <span>Fig. 1 — the shop as an assembly</span>
                <span>Scale: n.t.s.</span>
              </div>

              <Figure className={s.figure} />

              <table className={s.key}>
                <thead>
                  <tr>
                    <th className={s.mono}>Ref</th>
                    <th>Component</th>
                  </tr>
                </thead>
                <tbody>
                  {outcomes.map((o, i) => (
                    <tr key={o.key} className={i === 2 ? s.keyRowMarked : undefined}>
                      <td className={`${s.keyRef} ${s.mono}`}>{REFS[i]}</td>
                      <td>
                        <div className={s.keyName}>{o.title}</div>
                        <p className={s.keyNote}>{o.body}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* --------------------------------------------------- fig. 2 --- */}
          <section className={s.section} id="fig2">
            <div className={s.secHead}>
              <h2 className={s.h2}>The product, as it stands today</h2>
              <span className={`${s.secKey} ${s.mono}`}>Fig. 2</span>
            </div>

            <div className={s.plate}>
              <div className={`${s.plateCap} ${s.mono}`}>
                <span>Fig. 2 — rider garage and service board</span>
                <span>Sample data</span>
              </div>

              <div className={s.plateBody}>
                <div className={s.phone}>
                  <div className={s.phoneHead}>
                    <span className={s.phoneTitle}>Garage</span>
                    <span className={`${s.phoneCount} ${s.mono}`}>3 units</span>
                  </div>

                  {demoMachines.map((m) => {
                    const crit = m.tone === 'critical';
                    return (
                      <article key={m.id} className={s.vcard}>
                        <div className={`${s.vart} ${crit ? s.vartCrit : ''}`}>
                          <Machine
                            kind={m.kind}
                            className={`${s.vartSvg} ${crit ? s.vartSvgCrit : ''}`}
                          />
                        </div>
                        <div className={s.vbody}>
                          <div className={s.vname}>{m.name}</div>
                          <div className={`${s.vserial} ${s.mono}`}>
                            {m.serial} · {m.usage}
                          </div>
                          <div className={`${s.vstate} ${crit ? s.vstateCrit : ''}`}>
                            <span>{m.meterLabel}</span>
                            <span>{m.state}</span>
                          </div>
                          <div className={s.track}>
                            <div
                              className={`${s.trackFill} ${
                                crit ? s.trackFillCrit : m.tone === 'due' ? s.trackFillDue : ''
                              }`}
                              style={{ width: `${Math.min(1, m.meterFill) * 100}%` }}
                            />
                          </div>
                          <div className={`${s.vmeter} ${s.mono}`}>{m.meterValue}</div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className={s.stack}>
                  <div className={s.console}>
                    <div className={s.consoleBar}>
                      <span className={s.consoleTitle}>Service board</span>
                      <span className={`${s.consoleMeta} ${s.mono}`}>3 bays · 3 techs</span>
                    </div>
                    <div className={s.consoleScroll}>
                      <table className={s.jobTable}>
                        <thead>
                          <tr>
                            <th>Ticket</th>
                            <th>Unit</th>
                            <th>Technician</th>
                            <th>Status</th>
                            <th>On the clock</th>
                          </tr>
                        </thead>
                        <tbody>
                          {demoJobs.map((j) => (
                            <tr key={j.id}>
                              <td className={s.mono}>{j.ticket}</td>
                              <td>
                                <div className={s.jobUnit}>{j.unit}</div>
                                <div className={s.jobWork}>{j.work}</div>
                              </td>
                              <td>{j.tech}</td>
                              <td>
                                <span
                                  className={`${s.pill} ${
                                    j.status === 'In progress'
                                      ? s.pillRun
                                      : j.status === 'Complete'
                                        ? s.pillDone
                                        : s.pillQueue
                                  }`}
                                >
                                  {j.status}
                                </span>
                              </td>
                              <td className={s.mono}>{j.clock}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------ note --- */}
          <section className={s.section}>
            <div className={s.note}>
              <div className={s.noteMark}>
                <h2 className={s.noteTitle}>{audience.title}</h2>
              </div>
              <p className={s.noteBody}>{audience.body}</p>
            </div>
          </section>

          {/* ----------------------------------------------------- order --- */}
          <section className={s.order}>
            <div className={s.orderGrid}>
              <div>
                <h2 className={s.orderTitle}>{cta.heading}</h2>
                <p className={s.orderText}>{cta.body}</p>
                <p className={s.orderNote}>{cta.note}</p>
              </div>
              <div className={s.orderActions}>
                <a className={s.btn} href={`mailto:${cta.email}`}>
                  {cta.action}
                </a>
                <a className={`${s.orderMail} ${s.mono}`} href={`mailto:${cta.email}`}>
                  {cta.email}
                </a>
              </div>
            </div>
          </section>

          <footer className={s.footer}>
            <span className={s.mono}>{footer.legal}</span>
            <p className={s.footerNote}>{footer.disclosure}</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
