import clsx from "clsx";
import type { ExpertiseBannerData } from "@/content/expertises";
import AccentBlock from "./accent-block";
import BannerCta from "./banner-cta";
import BannerImage from "./banner-image";
import BannerSlide from "./banner-slide";
import BannerText from "./banner-text";

/**
 * Bannière d'une expertise : photo + calque sombre côté texte, bloc magenta qui dépasse
 * (côté `side`), titre h2, accroche et bouton. Ratio de la maquette via aspect-ratio ;
 * la bannière glisse depuis le côté opposé au bloc magenta.
 * Usage : `<ExpertiseBanner data={expertises[0]} href="…" side="left" priority />`
 */
export default function ExpertiseBanner({
  data,
  href,
  side,
  priority = false,
}: {
  data: ExpertiseBannerData;
  href: string;
  /** Côté où le bloc magenta dépasse : `left` (photo décalée à droite) ou `right`. */
  side: "left" | "right";
  priority?: boolean;
}) {
  return (
    <BannerSlide from={side === "left" ? "right" : "left"}>
      <article id={data.slug} className="relative scroll-mt-6 pb-[3.5%] lg:pb-[1.53%]">
        <AccentBlock side={side} />
        <div
          className={clsx(
            "group/banner relative aspect-[4/3] w-[96%] overflow-hidden rounded-xs bg-navy md:aspect-[13/5] lg:aspect-[1223/281] lg:w-[98.4%]",
            side === "left" ? "ml-auto" : "mr-auto",
          )}
        >
          <BannerImage
            src={data.image.src}
            alt={data.image.alt}
            position={data.image.position}
            priority={priority}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-scrim via-scrim/60 to-transparent md:bg-linear-to-r md:from-scrim md:via-scrim/60 md:via-45% md:to-transparent"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-between p-banner">
            <BannerText title={data.bannerTitle} lines={data.lines} />
            <div className="self-end">
              <BannerCta href={href} label={data.label} />
            </div>
          </div>
        </div>
      </article>
    </BannerSlide>
  );
}
