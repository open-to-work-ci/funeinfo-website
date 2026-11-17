import type { NewsItem } from "@/content/types";
import Image from "next/image";
import Link from "next/link";
import { HoverLift } from "../ui/motion";
import Kicker from "../ui/kicker";

/**
 * Carte d'actualité. Au survol / focus : la carte se soulève (`HoverLift`) et la photo
 * zoome légèrement. Avec `href`, toute la carte est cliquable (lien unique sur le titre,
 * étendu à la carte) ; sans `href`, la carte est un simple bloc.
 */
export default function NewsCard({ item }: { item: NewsItem }) {
  const { href } = item;
  return (
    <HoverLift className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-md bg-surface shadow-sm transition-shadow duration-200 focus-within:shadow-lg hover:shadow-lg">
        <div className="relative aspect-[193/113] w-full overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1170px) 374px, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transition-none"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-fi-24">
          <Kicker className="text-caption tracking-[0.12em] md:text-caption">{item.tag}</Kicker>
          <h3 className="whitespace-pre-line font-sans text-news-title font-bold leading-[1.25]">
            {href ? (
              <Link
                href={href}
                className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand focus-visible:after:ring-inset"
              >
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </h3>
          <p className="line-clamp-3 text-small leading-[1.5] text-ink">{item.excerpt}</p>
        </div>
      </article>
    </HoverLift>
  );
}
