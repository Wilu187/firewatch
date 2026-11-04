/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Avatar } from "./avatar";
import { Separator } from "./separator";
import { Heading, Text } from "./typography";

/* ---------------------------------------------------------------------------
   FeatureItem – ikona | akcent | tytuł + opis
   --------------------------------------------------------------------------- */

type FeatureItemProps = {
  icon: { src: string; width: number; height: number };
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export function FeatureItem({ icon, title, children, className }: FeatureItemProps) {
  return (
    <article className={cn("flex w-full max-w-[430px] items-start gap-4 sm:gap-6 sm:p-2.5", className)}>
      <div className="flex size-12 shrink-0 items-center justify-center">
        <img src={icon.src} width={icon.width} height={icon.height} alt="" />
      </div>
      <Separator orientation="vertical" className="mt-2.5 h-[29px] self-start" />
      <div className="flex min-w-0 flex-1 flex-col gap-3 py-1.5">
        <Heading as="h3" variant="title">
          {title}
        </Heading>
        <Text>{children}</Text>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------------------
   StepCard – karta z numerem; po najechaniu przechodzi w wariant ciemny
   --------------------------------------------------------------------------- */

type StepCardProps = {
  marker: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export function StepCard({ marker, title, children, className }: StepCardProps) {
  return (
    <article
      className={cn(
        "group flex w-full flex-col overflow-hidden bg-white shadow-card",
        "sm:min-h-[252px] sm:basis-[calc((100%-48px)/3)] sm:gap-10 sm:pt-[30px] lg:basis-0 lg:flex-1",
        "transition-[background-color,box-shadow] duration-300 hover:bg-surface-card-dark hover:shadow-card-hover",
        className,
      )}
    >
      {/* Mobile: numer po lewej, tekst obok. Od sm: kolumna wyśrodkowana. */}
      <div className="flex items-start gap-4 px-4 py-4 sm:flex-col sm:items-center sm:gap-3 sm:px-5 sm:py-0 sm:text-center lg:px-4">
        <span
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-semibold text-white sm:size-[55px] sm:text-xl",
            "transition-colors duration-300 group-hover:bg-white group-hover:text-brand",
          )}
        >
          {marker}
        </span>
        <div className="flex min-w-0 flex-col gap-1 sm:gap-3">
          <Heading
            as="h3"
            variant="card"
            // Rezerwa na 3 wiersze tytułu – opisy we wszystkich kartach startują na tej samej wysokości.
            className="transition-colors duration-300 group-hover:text-snow sm:flex sm:min-h-[63px] sm:items-center sm:justify-center"
          >
            {title}
          </Heading>
          <Text variant="small" className="text-muted transition-colors duration-300 group-hover:text-snow">
            {children}
          </Text>
        </div>
      </div>
      <Separator className="mt-auto" />
    </article>
  );
}

/* ---------------------------------------------------------------------------
   TestimonialCard – awatar, cytat, podpis
   --------------------------------------------------------------------------- */

type TestimonialCardProps = {
  avatar: string;
  name: string;
  role: string;
  children: ReactNode;
  className?: string;
};

export function TestimonialCard({ avatar, name, role, children, className }: TestimonialCardProps) {
  return (
    <figure className={cn("flex w-full max-w-[280px] flex-col items-center gap-6 p-2.5", className)}>
      <Avatar src={avatar} alt={name} />
      <div className="flex w-full flex-col items-center gap-6 py-1.5 text-center">
        <Text as="blockquote" variant="quote">
          {children}
        </Text>
        <figcaption className="flex w-full flex-col items-center">
          <span aria-hidden className="mb-2 h-8 w-[25px] overflow-hidden text-[50px] font-medium text-brand">
            “
          </span>
          <Heading as="span" variant="name" className="block">
            {name}
          </Heading>
          <Text as="span" variant="caption" className="mt-0.5 block uppercase">
            {role}
          </Text>
        </figcaption>
      </div>
    </figure>
  );
}
