import Image from "next/image";
import Link from "next/link";
import { DealerSection } from "@/components/Dealers";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta, serviceJsonLd } from "@/lib/seo";

const title = "Ductless Mini-Split Installation | A&F HVAC | Walnutport, PA";
const description =
  "A&F HVAC installs ductless mini-split heating and cooling systems in Walnutport and throughout Lehigh, Northampton, and Carbon counties, PA.";

export const metadata = pageMeta(title, description, "/ductless-mini-splits");

export default function DuctlessMiniSplitsPage() {
  return (
    <main id="main">
      <JsonLd data={serviceJsonLd("Ductless mini-split installation", description, "/ductless-mini-splits")} />
      <PageHeader
        eyebrow="Ductless heating and cooling"
        title="Ductless Mini-Split Installation"
        crumb="Ductless Mini-Splits"
        path="/ductless-mini-splits"
      >
        <p>
          A ductless mini-split heats or cools a room with an indoor unit and a compact outdoor unit,
          without running traditional ductwork to that space. A&amp;F HVAC installs these systems for
          customers in Lehigh, Northampton, and Carbon counties.
        </p>
      </PageHeader>

      <DealerSection />

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
              What a mini-split is for
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                The indoor unit mounts in the room it serves, most often high on a wall, and connects to
                an outdoor unit by refrigerant lines. That layout is useful when a space has no ducts,
                when extending ductwork would be impractical, or when one room needs its own control.
              </p>
              <p>
                Additions, converted attics and garages, enclosed porches, and older houses are common
                reasons to look at a ductless system. Some properties use a single indoor unit. Others
                use more than one indoor unit so separate rooms can be set independently. The right
                arrangement depends on the building, not on a one-size layout.
              </p>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/service-mini-split.jpg"
              alt="Wall-mounted ductless mini-split indoor unit near a ceiling."
              fill
              sizes="(min-width: 1024px) 20rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <PageSection title="Practical benefits" tone="deep">
        <p>
          The main practical difference is the absence of ductwork for the rooms the indoor units
          serve. Comfort can be aimed at the spaces people actually use, and each indoor unit can have
          its own setting when the system is installed that way.
        </p>
        <p>
          Equipment can be selected for cooling, heating, or both. A&amp;F HVAC matches the system to
          the project during the estimate. This page does not assign efficiency numbers, noise levels,
          or coverage claims to a particular model. Those details belong to the equipment chosen for
          the property.
        </p>
      </PageSection>

      <PageSection title="Installation, not a catalog promise">
        <p>
          Installation includes placing the indoor unit, setting the outdoor unit, running the line set,
          and checking operation before the system is left in service. A careful installation is what
          lets the equipment do the job it was selected for.
        </p>
        <p>
          A&amp;F HVAC is a dealer for Carrier, Whirlpool, and Ducane, and it also works with the
          equipment a project requires. If you are comparing a ductless system with a conventional{" "}
          <Link href="/heating" className="text-copper hover:underline">
            heating
          </Link>{" "}
          or{" "}
          <Link href="/air-conditioning" className="text-copper hover:underline">
            air conditioning
          </Link>{" "}
          installation, or with a{" "}
          <Link href="/side-discharge-heating-and-cooling" className="text-copper hover:underline">
            side-discharge system
          </Link>
          , describe the space when you request an estimate.{" "}
          <Link href="/financing" className="text-copper hover:underline">
            Financing
          </Link>{" "}
          may be available for qualifying major installation projects.
        </p>
      </PageSection>

      <PageSection title="Available across the three-county area">
        <p>
          Ductless installation is available from the Walnutport shop throughout{" "}
          <Link href="/service-area#lehigh-county" className="text-copper hover:underline">
            Lehigh County
          </Link>
          ,{" "}
          <Link href="/service-area#northampton-county" className="text-copper hover:underline">
            Northampton County
          </Link>
          , and{" "}
          <Link href="/service-area#carbon-county" className="text-copper hover:underline">
            Carbon County
          </Link>
          . Tell A&amp;F HVAC which rooms need comfort and whether the building already has ducts
          somewhere else.
        </p>
      </PageSection>

      <PageCta
        title="Request a mini-split estimate"
        text="Describe the rooms, the town, and whether you need heating, cooling, or both. A&F HVAC will follow up from Walnutport."
        estimateHref="/contact#estimate"
      />
    </main>
  );
}
