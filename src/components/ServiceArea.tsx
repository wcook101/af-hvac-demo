import Link from "next/link";
import { PinIcon } from "@/components/Icons";
import { serviceAreas } from "@/lib/site";

const notes = [
  "Heating and air-conditioning repair and installation, plus refrigeration and water heater installation.",
  "The same heating, cooling, refrigeration, and water heater work from the Walnutport shop.",
  "Heating, air conditioning, refrigeration, and water heater installation for properties in this county.",
];

export function ServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-40 border-t border-white/10 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
            Based in Walnutport, Pennsylvania
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Serving Lehigh, Northampton, and Carbon Counties
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A&amp;F HVAC is based in Walnutport, Pennsylvania, and serves Lehigh, Northampton, and
            Carbon counties.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <li key={area.slug}>
              <Link
                href={`/service-area#${area.slug}`}
                className="block h-full rounded-3xl border border-white/10 bg-panel p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-copper/40"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-copper/15 text-copper">
                  <PinIcon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-cream">
                  {area.label}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{notes[index]}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/service-area" className="mt-8 inline-flex text-sm font-semibold text-copper hover:underline">
          Explore the full service area
        </Link>
      </div>
    </section>
  );
}
