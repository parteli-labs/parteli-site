import type { Metadata } from 'next';

import { PageEffects } from '@/components/page-effects';
import { LetsRydeLaunch } from '@/components/sections/lets-ryde-launch';

/* Preview of the stashed Let's Ryde section until the announcement page exists.
   Not linked from anywhere and not indexed. */
export const metadata: Metadata = {
  title: "Let's Ryde (draft)",
  robots: { index: false, follow: false },
};

export default function LetsRydeDraft() {
  return (
    <main>
      <PageEffects />
      <LetsRydeLaunch />
    </main>
  );
}
