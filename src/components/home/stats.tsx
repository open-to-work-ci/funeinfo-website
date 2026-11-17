import { stats } from "@/content/home";
import CountUp from "./count-up";
import Reveal from "../ui/reveal";

/** Chiffres clés : 4 + 3 en desktop, 2 colonnes en tablette, 1 en mobile. */
export default function Stats() {
  return (
    <div className="container-wide pb-fi-40 md:pb-fi-64">
      <Reveal>
        <ul className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-y-fi-40">
          {stats.map((s) => (
            <li key={s.label} className="w-full px-3 text-center md:w-1/2 lg:w-1/4">
              <p className="font-poppins text-stat font-bold text-brand-soft">
                <CountUp value={s.value} prefix={s.prefix} digits={s.digits} />
              </p>
              <p className="mx-auto mt-2 max-w-[16rem] font-poppins text-small font-bold text-brand-soft">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
