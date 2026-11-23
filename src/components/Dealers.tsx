import { dealers } from "@/lib/site";

export function DealerBrands() {
  return (
    <ol className="grid gap-4 sm:grid-cols-3">
      {dealers.map((dealer, index) => (
        <li
          key={dealer.name}
          className="rounded-3xl border border-white/10 bg-panel px-6 py-8 text-center shadow-xl shadow-black/10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream">{dealer.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{dealer.text}</p>
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
