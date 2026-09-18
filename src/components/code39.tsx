/**
 * Code 39 barcode, actually encoded.
 *
 * A drawn-on barcode is the same lapse as a fake progress ring: it looks like
 * the world's material without being it. These render the string they sit under,
 * so a scanner reads the part number off the screen.
 *
 * Each character is nine elements — five bars, four spaces, alternating, three
 * of them wide. `*` is the start/stop sentinel and is added here.
 */

const CODE39: Record<string, string> = {
  '0': 'nnnwwnwnn', '1': 'wnnwnnnnw', '2': 'nnwwnnnnw', '3': 'wnwwnnnnn',
  '4': 'nnnwwnnnw', '5': 'wnnwwnnnn', '6': 'nnwwwnnnn', '7': 'nnnwnnwnw',
  '8': 'wnnwnnwnn', '9': 'nnwwnnwnn', A: 'wnnnnwnnw', B: 'nnwnnwnnw',
  C: 'wnwnnwnnn', D: 'nnnnwwnnw', E: 'wnnnwwnnn', F: 'nnwnwwnnn',
  G: 'nnnnnwwnw', H: 'wnnnnwwnn', I: 'nnwnnwwnn', J: 'nnnnwwwnn',
  K: 'wnnnnnnww', L: 'nnwnnnnww', M: 'wnwnnnnwn', N: 'nnnnwnnww',
  O: 'wnnnwnnwn', P: 'nnwnwnnwn', Q: 'nnnnnnwww', R: 'wnnnnnwwn',
  S: 'nnwnnnwwn', T: 'nnnnwnwwn', U: 'wwnnnnnnw', V: 'nwwnnnnnw',
  W: 'wwwnnnnnn', X: 'nwnnwnnnw', Y: 'wwnnwnnnn', Z: 'nwwnwnnnn',
  '-': 'nwnnnnwnw', '.': 'wwnnnnwnn', ' ': 'nwwnnnwnn', $: 'nwnwnwnnn',
  '/': 'nwnwnnnwn', '+': 'nwnnnwnwn', '%': 'nnnwnwnwn', '*': 'nwnnwnwnn',
};

const NARROW = 1;
const WIDE = 2.6;

export function Code39({
  value,
  height = 28,
  className,
}: {
  value: string;
  height?: number;
  className?: string;
}) {
  const text = `*${value.toUpperCase()}*`;
  const bars: { x: number; w: number }[] = [];
  let x = 0;

  for (let i = 0; i < text.length; i += 1) {
    const pattern = CODE39[text[i]];
    if (!pattern) continue;
    for (let j = 0; j < pattern.length; j += 1) {
      const w = pattern[j] === 'w' ? WIDE : NARROW;
      // Even indices are bars, odd are spaces.
      if (j % 2 === 0) bars.push({ x, w });
      x += w;
    }
    // Inter-character gap.
    x += NARROW;
  }

  return (
    <svg
      viewBox={`0 0 ${x} ${height}`}
      height={height}
      className={className}
      preserveAspectRatio="none"
      role="img"
      aria-label={`Barcode: ${value}`}
      shapeRendering="crispEdges"
    >
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={0} width={b.w} height={height} fill="currentColor" />
      ))}
    </svg>
  );
}
