import type { Metadata } from "next";
import EngagementsGrid from "@/components/groupe/engagements-grid";
import GroupHero from "@/components/groupe/group-hero";
import GroupSection from "@/components/groupe/group-section";
import NetworkTabs from "@/components/network/network-tabs";
import Kicker from "@/components/ui/kicker";
import Reveal from "@/components/ui/reveal";

const description =
  "FUNE INFO Africa, spécialiste de l’assistance funéraire en Côte d’Ivoire, en France, au Congo et en Guinée : disponibilité, accueil, discrétion et flexibilité, de l’annonce du décès jusqu’à l’inhumation.";

export const metadata: Metadata = {
  title: "Notre groupe",
  description,
};

export default function Page() {
  return (
    <>
      <GroupHero />

      {/* Ancres : html a déjà scroll-padding-top = hauteur du header */}
      <GroupSection id="engagements" className="pt-7">
        <Reveal>
          <h2 className="font-poppins text-kicker font-bold uppercase text-brand">Nos engagements</h2>
        </Reveal>
        <EngagementsGrid />
      </GroupSection>

      <GroupSection id="reseau" tone="surface" className="md:pb-26">
        <Reveal>
          <Kicker>Notre réseau</Kicker>
          <h2 className="mb-6 mt-fi-24 font-poppins text-heading font-bold">
            Où souhaitez-vous être accompagné ?
          </h2>
        </Reveal>
        <NetworkTabs />
      </GroupSection>
    </>
  );
}
