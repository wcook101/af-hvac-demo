import { site } from "@/lib/site";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden md:min-h-[calc(100svh-5.25rem)]">
      <Image
        src="/images/hero.jpg"
        alt="Technician inspecting a residential outdoor air conditioner beside a house."
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/82 to-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="animate-rise max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
            Walnutport, Pennsylvania
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Reliable Heating &amp; Cooling. Year-Round Comfort.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
            Professional heating and air conditioning services in Walnutport, Pennsylvania.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-copper h-12 px-6">
              Call {site.phoneDisplay}
            </a>
            <a href="#contact" className="btn-ghost h-12 px-6">
              Request an Estimate
            </a>
          </div>
          <ul className="mt-10 grid gap-3 border-t border-white/15 pt-6 text-sm font-semibold text-cream/90 sm:grid-cols-3">
            <li>Walnutport, PA</li>
            <li>{site.insurance}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-copper">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
