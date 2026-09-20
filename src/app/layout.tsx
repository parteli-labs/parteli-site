import type { Metadata, Viewport } from 'next';
import './globals.css';

const TITLE = 'Parteli — one system for an independent powersports shop';
const DESCRIPTION =
  'One system for the work your shop already does: sourcing parts, tracking who is on the clock, getting the invoice out. We are opening a small alpha.';

/**
 * `metadataBase` resolves the OG image to an absolute URL, which every scraper
 * requires. Vercel sets VERCEL_PROJECT_PRODUCTION_URL on production deploys; set
 * NEXT_PUBLIC_SITE_URL once a custom domain is attached.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

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
