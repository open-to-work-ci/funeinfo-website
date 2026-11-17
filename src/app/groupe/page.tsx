import type { Metadata } from "next";
import EngagementCard from "@/components/groupe/engagement-card";
import NetworkTabs from "@/components/network/network-tabs";
import Kicker from "@/components/ui/kicker";
import PageHero from "@/components/ui/page-hero";
import Reveal from "@/components/ui/reveal";
import Section from "@/components/ui/section";
import { engagements } from "@/content/engagements";

const description =
  "FUNE INFO Africa, spécialiste de l'assistance funéraire en Côte d'Ivoire, en France, au Congo et en Guinée : disponibilité, accueil, discrétion et flexibilité, de l'annonce du décès jusqu'à l'inhumation.";

export const metadata: Metadata = {
  title: "Notre groupe — Fune Info Africa",
  description,
  openGraph: {
    title: "Notre groupe — Fune Info Africa",
    description,
    type: "website",
    locale: "fr_FR",
  },
};

export default function Page() {
  return (
    <>
      <PageHero kicker="Notre groupe" title="L’assistance funéraire qui soulage …" wide>
        <p>
          {/* Magenta éclairci (brand-soft) : #BB2282 sur #071E2E n'atteint que 3:1 de contraste */}
          <strong className="font-bold text-brand-soft">
            FUNE INFO Africa est spécialisé dans l’assistance funéraire
          </strong>{" "}
          présent en Côte d’Ivoire, en France, au Congo et en Guinée. Accompagner les familles, de
          l’annonce du décès jusqu’à l’inhumation, où qu’elle ait lieu. Les équipes de FUNE INFO
          Africa prennent en charge chaque étape dans les pays où le réseau opère.
        </p>
      </PageHero>

      {/* Ancres : html a déjà scroll-padding-top = hauteur du header */}
      <Section id="engagements">
        <h2 className="font-poppins text-kicker font-bold uppercase text-brand">Nos engagements</h2>
        <ul className="mt-fi-24 grid gap-4 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4">
          {engagements.map((e, i) => (
            <li key={e.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <EngagementCard {...e} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="reseau" tone="surface">
        <Kicker>Notre réseau</Kicker>
        <h2 className="mt-fi-16 mb-fi-24 font-poppins text-section font-bold">
          Où souhaitez-vous être accompagné ?
        </h2>
        <NetworkTabs />
      </Section>
    </>
  );
}
