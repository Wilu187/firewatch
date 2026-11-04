import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { getImageProps } from "next/image";
import { cn } from "@/lib/cn";

type AvatarProps = {
  src: string;
  alt: string;
  /** Rozmiar w px (domyślnie 110 – jak w sekcji opinii). */
  size?: number;
  className?: string;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Avatar({ src, alt, size = 110, className }: AvatarProps) {
  // Optymalizacja obrazka przez next/image, ale renderowanie przez Base UI Avatar.
  const { props: imgProps } = getImageProps({ src, alt, width: size, height: size, sizes: `${size}px` });

  return (
    <BaseAvatar.Root
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-line align-middle",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <BaseAvatar.Image {...imgProps} className="size-full object-cover" />
      <BaseAvatar.Fallback className="flex size-full items-center justify-center text-xl font-semibold text-muted">
        {initials(alt)}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}
