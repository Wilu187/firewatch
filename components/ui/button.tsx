import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex select-none items-center justify-center text-center font-semibold uppercase text-white " +
  "transition-colors duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand " +
  "data-disabled:cursor-not-allowed data-disabled:opacity-60";

const variants = {
  /** Główne wezwanie do działania – wypełniony czerwony. */
  primary: "bg-brand hover:not-data-disabled:bg-brand-hover",
  /** Akcja na ciemnym tle – biały obrys. */
  outline: "border-3 border-white bg-transparent hover:not-data-disabled:bg-white hover:not-data-disabled:text-surface-dark",
} as const;

const sizes = {
  md: "px-10 py-[15px] text-base",
  lg: "px-6 py-3.5 text-lg sm:px-10 sm:py-[15px] sm:text-4xl",
} as const;

type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "className"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  /** Gdy podane – przycisk renderuje się jako link <a>. */
  href?: string;
};

export function Button({ variant = "primary", size = "md", className, href, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return <BaseButton nativeButton={false} render={<a href={href} />} className={classes} {...props} />;
  }

  return <BaseButton className={classes} {...props} />;
}
