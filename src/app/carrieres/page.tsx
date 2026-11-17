import type { Metadata } from "next";
import CareersBanner from "@/components/careers/careers-banner";
import JobCard from "@/components/careers/job-card";
import JoinUsBanner from "@/components/careers/join-us-banner";
import Kicker from "@/components/ui/kicker";
import Reveal from "@/components/ui/reveal";
import { HR_EMAIL, jobs } from "@/content/jobs";

export const metadata: Metadata = {
  title: "Carrières — Fune Info Africa",
  description:
    "Découvrez les offres d’emploi de Fune Info Africa (informatique, ressources humaines, logistique, commercial, électricité) et rejoignez nos équipes.",
};

export default function Page() {
  return (
    <>
      <CareersBanner asHeading />
      <div className="container-wide py-fi-40 md:py-fi-64">
        <Reveal>
          <Kicker wide>Offre - disponible</Kicker>
          <h2 className="mt-fi-16 font-sans text-section font-extrabold md:text-page">
            Rejoignez <span className="text-brand">Fune Info Africa</span> …
          </h2>
        </Reveal>
        {jobs.length > 0 ? (
          <ul className="mt-fi-40 grid gap-fi-24 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <li key={job.slug}>
                <JobCard job={job} />
              </li>
            ))}
          </ul>
        ) : (
          // TODO: message d'état vide non maquetté, à valider.
          <p className="mt-fi-40 max-w-[75ch] rounded-md bg-card p-fi-24">
            Aucune offre n’est disponible pour le moment. Vous pouvez nous envoyer une candidature
            spontanée à {HR_EMAIL}.
          </p>
        )}
      </div>
      <div className="pb-fi-40 md:pb-fi-64">
        <JoinUsBanner />
      </div>
    </>
  );
}
