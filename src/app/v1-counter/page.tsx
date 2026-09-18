import Image from 'next/image';
import Link from 'next/link';
import { Archivo, Martian_Mono } from 'next/font/google';

import { Machine } from '@/components/machine';
import { Code39 } from '@/components/code39';
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
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const martian = Martian_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-martian',
  display: 'swap',
});

export const metadata = { title: 'Parteli — draft 1, the parts counter' };

/** Keys read like bin locations, because that is what they are here. */
const BIN_KEYS = ['A-01', 'A-02', 'A-03'] as const;

export default function V1() {
  return (
    <main className={`${s.root} ${archivo.variable} ${martian.variable}`}>
      {/*
        THESIS: A powersports shop's front door is a parts counter, so the page is
          built out of the counter's own printed matter — bin labels, thermal ink,
          steel shelf rail, catalog tab. It refuses the dark-SaaS arrangement: no
          glowing hero, no floating glass screenshot, no three icon cards.
        OWN-WORLD: Warm label stock (#e6e1d5) and bright label face (#f7f4ec) under
          dense thermal ink (#17170f); steel shelving greys; one safety red (#d1331a)
          for the only action; a catalog-tab lime (#cfd91f) for keyed headers.
          Archivo heavy and tight for print lettering, Martian Mono for every part
          number and code. Hard 1px rules, no radius above 1px on page furniture,
          no gradient except the machined shelf edge. Real Code 39 barcodes.
        STORY: A shop owner sees the trade's own paper, reads one line about what
          this runs, sees the product working on a steel tray, and pulls the tag.
        FIRST VIEWPORT: A bin label at poster scale, filling the width under a steel
          rail: lime keyed header, then the promise at up to 5.1rem in 19ch, the
          qualifier beneath, and at the foot the red pull-tag beside a scannable
          barcode of the product name.
        FORM: Parts counter — bin labels, shelving, supplier catalog. Candidate 5
          of the grounded list; seed key 173c3e44.
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
            <span className={s.mono}>Draft 1 · Counter</span>
            <Link href="/" className={s.topBack}>
              All drafts
            </Link>
          </div>
        </header>
      </div>

      {/* ---------------------------------------------------------- hero --- */}
      <div className={s.wrap}>
        <div className={s.rail} />
        <section className={s.hero}>
          <div className={`${s.label} ${s.heroLabel}`}>
            <div className={s.heroHead}>
              <span className={`${s.heroHeadKey} ${s.mono}`}>SHOP SYSTEM · 01</span>
              <span className={`${s.heroHeadKey} ${s.mono}`}>PARTELI LABS</span>
            </div>

            <div className={s.heroBody}>
              <h1 className={s.h1}>{promise}</h1>
              <p className={s.heroSub}>{subPromise}</p>
            </div>

            <div className={s.heroFoot}>
              <div className={s.heroActions}>
                <a className={s.pull} href={`mailto:${cta.email}`}>
                  {cta.action}
                </a>
                <a className={`${s.pull} ${s.pullGhost}`} href="#product">
                  See it running
                </a>
              </div>

              <div className={s.barcodeBlock}>
                <Code39 value="PARTELI" height={30} />
                <div className={`${s.barcodeCaption} ${s.mono}`}>PARTELI</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------- product --- */}
      <div className={s.wrap}>
        <section className={s.section} id="product">
          <div className={s.sectionHead}>
            <h2 className={s.h2}>This is the thing itself, not a picture of it</h2>
            <span className={`${s.sectionKey} ${s.mono}`}>IN THE TRAY</span>
          </div>

          <div className={s.tray}>
            <span className={`${s.trayTag} ${s.mono}`}>Sample data</span>

            <div className={s.trayGrid}>
              {/* Rider-side garage, as the shop sees a customer's machines. */}
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

              {/* Dealer-side board, over the ticket it opens onto. */}
              <div className={s.trayStack}>
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

              <div className={s.ticket}>
                <div className={s.ticketHead}>
                  <span className={s.ticketUnit}>
                    JOB 2841 · Top-end rebuild
                  </span>
                  <span className={`${s.consoleMeta} ${s.mono}`}>Parts attached</span>
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
                  <span>5 lines on the ticket</span>
                  <span className={s.ticketState}>Ready to invoice</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------ outcomes --- */}
      <div className={s.wrap}>
        <section className={s.section}>
          <div className={s.sectionHead}>
            <h2 className={s.h2}>What a shop actually gets out of it</h2>
            <span className={`${s.sectionKey} ${s.mono}`}>SHELF A</span>
          </div>

          <div className={s.rail} />
          <div className={s.bins}>
            {outcomes.map((o, i) => (
              <article key={o.key} className={s.bin}>
                <div className={`${s.binKey} ${s.mono}`}>
                  <span>{BIN_KEYS[i]}</span>
                  <span>{o.key.toUpperCase()}</span>
                </div>
                <h3 className={s.binTitle}>{o.title}</h3>
                <p className={s.binBody}>{o.body}</p>
                <div className={s.binCode}>
                  <Code39 value={`PTL ${BIN_KEYS[i]}`} height={18} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------- audience --- */}
      <div className={s.wrap}>
        <section className={s.tabBand}>
          <h2 className={s.tabTitle}>{audience.title}</h2>
          <p className={s.tabBody}>{audience.body}</p>
        </section>
      </div>

      {/* ------------------------------------------------------------ cta --- */}
      <div className={s.wrap}>
        <section className={s.cta}>
          <div className={s.req}>
            <div className={`${s.reqHead} ${s.mono}`}>
              <span>Requisition</span>
              <span>No. 0001</span>
            </div>
            <div className={s.reqBody}>
              <div>
                <h2 className={s.reqTitle}>{cta.heading}</h2>
                <p className={s.reqText}>{cta.body}</p>
                <p className={s.reqNote}>{cta.note}</p>
              </div>
              <div className={s.reqActions}>
                <a className={s.pull} href={`mailto:${cta.email}`}>
                  {cta.action}
                </a>
                <a className={`${s.reqMail} ${s.mono}`} href={`mailto:${cta.email}`}>
                  {cta.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --------------------------------------------------------- footer --- */}
      <div className={s.wrap}>
        <footer className={s.footer}>
          <span className={s.mono}>{footer.legal}</span>
          <p className={s.footerNote}>{footer.disclosure}</p>
        </footer>
      </div>
    </main>
  );
}
