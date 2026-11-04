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
      <Nav />
      <main>
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
