import Image from "next/image";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-40 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A&amp;F HVAC focuses on heating and air conditioning. These categories show how the
            work can be presented on the site.
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-copper">
            Proposed services — the owner should confirm this list before the site is published.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <li key={service.title}>
              <article className="group grid h-full overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-copper/40 sm:grid-cols-5">
                <div className="relative min-h-52 sm:col-span-2 sm:min-h-full">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 18rem, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:col-span-3 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display text-sm font-semibold tracking-[0.18em] text-copper">
                      {service.number}
                    </p>
                    <p className="rounded-full border border-copper/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper">
                      Proposed
                    </p>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{service.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
