"use client";

import { Collapsible } from "@base-ui/react/collapsible";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape zamyka menu mobilne.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;
  const close = () => setOpen(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      render={<header />}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        solid && "bg-surface shadow-nav",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 md:px-[clamp(24px,6vw,120px)] md:py-4">
        <a
          href="#home"
          onClick={close}
          aria-label="FireWatch – strona główna"
          className="block h-[60px] w-[150px] shrink-0 pl-px md:h-16 md:w-[160px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solid ? "/icons/logo-nav-dark.svg" : "/icons/logo-nav-light.svg"}
            width={195}
            height={78}
            alt="FireWatch"
            className="h-full w-auto"
          />
        </a>

        <nav aria-label="Główna nawigacja" className="hidden items-center gap-[clamp(24px,3vw,48px)] md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                // Etykiety nawigacji: 14px wersaliki z rozstrzałem – czytelne, ale podporządkowane nagłówkom.
                "whitespace-nowrap py-2 text-sm font-semibold tracking-[0.06em] uppercase transition-colors hover:text-brand",
                "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand",
                solid ? "text-ink-strong" : "text-snow",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Collapsible.Trigger
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          className={cn(
            "group flex size-11 cursor-pointer flex-col justify-between p-2.5 md:hidden",
            solid ? "text-ink-strong" : "text-snow",
          )}
        >
          <span className="block h-[3px] bg-current transition-transform duration-300 group-data-panel-open:translate-y-[8.5px] group-data-panel-open:rotate-45" />
          <span className="block h-[3px] bg-current transition-opacity duration-300 group-data-panel-open:opacity-0" />
          <span className="block h-[3px] bg-current transition-transform duration-300 group-data-panel-open:-translate-y-[8.5px] group-data-panel-open:-rotate-45" />
        </Collapsible.Trigger>
      </div>

      <Collapsible.Panel
        render={<nav aria-label="Menu mobilne" />}
        className={cn(
          "h-(--collapsible-panel-height) overflow-hidden bg-surface shadow-menu transition-[height] duration-300 ease-out md:hidden",
          "data-ending-style:h-0 data-starting-style:h-0",
        )}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="block border-t border-line px-6 py-4 text-base font-semibold tracking-[0.06em] uppercase text-ink-strong transition-colors hover:text-brand"
          >
            {l.label}
          </a>
        ))}
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
