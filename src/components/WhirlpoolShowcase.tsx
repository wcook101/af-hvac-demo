import Image from "next/image";
import Link from "next/link";

export function WhirlpoolShowcase() {
  return (
    <section
      id="whirlpool"
      aria-labelledby="whirlpool-heading"
      className="scroll-mt-40 px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-xl shadow-black/10 lg:grid-cols-2 lg:gap-0">
        <div className="px-6 py-10 md:px-10 lg:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Whirlpool equipment</p>
          <h2
            id="whirlpool-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl"
          >
            Whirlpool Heating &amp; Cooling Systems
          </h2>
          <div className="mt-6 w-fit max-w-full rounded-2xl bg-white px-4 py-3">
            <img
              src="/brand/whirlpool-logo.png"
              alt=""
              width={1260}
              height={400}
              className="h-auto w-44 max-w-full"
            />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Discover Whirlpool heating and cooling solutions from A&amp;F HVAC. We offer equipment
            options designed to provide dependable year-round comfort, with professional installation
            tailored to your home&apos;s needs.
          </p>
          <Link href="/contact#estimate" className="btn-copper mt-8 h-12 px-6">
            Request an Estimate
          </Link>
        </div>
        <div className="bg-[#f4e4b8]">
          <Image
            src="/images/whirlpool-heating-cooling.jpg"
            alt="Whirlpool heating and cooling equipment, including outdoor units, furnaces, and air handlers."
            width={1448}
            height={1086}
            sizes="(min-width: 1024px) 36rem, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
