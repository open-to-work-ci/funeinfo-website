import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/news/article-card";
import Button from "@/components/ui/button";
import Kicker from "@/components/ui/kicker";
import Reveal from "@/components/ui/reveal";
import { formatNewsDate, getNews, news } from "@/content/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getNews((await params).slug);
  if (!item) return { title: "Article introuvable" };
  const title = item.title.replace(/\n/g, " ");
  return {
    title,
    description: item.excerpt,
    alternates: { canonical: `/actualites/${item.slug}` },
    openGraph: { title, description: item.excerpt, type: "article", images: [{ url: item.image.src, alt: item.image.alt }] },
  };
}

/** Page article (mise en page adaptée du site de référence : grande photo, titre, date, texte, articles liés). */
export default async function Page({ params }: Props) {
  const item = getNews((await params).slug);
  if (!item) notFound();
  const title = item.title.replace(/\n/g, " ");
  const paragraphs = item.body?.length ? item.body : [item.excerpt];
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <article className="bg-surface pb-fi-64">
      <div className="container-narrow pt-fi-40 md:pt-fi-64">
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-card">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              priority
              sizes="(min-width: 1170px) 1170px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="mt-8 md:mt-12">
          <Kicker>{item.tag}</Kicker>
          <h1 className="mt-3 font-sans text-section font-bold uppercase leading-[1.1] text-navy md:text-page">{title}</h1>
          {item.date && <p className="mt-3 text-small text-ink-secondary">{formatNewsDate(item.date)}</p>}
          <div className="mt-6 flex max-w-[70ch] flex-col gap-4 text-body leading-[1.7] text-ink">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/actualites">Toutes les actualités</Button>
          </div>
        </Reveal>
      </div>
      {related.length > 0 && (
        <section className="container-wide mt-fi-64 border-t border-line pt-fi-40" aria-labelledby="a-lire-aussi">
          <h2 id="a-lire-aussi" className="font-sans text-section font-bold uppercase text-navy">
            À lire aussi
          </h2>
          <ul className="mt-fi-24 grid gap-x-8 gap-y-fi-40 md:grid-cols-2 lg:grid-cols-3">
            {related.map((n) => (
              <li key={n.slug}>
                <ArticleCard item={n} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
