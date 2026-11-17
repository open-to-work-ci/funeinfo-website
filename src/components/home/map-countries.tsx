import { NETWORK_COUNTRIES, WORLD_PATHS } from "@/content/world-map";
import { COUNTRY_STYLES, MAP_BASE_STYLES, type MapVariant } from "@/content/world-map-styles";

/**
 * Tracés des pays : un `<path>` par pays, avec `id`, `data-country` (code ISO numérique),
 * `data-name` et `data-network`. Le style de chaque pays se règle dans
 * `src/content/world-map-styles.ts`. Composant serveur (les données ne partent pas
 * dans le JavaScript du navigateur).
 */
export default function MapCountries({ variant }: { variant: MapVariant }) {
  const base = MAP_BASE_STYLES[variant];
  const overrides = COUNTRY_STYLES[variant];
  return (
    <>
      {WORLD_PATHS.map((p) => {
        const network = Boolean(NETWORK_COUNTRIES[p.id]);
        return (
          <path
            key={p.id}
            id={`${variant}-country-${p.id}`}
            d={p.d}
            data-country={p.id}
            data-name={p.name}
            data-network={network}
            className={overrides[p.id] ?? (network ? base.network : base.land)}
          />
        );
      })}
    </>
  );
}
