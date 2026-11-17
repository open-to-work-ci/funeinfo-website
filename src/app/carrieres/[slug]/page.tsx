import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import { getJob, jobs } from "@/content/jobs";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJob((await params).slug);
  return { title: job ? `${job.title} — Fune Info Africa` : "Offre introuvable" };
}

export default async function Page({ params }: Props) {
  const job = getJob((await params).slug);
  if (!job) notFound();
  return (
    <PageHero kicker={job.department} title={job.title}>
      <p>{job.description}</p>
    </PageHero>
  );
}
