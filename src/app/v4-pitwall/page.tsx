import Image from 'next/image';
import Link from 'next/link';
import { Archivo, Bricolage_Grotesque, IBM_Plex_Mono } from 'next/font/google';

import { Machine } from '@/components/machine';
import {
  audience,
  brand,
  cta,
  demoJobs,
  demoMachines,
  demoParts,
  footer,
  outcomes,
  promise,
  subPromise,
} from '@/content/site';

import s from './page.module.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

/* The MVP app's own numeral face. Used here because it is the incumbent
   system's measured-number voice, not as a costume for "technical". */
const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex',
  display: 'swap',
});

export const metadata = { title: 'Parteli — draft 4, the pit wall' };

export default function V4() {
  return (
    <main className={`${s.root} ${archivo.variable} ${bricolage.variable} ${plex.variable}`}>
      {/*
        THESIS: A shop's service board and a pit wall's timing board are the same
          object — units under load, ranked, with a clock running on each. The page
          is that board, so the product's real screen is the hero rather than an
          illustration of one. It refuses the marketing-hero arrangement and the
          three-icon-card arrangement; every group here is a row.
        OWN-WORLD: The MVP app's Glacial Ridgeline, continued: ground #07090a under
          panels #0f1518 and raised #182126, hairline #263237. Ice #5ccbe2 marks
          position and identity and is never an action; trail orange #e8873a is the
          single action on the page; status owns the only other chroma and is never
          carried by colour alone. Bricolage Grotesque display, Archivo text, IBM
          Plex Mono tabular for every measured number. No gradients, no glass, no
          shadows — separation is surface steps.
        STORY: A shop owner sees their own board already running, reads three ranked
          rows of what it gets them, and takes the one orange action.
        FIRST VIEWPORT: Hairline topbar, then the headline at up to 4.4rem in 20ch
          over the qualifier and the orange action; immediately under it the full-width
          board — ice position column, unit, technician, status badge, tabular clock —
          with a pulsing live indicator in its header.
        FORM: Pit wall timing board. Candidate 4 of the grounded list, built as an
          alternate; assigned candidate was 5; seed key 173c3e44.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the
        finish review, the verdict, and DESIGN.md.
      */}

      <div className={s.wrap}>
        <header className={s.topbar}>
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
          <div className={s.topMeta}>
            <span className={`${s.label} ${s.mono}`}>Draft 4 · Pit wall</span>
            <Link href="/" className={`${s.label} ${s.topBack}`}>
              All drafts
            </Link>
          </div>
        </header>

        {/* ------------------------------------------------------- hero --- */}
        <section className={s.hero}>
          <h1 className={`${s.h1} ${s.display}`}>{promise}</h1>
          <p className={s.heroSub}>{subPromise}</p>
          <div className={s.heroActions}>
            <a className={s.btn} href={`mailto:${cta.email}`}>
              {cta.action}
            </a>
            <a className={`${s.btn} ${s.btnGhost}`} href="#detail">
              See the detail
            </a>
          </div>
        </section>

        {/* ------------------------------------------------------ board --- */}
        <section className={s.board} aria-label="Service board">
          <div className={s.boardHead}>
            <span className={`${s.boardTitle} ${s.display}`}>Service board</span>
            <span className={`${s.live} ${s.label}`}>
              <span className={s.liveDot} aria-hidden="true" />
              Sample data
            </span>
          </div>

          <div className={s.boardScroll}>
            <table className={s.rows}>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Unit</th>
                  <th>Technician</th>
                  <th>Bay</th>
                  <th>Status</th>
                  <th>On the clock</th>
                </tr>
              </thead>
              <tbody>
                {demoJobs.map((j, i) => (
                  <tr key={j.id}>
                    <td className={`${s.pos} ${s.mono}`}>{i + 1}</td>
                    <td>
                      <div className={s.unit}>{j.unit}</div>
                      <div className={s.work}>{j.work}</div>
                    </td>
                    <td>{j.tech}</td>
                    <td className={s.bay}>{j.bay}</td>
                    <td>
                      <span
                        className={`${s.badge} ${
                          j.status === 'In progress'
                            ? s.badgeRun
                            : j.status === 'Complete'
                              ? s.badgeDone
                              : s.badgeQueue
                        }`}
                      >
                        {j.status}
                      </span>
                    </td>
                    <td className={`${s.clock} ${s.mono}`}>{j.clock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={s.boardFoot}>
            <span className={s.label}>3 bays · 3 technicians</span>
            <span className={s.label}>1 running · 1 queued · 1 complete</span>
          </div>
        </section>

        {/* --------------------------------------------------- outcomes --- */}
        <section className={s.section}>
          <div className={s.secHead}>
            <h2 className={`${s.h2} ${s.display}`}>What a shop actually gets out of it</h2>
            <span className={s.label}>Three things</span>
          </div>

          <div className={s.ranked}>
            {outcomes.map((o, i) => (
              <article key={o.key} className={s.rank}>
                <span className={`${s.rankNo} ${s.mono}`}>{i + 1}</span>
                <h3 className={`${s.rankTitle} ${s.display}`}>{o.title}</h3>
                <p className={s.rankBody}>{o.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------- detail --- */}
        <section className={s.section} id="detail">
          <div className={s.secHead}>
            <h2 className={`${s.h2} ${s.display}`}>
              The customer&rsquo;s machines, and the ticket they turn into
            </h2>
            <span className={s.label}>Sample data</span>
          </div>

          <div className={s.screens}>
            <div className={s.phone}>
              <div className={s.phoneHead}>
                <span className={`${s.phoneTitle} ${s.display}`}>Garage</span>
                <span className={s.label}>3 units</span>
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

            <div className={s.ticket}>
              <div className={s.ticketHead}>
                <span className={`${s.ticketUnit} ${s.display}`}>JOB 2841 · Top-end rebuild</span>
                <span className={s.label}>Parts attached</span>
              </div>

              {demoParts.map((p) => (
                <div key={p.ref} className={s.ticketRow}>
                  <span className={`${s.ticketRef} ${s.mono}`}>{p.ref}</span>
                  <span className={s.ticketName}>{p.name}</span>
                  <span className={`${s.ticketNo} ${s.mono}`}>{p.number}</span>
                  <span className={`${s.ticketQty} ${s.mono}`}>×{p.qty}</span>
                </div>
              ))}

              <div className={s.ticketFoot}>
                <span className={s.label}>5 lines on the ticket</span>
                <span className={`${s.label} ${s.ticketState}`}>Ready to invoice</span>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- audience --- */}
        <section className={s.panel}>
          <h2 className={`${s.panelTitle} ${s.display}`}>{audience.title}</h2>
          <p className={s.panelBody}>{audience.body}</p>
        </section>

        {/* -------------------------------------------------------- cta --- */}
        <section className={s.cta}>
          <div>
            <h2 className={`${s.ctaTitle} ${s.display}`}>{cta.heading}</h2>
            <p className={s.ctaText}>{cta.body}</p>
            <p className={s.ctaNote}>{cta.note}</p>
          </div>
          <div className={s.ctaActions}>
            <a className={s.btn} href={`mailto:${cta.email}`}>
              {cta.action}
            </a>
            <a className={`${s.ctaMail} ${s.mono}`} href={`mailto:${cta.email}`}>
              {cta.email}
            </a>
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
