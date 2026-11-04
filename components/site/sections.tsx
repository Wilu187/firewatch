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
    <section id="home" className="relative flex flex-col items-center justify-center overflow-hidden text-white sm:min-h-svh">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_40%] xl:inset-auto! xl:top-[-0.49%]! xl:left-[-14.37%]! xl:h-[110.94%]! xl:w-[118.33%]! xl:max-w-none xl:object-center"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* pt = wysokość nawigacji (84 / 96px) + oddech; treść centrowana w pozostałej wysokości ekranu. */}
      <div className="relative flex w-full flex-col items-center gap-10 px-2.5 pt-[120px] pb-16 sm:gap-12 md:pt-[136px] md:pb-20">
        <div className="flex w-full max-w-[400px] flex-col items-center gap-[30px] border-5 border-white/20 bg-black/22 px-3 py-8 sm:w-auto sm:max-w-none sm:px-16 sm:py-12">
          <img src="/icons/logo-hero.svg" width={234} height={206} alt="FireWatch" className="h-auto w-[170px] shrink-0 sm:w-[234px]" />
          <h1 className="w-full bg-night px-3 py-5 text-center text-[clamp(16px,4.8vw,20px)] leading-[1.3] font-semibold tracking-[0.02em] uppercase sm:w-auto sm:px-10 sm:py-[30px] sm:text-4xl sm:leading-[1.25] sm:whitespace-nowrap">
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
        <div className="mt-12 grid justify-items-center gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12.5 lg:gap-x-[103px]">
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
        <Image src="/images/cta.jpg" alt="" fill sizes="100vw" className="object-cover object-[center_40%]" />
        <div className="absolute inset-0 bg-black/45 sm:bg-black/20" />
      </div>
      <Container className="relative py-16 sm:py-25">
        <div className="flex max-w-[834px] flex-col items-stretch gap-10 sm:items-start sm:gap-16">
          <Heading variant="display" tone="inverse" className="max-w-[600px]">
            Zrób pierwszy krok w kierunku bezpieczeństwa!
          </Heading>
          <div className="flex max-w-[680px] flex-col gap-5 sm:gap-6">
            <Text variant="prose">
              Nie czekaj, aż problemy związane z BHP i PPOŻ staną się realnym zagrożeniem
              dla Twojej firmy.
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
        {/* Mobile: lista wierszy. Tablet: 3 + 2 wyśrodkowane. Desktop: 5 w rzędzie. */}
        <div className="mt-10 flex flex-col gap-3 sm:mt-20 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 lg:flex-nowrap">
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
    // Kolumna tekstu startuje na osi kontenera (pl-spine), zdjęcie dochodzi do prawej krawędzi
    // i rozciąga się na całą wysokość sekcji, niezależnie od otwartego punktu akordeonu.
    <Section id="o-nas" tone="alt" spacing="none" className="md:pl-spine">
      <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20">
        <div className="px-6 pt-16 pb-12 md:w-[400px] md:shrink-0 md:px-0 md:py-20 lg:w-[460px]">
          <SectionHeader
            align="start"
            title="Twoje bezpieczeństwo – nasza misja"
            lead="Nasze wartości i podejście do bezpieczeństwa."
            className="mb-8"
          />
          <Accordion defaultValue={["value-0"]}>
            {VALUES.map((v, i) => (
              <AccordionItem key={v.title} value={`value-${i}`} index={i + 1} title={v.title}>
                {v.body}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="relative aspect-770/477 w-full md:aspect-auto md:min-h-[477px] md:min-w-0 md:flex-1">
          <Image
            src="/images/values.jpg"
            alt="Czerwona stacja zaworów instalacji tryskaczowej w pomieszczeniu technicznym"
            fill
            sizes="(max-width: 960px) 100vw, 60vw"
            // Główny motyw (zawór i elektrozawór) jest po prawej – przy wąskiej kolumnie przycinamy głównie lewą stronę.
            className="object-cover object-[70%_center]"
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
        <div className="mt-12 grid justify-items-center gap-y-14 sm:mt-20 min-[720px]:grid-cols-3 min-[720px]:gap-x-6 lg:gap-x-12">
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
    // Lustro sekcji „O nas”: zdjęcie od lewej krawędzi, formularz kończy się na prawej osi kontenera.
    <Section id="kontakt" tone="dark" spacing="none" className="md:pr-spine">
      <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20">
        <div className="relative order-2 aspect-770/477 w-full md:order-none md:aspect-auto md:min-h-[513px] md:min-w-0 md:flex-1">
          <Image
            src="/images/contact.jpg"
            alt="Dłonie wskazujące na ekran laptopa"
            fill
            sizes="(max-width: 960px) 100vw, 60vw"
            // Wysoka kolumna przycina boki – trzymamy ekran laptopa i wskazującą dłoń (lewa część kadru).
            className="object-cover object-[30%_center]"
          />
        </div>
        <div className="flex flex-col items-center gap-10 px-6 py-16 md:w-[400px] md:shrink-0 md:px-0 md:py-20 lg:w-[470px]">
          <SectionHeader
            tone="inverse"
            title="Masz dodatkowe pytania?"
            lead="Wypełnij formularz, a skontaktujemy się z Tobą wkrótce!"
          />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Footer --- */

export function Footer() {
  // Ikony z adresem "#" prowadziłyby donikąd – pokazujemy tylko uzupełnione profile.
  const socialLinks = SOCIAL_LINKS.filter((s) => s.href && s.href !== "#");

  return (
    <footer className="bg-surface-alt px-6 py-15">
      <div className="flex flex-col items-center justify-center gap-12 xl:flex-row xl:gap-30">
        <div className="flex flex-col items-center gap-10 md:h-[234px] md:flex-row md:items-stretch md:gap-25">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-12 md:text-left">
            <img src="/icons/logo-footer.svg" width={150} height={132} alt="FireWatch" />
            <div className="flex w-[238px] flex-col items-center justify-between gap-6 md:h-full md:items-start md:gap-0">
              <Text className="text-lg font-semibold text-ink-strong">FireWatch</Text>
              <Text as="address" className="text-ink not-italic">
                {ADDRESS.map((line, i) => (
                  <span key={line} className="block">
                    {line}
                    {i < ADDRESS.length - 1 && <span className="sr-only">, </span>}
                  </span>
                ))}
              </Text>
              {socialLinks.length > 0 && (
                <ul className="-mx-2.5 flex items-center">
                  {socialLinks.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        aria-label={s.name}
                        className="flex size-11 items-center justify-center transition-opacity hover:opacity-60"
                      >
                        <img src={s.icon} width={s.width} height={s.height} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <nav aria-label="Stopka" className="flex flex-col items-center justify-between gap-4 md:w-[154px] md:items-start md:gap-0">
            {FOOTER_LINKS.map((l) => (
              <Text
                key={l.href}
                as="a"
                href={l.href}
                variant="label"
                className="whitespace-nowrap py-1 transition-colors hover:text-brand"
              >
                {l.label}
              </Text>
            ))}
          </nav>
        </div>
        <div className="flex w-[354px] max-w-full flex-col items-center justify-between gap-4 xl:h-[234px] xl:gap-0">
          <img src="/icons/shield-gray.svg" width={165} height={193} alt="" className="h-auto w-[110px] md:w-[165px]" />
          <Text variant="small" className="text-muted">
            © {new Date().getFullYear()} FireWatch
          </Text>
        </div>
      </div>
    </footer>
  );
}
