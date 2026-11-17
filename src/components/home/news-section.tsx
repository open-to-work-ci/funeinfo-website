import { news } from "@/content/news";
import Section from "../ui/section";
import NewsCard from "./news-card";

/** Actualités : 3 cartes (3 → 2 → 1 colonne) sur fond rose très pâle. */
export default function NewsSection() {
  return (
    <Section tone="news">
      <h2 className="font-poppins text-section font-bold md:text-3xl">Actualités</h2>
      <ul className="mt-fi-24 grid gap-fi-24 md:grid-cols-2 lg:grid-cols-3 md:mt-fi-40">
        {news.map((item) => (
          <li key={item.slug}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
