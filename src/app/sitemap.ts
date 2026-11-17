import type { MetadataRoute } from "next";
import { jobs } from "@/content/jobs";
import { IS_INDEXABLE, SITE_URL } from "@/lib/site";

/** Pages statiques + une entrée par offre d'emploi (`src/content/jobs.ts`). */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_INDEXABLE) return [];
  const lastModified = new Date();
  const pages = [
    { path: "/", priority: 1 },
    { path: "/groupe", priority: 0.8 },
    { path: "/expertises", priority: 0.8 },
    { path: "/carrieres", priority: 0.6 },
  ];
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      priority,
    })),
    ...jobs.map((job) => ({
      url: `${SITE_URL}/carrieres/${job.slug}`,
      lastModified,
      priority: 0.4,
    })),
  ];
}
