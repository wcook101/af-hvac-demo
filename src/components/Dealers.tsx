import { dealers } from "@/lib/site";

export function DealerBrands() {
  return (
    <ol className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-5">
      {dealers.map((dealer) => (
        <li
          key={dealer.name}
          className="flex h-full flex-col rounded-3xl border border-white/10 bg-panel px-5 py-6 text-center shadow-xl shadow-black/10 sm:px-6 sm:py-8"
        >
          <div className="flex min-h-40 flex-1 items-center justify-center rounded-2xl bg-white px-5 py-6 sm:min-h-44">
            {dealer.logo ? (
              <img
                src={dealer.logo}
                alt={dealer.name}
                width={dealer.logoWidth}
                height={dealer.logoHeight}
                className="h-auto max-h-24 w-auto max-w-full object-contain"
              />
            ) : (
              <p className="font-display text-3xl font-semibold tracking-tight text-navy">{dealer.name}</p>
            )}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{dealer.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function DealerSection({
  tone = "deep",
  intro = "A&F HVAC is a dealer for Carrier, Whirlpool, and Ducane. Those lines can be included when a property needs new heating or cooling equipment. The company also repairs and services all major brands.",
}: {
  tone?: "default" | "deep";
  intro?: string;
}) {
  return (
    <section
      className={
        tone === "deep"
          ? "scroll-mt-40 bg-navy-deep px-4 py-16 md:px-6 md:py-20"
          : "scroll-mt-40 px-4 py-16 md:px-6 md:py-20"
      }
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-cream">
          Dealer for Carrier, Whirlpool, and Ducane
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{intro}</p>
        <div className="mt-8">
          <DealerBrands />
        </div>
      </div>
    </section>
  );
}

export function Dealers() {
  return (
    <section id="dealers" className="scroll-mt-40 bg-navy-deep px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Dealer lines</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Carrier, Whirlpool, and Ducane
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A&amp;F HVAC is a dealer for Carrier, Whirlpool, and Ducane. Those lines are available for
            installation projects. Repairs and service remain available for all major brands.
          </p>
        </div>
        <div className="mt-10">
          <DealerBrands />
        </div>
      </div>
    </section>
  );
}
