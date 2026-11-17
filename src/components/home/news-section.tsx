import { news } from "@/content/news";
import { Stagger, StaggerItem } from "../ui/motion";
import Reveal from "../ui/reveal";
import NewsCard from "./news-card";

/** Actualités : 3 cartes (3 → 2 → 1 colonne) en cascade sur fond rose très pâle. */
export default function NewsSection() {
  return (
    <section className="bg-news pb-fi-40 pt-fi-40 md:pb-14" aria-labelledby="actualites">
      <div className="container-narrow">
        <Reveal>
          <h2 id="actualites" className="font-sans text-section font-bold text-navy md:text-page">
            Actualités
          </h2>
        </Reveal>
        <Stagger
          as="ul"
          className="mt-fi-24 grid gap-fi-24 md:mt-fi-40 md:grid-cols-2 lg:grid-cols-3"
        >
          {news.map((item) => (
            <StaggerItem as="li" key={item.slug}>
              <NewsCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
