import Kicker from "@/components/ui/kicker";
import Reveal from "@/components/ui/reveal";
import HeroTitle from "./hero-title";

/**
 * Bandeau d'en-tête de /groupe : kicker, titre en lignes qui montent depuis un masque (`HeroTitle`, variante de `TextLines`) et chapeau en trois lignes comme la maquette.
 * Usage : `<GroupHero />`
 *
 * Contraste (écart documenté) : le kicker magenta `brand` sur bleu nuit fait 2,97:1
 * (< AA 4,5:1) ; le rendu de la maquette est conservé volontairement. Le texte
 * en gras du chapeau, lui, utilise `brand-soft` (AA).
 */
export default function GroupHero() {
  return (
    <div className="bg-navy pb-12 pt-12 text-surface md:pb-[4.375rem] md:pt-18">
      <div className="container-narrow space-y-4">
        <Reveal>
          <Kicker>Notre groupe</Kicker>
        </Reveal>
        <HeroTitle
          lines={["L’assistance funéraire qui soulage …"]}
          className="pt-1 font-poppins text-title font-bold"
        />
        <Reveal delay={0.35}>
          <p className="font-poppins text-lede font-normal">
            <span className="block">
              <strong className="font-semibold text-brand-soft">
                FUNE INFO Africa est spécialisé dans l’assistance funéraire
              </strong>{" "}
              présent en Côte d’Ivoire, en France, au Congo et en Guinée.
            </span>
            <span className="block">
              Accompagner les familles, de l’annonce du décès jusqu’à l’inhumation, où qu’elle ait
              lieu.
            </span>
            <span className="block">
              Les équipes de FUNE INFO Africa prennent en charge chaque étape dans les pays où le
              réseau opère.
            </span>
          </p>
        </Reveal>
      </div>
    </div>
  );
}
