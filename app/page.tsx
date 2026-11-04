import { Nav } from "@/components/site/nav";
import {
  ConsultationCta,
  Contact,
  Footer,
  Hero,
  Testimonials,
  Trainings,
  Values,
  WhyUs,
} from "@/components/site/sections";

export default function Home() {
  return (
    <>
      <a
        href="#tresc"
        className="sr-only z-60 bg-brand font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-5 focus:py-3"
      >
        Przejdź do treści
      </a>
      <Nav />
      <main id="tresc">
        <Hero />
        <WhyUs />
        <ConsultationCta />
        <Trainings />
        <Values />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
