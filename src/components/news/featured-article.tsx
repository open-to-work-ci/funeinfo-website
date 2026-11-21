import type { NewsItem } from "@/content/types";
import { formatNewsDate } from "@/content/news";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * « À la une » : titre + date sur une ligne, grande photo, extrait puis « Lire + → » dans un
 * angle de cadre (détail du site de référence). Toute la mise en avant est cliquable.
 */
export default function FeaturedArticle({ item }: { item: NewsItem }) {
  return (
    <article className="group relative">
      <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
        <h3 className="whitespace-pre-line font-sans text-section font-bold uppercase leading-[1.15] text-navy">
          <Link
            href={item.href ?? "/actualites"}
            className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand"
          >
            {item.title.replace(/\n/g, " ")}
          </Link>
        </h3>
        {item.date && <p className="shrink-0 text-small text-ink-secondary">{formatNewsDate(item.date)}</p>}
      </header>
      <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-md bg-card md:mt-6">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          priority
          sizes="(min-width: 1320px) 1320px, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <p className="mt-4 max-w-[60rem] text-body leading-[1.6] text-ink">{item.excerpt}</p>
      <span className="ml-auto mt-4 flex w-fit items-center gap-1.5 border-b-2 border-r-2 border-navy py-2 pl-6 pr-3 text-small font-semibold text-navy">
        Lire +
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
      </span>
    </article>
  );
}
