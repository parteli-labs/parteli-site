import { PageEffects } from '@/components/page-effects';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Hero } from '@/components/sections/hero';
import { Nav } from '@/components/sections/nav';
import { Problem } from '@/components/sections/problem';
import { DataCloud } from '@/components/sections/products';
import { Solution } from '@/components/sections/solution';
import { WhySwitch } from '@/components/sections/why-switch';

/*
 * The site is three pages, one per audience: dealers (this page), riders
 * (/lets-ryde) and company/investors (/company). Each page is its sections in
 * order; each section lives in src/components/sections/ with its own CSS module,
 * so reorder, remove or move lines between pages here.
 */
export default function Home() {
  return (
    <>
      <PageEffects />
      <Nav current="dealers" />
      <main id="top">
        <Hero />
        <Problem />
        <Solution />
        <WhySwitch />
        <DataCloud />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
