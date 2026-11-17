import Image from "next/image";
import { ImageReveal, Parallax } from "@/components/ui/motion";

/**
 * Photo d'une bannière : se dévoile à l'entrée (ImageReveal), parallaxe légère au scroll et
 * zoom lent au survol de la bannière (le parent porte `group/banner`).
 * Usage : `<BannerImage src="/x.webp" alt="…" position="50% 50%" priority />` dans un parent `relative`.
 */
export default function BannerImage({
  src,
  alt,
  position,
  priority = false,
}: {
  src: string;
  alt: string;
  position: string;
  priority?: boolean;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <ImageReveal className="h-full">
        <Parallax className="h-full" distance={4}>
          <div className="relative h-full scale-[1.03]">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(min-width: 1368px) 1300px, (min-width: 768px) calc(100vw - 48px), calc(100vw - 32px)"
              style={{ objectPosition: position }}
              className="object-cover transition-transform duration-[1600ms] ease-out group-hover/banner:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover/banner:scale-100"
            />
          </div>
        </Parallax>
      </ImageReveal>
    </div>
  );
}
