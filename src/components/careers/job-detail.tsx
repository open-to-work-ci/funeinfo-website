import Link from "next/link";
import Button from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { HR_EMAIL, mailtoHr } from "@/content/jobs";
import type { Job } from "@/content/types";
import JobSection, { BulletList } from "./job-section";
import OfferHeading from "./offer-heading";

/** Corps de la page d'offre : en-tête + sections (Mission, Diplôme, Durée & lieu, Profil) en cascade. */
export default function JobDetail({ job }: { job: Job }) {
  const hasContent = Boolean(
    job.missions?.length || job.diploma || job.durationAndLocation || job.profile,
  );
  return (
    <Stagger className="flex flex-col gap-[1.15rem]" gap={0.12}>
      <StaggerItem className="md:ps-1">
        <OfferHeading as="h1">
          {job.title}&nbsp;<span aria-hidden>…</span>
        </OfferHeading>
      </StaggerItem>

      {job.missions && job.missions.length > 0 && (
        <StaggerItem>
          <JobSection title="Mission">
            <BulletList items={job.missions} />
          </JobSection>
        </StaggerItem>
      )}
      {job.diploma && (
        <StaggerItem>
          <JobSection title="Diplôme">
            <p>{job.diploma}</p>
          </JobSection>
        </StaggerItem>
      )}
      {job.durationAndLocation && (
        <StaggerItem>
          <JobSection title="Durée & lieu">
            <p>{job.durationAndLocation}</p>
          </JobSection>
        </StaggerItem>
      )}
      {job.profile && (
        <StaggerItem>
          <JobSection title="Profil">
            <p>{job.profile}</p>
          </JobSection>
        </StaggerItem>
      )}

      {/* TODO: message provisoire tant que le contenu de l'offre n'est pas fourni. */}
      {!hasContent && (
        <StaggerItem>
          <p className="max-w-[75ch] font-poppins text-job-body text-black">
            Le détail de cette offre sera bientôt disponible. Pour postuler, écrivez-nous à {HR_EMAIL}.
          </p>
        </StaggerItem>
      )}

      {/* TODO: bouton « Postuler » et lien retour non maquettés (proposition de l'issue), à valider. */}
      <StaggerItem className="mt-fi-24 flex flex-wrap items-center gap-x-fi-24 gap-y-fi-16">
        <Button href={mailtoHr(`Candidature : ${job.title}`)}>Postuler</Button>
        <Link
          href="/carrieres"
          className="font-sans text-small font-bold text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          ← Toutes les offres
        </Link>
      </StaggerItem>
    </Stagger>
  );
}
