import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";

export const metadata: Metadata = { title: "Notre groupe — Fune Info Africa" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Notre groupe" title="Notre groupe" />
      <Section id="engagements">
        <h2 className="font-poppins text-section font-bold text-brand">Nos engagements</h2>
      </Section>
      <Section id="reseau">
        <h2 className="font-poppins text-section font-bold text-brand">Notre réseau</h2>
      </Section>
    </>
  );
}
