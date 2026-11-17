import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Nos expertises — Fune Info Africa" };

export default function Page() {
  return <PageHero kicker="Expertises" title="Nos expertises" />;
}
