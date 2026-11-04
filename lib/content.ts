/* Treści i ustawienia strony – edytuj tutaj, bez dotykania komponentów. */

// Adres, na który trafiają wiadomości z formularza kontaktowego (mailto).
// TODO: podmień na docelowy adres firmy.
export const CONTACT_EMAIL = "kontakt@firewatch.pl";

export const NAV_LINKS = [
  { href: "#home", label: "Strona Główna" },
  { href: "#o-nas", label: "O Nas" },
  { href: "#szkolenia", label: "Szkolenia" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#kontakt", label: "Kontakt" },
];

// Kolejność linków w stopce wg designu.
export const FOOTER_LINKS = [NAV_LINKS[0], NAV_LINKS[1], NAV_LINKS[3], NAV_LINKS[2], NAV_LINKS[4]];

// TODO: podmień "#" na właściwe adresy profili.
export const SOCIAL_LINKS = [
  { name: "YouTube", href: "#", icon: "/icons/youtube.svg", width: 24, height: 24 },
  { name: "Facebook", href: "#", icon: "/icons/facebook.svg", width: 24, height: 24 },
  { name: "X", href: "#", icon: "/icons/x.svg", width: 20, height: 18 },
  { name: "Instagram", href: "#", icon: "/icons/instagram.svg", width: 24, height: 24 },
  { name: "LinkedIn", href: "#", icon: "/icons/linkedin.svg", width: 24, height: 24 },
];

export const ADDRESS = ["Poland", "Miasto Kod-Pocztowy", "ul. Ulica Numer"];

export const REASONS = [
  {
    icon: { src: "/icons/i1.svg", width: 27, height: 41 },
    title: "Profesjonalne Doradztwo",
    text: "Nasz zespół składa się z wykwalifikowanych specjalistów BHP i PPOŻ, którzy zapewniają wsparcie na każdym etapie współpracy.",
  },
  {
    icon: { src: "/icons/i2.svg", width: 37, height: 37 },
    title: "Indywidualne Podejście",
    text: "Każdy klient jest dla nas wyjątkowy. Dopasowujemy rozwiązania do specyfiki Twojej firmy, aby spełnić wszystkie wymagania.",
  },
  {
    icon: { src: "/icons/i3.svg", width: 42, height: 34 },
    title: "Szkolenia z certyfikatem",
    text: "Organizujemy szkolenia online dla pracowników oraz kadry kierowniczej, zakończone uzyskaniem certyfikatu.",
  },
  {
    icon: { src: "/icons/i4.svg", width: 39, height: 40 },
    title: "Zgodność z przepisami prawa",
    text: "Nasze usługi są w pełni zgodne z obowiązującymi regulacjami prawnymi, co gwarantuje bezpieczeństwo i spokój.",
  },
];

export const TRAININGS = [
  {
    marker: "I",
    title: "Szkolenia wstępne BHP",
    text: "Obowiązkowe szkolenia dla nowych pracowników, zgodne z przepisami prawa pracy.",
  },
  {
    marker: "II",
    title: "Szkolenia okresowe BHP",
    text: "Regularne kursy dla pracowników i kadry, zapewniające aktualną wiedzę o BHP.",
  },
  {
    marker: "III",
    title: "Szkolenia PPOŻ",
    text: "Uczą zasad ochrony PPOŻ oraz praktycznego użycia sprzętu przeciwpożarowego.",
  },
  {
    marker: "IV",
    title: "Kursy pierwszej pomocy",
    text: "Praktyczne szkolenia z udzielania pierwszej pomocy w nagłych sytuacjach.",
  },
  {
    marker: "V",
    title: "Specjalistyczne szkolenia dla kadry kierowniczej",
    text: "Dedykowane kursy dla liderów, dostosowane do specyfiki zarządzania zespołem.",
  },
];

export const VALUES = [
  {
    title: "Nasza misja",
    body: "Naszym celem jest zapewnienie maksymalnego bezpieczeństwa w miejscu pracy oraz ochrony życia i mienia. Łączymy wiedzę, doświadczenie i pasję, aby tworzyć rozwiązania dostosowane do Twoich potrzeb.",
  },
  {
    title: "Indywidualne rozwiązania dla Twojej firmy",
    body: "Każdy projekt rozpoczynamy od dokładnej analizy potrzeb Twojej firmy. Tworzymy dedykowane rozwiązania, które uwzględniają specyfikę branży, wielkość zespołu oraz wymagania prawne. Dzięki temu zapewniamy skuteczność i pełne dostosowanie naszych usług do Twoich oczekiwań.",
  },
  {
    title: "Stawiamy na innowacje i zaangażowanie",
    body: "Jesteśmy nową firmą, ale nasz zespół składa się z doświadczonych specjalistów, którzy łączą świeże podejście z wiedzą praktyczną. Naszym priorytetem jest dostarczanie nowoczesnych rozwiązań, które odpowiadają na potrzeby współczesnego rynku. Każdy projekt realizujemy z pełnym zaangażowaniem i pasją.",
  },
];

export const TESTIMONIALS = [
  {
    avatar: "/images/avatar-1.png",
    text: "Zespół wykazał się ogromnym zaangażowaniem i wiedzą. Udało nam się spełnić wszystkie wymogi prawne w zakresie PPOŻ i BHP. Świetna robota!",
    name: "Jan Nowak",
    role: "Kierownik budowy",
  },
  {
    avatar: "/images/avatar-2.png",
    text: "Współpraca z tą firmą była czystą przyjemnością. Wszystko zostało wykonane terminowo, a jakość usług przerosła moje oczekiwania. Zdecydowanie polecam!",
    name: "Anna Kowalska",
    role: "Specjalistka ds. bezpieczeństwa w zakładzie produkcyjnym",
  },
  {
    avatar: "/images/avatar-3.png",
    text: "Profesjonalizm na najwyższym poziomie! Firma zaproponowała praktyczne rozwiązania, które znacznie poprawiły bezpieczeństwo w naszym obiekcie.",
    name: "Michał Malinowski",
    role: "Dyrektor hotelu",
  },
];
