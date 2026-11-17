import type { NewsItem } from "@/content/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Kicker from "../ui/kicker";

/**
 * Carte d'actualité. Avec `href`, toute la carte est cliquable (lien unique sur le
 * titre, étendu à la carte) ; sans `href`, la carte est un simple bloc.
 */
export default function NewsCard({ item }: { item: NewsItem }) {
  const { href } = item;
  return (
    <article
      className={clsx(
        "relative flex h-full flex-col overflow-hidden rounded-md bg-surface shadow-sm transition duration-200",
        href && "hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg",
      )}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 1320px) 420px, (min-width: 768px) 33vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-fi-24">
        <Kicker className="text-caption tracking-wide">{item.tag}</Kicker>
        <h3 className="font-poppins text-lg font-bold leading-6">
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
        <p className="line-clamp-3 text-small text-ink-secondary">{item.excerpt}</p>
      </div>
    </article>
  );
}
