import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge musi znać niestandardowe tokeny, żeby np. `text-2xs` (rozmiar)
// nie był traktowany jak kolor i nie kasował `text-brand`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["2xs"] }],
      shadow: [{ shadow: ["card", "card-hover", "nav", "menu"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
