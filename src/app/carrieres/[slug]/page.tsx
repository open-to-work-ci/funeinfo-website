import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CareersBanner from "@/components/careers/careers-banner";
import JobSection, { BulletList } from "@/components/careers/job-section";
import Button from "@/components/ui/button";
import Kicker from "@/components/ui/kicker";
import Reveal from "@/components/ui/reveal";
import { HR_EMAIL, getJob, jobs, mailtoHr } from "@/content/jobs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = getJob((await params).slug);
  if (!job) return { title: "Offre introuvable — Fune Info Africa" };
  const title = `${job.title} — Offre d’emploi — Fune Info Africa`;
  const description =
    job.missions?.[0] ?? `Offre d’emploi « ${job.title} » (${job.category}) chez Fune Info Africa.`;
  return {
    title,
    description,
    openGraph: { title, description, type: "website", locale: "fr_FR", siteName: "Fune Info Africa" },
  };
}

export default async function Page({ params }: Props) {
  const job = getJob((await params).slug);
  if (!job) notFound();

  const hasContent = Boolean(
    job.missions?.length || job.diploma || job.durationAndLocation || job.profile,
  );

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
      <div className="container-wide py-fi-40 md:py-fi-64">
        <Reveal className="space-y-fi-40">
          <div className="space-y-fi-16">
            <Link
              href="/carrieres"
              className="inline-block font-sans text-small font-bold text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
            >
              ← Toutes les offres
            </Link>
            <Kicker wide>Offre - disponible</Kicker>
            <h1 className="font-sans text-section font-extrabold md:text-page">
              {job.title} <span aria-hidden>…</span>
            </h1>
          </div>

          {job.missions && job.missions.length > 0 && (
            <JobSection title="Mission">
              <BulletList items={job.missions} />
            </JobSection>
          )}
          {job.diploma && (
            <JobSection title="Diplôme">
              <p>{job.diploma}</p>
            </JobSection>
          )}
          {job.durationAndLocation && (
            <JobSection title="Durée & lieu">
              <p>{job.durationAndLocation}</p>
            </JobSection>
          )}
          {job.profile && (
            <JobSection title="Profil">
              <p>{job.profile}</p>
            </JobSection>
          )}

          {/* TODO: message provisoire tant que le contenu de l'offre n'est pas fourni. */}
          {!hasContent && (
            <p className="max-w-[75ch] text-body md:text-lead">
              Le détail de cette offre sera bientôt disponible. Pour postuler, écrivez-nous à {HR_EMAIL}.
            </p>
          )}

          {/* TODO: bouton « Postuler » non maquetté (proposition de l'issue), à valider. */}
          <Button href={mailtoHr(`Candidature : ${job.title}`)}>Postuler</Button>
        </Reveal>
      </div>
    </>
  );
}
