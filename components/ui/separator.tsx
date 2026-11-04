import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { cn } from "@/lib/cn";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  /** `accent` – czerwony akcent marki, `subtle` – delikatna linia. */
  tone?: "accent" | "subtle";
  className?: string;
};

export function Separator({ orientation = "horizontal", tone = "accent", className }: SeparatorProps) {
  return (
    <BaseSeparator
      orientation={orientation}
      className={cn(
        "shrink-0",
        tone === "accent" ? "bg-brand" : "bg-line",
        orientation === "vertical" ? "w-0.5 self-stretch" : "h-0.5 w-full",
        className,
      )}
    />
  );
}
