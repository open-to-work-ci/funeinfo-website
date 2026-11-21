import type { Metadata } from "next";
import ArticleCard from "@/components/news/article-card";
import FeaturedArticle from "@/components/news/featured-article";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import PageHero from "@/components/ui/page-hero";
import Reveal from "@/components/ui/reveal";
import { news } from "@/content/news";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Toute l’actualité de Fune Info Africa : rencontres, salons professionnels et vie de nos équipes en Afrique et à l’international.",
  alternates: { canonical: "/actualites" },
};

// Mise en page adaptée du site de référence (page « Médias » : À la une + Plus d'articles).
// TODO : pagination (« 01 02 03 … → ») à ajouter quand il y aura plus de 9 articles.
export default function Page() {
  const [featured, ...others] = news;
  return (
    <>
      <PageHero kicker="Fune Info Africa" title="Actualités">
        <p className="text-body">
          Rencontres, salons, vie des équipes : retrouvez les temps forts du réseau.
        </p>
      </PageHero>
      <div className="bg-surface pb-fi-64 pt-fi-40 md:pt-fi-64">
        <div className="container-wide">
          {featured && (
            <section aria-labelledby="a-la-une">
              <Reveal>
                <h2 id="a-la-une" className="mb-6 font-sans text-kicker font-bold uppercase tracking-[0.2em] text-brand">
                  À la une
                </h2>
                <FeaturedArticle item={featured} />
              </Reveal>
            </section>
          )}
          {others.length > 0 && (
            <section aria-labelledby="plus-darticles" className="mt-fi-64">
              <Reveal>
                <h2 id="plus-darticles" className="font-sans text-section font-bold uppercase text-navy md:text-page">
                  Plus d’articles
                </h2>
                <span className="mt-3 block h-1 w-20 rounded-pill bg-navy" aria-hidden="true" />
              </Reveal>
              <Stagger as="ul" className="mt-fi-24 grid gap-x-8 gap-y-fi-40 md:mt-fi-40 md:grid-cols-2 lg:grid-cols-3">
                {others.map((item) => (
                  <StaggerItem as="li" key={item.slug}>
                    <ArticleCard item={item} />
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
