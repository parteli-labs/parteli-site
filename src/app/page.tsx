import { PageEffects } from '@/components/page-effects';
import { Contact } from '@/components/sections/contact';
import { Crew } from '@/components/sections/crew';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
import { Mission } from '@/components/sections/mission';
import { Nav } from '@/components/sections/nav';
import { Opportunity } from '@/components/sections/opportunity';
import { Problem } from '@/components/sections/problem';
import { Products } from '@/components/sections/products';
import { Solution } from '@/components/sections/solution';
import { WhySwitch } from '@/components/sections/why-switch';

/*
 * The landing page is its sections in order. Each lives in
 * src/components/sections/ with its own CSS module; reorder or remove lines here.
 * Sections taken off the page are kept in src/components/sections/shelved/.
 */
export default function Home() {
  return (
    <>
      <PageEffects />
      <Nav />
      <main id="top">
        <Hero />
        <Mission />
        <Problem />
        <Opportunity />
        <Solution />
        <WhySwitch />
        <Products />
        <Crew />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
