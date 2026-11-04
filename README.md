# FireWatch – landing page

One-pager firmy FireWatch (BHP i PPOŻ) zbudowany na podstawie designu z Figmy (frame `v1`).

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + [Base UI](https://base-ui.com) (`@base-ui/react`), font Montserrat przez `next/font`.

## Uruchomienie lokalnie

```bash
npm install
npm run dev      # http://localhost:3000  (podgląd design systemu: /design-system)
npm run build    # build produkcyjny
```

## Deploy na Vercel

1. Wypchnij repo na GitHub (`Wilu187/firewatch`).
2. Na vercel.com → **Add New… → Project** → zaimportuj repo.
3. Framework zostanie wykryty automatycznie (Next.js) – kliknij **Deploy**.

## Design system

- **Tokeny** – `app/globals.css` (`@theme`): kolory, typografia, breakpointy, cienie. W komponentach używamy wyłącznie tokenów (`bg-brand`, `text-ink`, `text-3xl`…), bez surowych wartości hex.
- **Prymitywy** – `components/ui/`:
  | Komponent | Baza | Plik |
  | --- | --- | --- |
  | `Button` (`primary` / `outline`, `md` / `lg`, opcjonalny `href`) | Base UI `Button` | `button.tsx` |
  | `Accordion`, `AccordionItem` (numerowany) | Base UI `Accordion` | `accordion.tsx` |
  | `Form`, `TextField` (walidacja + komunikaty) | Base UI `Form` + `Field` | `field.tsx` |
  | `Avatar` (z fallbackiem inicjałów) | Base UI `Avatar` | `avatar.tsx` |
  | `Separator` (`accent` / `subtle`) | Base UI `Separator` | `separator.tsx` |
  | Menu mobilne | Base UI `Collapsible` | `components/site/nav.tsx` |
  | `Heading`, `Text` (warianty typografii) | – | `typography.tsx` |
  | `Section`, `Container`, `SectionHeader` | – | `layout.tsx` |
  | `FeatureItem`, `StepCard`, `TestimonialCard` | złożone z powyższych | `cards.tsx` |
- **Sekcje strony** – `components/site/sections.tsx` składają się tylko z prymitywów.
- **Podgląd** – strona `/design-system` (wyłączona z indeksowania).

## Do uzupełnienia

W pliku `lib/content.ts` (wszystkie treści strony są w tym jednym miejscu):

- `CONTACT_EMAIL` – adres, na który formularz otwiera wiadomość (`mailto:`),
- `SOCIAL_LINKS` – linki do social mediów (obecnie `#`),
- `ADDRESS` – adres firmy (obecnie placeholder z designu).
