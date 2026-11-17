import {
  MAP_LABELS,
  MAP_MARKERS,
  NETWORK_COUNTRIES,
  WORLD_PATHS,
  WORLD_VIEWBOX,
} from "@/content/world-map";
import Reveal from "../ui/reveal";

const names = Object.values(NETWORK_COUNTRIES);
const ariaLabel = `Carte du monde : pays couverts par le réseau Fune Info Africa : ${names.join(", ")}.`;

/**
 * Carte du monde SVG : pays du réseau en magenta, autres en gris clair.
 * Les étiquettes sont masquées sous 1280 px au profit d'une liste.
 */
export default function WorldMap() {
  const { width, height } = WORLD_VIEWBOX;
  return (
    <div className="container-wide pb-fi-40 md:pb-fi-64">
      <Reveal>
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="mx-auto h-auto w-full max-w-[1300px]"
        >
          <g className="stroke-surface" strokeWidth={0.4}>
            {WORLD_PATHS.map((p) => (
              <path
                key={p.id}
                d={p.d}
                className={NETWORK_COUNTRIES[p.id] ? "fill-brand" : "fill-card"}
              />
            ))}
          </g>
          <g className="fill-brand">
            {MAP_MARKERS.map((m) => (
              <circle key={m.id} cx={m.x} cy={m.y} r={2.2} />
            ))}
          </g>
          <g className="hidden fill-brand font-poppins font-bold lg:block" fontSize={12}>
            {MAP_LABELS.map((l) => (
              <text key={l.text} x={l.x} y={l.y} textAnchor={l.anchor}>
                {l.text}
              </text>
            ))}
          </g>
        </svg>
        <ul className="mt-fi-24 flex flex-wrap justify-center gap-x-4 gap-y-1 font-poppins text-small font-bold text-brand lg:sr-only">
          {names.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
