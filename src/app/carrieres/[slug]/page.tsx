import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CareersBanner from "@/components/careers/careers-banner";
import JobDetail from "@/components/careers/job-detail";
import { getJob, jobs } from "@/content/jobs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJob((await params).slug);
  if (!job) return { title: "Offre introuvable" };
  const title = `${job.title} — Offre d’emploi`;
  const description =
    job.missions?.[0] ?? `Offre d’emploi « ${job.title} » (${job.category}) chez Fune Info Africa.`;
  return {
    title,
    description,
  };
}

export default async function Page({ params }: Props) {
  const job = getJob((await params).slug);
  if (!job) notFound();

  // Pas de datePosted / validThrough : aucune date n'est connue (ne pas en inventer).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.missions?.length ? job.missions.join(" ; ") : job.title,
    occupationalCategory: job.category,
    hiringOrganization: { "@type": "Organization", name: "Fune Info Africa" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <CareersBanner />
      {/* min-h en vw : la maquette laisse ≈ 945 px (à 1905 px) entre la bannière et le pied de page. */}
      <div className="lg:min-h-[49.6vw]">
        <div className="container-narrow pb-fi-64 pt-8 md:pt-[2.9rem]">
          <JobDetail job={job} />
        </div>
      </div>
    </>
  );
}
