import Kicker from "@/components/ui/kicker";
import { TextLines } from "@/components/ui/motion";
import Reveal from "@/components/ui/reveal";

/**
 * Bandeau bleu nuit de la page Expertises : kicker, titre h1 (ligne qui monte) et paragraphe.
 * Sur grand écran le texte est décalé vers la droite comme dans la maquette (≈ 9 % du conteneur).
 * Usage : `<ExpertisesHero />`
 */
export default function ExpertisesHero() {
  return (
    <div className="bg-navy pb-[clamp(2rem,3.7vw,4.45rem)] pt-[clamp(2.5rem,5.2vw,6.25rem)] text-surface">
      <div className="container-wide">
        <div className="space-y-3 min-[1280px]:ps-[9.2%]">
          <Reveal>
            <Kicker>Nos expertises</Kicker>
          </Reveal>
          <h1 className="font-poppins text-expertises-title font-bold">
            <TextLines lines={["Cinq façons de vous accompagner"]} />
          </h1>
          <Reveal delay={0.15} className="pt-3.5">
            <p className="max-w-[72rem] font-poppins text-expertises-lead font-bold">
              Du rapatriement d’un proche à l’organisation complète des obsèques, nos équipes prennent en
              charge chaque étape et le même interlocuteur suit votre dossier du début à la fin.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
