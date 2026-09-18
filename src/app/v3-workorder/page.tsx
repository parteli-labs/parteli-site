import Image from 'next/image';
import Link from 'next/link';
import { Saira_Condensed, Courier_Prime } from 'next/font/google';

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

import s from './page.module.css';

const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-saira',
  display: 'swap',
});

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier',
  display: 'swap',
});

export const metadata = { title: 'Parteli — draft 3, the repair order' };

const LINE_NOS = ['01', '02', '03'] as const;

export default function V3() {
  return (
    <main className={`${s.root} ${saira.variable} ${courier.variable}`}>
      {/*
        THESIS: The document a service shop actually runs on is the multi-part
          repair order, so the page IS one — pre-printed furniture in press ink,
          entries typed into its fields, a stamp struck across the note. It
          refuses the marketing-hero arrangement entirely: the headline is not a
          headline, it is what was typed into DESCRIPTION OF WORK.
        OWN-WORLD: Canary shop-copy ground (#efe6bd) under a white top copy
          (#faf6e8); every rule, box label and control in dull process blue
          (#2f5069); every entered value typed in Courier Prime near-black; hairline
          form rules at #c3b98d and 1.5px press-ink rules closing each block. One
          stamp red (#b3342a), used once, multiplied and rotated. No radius, no
          shadow except the sheet's own lift, no gradient.
        STORY: A shop owner recognises the paperwork before the pitch, reads the
          promise as a typed entry, runs down three ruled line items, sees the
          product attached as an addendum, and signs on the rule at the foot.
        FIRST VIEWPORT: Form masthead with the wordmark and REPAIR ORDER, a four-cell
          boxed field strip beneath it, then the DESCRIPTION OF WORK box holding the
          promise typed at up to 2.7rem in 30ch, the qualifier under it, and the
          authorise control in press ink.
        FORM: Repair order / carbon-copy NCR form. Candidate 2 of the grounded list,
          built as an alternate; assigned candidate was 5; seed key 173c3e44.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the
        finish review, the verdict, and DESIGN.md.
      */}

      <div className={s.wrap}>
        <article className={s.form}>
          <header className={s.formHead}>
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
            <span className={s.formTitle}>Repair Order</span>
            <Link href="/" className={s.headBack}>
              Draft 3 · All drafts
            </Link>
          </header>

          {/* Boxed metadata strip. */}
          <div className={s.fields}>
            <div className={s.field}>
              <span className={s.printed}>Form No.</span>
              <div className={`${s.fieldValue} ${s.typed}`}>PTL-0001</div>
            </div>
            <div className={s.field}>
              <span className={s.printed}>Issued to</span>
              <div className={`${s.fieldValue} ${s.typed}`}>Independent dealers</div>
            </div>
            <div className={s.field}>
              <span className={s.printed}>Status</span>
              <div className={`${s.fieldValue} ${s.typed}`}>Alpha — limited</div>
            </div>
            <div className={s.field}>
              <span className={s.printed}>Prepared by</span>
              <div className={`${s.fieldValue} ${s.typed}`}>Parteli Labs</div>
            </div>
          </div>

          {/* The promise, typed into the work box. */}
          <section className={s.workBox}>
            <span className={`${s.printed} ${s.workLabel}`}>Description of work</span>
            <h1 className={s.h1}>{promise}</h1>
            <p className={s.heroSub}>{subPromise}</p>
            <div className={s.heroActions}>
              <a className={s.btn} href={`mailto:${cta.email}`}>
                {cta.action}
              </a>
              <a className={`${s.btn} ${s.btnGhost}`} href="#attached">
                See it running
              </a>
            </div>
          </section>

          {/* Outcomes as ruled line items. */}
          <section className={s.lines}>
            <div className={s.lineHead}>
              <span className={s.printed}>Line</span>
              <span className={s.printed}>Item</span>
              <span className={`${s.printed} ${s.detailHead}`}>Detail</span>
            </div>

            {outcomes.map((o, i) => (
              <div key={o.key} className={s.line}>
                <span className={`${s.lineNo} ${s.typed}`}>{LINE_NOS[i]}</span>
                <h2 className={s.lineName}>{o.title}</h2>
                <p className={s.lineBody}>{o.body}</p>
              </div>
            ))}
          </section>

          {/* The product, attached. */}
          <section className={s.attach} id="attached">
            <div className={s.attachHead}>
              <h2 className={s.attachTitle}>Attached — the system, as it stands</h2>
              <span className={s.printed}>Addendum A · Sample data</span>
            </div>

            <div className={s.screens}>
              <div className={s.phone}>
                <div className={s.phoneHead}>
                  <span className={s.phoneTitle}>Garage</span>
                  <span className={s.phoneCount}>3 units</span>
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
                        <div className={`${s.vserial} ${s.typed}`}>
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
                        <div className={`${s.vmeter} ${s.typed}`}>{m.meterValue}</div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className={s.console}>
                <div className={s.consoleBar}>
                  <span className={s.consoleTitle}>Service board</span>
                  <span className={s.consoleMeta}>3 bays · 3 techs</span>
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
                          <td className={s.typed}>{j.ticket}</td>
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
                          <td className={s.typed}>{j.clock}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Audience note, stamped. */}
          <section className={s.noteBlock}>
            <h2 className={s.noteTitle}>{audience.title}</h2>
            <p className={s.noteBody}>{audience.body}</p>
            <span className={s.stamp} aria-hidden="true">
              Independent
            </span>
          </section>

          {/* Authorise. */}
          <section className={s.auth}>
            <div>
              <h2 className={s.authTitle}>{cta.heading}</h2>
              <p className={s.authText}>{cta.body}</p>
              <p className={s.authNote}>{cta.note}</p>
            </div>
            <div className={s.authActions}>
              <a className={s.btn} href={`mailto:${cta.email}`}>
                {cta.action}
              </a>
              <a className={`${s.sigLine} ${s.typed}`} href={`mailto:${cta.email}`}>
                {cta.email}
                <span className={`${s.printed} ${s.sigCaption}`}>Write to us here</span>
              </a>
            </div>
          </section>
        </article>

        {/* The three copies, named. */}
        <div className={s.copies}>
          <span className={`${s.copy} ${s.copyWhite}`}>White — shop</span>
          <span className={`${s.copy} ${s.copyCanary}`}>Canary — customer</span>
          <span className={`${s.copy} ${s.copyPink}`}>Pink — file</span>
        </div>

        <footer className={s.footer}>
          <span className={s.typed}>{footer.legal}</span>
          <p className={s.footerNote}>{footer.disclosure}</p>
        </footer>
      </div>
    </main>
  );
}
