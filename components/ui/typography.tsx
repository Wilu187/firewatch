import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

/* ---------------------------------------------------------------------------
   Heading
   --------------------------------------------------------------------------- */

/*
  Hierarchia (mobile → desktop):
  display 28 → 44 · section 24 → 36 · title 18 · card 16 · name 14 UC
  Każdy krok różni się rozmiarem LUB wagą na tyle, by role były czytelne bez czytania treści.
*/
const headingVariants = {
  /** Duży nagłówek na zdjęciu (sekcja CTA). */
  display: "text-4xl font-semibold tracking-[-0.01em] sm:text-6xl",
  /** Tytuł sekcji – zawsze czerwony na jasnym tle. */
  section: "text-3xl font-semibold tracking-[-0.01em] text-brand sm:text-5xl",
  /** Tytuł elementu listy / karty z ikoną. */
  title: "text-lg leading-snug font-semibold text-black",
  /** Tytuł małej karty (szkolenia). */
  card: "text-base leading-[1.3] font-semibold text-black",
  /** Imię i nazwisko, podpis osoby. */
  name: "text-sm font-semibold uppercase tracking-[0.04em] text-black",
} as const;

type HeadingProps<T extends ElementType> = {
  as?: T;
  variant?: keyof typeof headingVariants;
  tone?: "default" | "inverse";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Heading<T extends ElementType = "h2">({
  as,
  variant = "section",
  tone = "default",
  className,
  ...props
}: HeadingProps<T>) {
  const Comp = (as ?? "h2") as ElementType;
  return (
    <Comp
      className={cn(headingVariants[variant], tone === "inverse" && "text-snow", className)}
      {...props}
    />
  );
}

/* ---------------------------------------------------------------------------
   Text
   --------------------------------------------------------------------------- */

/*
  Tekst: lead-lg 18 → 20 · lead 16 → 18 · prose 16 → 18 · body 16 · quote 16 · small 14 · label 14 UC · caption 12
  Tekst ciągły ma min. 16px i interlinię ~1.6; szerokość wierszy ogranicza kontener (≈ 60–70 znaków).
*/
const textVariants = {
  /** Duże wprowadzenie pod tytułem sekcji. */
  "lead-lg": "text-lg font-light sm:text-xl",
  /** Standardowe wprowadzenie pod tytułem sekcji. */
  lead: "text-base leading-[1.65] font-light sm:text-lg",
  /** Dłuższy tekst na ciemnym tle / zdjęciu. */
  prose: "text-base leading-[1.7] sm:text-lg",
  /** Tekst akapitowy w komponentach. */
  body: "text-base leading-[1.65]",
  /** Cytat / opinia. */
  quote: "text-base leading-[1.6] text-ink-soft",
  /** Tekst pomocniczy: adres, komunikaty statusu, opisy kart. */
  small: "text-sm leading-[1.55]",
  /** Drobny opis (karty, podpisy). 12px to dolna granica czytelności. */
  caption: "text-xs font-medium text-muted",
  /** Nadtytuł nad nagłówkiem sekcji (tylko strona design systemu). */
  kicker: "text-xs font-medium uppercase tracking-[0.08em] text-muted",
  /** Linki nawigacyjne w stopce – ten sam głos co nawigacja główna. */
  label: "text-sm font-semibold tracking-[0.06em] uppercase text-ink-strong",
} as const;

const inverseText: Partial<Record<keyof typeof textVariants, string>> = {
  kicker: "text-line-inverse",
  caption: "text-snow",
  small: "text-line-inverse",
  quote: "text-snow",
};

type TextProps<T extends ElementType> = {
  as?: T;
  variant?: keyof typeof textVariants;
  tone?: "default" | "inverse";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Text<T extends ElementType = "p">({
  as,
  variant = "body",
  tone = "default",
  className,
  ...props
}: TextProps<T>) {
  const Comp = (as ?? "p") as ElementType;
  return (
    <Comp
      className={cn(
        textVariants[variant],
        tone === "inverse" && (inverseText[variant] ?? "text-snow"),
        className,
      )}
      {...props}
    />
  );
}
