import type { ReactNode } from "react";

/** Section de détail d'offre : intitulé magenta en petites capitales (h2) + contenu. */
export default function JobSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-fi-16">
      <h2 className="font-sans text-kicker font-bold uppercase tracking-[0.2em] text-brand">{title}</h2>
      <div className="max-w-[75ch] text-body md:text-lead">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-6 marker:text-navy">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
