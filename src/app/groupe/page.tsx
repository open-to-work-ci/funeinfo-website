import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Notre groupe — Fune Info Africa" };

export default function Page() {
  return <PageHero kicker="Notre groupe" title="Notre groupe" />;
}
