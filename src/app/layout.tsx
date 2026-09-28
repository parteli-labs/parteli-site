import type { Metadata, Viewport } from 'next';
import './globals.css';

const TITLE = 'Parteli - many riders, many dealers, one system';
const DESCRIPTION = 'Parteli is being built to connect dealers\' shops, riders\' machines, and every part in between.';

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
