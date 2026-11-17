import Link from "next/link";
import Kicker from "@/components/ui/kicker";
import type { Job } from "@/content/types";

/** Carte d'offre : toute la carte est un lien vers `/carrieres/[slug]`. */
export default function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/carrieres/${job.slug}`}
      className="flex h-full min-h-40 flex-col gap-fi-16 rounded-md bg-card p-fi-24 shadow-sm transition-shadow duration-150 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
    >
      <Kicker wide>{job.category}</Kicker>
      <h3 className="font-sans text-section font-extrabold">{job.title}</h3>
    </Link>
  );
}
