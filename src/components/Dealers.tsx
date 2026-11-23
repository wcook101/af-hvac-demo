import Link from "next/link";
import { dealers } from "@/lib/site";

function DealerCopy() {
  return (
    <>
      A&amp;F HVAC offers heating and cooling equipment from Carrier, Whirlpool, and Ducane.{" "}
      <Link href="/side-discharge-heating-and-cooling" className="text-copper hover:underline">
        Side-discharge systems
      </Link>{" "}
      are available for installations where they are a good fit for the property. We also service all
      major HVAC brands.
    </>
  );
}

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

export function DealerSection({ tone = "default" }: { tone?: "default" | "deep" }) {
  return (
    <section
      className={
        tone === "deep"
          ? "scroll-mt-40 bg-navy-deep px-4 py-12 md:px-6 md:py-16"
          : "scroll-mt-40 px-4 py-12 md:px-6 md:py-16"
      }
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Dealer for Carrier, Whirlpool &amp; Ducane
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          <DealerCopy />
        </p>
        <div className="mt-8">
          <DealerBrands />
        </div>
      </div>
    </section>
  );
}

export function Dealers() {
  return (
    <section id="dealers" className="scroll-mt-40 border-b border-white/10 bg-navy-deep px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Equipment we offer</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Dealer for Carrier, Whirlpool &amp; Ducane
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          <DealerCopy />
        </p>
        <div className="mt-8">
          <DealerBrands />
        </div>
      </div>
    </section>
  );
}
