import type { Metadata } from "next";
import CareersBanner from "@/components/careers/careers-banner";
import JobGrid from "@/components/careers/job-grid";
import JoinUsBanner from "@/components/careers/join-us-banner";
import OfferHeading from "@/components/careers/offer-heading";
import Reveal from "@/components/ui/reveal";
import { HR_EMAIL, jobs } from "@/content/jobs";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Découvrez les offres d’emploi de Fune Info Africa (informatique, ressources humaines, logistique, commercial, électricité) et rejoignez nos équipes.",
};

export default function Page() {
  return (
    <>
      <CareersBanner asHeading />
      <div className="container-narrow !w-auto pb-[4.4rem] pt-8 md:pt-[2.9rem]">
        <Reveal>
          <OfferHeading>
            Rejoignez <span className="text-brand">Fune Info Africa</span>&nbsp;…
          </OfferHeading>
        </Reveal>
        <div className="mt-8 md:mt-[2.7rem]">
          {jobs.length > 0 ? (
            <JobGrid jobs={jobs} />
          ) : (
            // TODO: message d'état vide non maquetté, à valider.
            <p className="max-w-[75ch] rounded-md bg-card p-fi-24">
              Aucune offre n’est disponible pour le moment. Vous pouvez nous envoyer une candidature
              spontanée à {HR_EMAIL}.
            </p>
          )}
        </div>
      </div>
      <div className="pb-[2.3rem]">
        <JoinUsBanner />
      </div>
    </>
  );
}
