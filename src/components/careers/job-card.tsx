import Link from "next/link";
import { HoverLift } from "@/components/ui/motion";
import type { Job } from "@/content/types";

/** Carte d'offre grise : toute la carte est un lien vers `/carrieres/[slug]` ; une flèche apparaît au survol. */
export default function JobCard({ job }: { job: Job }) {
  return (
    <HoverLift className="h-full">
      <Link
        href={`/carrieres/${job.slug}`}
        className="group relative flex aspect-[376/154] h-full flex-col gap-6 rounded-md bg-card px-6 pb-6 pt-[1.3rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
      >
        <p className="font-sans text-caption font-medium tracking-[0.14em] text-brand">{job.category}</p>
        <h3 className="font-sans text-job-title font-bold">{job.title}</h3>
        <span
          aria-hidden
          className="absolute bottom-5 right-6 -translate-x-2 text-job-title font-bold text-brand opacity-0 transition-[opacity,translate] duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          →
        </span>
      </Link>
    </HoverLift>
  );
}
