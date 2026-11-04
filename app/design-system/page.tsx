import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FeatureItem, StepCard, TestimonialCard } from "@/components/ui/cards";
import { Form, TextField } from "@/components/ui/field";
import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { Separator } from "@/components/ui/separator";
import { Heading, Text } from "@/components/ui/typography";
import { REASONS, TESTIMONIALS, TRAININGS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FireWatch – Design System",
  robots: { index: false, follow: false },
};

const COLORS = [
  ["brand", "bg-brand", "#cf3a3a"],
  ["brand-hover", "bg-brand-hover", "#b53030"],
  ["danger-inverse", "bg-danger-inverse", "#ff8f8f"],
  ["ink", "bg-ink", "#262626"],
  ["ink-strong", "bg-ink-strong", "#232323"],
  ["ink-soft", "bg-ink-soft", "#3c3c3c"],
  ["muted", "bg-muted", "#6b6b6b"],
  ["line", "bg-line", "#e3e3e3"],
  ["line-inverse", "bg-line-inverse", "#b9b9b9"],
  ["snow", "bg-snow", "#f3f3f3"],
  ["surface", "bg-surface", "#fcfcfc"],
  ["surface-alt", "bg-surface-alt", "#f7f7f7"],
  ["surface-dark", "bg-surface-dark", "#1c1c1c"],
  ["surface-card-dark", "bg-surface-card-dark", "#322f30"],
  ["night", "bg-night", "#0f0f0f"],
] as const;

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 border-t border-line pt-10">
      <Text variant="kicker">{title}</Text>
      {children}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <Section tone="surface" className="min-h-svh">
      <Container className="flex flex-col gap-16">
        <SectionHeader
          as="h1"
          align="start"
          kicker="FireWatch"
          title="Design System"
          lead="Tokeny i komponenty używane na stronie. Prymitywy interaktywne bazują na Base UI, stylowanie – Tailwind CSS."
        />

        <Block title="Kolory">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {COLORS.map(([name, cls, hex]) => (
              <div key={name} className="flex flex-col gap-2">
                <div className={`h-16 border border-line ${cls}`} />
                <Text variant="caption" className="text-ink">
                  {name}
                  <br />
                  {hex}
                </Text>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Typografia">
          <div className="flex flex-col gap-4">
            <Heading variant="display">Heading / display</Heading>
            <Heading variant="section">Heading / section</Heading>
            <Heading variant="title">Heading / title</Heading>
            <Heading variant="card">Heading / card</Heading>
            <Heading variant="name">Heading / name</Heading>
            <Text variant="kicker">Text / kicker</Text>
            <Text variant="lead-lg">Text / lead-lg – duże wprowadzenie do sekcji.</Text>
            <Text variant="lead">Text / lead – standardowe wprowadzenie do sekcji.</Text>
            <Text variant="prose">Text / prose – dłuższy tekst na zdjęciu lub ciemnym tle.</Text>
            <Text>Text / body – tekst akapitowy w komponentach.</Text>
            <Text variant="quote">Text / quote – cytat z opinii klienta.</Text>
            <Text variant="caption">Text / caption – drobny opis.</Text>
            <Text variant="label">Text / label – stopka</Text>
          </div>
        </Block>

        <Block title="Przyciski (Base UI Button)">
          <div className="flex flex-wrap items-center gap-6">
            <Button size="lg">Primary lg</Button>
            <Button>Primary md</Button>
            <Button disabled>Disabled</Button>
            <div className="bg-surface-dark p-6">
              <Button variant="outline">Outline md</Button>
            </div>
          </div>
        </Block>

        <Block title="Akordeon (Base UI Accordion)">
          <div className="max-w-[540px]">
            <Accordion defaultValue={["b"]}>
              <AccordionItem value="a" index={1} title="Zamknięty element">
                Treść pierwszego elementu.
              </AccordionItem>
              <AccordionItem value="b" index={2} title="Otwarty element">
                Treść drugiego elementu – otwarta domyślnie.
              </AccordionItem>
            </Accordion>
          </div>
        </Block>

        <Block title="Formularz (Base UI Form + Field)">
          <div className="flex justify-center bg-surface-dark px-6 py-12">
            <Form className="max-w-[470px] items-center gap-12.5">
              <div className="flex w-full flex-col gap-7">
                <TextField name="ds-name" label="Imię" required />
                <TextField name="ds-email" label="E-mail" type="email" required />
                <TextField name="ds-message" label="Wiadomość" multiline />
              </div>
              <Button type="submit" variant="outline">
                Sprawdź walidację
              </Button>
            </Form>
          </div>
        </Block>

        <Block title="Avatar i separator (Base UI)">
          <div className="flex items-center gap-8">
            <Avatar src={TESTIMONIALS[0].avatar} alt={TESTIMONIALS[0].name} />
            <Avatar src={TESTIMONIALS[1].avatar} alt={TESTIMONIALS[1].name} size={64} />
            <Avatar src="/images/brak.png" alt="Brak Zdjęcia" size={64} />
            <Separator orientation="vertical" className="h-16 self-center" />
            <Separator tone="subtle" className="w-40" />
          </div>
        </Block>

        <Block title="Karty">
          <div className="flex flex-wrap items-start gap-10">
            <FeatureItem icon={REASONS[0].icon} title={REASONS[0].title}>
              {REASONS[0].text}
            </FeatureItem>
            <StepCard marker={TRAININGS[0].marker} title={TRAININGS[0].title} className="sm:max-w-[200px]">
              {TRAININGS[0].text}
            </StepCard>
            <TestimonialCard avatar={TESTIMONIALS[2].avatar} name={TESTIMONIALS[2].name} role={TESTIMONIALS[2].role}>
              {TESTIMONIALS[2].text}
            </TestimonialCard>
          </div>
        </Block>
      </Container>
    </Section>
  );
}
