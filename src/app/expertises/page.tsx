import type { Metadata } from "next";
import ExpertiseBanner from "@/components/expertises/expertise-banner";
import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import { expertises } from "@/content/expertises";

export const metadata: Metadata = {
  title: "Nos expertises — Fune Info Africa",
  description:
    "Rapatriement de corps, organisation d’obsèques, crémation, démarches administratives, exhumations, logistique et transport : un même interlocuteur suit votre dossier du début à la fin.",
};

const counts = ["Une", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit"];

// TODO(destination) : pages de détail non maquettées, lien provisoire vers le contact.
const DETAIL_HREF = "mailto:Contact@fune.info";

export default function Page() {
  return (
    <>
      <PageHero kicker="Nos expertises" title={`${counts[expertises.length - 1]} façons de vous accompagner`}>
        <p className="font-poppins font-bold">
          Du rapatriement d’un proche à l’organisation complète des obsèques, nos équipes prennent en charge
          chaque étape et le même interlocuteur suit votre dossier du début à la fin.
        </p>
      </PageHero>
      <Section reveal={false} className="overflow-x-clip">
        <div className="space-y-12 md:space-y-16">
          {expertises.map((e, i) => (
            <ExpertiseBanner
              key={e.slug}
              id={e.slug}
              title={e.bannerTitle}
              text={e.text}
              image={e.image}
              href={DETAIL_HREF}
              label={e.label}
              align={i % 2 === 0 ? "left" : "right"}
              priority={i === 0}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
