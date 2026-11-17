import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Aperçus Vercel : tout interdire, pas de sitemap.
    rules: IS_INDEXABLE ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    ...(IS_INDEXABLE && { sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL }),
  };
}
