import {
  MAP_LABELS,
  MAP_MARKERS,
  NETWORK_COUNTRIES,
  WORLD_PATHS,
  WORLD_VIEWBOX,
} from "@/content/world-map";
import { Parallax } from "../ui/motion";

const names = Object.values(NETWORK_COUNTRIES);
const ariaLabel = `Carte du monde : pays couverts par le réseau Fune Info Africa : ${names.join(", ")}.`;
const smallLabels = new Set(["Suisse", "Italie", "Thaïlande", "Belgique", "Portugal", "Angleterre"]);

/**
 * Carte du monde SVG (Mercator) : pays du réseau en magenta, autres en gris clair.
 * Léger parallaxe au scroll. Les étiquettes sont masquées sous 1280 px au profit d'une
 * liste de pays.
 */
export default function WorldMap() {
  const { width, height } = WORLD_VIEWBOX;
  return (
    <section className="bg-surface px-4 pb-fi-24 md:px-6 md:pb-0" aria-label="Pays couverts par le réseau">
      <Parallax className="mx-auto w-full max-w-[88rem]" distance={22}>
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="block h-auto w-full overflow-visible"
        >
          <g className="stroke-surface" strokeWidth={0.4}>
            {WORLD_PATHS.map((p) => (
              <path
                key={p.id}
                d={p.d}
                className={NETWORK_COUNTRIES[p.id] ? "fill-brand" : "fill-map-land"}
              />
            ))}
          </g>
          <g className="fill-brand">
            {MAP_MARKERS.map((m) => (
              <circle key={m.id} cx={m.x} cy={m.y} r={2.2} />
            ))}
          </g>
          <g className="hidden fill-brand font-inter font-bold lg:block">
            {MAP_LABELS.map((l) => (
              <text
                key={l.text}
                x={l.x}
                y={l.y}
                textAnchor={l.anchor}
                fontSize={l.text === "Russie" ? 18 : smallLabels.has(l.text) ? 11 : 15}
              >
                {l.text === "Russie" ? "RUSSIE" : l.text}
              </text>
            ))}
          </g>
        </svg>
      </Parallax>
      <ul className="mt-fi-24 flex flex-wrap justify-center gap-x-4 gap-y-1 font-poppins text-small font-bold text-brand lg:sr-only">
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </section>
  );
}
