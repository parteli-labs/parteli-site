/**
 * The three machine silhouettes from the MVP app (`assets/art/machine-*.svg`),
 * transcribed to inline SVG so each draft can set stroke colour and weight from
 * its own world instead of shipping three baked PNG variants.
 *
 * Geometry is unchanged from the app: 130×62 viewBox, round caps and joins.
 */

export type MachineKind = 'dirt' | 'road' | 'utv';

const PATHS: Record<MachineKind, React.ReactNode> = {
  dirt: (
    <>
      <circle cx="24" cy="42" r="14" />
      <circle cx="106" cy="42" r="14" />
      <circle cx="24" cy="42" r="4" />
      <circle cx="106" cy="42" r="4" />
      <path d="M30 21 L59 19 L75 17 L83 22 L86 27 L70 28 L67 38 L55 38 L54 29 L45 26 Z" />
      <path d="M24 42 L55 36" />
      <path d="M86 27 L106 42" />
      <path d="M85 24 L89 15" />
      <path d="M82 13 L98 16" />
      <path d="M90 29 L103 26" />
      <path d="M69 33 C 78 34 82 30 87 31" />
    </>
  ),
  road: (
    <>
      <circle cx="25" cy="43" r="14" />
      <circle cx="105" cy="43" r="14" />
      <circle cx="25" cy="43" r="4" />
      <circle cx="105" cy="43" r="4" />
      <path d="M35 25 L60 23 L78 21 L85 26 L87 31 L72 31 L69 40 L57 40 L56 31 L48 28 Z" />
      <path d="M25 43 L57 38" />
      <path d="M87 31 L105 43" />
      <path d="M87 27 L99 29" />
      <path d="M85 22 L92 26" />
      <path d="M92 36 L104 33" />
      <path d="M71 36 C 80 37 86 35 90 36" />
    </>
  ),
  utv: (
    <>
      <circle cx="30" cy="44" r="14" />
      <circle cx="100" cy="44" r="14" />
      <circle cx="30" cy="44" r="4" />
      <circle cx="100" cy="44" r="4" />
      <path d="M13 44 L14 33 L24 31 L38 30 L47 17 L84 17 L92 30 L116 33 L117 44" />
      <path d="M47 17 L54 30 L86 30" />
      <path d="M66 17 L66 30" />
      <path d="M54 30 L52 37 L88 37 L86 30" />
      <path d="M16 36 L24 31" />
      <path d="M92 30 L95 37" />
    </>
  ),
};

export function Machine({
  kind,
  strokeWidth = 2,
  className,
  title,
}: {
  kind: MachineKind;
  strokeWidth?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 130 62"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {PATHS[kind]}
    </svg>
  );
}
