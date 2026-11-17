import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import { expertises } from "@/content/expertises";

export const metadata: Metadata = { title: "Nos expertises — Fune Info Africa" };

export default function Page() {
  return (
    <>
      <PageHero kicker="Expertises" title="Nos expertises" />
      {expertises.map((e) => (
        <Section key={e.slug} id={e.slug}>
          <h2 className="font-poppins text-section font-bold text-brand">{e.title}</h2>
          <p className="mt-4">{e.summary}</p>
        </Section>
      ))}
    </>
  );
}
