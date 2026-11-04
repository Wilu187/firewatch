# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Małe i średnie firmy z różnych branż, które muszą spełnić wymogi BHP i PPOŻ, a nie mają własnego specjalisty. Decyzję podejmuje zwykle właściciel, osoba z kadr/HR albo kierownik, który zleca obowiązki na zewnątrz. Ich zadanie: szybko i zgodnie z prawem przeszkolić pracowników (wstępne, okresowe, PPOŻ, pierwsza pomoc, kadra kierownicza) i mieć to udokumentowane.

## Product Purpose

FireWatch to nowa polska firma doradczo-szkoleniowa BHP i PPOŻ. Strona (one-pager) ma przekonać firmę z sektora MŚP, że FireWatch jest wiarygodnym partnerem, i doprowadzić do zapytania przez formularz kontaktowy. Sukces = wysłane zapytanie.

## Positioning

Wygodne szkolenia BHP i PPOŻ online, zakończone certyfikatem. To jest główny wyróżnik. Uzupełniają go: doradztwo, indywidualne dopasowanie do specyfiki firmy i zgodność z przepisami. Firma jest nowa, a zespół składa się z doświadczonych specjalistów. Strona mówi to otwarcie i nie udaje wieloletniej historii.

## Operating Context

- Klient ocenia ofertę na stronie i wysyła zapytanie przez formularz (`components/site/contact-form.tsx`, obecnie `mailto:` na `CONTACT_EMAIL`).
- Szkolenia odbywają się online, a uczestnik dostaje certyfikat.
- Treści strony są w jednym miejscu: `lib/content.ts`.

## Capabilities and Constraints

- Oferta szkoleń: wstępne BHP, okresowe BHP, PPOŻ, kursy pierwszej pomocy, specjalistyczne szkolenia dla kadry kierowniczej.
- Usługi: doradztwo BHP i PPOŻ, rozwiązania dopasowane do branży, wielkości zespołu i wymagań prawnych.
- Język strony: polski (`lang="pl"`).
- Stack (istniejący): Next.js 16 App Router, TypeScript, Tailwind CSS v4, Base UI, Montserrat. Hosting docelowy: Vercel.
- Nieustalone: docelowy e-mail kontaktowy, adres firmy, linki do social mediów, cennik, platforma szkoleniowa, sposób wystawiania certyfikatu.

## Brand Commitments

- Nazwa: FireWatch. Logo w kilku wariantach w `public/icons/logo-*.svg` oraz tarcza `shield-gray.svg`.
- Ton: profesjonalny, rzeczowy, zwracający się do klienta na „Ty” („Twoja firma”, „Twój zespół”).

## Evidence on Hand

- Brak prawdziwych referencji. Opinie (Jan Nowak, Anna Kowalska, Michał Malinowski), ich awatary i adres (`ADDRESS`) to placeholdery z designu. Nie wolno ich przedstawiać jako prawdziwych ani wymyślać nowych opinii, klientów, liczb, certyfikatów czy akredytacji.
- Zdjęcia sekcji w `public/images/` (hero, cta, values, contact) pochodzą z Unsplash na licencji Unsplash License. Autorzy i źródła są w `public/images/CREDITS.md`. To zdjęcia stockowe: nie przedstawiają zespołu ani klientów FireWatch. Awatary w opiniach to nadal placeholdery z designu o niepotwierdzonej licencji.

## Product Principles

1. Zgodność z prawem to obietnica nadrzędna. Nic na stronie nie może jej osłabiać ani przesadzać.
2. Wygoda dla zabieganego klienta z MŚP: szkolenia online, certyfikat, mało formalności. Komunikacja to podkreśla.
3. Uczciwość nowej firmy: wiarygodność budujemy kompetencjami zespołu i konkretem oferty, nie zmyślonymi dowodami.
4. Jeden jasny cel: każda sekcja prowadzi do zapytania przez formularz.
