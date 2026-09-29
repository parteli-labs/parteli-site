import type { Metadata } from 'next';

import { PageEffects } from '@/components/page-effects';
import { Footer } from '@/components/sections/footer';
import { LetsRydeLaunch } from '@/components/sections/lets-ryde-launch';
import { Nav } from '@/components/sections/nav';
import { LetsRydeProduct } from '@/components/sections/products';
import { ui } from '@/components/ui';

export const metadata: Metadata = {
  title: "Let's Ryde - the Parteli rider app",
  description:
    "Let's Ryde tells riders what's likely wrong, what part fixes it, where to get it for the best price, and which shops they can trust.",
};

/* Riders: the app announcement. */
export default function LetsRyde() {
  return (
    <>
      <PageEffects />
      <Nav current="riders" solid />
      <main id="top" className={ui.belowNav}>
        <LetsRydeLaunch />
        <LetsRydeProduct />
      </main>
      <Footer />
    </>
  );
}
