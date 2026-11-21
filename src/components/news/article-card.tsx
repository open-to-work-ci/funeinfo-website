import type { NewsItem } from "@/content/types";
import { formatNewsDate } from "@/content/news";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HoverLift } from "../ui/motion";

/**
 * Carte d'article de la page Actualités (mise en page du site de référence : photo, titre
 * en capitales de couleur, date, extrait, « Lire + → »). Toute la carte est cliquable.
 */
export default function ArticleCard({ item }: { item: NewsItem }) {
  return (
    <HoverLift className="h-full">
      <article className="group relative flex h-full flex-col">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-card">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:transition-none"
          />
        </div>
        <h3 className="mt-5 whitespace-pre-line font-sans text-small font-bold uppercase leading-[1.35] tracking-[0.02em] text-brand md:text-label">
          <Link
            href={item.href ?? "/actualites"}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand focus-visible:after:ring-offset-2"
          >
            {item.title.replace(/\n/g, " ")}
          </Link>
        </h3>
        {item.date && <p className="mt-1 text-small text-ink-secondary">{formatNewsDate(item.date)}</p>}
        <p className="mt-3 line-clamp-4 text-small leading-[1.6] text-ink">{item.excerpt}</p>
        <span className="mt-auto flex items-center justify-end gap-1.5 pt-4 text-small font-semibold text-navy">
          Lire +
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
        </span>
      </article>
    </HoverLift>
  );
}
