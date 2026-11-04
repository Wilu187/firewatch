import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

/* ---------------------------------------------------------------------------
   Heading
   --------------------------------------------------------------------------- */

const headingVariants = {
  /** Duży nagłówek na zdjęciu (sekcja CTA). */
  display: "text-[26px] font-semibold sm:text-5xl",
  /** Tytuł sekcji – zawsze czerwony na jasnym tle. */
  section: "text-xl font-semibold text-brand sm:text-3xl",
  /** Tytuł elementu listy / karty z ikoną. */
  title: "text-lg font-medium text-black",
  /** Tytuł małej karty (szkolenia). */
  card: "text-xs font-semibold text-black",
  /** Imię i nazwisko, podpis osoby. */
  name: "text-sm font-semibold uppercase text-black",
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

const textVariants = {
  /** Duże wprowadzenie pod tytułem sekcji. */
  "lead-lg": "text-lg font-light sm:text-2xl",
  /** Standardowe wprowadzenie pod tytułem sekcji. */
  lead: "text-base font-light",
  /** Dłuższy tekst na ciemnym tle / zdjęciu. */
  prose: "text-base leading-[26px] sm:text-xl sm:leading-[33px]",
  /** Tekst akapitowy w komponentach. */
  body: "text-sm font-light leading-6",
  /** Cytat / opinia. */
  quote: "text-xs leading-4 text-ink-soft",
  /** Drobny opis (karty, podpisy). */
  caption: "text-2xs font-medium leading-[14px] text-muted",
  /** Nadtytuł nad nagłówkiem sekcji. */
  kicker: "text-xs font-medium uppercase tracking-[0.08em] text-muted",
  /** Etykiety i linki w stopce. */
  label: "text-base font-semibold leading-6 tracking-[0.1px] text-ink-strong",
} as const;

const inverseText: Partial<Record<keyof typeof textVariants, string>> = {
  kicker: "text-line-inverse",
  caption: "text-snow",
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
