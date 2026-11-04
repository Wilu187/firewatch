import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "FireWatch – Kompleksowe rozwiązania BHP i PPOŻ",
  description:
    "FireWatch – doradztwo, szkolenia BHP i PPOŻ oraz kompleksowe rozwiązania bezpieczeństwa pracy dopasowane do Twojej firmy.",
  icons: { icon: "/icons/logo-footer.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
