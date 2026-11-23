import Image from "next/image";
import Link from "next/link";
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
            Repairs, service, maintenance, and installation for heating, air conditioning, heat
            pumps, and refrigeration, including ductless mini-split and side-discharge systems, plus
            professional water heater installation.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group grid h-full overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-copper/40 sm:grid-cols-5"
              >
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
                  <p className="font-display text-sm font-semibold tracking-[0.18em] text-copper">
                    {service.number}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{service.text}</p>
                  <p className="mt-4 text-sm font-semibold text-copper">Learn more</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
