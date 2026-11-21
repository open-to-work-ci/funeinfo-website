/**
 * Position du point affiché sur la carte de la page Contact : un seul point par pays, au
 * centre de la ville de l'agence (pas l'adresse exacte). Clés = `Country.id`.
 * Pour affiner plus tard : remplacer lat/lng par ceux de l'adresse précise.
 */
export type ContactMapPoint = { city: string; lat: number; lng: number; zoom: number };

export const CONTACT_MAP: Record<string, ContactMapPoint> = {
  "cote-d-ivoire": { city: "Abidjan", lat: 5.336, lng: -4.0267, zoom: 12 },
  congo: { city: "Brazzaville", lat: -4.2634, lng: 15.2429, zoom: 12 },
  france: { city: "Paris", lat: 48.8566, lng: 2.3522, zoom: 11 },
  guinee: { city: "Conakry", lat: 9.6412, lng: -13.5784, zoom: 12 },
};

/** URL d'intégration Google Maps (sans clé d'API) centrée sur le point, avec repère. */
export function mapEmbedUrl({ lat, lng, zoom }: ContactMapPoint): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&hl=fr&output=embed`;
}

/** Lien « Ouvrir dans Google Maps » vers le même point. */
export function mapOpenUrl({ lat, lng }: ContactMapPoint): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}
