/**
 * FIG. 1 — the shop, drawn as an assembly.
 *
 * Parts-fiche grammar: the machine in outline, one component pulled off along a
 * dashed assembly axis with its nominal position ghosted, and numbered callout
 * balloons on leader lines keyed to the table beside it.
 *
 * Geometry is the MVP app's own `machine-dirt.svg`, which is drawn for roughly
 * 120–200px wide. The canvas is sized around the machine at 1.3× rather than the
 * machine being blown up to fill a large canvas — past ~200px the round caps and
 * the single-path body stop reading as a machine and start reading as a sketch.
 */

const S = 1.3;
const TX = 30;
const TY = 62;

const px = (x: number) => TX + x * S;
const py = (y: number) => TY + y * S;

const R_TYRE = 14 * S;
const R_HUB = 4 * S;

const HUB = { x: px(106), y: py(42) };
const PULLED = { x: 288, y: py(42) };

const AXIS_GAP = 8;
const BALLOON_R = 11;

type Callout = { n: string; bx: number; by: number; tx: number; ty: number };

const CALLOUTS: Callout[] = [
  { n: '01', bx: 96, by: 24, tx: px(70), ty: py(24) },
  { n: '02', bx: 30, by: 180, tx: px(24), ty: py(42) + R_TYRE - 3 },
  { n: '03', bx: 308, by: 44, tx: PULLED.x, ty: PULLED.y - R_TYRE + 3 },
];

export function Figure({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 210"
      className={className}
      fill="none"
      role="img"
      aria-label="Figure 1: the shop drawn as an assembly, with three numbered callouts keyed to the table below."
    >
      {/* Ghost of the pulled component, at its nominal position. */}
      <circle
        cx={HUB.x}
        cy={HUB.y}
        r={R_TYRE}
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 4"
        opacity="0.38"
      />

      {/* Assembly axis, with an end tick at each station. */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.6">
        <line
          x1={HUB.x + R_TYRE + AXIS_GAP}
          y1={HUB.y}
          x2={PULLED.x - R_TYRE - AXIS_GAP}
          y2={PULLED.y}
          strokeDasharray="5 4"
        />
        <line
          x1={HUB.x + R_TYRE + AXIS_GAP}
          y1={HUB.y - 5}
          x2={HUB.x + R_TYRE + AXIS_GAP}
          y2={HUB.y + 5}
        />
        <line
          x1={PULLED.x - R_TYRE - AXIS_GAP}
          y1={PULLED.y - 5}
          x2={PULLED.x - R_TYRE - AXIS_GAP}
          y2={PULLED.y + 5}
        />
      </g>

      {/* The machine, less the component that has been pulled. */}
      <g
        transform={`translate(${TX} ${TY}) scale(${S})`}
        stroke="currentColor"
        strokeWidth={2 / S}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="24" cy="42" r="14" />
        <circle cx="24" cy="42" r="4" />
        <path d="M30 21 L59 19 L75 17 L83 22 L86 27 L70 28 L67 38 L55 38 L54 29 L45 26 Z" />
        <path d="M24 42 L55 36" />
        <path d="M86 27 L106 42" />
        <path d="M85 24 L89 15" />
        <path d="M82 13 L98 16" />
        <path d="M90 29 L103 26" />
        <path d="M69 33 C 78 34 82 30 87 31" />
      </g>

      {/* The pulled component, in the keyed accent. */}
      <g
        stroke="var(--fiche-accent, currentColor)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={PULLED.x} cy={PULLED.y} r={R_TYRE} />
        <circle cx={PULLED.x} cy={PULLED.y} r={R_HUB} />
      </g>

      {/* Callouts: leader line first, so the balloon sits over its own tail. */}
      {CALLOUTS.map((c) => (
        <g key={c.n}>
          <line
            x1={c.bx}
            y1={c.by}
            x2={c.tx}
            y2={c.ty}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.7"
          />
          <circle cx={c.tx} cy={c.ty} r="2" fill="currentColor" />
          <circle
            cx={c.bx}
            cy={c.by}
            r={BALLOON_R}
            fill="var(--fiche-paper-bright, #fff)"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <text
            x={c.bx}
            y={c.by}
            textAnchor="middle"
            dominantBaseline="central"
            fill="currentColor"
            style={{ font: '700 9px var(--font-b612mono), monospace' }}
          >
            {c.n}
          </text>
        </g>
      ))}
    </svg>
  );
}
