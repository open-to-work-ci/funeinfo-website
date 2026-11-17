import type { HeroSlide } from "@/content/home";
import clsx from "clsx";
import Image from "next/image";

/**
 * Aperçu de la slide suivante : carte qui déborde du bord droit du hero. Les images
 * sont empilées ; celle de la slide suivante apparaît en fondu avec un léger zoom arrière.
 */
export default function HeroNextPreview({
  slides,
  nextIndex,
}: {
  slides: HeroSlide[];
  nextIndex: number;
}) {
  return (
    <div
      className="pointer-events-none absolute right-0 top-[27.5%] hidden h-[47%] w-[clamp(5rem,7.9vw,9.5rem)] overflow-hidden rounded-l-[clamp(1rem,2.1vw,2.5rem)] bg-navy shadow-2xl md:block"
      aria-hidden="true"
    >
      {slides.map((s, i) => (
        <Image
          key={s.image.src}
          src={s.image.src}
          alt=""
          fill
          sizes="(min-width: 1536px) 152px, 8vw"
          className={clsx(
            "object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
            i === nextIndex ? "scale-100 opacity-100" : "scale-110 opacity-0",
          )}
        />
      ))}
    </div>
  );
}
