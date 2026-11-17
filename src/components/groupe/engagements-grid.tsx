import { HoverLift, Stagger, StaggerItem } from "@/components/ui/motion";
import { engagements } from "@/content/engagements";
import EngagementCard from "./engagement-card";

/**
 * Grille des 4 engagements : 1 colonne (mobile), 2 (tablette), 4 (≥ 1024 px).
 * Apparition en cascade (`Stagger`) et carte qui se soulève au survol (`HoverLift`).
 * Usage : `<EngagementsGrid />`
 */
export default function EngagementsGrid() {
  return (
    <Stagger as="ul" gap={0.1} className="mt-5.5 grid gap-4 min-[640px]:grid-cols-2 min-[1024px]:grid-cols-4 min-[1024px]:gap-5 min-[1440px]:-mr-[4.8rem]">
      {engagements.map((e) => (
        <StaggerItem as="li" key={e.title}>
          <HoverLift className="h-full">
            <EngagementCard {...e} />
          </HoverLift>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
