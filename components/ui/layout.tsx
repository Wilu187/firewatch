import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Heading, Text } from "./typography";

/* ---------------------------------------------------------------------------
   Section – wspólne tło i rytm pionowy dla wszystkich sekcji strony
   --------------------------------------------------------------------------- */

const sectionTones = {
  surface: "bg-surface",
  alt: "bg-surface-alt",
  dark: "bg-surface-dark text-snow",
  none: "",
} as const;

const sectionSpacing = {
  /** Standardowa sekcja z treścią w kontenerze. */
  default: "px-6 pt-16 pb-18 sm:pt-25 sm:pb-30",
  /** Sekcja o mniejszym oddechu (opinie). */
  compact: "px-6 py-16 sm:py-20",
  /** Sekcja pełnej szerokości (zdjęcie + kolumna). */
  none: "",
} as const;

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: keyof typeof sectionTones;
  spacing?: keyof typeof sectionSpacing;
};

export function Section({ tone = "surface", spacing = "default", className, ...props }: SectionProps) {
  return <section className={cn(sectionTones[tone], sectionSpacing[spacing], className)} {...props} />;
}

/* ---------------------------------------------------------------------------
   Container – kolumna treści 1000px (jak w designie)
   --------------------------------------------------------------------------- */

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto w-full max-w-content", className)} {...props} />;
}

/* ---------------------------------------------------------------------------
   SectionHeader – jeden wzorzec nagłówka dla każdej sekcji:
   [kicker] → tytuł → [lead]
   --------------------------------------------------------------------------- */

type SectionHeaderProps = {
  kicker?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  leadSize?: "md" | "lg";
  align?: "center" | "start";
  tone?: "default" | "inverse";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  kicker,
  title,
  lead,
  leadSize = "md",
  align = "center",
  tone = "default",
  as = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3 sm:gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {kicker && (
        <Text variant="kicker" tone={tone} className="-mb-1">
          {kicker}
        </Text>
      )}
      <Heading as={as} variant="section" tone={tone}>
        {title}
      </Heading>
      {lead && (
        <div
          // Szerokość ogranicza długość wiersza do ~65 znaków.
          // Na ciemnym tle cienki krój traci czytelność – podnosimy wagę o stopień.
          className={cn(
            "flex flex-col gap-3",
            leadSize === "lg" ? "max-w-[700px]" : "max-w-[640px]",
            tone === "inverse" && "text-snow [&_p]:font-normal",
          )}
        >
          {typeof lead === "string" ? (
            <Text variant={leadSize === "lg" ? "lead-lg" : "lead"}>{lead}</Text>
          ) : (
            lead
          )}
        </div>
      )}
    </header>
  );
}
