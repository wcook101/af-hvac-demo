import Image from "next/image";
import Link from "next/link";
import { carrierInfinityUrl, infinityConsultHref } from "@/lib/site";

const benefits = [
  {
    title: "Consistent comfort",
    text: "Infinity equipment is designed to keep temperatures more even and to ease hot and cold spots. How a home feels still depends on the models selected and on the building itself.",
  },
  {
    title: "Smart controls",
    text: "The Infinity System Control is a wall control that can communicate with connected indoor and outdoor equipment, so the system can be adjusted from one place.",
  },
  {
    title: "Variable-speed technology",
    text: "Applicable models, including those with Greenspeed Intelligence, can change operating speed instead of only switching fully on or fully off. That is not a feature of every Infinity model.",
  },
  {
    title: "Quiet operation",
    text: "Carrier designs the Infinity System for quiet performance. Sound ratings differ by model, and this website does not quote them.",
  },
  {
    title: "Humidity management",
    text: "Carrier says applicable Infinity equipment can help balance indoor moisture and, in hot weather, remove more moisture than a standard system. Results depend on the model and the home.",
  },
  {
    title: "Energy efficiency",
    text: "The system is built to run efficiently while the home stays comfortable. Efficiency ratings and any energy savings depend on the model and the house. Those figures are not listed here.",
  },
] as const;

export function InfinityFeature() {
  return (
    <section
      id="carrier-infinity"
      aria-labelledby="infinity-heading"
      className="scroll-mt-40 px-4 py-16 md:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-xl shadow-black/10 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-10 md:px-10 lg:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Carrier equipment</p>
          <h2
            id="infinity-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl"
          >
            Carrier Infinity® System
          </h2>
          <div className="mt-6 w-fit max-w-full rounded-2xl bg-white px-4 py-3">
            <img
              src="/brand/infinity-system-logo.jpg"
              alt="Infinity System"
              width={1200}
              height={300}
              className="h-auto w-full max-w-xs"
            />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            The Carrier Infinity System is Carrier’s advanced line of connected heating and cooling
            equipment. Homeowners look to it for steadier comfort, smart controls, and, on applicable
            models, variable-speed operation, along with quiet running, humidity management, and
            energy-efficient performance. The features on a system depend on the models chosen for that
            home.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            A&amp;F HVAC is a Carrier dealer and can talk through whether an Infinity System fits the
            property. This website does not list efficiency ratings, energy savings, prices, or
            warranties.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={infinityConsultHref} className="btn-copper h-12 px-6">
              Request a Consultation
            </Link>
            <Link href="/carrier-infinity-system" className="btn-ghost h-12 px-6">
              System Details
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            <CarrierSpecsLink />
          </p>
        </div>
        <div className="relative min-h-80 bg-white lg:min-h-full">
          <Image
            src="/images/carrier-infinity-outdoor.jpg"
            alt="Carrier Infinity Greenspeed outdoor unit on a white background."
            fill
            sizes="(min-width: 1024px) 36rem, 100vw"
            className="object-contain p-6 sm:p-10"
          />
        </div>
      </div>
    </section>
  );
}

export function InfinityCallout() {
  return (
    <section aria-label="Carrier Infinity System" className="px-4 pb-4 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-white/10 bg-panel px-6 py-8 shadow-xl shadow-black/10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Carrier equipment</p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-cream">
            Carrier Infinity® System
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            A&amp;F HVAC can discuss Carrier Infinity heating and cooling equipment, including heat pumps,
            air conditioners, and furnaces. Features vary by model.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col">
          <Link href="/carrier-infinity-system" className="btn-copper h-12 px-6">
            Infinity System Details
          </Link>
          <Link href={infinityConsultHref} className="btn-ghost h-12 px-6">
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InfinityBenefits() {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit) => (
        <li key={benefit.title} className="rounded-3xl border border-white/10 bg-panel px-5 py-6">
          <h3 className="font-display text-xl font-semibold tracking-tight text-cream">{benefit.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{benefit.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function CarrierSpecsLink({ className = "font-semibold text-copper hover:underline" }) {
  return (
    <a href={carrierInfinityUrl} target="_blank" rel="noopener noreferrer" className={className}>
      Carrier’s official Infinity System page
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
