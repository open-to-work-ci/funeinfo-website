import { MAP_LABELS, WORLD_VIEWBOX } from "@/content/world-map";
import MapCountries from "./map-countries";

/** Noms de pays petits (serrés sur l'Europe et l'Asie) : taille réduite. */
const smallLabels = new Set(["Suisse", "Italie", "Thaïlande", "Belgique", "Portugal", "Angleterre"]);

/** Taille des noms dans le repère du SVG (1000 de large) : ≈ 1,5× l'ancienne carte, comme la maquette. */
const labelSize = (text: string) => (text === "Russie" ? 21 : smallLabels.has(text) ? 10.5 : 15);

/**
 * Carte du monde du hero en SVG intégré : chaque pays est un tracé indépendant
 * (voir `MapCountries` et `world-map-styles.ts`). Composant serveur, rendu dans le
 * hero via `HeroMap`.
 */
export default function HeroMapSvg() {
  const { width, height } = WORLD_VIEWBOX;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="block size-full overflow-visible"
      aria-hidden="true"
      focusable="false"
    >
      <g className="stroke-sea" strokeWidth={0.3}>
        <MapCountries variant="hero" />
      </g>
      <g className="fill-map-hero-label font-arial font-bold">
        {MAP_LABELS.map((l) => (
          <text key={l.text} x={l.x} y={l.y} textAnchor={l.anchor} fontSize={labelSize(l.text)}>
            {l.text === "Russie" ? "RUSSIE" : l.text}
          </text>
        ))}
      </g>
    </svg>
  );
}
