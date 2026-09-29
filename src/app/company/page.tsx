import type { Metadata } from 'next';

import { PageEffects } from '@/components/page-effects';
import { Advantage } from '@/components/sections/advantage';
import { BusinessModel } from '@/components/sections/business-model';
import { Crew } from '@/components/sections/crew';
import { Footer } from '@/components/sections/footer';
import { Invest } from '@/components/sections/invest';
import { Mission } from '@/components/sections/mission';
import { Nav } from '@/components/sections/nav';
import { Opportunity } from '@/components/sections/opportunity';
import { ui } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Company - Parteli Labs',
  description:
    'Parteli Labs: our mission, the market, how Parteli makes money, and the investment round.',
};

/* Company and investors. Adds to the dealer story on the home page rather than
   replacing it. */
export default function Company() {
  return (
    <>
      <PageEffects />
      <Nav current="company" solid />
      <main id="top" className={ui.belowNav}>
        <Mission />
        <Opportunity />
        <Advantage />
        <BusinessModel />
        <Crew />
        <Invest />
      </main>
      <Footer />
    </>
  );
}
