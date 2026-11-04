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
    <article className={cn("flex items-start gap-4 sm:gap-6 sm:p-2.5", className)}>
      <div className="flex size-12 shrink-0 items-center justify-center">
        <img src={icon.src} width={icon.width} height={icon.height} alt="" />
      </div>
      <Separator orientation="vertical" className="mt-2.5 h-[29px] self-start" />
      <div className="flex flex-1 flex-col gap-4 py-1.5 sm:w-[310px] sm:flex-none">
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
        "group flex min-h-[252px] w-[calc(50%-12px)] flex-col gap-10 overflow-hidden bg-white pt-[30px] shadow-card sm:w-[175px]",
        "transition-[background-color,box-shadow] duration-300 hover:bg-surface-card-dark hover:shadow-card-hover",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3 px-5 text-center">
        <span
          className={cn(
            "flex size-[55px] items-center justify-center rounded-full bg-brand text-xl font-semibold text-white",
            "transition-colors duration-300 group-hover:bg-white group-hover:text-brand",
          )}
        >
          {marker}
        </span>
        <Heading as="h3" variant="card" className="min-h-[45px] transition-colors duration-300 group-hover:text-snow">
          {title}
        </Heading>
        <Text variant="caption" className="transition-colors duration-300 group-hover:text-snow">
          {children}
        </Text>
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
    <figure className={cn("flex w-[241px] flex-col items-center gap-6 p-2.5", className)}>
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
