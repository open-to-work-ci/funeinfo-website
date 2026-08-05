import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
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
      className={`${inter.variable} ${montserrat.variable} ${poppins.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
