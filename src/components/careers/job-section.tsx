import type { ReactNode } from "react";

/** Section de détail d'offre : intitulé magenta en petites capitales (h2) + contenu (Poppins, noir). */
export default function JobSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-sans text-job-label font-semibold uppercase tracking-[0.095em] text-brand">{title}</h2>
      <div className="mt-[0.875rem] font-poppins text-job-body font-normal text-black">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-8 marker:text-[0.75em] marker:text-black">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
