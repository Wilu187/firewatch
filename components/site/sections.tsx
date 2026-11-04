/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FeatureItem, StepCard, TestimonialCard } from "@/components/ui/cards";
import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { Heading, Text } from "@/components/ui/typography";
import {
  ADDRESS,
  FOOTER_LINKS,
  REASONS,
  SOCIAL_LINKS,
  TESTIMONIALS,
  TRAININGS,
  VALUES,
} from "@/lib/content";
import { ContactForm } from "./contact-form";

/* ---------------------------------------------------------------- Hero --- */

export function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center overflow-hidden text-white sm:min-h-svh md:min-h-[1024px]">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_40%] xl:inset-auto! xl:top-[-0.49%]! xl:left-[-14.37%]! xl:h-[110.94%]! xl:w-[118.33%]! xl:max-w-none xl:object-center"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative flex w-full flex-col items-center gap-12 px-2.5 pt-[144px] pb-20 sm:pb-15 md:gap-20 md:pt-[178px]">
        <div className="flex w-full max-w-[400px] flex-col items-center gap-[30px] border-5 border-white/20 bg-black/22 px-5 py-8 sm:h-[506px] sm:w-[554px] sm:max-w-none sm:px-[120px] sm:py-10">
          <img src="/icons/logo-hero.svg" width={234} height={206} alt="FireWatch" className="h-auto w-[170px] shrink-0 sm:w-[234px]" />
          <h1 className="w-full bg-night p-5 text-center text-lg font-medium uppercase sm:w-auto sm:px-10 sm:py-[30px] sm:text-3xl sm:whitespace-nowrap">
            Kompleksowe <br />
            rozwiązania BHP i PPOŻ <br />
            dla Twojej firmy
          </h1>
        </div>
        <Button href="#uslugi" size="lg">
          Poznaj nasze usługi
        </Button>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Why us --- */

export function WhyUs() {
  return (
    <Section id="uslugi" tone="surface">
      <Container>
        <SectionHeader
          title="Dlaczego warto nam zaufać?"
          leadSize="lg"
          lead={
            <>
              <Text variant="lead-lg">
                Wybór odpowiedniego partnera w zakresie bezpieczeństwa pracy <br className="max-md:hidden" />i ochrony
                przeciwpożarowej to klucz do spokoju i zgodności <br className="max-md:hidden" />z obowiązującymi
                przepisami.
              </Text>
              <Text variant="lead-lg">
                Nasza firma oferuje kompleksowe rozwiązania dostosowane do Twoich potrzeb. Zobacz, co sprawia, że
                jesteśmy najlepszym wyborem!
              </Text>
            </>
          }
        />
        <div className="mt-12 flex flex-wrap items-start justify-center gap-8 sm:mt-20 sm:gap-x-[103px] sm:gap-y-12.5">
          {REASONS.map((r) => (
            <FeatureItem key={r.title} icon={r.icon} title={r.title}>
              {r.text}
            </FeatureItem>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ CTA --- */

export function ConsultationCta() {
  return (
    <Section tone="none" spacing="none" className="relative overflow-hidden px-6 text-snow">
      <div aria-hidden className="absolute inset-0">
        <Image src="/images/cta.png" alt="" fill sizes="100vw" className="object-cover object-bottom" />
        <div className="absolute inset-0 bg-black/45 sm:bg-black/20" />
      </div>
      <Container className="relative py-16 sm:py-25">
        <div className="flex max-w-[834px] flex-col items-center gap-10 sm:gap-20">
          <Heading variant="display" tone="inverse" className="max-w-[600px] self-stretch">
            Zrób pierwszy krok w kierunku bezpieczeństwa!
          </Heading>
          <div className="flex flex-col gap-5 self-stretch sm:gap-[33px]">
            <Text variant="prose">
              Nie czekaj, aż problemy związane z BHP i PPOŻ staną się realnym zagrożeniem
              <br className="max-md:hidden" /> dla Twojej firmy.
            </Text>
            <Text variant="prose">
              Skorzystaj z naszej bezpłatnej konsultacji, podczas której omówimy Twoje potrzeby i zaproponujemy
              rozwiązania dostosowane do specyfiki Twojej działalności.
            </Text>
            <Text variant="prose">
              Nasz zespół ekspertów jest gotowy, aby pomóc Ci zadbać o bezpieczeństwo Twoich pracowników i zgodność z
              przepisami prawa.
            </Text>
          </div>
          <Button href="#kontakt" size="lg">
            Umów bezpłatną konsultację
          </Button>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------ Trainings --- */

export function Trainings() {
  return (
    <Section id="szkolenia" tone="alt">
      <Container>
        <SectionHeader
          title="Szkolenia BHP i PPOŻ – inwestycja w bezpieczeństwo Twojego zespołu."
          lead={
            <Text variant="lead">
              Nasze szkolenia to nie tylko obowiązek wynikający z przepisów prawa, ale przede wszystkim praktyczna
              wiedza, która pomaga chronić zdrowie i życie pracowników. Organizujemy kursy dostosowane{" "}
              <br className="max-md:hidden" />
              do różnych branż, które kończą się uzyskaniem certyfikatów potwierdzających kwalifikacje.
            </Text>
          }
        />
        <div className="mt-12 flex flex-wrap items-stretch justify-center gap-6 sm:mt-20 lg:flex-nowrap lg:justify-between">
          {TRAININGS.map((t) => (
            <StepCard key={t.marker} marker={t.marker} title={t.title}>
              {t.text}
            </StepCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------------- Values --- */

export function Values() {
  return (
    <Section id="o-nas" tone="alt" spacing="none" className="md:pl-[50px]">
      <div className="ml-auto flex max-w-[1390px] flex-col items-stretch md:flex-row md:items-start md:justify-center md:gap-20">
        <div className="min-w-0 flex-1 px-6 pb-12 md:max-w-[540px] md:px-0 md:pb-10">
          <SectionHeader
            align="start"
            kicker="Nasze wartości i podejście do bezpieczeństwa"
            title="Twoje bezpieczeństwo – nasza misja"
            className="pt-15 pb-[30px] md:pl-10"
          />
          <Accordion defaultValue={["value-1"]}>
            {VALUES.map((v, i) => (
              <AccordionItem key={v.title} value={`value-${i}`} index={i + 1} title={v.title}>
                {v.body}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="relative aspect-770/477 w-full shrink-0 md:aspect-auto md:h-[477px] md:w-[53.5vw] 2xl:w-[770px]">
          <Image
            src="/images/values.png"
            alt="Pracownik w kasku i kamizelce odblaskowej przy szafce z gaśnicą"
            fill
            sizes="(max-width: 960px) 100vw, 770px"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- Testimonials --- */

export function Testimonials() {
  return (
    <Section tone="surface" spacing="compact">
      <Container>
        <SectionHeader
          title="Co mówią o nas nasi klienci?"
          lead={
            <Text variant="lead" className="max-w-[560px]">
              Zaufanie i zadowolenie klientów to dla nas priorytet. Oto kilka opinii od osób, które skorzystały z
              naszych usług i doceniły nasze zaangażowanie oraz profesjonalizm.
            </Text>
          }
        />
        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-[103px] gap-y-12.5 sm:mt-20">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} avatar={t.avatar} name={t.name} role={t.role}>
              {t.text}
            </TestimonialCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------- Contact --- */

export function Contact() {
  return (
    <Section id="kontakt" tone="dark" spacing="none" className="md:pr-20">
      <div className="flex max-w-[1360px] flex-col md:flex-row md:items-start md:justify-center md:gap-20">
        <div className="relative order-2 aspect-770/477 w-full shrink-0 md:order-none md:aspect-auto md:h-[513px] md:w-[53.5vw] 2xl:w-[770px]">
          <Image
            src="/images/contact.png"
            alt="Dłonie wskazujące na ekran laptopa"
            fill
            sizes="(max-width: 960px) 100vw, 770px"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-center gap-12.5 px-6 py-15 md:px-0 md:pt-15 md:pb-9">
          <SectionHeader tone="inverse" kicker="Wypełnij formularz, a skontaktujemy się z Tobą wkrótce!" title="Masz dodatkowe pytania?" />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Footer --- */

export function Footer() {
  return (
    <footer className="bg-surface-alt px-6 py-15">
      <div className="flex flex-col items-center justify-center gap-12 xl:flex-row xl:gap-30">
        <div className="flex flex-col items-center gap-10 md:h-[234px] md:flex-row md:items-stretch md:gap-25">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-12 md:text-left">
            <img src="/icons/logo-footer.svg" width={150} height={132} alt="FireWatch" />
            <div className="flex w-[238px] flex-col items-center justify-between gap-6 md:h-full md:items-start md:gap-0">
              <Text variant="label">FireWatch</Text>
              <Text as="address" variant="label" className="not-italic">
                {ADDRESS.map((line, i) => (
                  <span key={line} className="block">
                    {line}
                    {i < ADDRESS.length - 1 && <span className="sr-only">, </span>}
                  </span>
                ))}
              </Text>
              <ul className="flex items-center gap-4">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      aria-label={s.name}
                      className="flex size-6 items-center justify-center transition-opacity hover:opacity-60"
                    >
                      <img src={s.icon} width={s.width} height={s.height} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <nav aria-label="Stopka" className="flex flex-col items-center justify-between gap-4 md:w-[154px] md:items-start md:gap-0">
            {FOOTER_LINKS.map((l) => (
              <Text
                key={l.href}
                as="a"
                href={l.href}
                variant="label"
                className="whitespace-nowrap uppercase transition-colors hover:text-brand"
              >
                {l.label}
              </Text>
            ))}
          </nav>
        </div>
        <div className="flex w-[354px] max-w-full flex-col items-center justify-between gap-4 xl:h-[234px] xl:gap-0">
          <img src="/icons/shield-gray.svg" width={165} height={193} alt="" className="h-auto w-[110px] md:w-[165px]" />
          <Text variant="label">FireWatch @ 2025.</Text>
        </div>
      </div>
    </footer>
  );
}
