import { NETWORK_COUNTRIES, WORLD_PATHS } from "@/content/world-map";
import {
  BASE_COUNTRY_ID,
  COUNTRY_STYLES,
  MAP_BASE_STYLES,
  type MapVariant,
} from "@/content/world-map-styles";
import type { CSSProperties } from "react";

/** Centre approximatif d'un tracé (moyenne de ses points ; le tracé n'a que des M/L en absolu). */
function centerOf(d: string): [number, number] {
  const n = d.match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
  let sx = 0;
  let sy = 0;
  let c = 0;
  for (let i = 0; i + 1 < n.length; i += 2) {
    sx += n[i];
    sy += n[i + 1];
    c++;
  }
  return c ? [sx / c, sy / c] : [0, 0];
}

/** Durée (s) de l'apparition en vague : le pays le plus éloigné de la base démarre à ce délai. */
const WAVE_SPAN = 1.4;

/**
 * Tracés des pays : un `<path>` par pays, avec `id`, `data-country` (code ISO numérique),
 * `data-name`, `data-network` et `data-base` (Côte d'Ivoire). Le style de chaque pays se règle
 * dans `src/content/world-map-styles.ts`. Composant serveur (les données ne partent pas dans
 * le JavaScript du navigateur).
 *
 * - `wave` : chaque pays du réseau reçoit `--wave-delay` (distance à la Côte d'Ivoire) pour
 *   l'apparition en vague.
 * - `focusable` : codes des pays accessibles au clavier (bulle d'info).
 */
export default function MapCountries({
  variant,
  wave = false,
  focusable = [],
}: {
  variant: MapVariant;
  wave?: boolean;
  focusable?: string[];
}) {
  const base = MAP_BASE_STYLES[variant];
  const overrides = COUNTRY_STYLES[variant];
  // Les pays à style personnalisé sont dessinés en dernier : leur bordure passe par-dessus celle des voisins.
  const ordered = [...WORLD_PATHS].sort(
    (a, b) => Number(Boolean(overrides[a.id])) - Number(Boolean(overrides[b.id])),
  );

  const baseCenter = centerOf(WORLD_PATHS.find((p) => p.id === BASE_COUNTRY_ID)?.d ?? "");
  const distances = new Map<string, number>();
  if (wave) {
    for (const p of WORLD_PATHS) {
      if (!NETWORK_COUNTRIES[p.id]) continue;
      const [x, y] = centerOf(p.d);
      distances.set(p.id, Math.hypot(x - baseCenter[0], y - baseCenter[1]));
    }
  }
  const maxDistance = Math.max(1, ...distances.values());

  return (
    <>
      {ordered.map((p) => {
        const network = Boolean(NETWORK_COUNTRIES[p.id]);
        const canFocus = focusable.includes(p.id);
        const delay = distances.get(p.id);
        return (
          <path
            key={p.id}
            id={`${variant}-country-${p.id}`}
            d={p.d}
            data-country={p.id}
            data-name={p.name}
            data-network={network}
            data-base={p.id === BASE_COUNTRY_ID || undefined}
            className={overrides[p.id] ?? (network ? base.network : base.land)}
            style={
              delay === undefined
                ? undefined
                : ({ "--wave-delay": `${((delay / maxDistance) * WAVE_SPAN).toFixed(2)}s` } as CSSProperties)
            }
            {...(canFocus
              ? {
                  tabIndex: 0,
                  role: "button",
                  "aria-label": `${NETWORK_COUNTRIES[p.id]} : voir les informations`,
                }
              : {})}
          />
        );
      })}
    </>
  );
}
