import { TextLines } from "@/components/ui/motion";

/**
 * Titre (h2) et accroche d'une bannière, ligne à ligne comme dans la maquette ;
 * chaque ligne monte depuis un masque (TextLines).
 * Usage : `<BannerText title="Rapatriement" lines={["Perdre un proche…", "Ne laissez pas…"]} />`
 */
export default function BannerText({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="max-w-[68%] text-surface md:max-w-[72%] lg:max-w-[60%]">
      <h2 className="font-sans text-banner-title font-extrabold uppercase">
        <TextLines lines={[title]} />
      </h2>
      <p className="font-sans text-banner-lead font-normal uppercase">
        <TextLines lines={lines} delay={0.2} />
      </p>
    </div>
  );
}
