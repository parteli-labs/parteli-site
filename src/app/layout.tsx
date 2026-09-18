import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parteli',
  description:
    'The parts, the bays and the money for an independent powersports shop, in one system.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/*
          PARTELI SITE — FIRST-DRAFT ROUND (seed key 173c3e44, direction scope, persuade)
          Five landing drafts, one per route, each a complete visual world derived from a
          different material family in the dealer's own life. Each route carries its own
          direction contract at the top of its markup; this layout holds no world of its
          own by design, so a draft can never inherit another draft's palette or type.
          The round exists because the brief asked for 3-5 drafts to choose from; the
          committed build, its finish review and DESIGN.md follow the chosen draft.
        */}
        {children}
      </body>
    </html>
  );
}
