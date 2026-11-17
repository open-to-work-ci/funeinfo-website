import PageHero from "@/components/ui/page-hero";
import Section from "@/components/ui/section";
import { LEGAL_PLACEHOLDER, type LegalPage as LegalPageData } from "@/content/legal";

/** Page légale provisoire : h1 + encart « Contenu à rédiger » et rubriques attendues. */
export default function LegalPage({ page }: { page: LegalPageData }) {
  return (
    <>
      <PageHero title={page.title} />
      <Section tone="surface">
        <div className="max-w-3xl space-y-6 font-poppins">
          <h2 className="text-section font-bold">{LEGAL_PLACEHOLDER.heading}</h2>
          <p className="text-body">{LEGAL_PLACEHOLDER.intro}</p>
          <p className="text-label font-semibold uppercase">{LEGAL_PLACEHOLDER.topicsLabel}</p>
          <ul className="list-disc space-y-2 pl-6 text-body">
            {page.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
