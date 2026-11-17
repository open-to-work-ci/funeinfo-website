import { Stagger, StaggerItem } from "@/components/ui/motion";
import type { Job } from "@/content/types";
import JobCard from "./job-card";

/** Grille de cartes d'offres : 1 colonne (mobile) → 2 (tablette) → 3 (desktop), apparition en cascade. */
export default function JobGrid({ jobs }: { jobs: Job[] }) {
  return (
    <Stagger as="ul" gap={0.08} className="grid gap-x-6 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <StaggerItem as="li" key={job.slug}>
          <JobCard job={job} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
