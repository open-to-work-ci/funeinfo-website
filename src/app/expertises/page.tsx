import type { Metadata } from "next";
import ExpertiseBanner from "@/components/expertises/expertise-banner";
import ExpertisesHero from "@/components/expertises/expertises-hero";
import { expertises } from "@/content/expertises";

export const metadata: Metadata = {
  title: "Nos expertises",
  description:
    "Rapatriement de corps, organisation d’obsèques, crémation, assistance administrative, logistique et transport : un même interlocuteur suit votre dossier du début à la fin.",
};

// TODO(destination) : pages de détail non maquettées, lien provisoire vers le contact.
const DETAIL_HREF = "mailto:contact@fune.info";

export default function Page() {
  return (
    <>
      <ExpertisesHero />
      <section className="overflow-x-clip bg-canvas pb-[clamp(2.5rem,4.1vw,4.9rem)] pt-[clamp(1.5rem,2.2vw,2.6rem)]">
        <div className="container-wide">
          {/* Décalage de la maquette (composition ≈ 25 px à droite du centre) sur grand écran. */}
          <div className="mx-auto flex max-w-[1313px] flex-col gap-[clamp(1rem,1.5vw,1.8rem)] min-[1600px]:relative min-[1600px]:left-[1.3vw]">
            {expertises.map((e, i) => (
              <ExpertiseBanner
                key={e.slug}
                data={e}
                href={DETAIL_HREF}
                side={i % 2 === 0 ? "left" : "right"}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
