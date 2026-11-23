import {
  COUNTRY_LABELS,
  MAP_MARKERS,
  NETWORK_COUNTRIES,
  WORLD_VIEWBOX,
} from "@/content/world-map";
import { countries } from "@/content/countries";
import { BASE_COUNTRY_ID, MAP_INFO_SOURCES } from "@/content/world-map-styles";
import { Parallax } from "../ui/motion";
import MapCountries from "./map-countries";
import MapInteractive, { type MapInfo } from "./map-interactive";

const names = Object.values(NETWORK_COUNTRIES);
const ariaLabel = `Carte du monde : pays couverts par le réseau Fune Info Africa : ${names.join(", ")}.`;
/** Infos de la bulle : tous les pays du réseau (nom), avec adresse et téléphones quand une agence existe. */
const infos: Record<string, MapInfo> = Object.fromEntries(
  Object.entries(NETWORK_COUNTRIES).map(([id, name]) => {
    const agency = countries.find((c) => c.id === MAP_INFO_SOURCES[id]);
    return [
      id,
      { name, base: id === BASE_COUNTRY_ID, address: agency?.address, phones: agency?.phones },
    ];
  }),
);
const focusable = Object.keys(MAP_INFO_SOURCES);
const base = COUNTRY_LABELS.find((l) => l.id === BASE_COUNTRY_ID);

/** Échelle des noms de pays écrits dans les pays d'Afrique (1 = taille calculée ; 0,85 = −15 %). */
const COUNTRY_LABEL_SCALE = 0.85;

/**
 * Carte du monde SVG (Mercator) : pays du réseau en magenta, autres en gris clair.
 * Pleine largeur de l'écran (de bord à bord), léger parallaxe au scroll. Les étiquettes des grands
 * pays sont masquées sous 1280 px au profit d'une liste de pays.
 * Interactions : bulle d'info et nom du pays au survol / focus / tap, pulsation de la base (Côte
 * d'Ivoire), apparition en vague depuis la base (voir `MapInteractive`).
 */
export default function WorldMap() {
  const { width, height } = WORLD_VIEWBOX;
  return (
    <section className="bg-surface pb-fi-24 md:pb-0" aria-label="Pays couverts par le réseau">
      <Parallax className="w-full" distance={22}>
        <MapInteractive infos={infos}>
        <svg
          role="group"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="block h-auto w-full overflow-visible"
        >
          <g className="stroke-surface" strokeWidth={0.4}>
            <MapCountries variant="light" wave focusable={focusable} />
          </g>
          {/* Pulsation discrète de la base (Côte d'Ivoire) : deux halos décalés, coupés si mouvement réduit. */}
          {base && (
            <g className="pointer-events-none stroke-brand" aria-hidden="true" fill="none" strokeWidth={0.8}>
              {[0, 1.5].map((delay) => (
                <circle
                  key={delay}
                  cx={base.x}
                  cy={base.y}
                  r={4}
                  className="origin-center animate-map-pulse [transform-box:fill-box] motion-reduce:hidden"
                  style={{ animationDelay: `${delay}s` }}
                />
              ))}
              <circle cx={base.x} cy={base.y} r={1.1} className="fill-surface stroke-brand" strokeWidth={0.5} />
            </g>
          )}
          {/* Noms des pays d'Afrique : affichés uniquement sur le pays survolé / actif (MapInteractive). */}
          <g className="pointer-events-none font-inter font-semibold" aria-hidden="true">
            {COUNTRY_LABELS.map((l) => {
              const lines = l.id === "178" ? ["Congo", "Brazzaville"] : [l.text];
              return (
                <text
                  key={l.id}
                  data-label-for={l.id}
                  x={l.x}
                  y={l.y - ((lines.length - 1) * l.size * COUNTRY_LABEL_SCALE * 0.6) / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={l.size * COUNTRY_LABEL_SCALE}
                  letterSpacing={l.id === "384" ? 0.15 : 0}
                  className={`opacity-0 transition-opacity duration-150 data-[visible=true]:opacity-100 ${l.outside ? "fill-brand" : "fill-surface/90"}`}
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
        </svg>
        </MapInteractive>
      </Parallax>
      <ul className="mt-fi-24 flex flex-wrap justify-center gap-x-4 gap-y-1 px-4 font-poppins text-small font-bold text-brand sr-only">
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </section>
  );
}
