import { NETWORK_COUNTRIES, WORLD_PATHS } from "@/content/world-map";
import {
  BASE_COUNTRY_ID,
  COUNTRY_STYLES,
  MAP_BASE_STYLES,
  type MapVariant,
} from "@/content/world-map-styles";

/**
 * Tracés des pays : un `<path>` par pays, avec `id`, `data-country` (code ISO numérique),
 * `data-name`, `data-network` et `data-base` (Côte d'Ivoire). Le style de chaque pays se règle dans
 * `src/content/world-map-styles.ts`. Composant serveur (les données ne partent pas
 * dans le JavaScript du navigateur).
 */
export default function MapCountries({ variant }: { variant: MapVariant }) {
  const base = MAP_BASE_STYLES[variant];
  const overrides = COUNTRY_STYLES[variant];
  // Les pays à style personnalisé sont dessinés en dernier : leur bordure passe par-dessus celle des voisins.
  const ordered = [...WORLD_PATHS].sort((a, b) => Number(Boolean(overrides[a.id])) - Number(Boolean(overrides[b.id])));
  return (
    <>
      {ordered.map((p) => {
        const network = Boolean(NETWORK_COUNTRIES[p.id]);
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
          />
        );
      })}
    </>
  );
}
