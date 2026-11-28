import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden md:min-h-[calc(100svh-5.25rem)]">
      <Image
        src="/images/hero.jpg"
        alt="Technician inspecting a residential outdoor air conditioner beside a house."
        fill
        priority
        sizes="100vw"
        className="object-cover object-[66%_center] sm:object-[64%_48%] lg:object-[60%_58%]"
      />
      <div className="hero-shade absolute inset-0" />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="animate-rise w-full min-w-0 max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-copper/60 bg-navy-deep/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-copper shadow-lg shadow-black/30">
            25+ Years Family-Owned
          </p>
          <h1 className="mt-5 font-display font-semibold tracking-tight text-cream">
            <span className="block text-3xl leading-none text-copper sm:text-4xl">A&amp;F HVAC</span>
            <span className="sr-only">: </span>
            <span className="mt-3 block text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Heating, Air Conditioning &amp; Refrigeration
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
            Family-owned in Walnutport, PA for over 25 years, A&amp;F HVAC provides{" "}
            <Link href="/heating" className="font-semibold text-copper underline decoration-copper/50 underline-offset-4 hover:text-cream">
              heating
            </Link>
            ,{" "}
            <Link href="/air-conditioning" className="font-semibold text-copper underline decoration-copper/50 underline-offset-4 hover:text-cream">
              air conditioning
            </Link>
            , and{" "}
            <Link href="/refrigeration" className="font-semibold text-copper underline decoration-copper/50 underline-offset-4 hover:text-cream">
              refrigeration
            </Link>{" "}
            repairs, service, and installation for all major brands throughout Lehigh, Northampton,
            and Carbon counties.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-copper h-12 px-6">
              Call {site.phoneDisplay}
            </a>
            <a href="#services" className="btn-ghost h-12 px-6">
              Our Services
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
