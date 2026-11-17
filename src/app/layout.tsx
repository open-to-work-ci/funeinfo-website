import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["500", "800"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fune Info Africa — Organisation d’obsèques et rapatriement de corps",
  description:
    "Fune Info Africa accompagne les familles avec excellence funéraire : organisation d’obsèques, rapatriement de corps à l’international et soutien discret dans les moments difficiles, avec plus de 30 agences en Côte d’Ivoire ainsi qu’à Paris et Brazzaville.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${montserrat.variable} ${poppins.variable} h-full antialiased overflow-x-clip`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-surface focus:p-4 focus:text-brand"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
