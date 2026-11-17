import {
  COUNTRY_LABELS,
  MAP_LABELS,
  MAP_MARKERS,
  NETWORK_COUNTRIES,
  WORLD_VIEWBOX,
} from "@/content/world-map";
import { Parallax } from "../ui/motion";
import MapCountries from "./map-countries";

const names = Object.values(NETWORK_COUNTRIES);
const ariaLabel = `Carte du monde : pays couverts par le réseau Fune Info Africa : ${names.join(", ")}.`;
/** Échelle des noms de pays écrits dans les pays d'Afrique (1 = taille calculée ; 0,85 = −15 %). */
const COUNTRY_LABEL_SCALE = 0.85;
const smallLabels = new Set(["Suisse", "Italie", "Thaïlande", "Belgique", "Portugal", "Angleterre"]);

/**
 * Carte du monde SVG (Mercator) : pays du réseau en magenta, autres en gris clair.
 * Pleine largeur de l'écran (de bord à bord), léger parallaxe au scroll. Les étiquettes sont masquées sous 1280 px au profit d'une
 * liste de pays.
 */
export default function WorldMap() {
  const { width, height } = WORLD_VIEWBOX;
  return (
    <section className="bg-surface pb-fi-24 md:pb-0" aria-label="Pays couverts par le réseau">
      <Parallax className="w-full" distance={22}>
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="block h-auto w-full overflow-visible"
        >
          <g className="stroke-surface" strokeWidth={0.4}>
            <MapCountries variant="light" />
          </g>
          {/* Noms des pays d'Afrique écrits dans les pays (maquette) ; trop petits sous 1280 px. */}
          <g className="pointer-events-none hidden font-inter font-semibold xl:block" aria-hidden="true">
            {COUNTRY_LABELS.map((l) => {
              const lines = l.id === "178" ? ["Congo", "Brazzaville"] : [l.text];
              return (
                <text
                  key={l.id}
                  x={l.x}
                  y={l.y - ((lines.length - 1) * l.size * COUNTRY_LABEL_SCALE * 0.6) / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={l.size * COUNTRY_LABEL_SCALE}
                  letterSpacing={l.id === "384" ? 0.15 : 0}
                  className={l.outside ? "fill-brand" : "fill-surface/90"}
                >
                  {lines.map((t, i) => (
                    <tspan key={t} x={l.x} dy={i === 0 ? 0 : l.size * COUNTRY_LABEL_SCALE * 1.2}>
                      {t}
                    </tspan>
                  ))}
                </text>
              );
            })}
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
      <ul className="mt-fi-24 flex flex-wrap justify-center gap-x-4 gap-y-1 px-4 font-poppins text-small font-bold text-brand lg:sr-only">
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </section>
  );
}
