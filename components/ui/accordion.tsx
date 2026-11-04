import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Text } from "./typography";

type AccordionProps = Omit<ComponentProps<typeof BaseAccordion.Root>, "className"> & {
  className?: string;
};

export function Accordion({ className, ...props }: AccordionProps) {
  return <BaseAccordion.Root className={cn("flex flex-col gap-2.5", className)} {...props} />;
}

type AccordionItemProps = {
  value: string;
  /** Numer porządkowy wyświetlany w czerwieni (01, 02…). */
  index?: number;
  title: ReactNode;
  children: ReactNode;
};

export function AccordionItem({ value, index, title, children }: AccordionItemProps) {
  return (
    <BaseAccordion.Item value={value}>
      <BaseAccordion.Header className="m-0">
        <BaseAccordion.Trigger
          className={cn(
            "group flex min-h-[50px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-3 text-left md:py-0",
            "border-[0.5px] border-line bg-white transition-colors hover:bg-surface",
            "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand",
          )}
        >
          <span className="flex min-w-0 items-center gap-2.5">
            {index !== undefined && (
              <span className="text-lg font-bold text-brand">{String(index).padStart(2, "0")}</span>
            )}
            <span className="text-sm font-medium text-black md:truncate">{title}</span>
          </span>
          <Chevron />
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
      <BaseAccordion.Panel
        className={cn(
          "h-(--accordion-panel-height) overflow-hidden transition-[height] duration-300 ease-out",
          "data-ending-style:h-0 data-starting-style:h-0",
        )}
      >
        <Text className="max-w-[520px] px-5 pt-2.5 text-black">{children}</Text>
      </BaseAccordion.Panel>
    </BaseAccordion.Item>
  );
}

function Chevron() {
  return (
    <span
      aria-hidden
      className="flex h-2.5 w-[18px] shrink-0 items-center justify-center rotate-90 transition-transform duration-300 group-data-panel-open:-rotate-90"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/chevron-down.svg" width={10} height={18} alt="" className="h-[18px] w-2.5 max-w-none" />
    </span>
  );
}
