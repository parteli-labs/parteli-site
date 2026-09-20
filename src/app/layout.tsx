import type { Metadata, Viewport } from 'next';
import './globals.css';

const TITLE = 'Parteli - many riders, many dealers, one system';
const DESCRIPTION =
  'Parteli is being built for the work your shop already does: sourcing parts, tracking who is on the clock, getting the invoice out. We are planning a small alpha.';

/**
 * `metadataBase` resolves the OG image to an absolute URL, which every scraper
 * requires. The production domain is the default rather than an env var: it is public,
 * not a secret, and a share card that silently breaks because a variable was never set
 * is a worse failure than a hardcoded string.
 *
 * NEXT_PUBLIC_SITE_URL still overrides it, which is what preview deploys want so their
 * cards point at the preview rather than at production.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://www.parteli.ca');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'Parteli',
  // Pre-launch. Remove when the page should be findable — see TODO.md.
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    siteName: 'Parteli',
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Parteli' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
};

/** Keeps mobile browser chrome dark against the page instead of default light. */
export const viewport: Viewport = {
  themeColor: '#080906',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
