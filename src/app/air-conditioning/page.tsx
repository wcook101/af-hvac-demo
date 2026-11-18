import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta, serviceJsonLd } from "@/lib/seo";

const title = "Air Conditioning Repair & Installation | A&F HVAC | Walnutport, PA";
const description =
  "A&F HVAC in Walnutport provides air conditioning repairs, maintenance, service, and installation throughout Lehigh, Northampton, and Carbon counties, PA.";

export const metadata = pageMeta(title, description, "/air-conditioning");

export default function AirConditioningPage() {
  return (
    <main id="main">
      <JsonLd
        data={serviceJsonLd("Air conditioning repair, service, and installation", description, "/air-conditioning")}
      />
      <PageHeader eyebrow="Cooling across eastern Pennsylvania" title="Air Conditioning Repair, Service & Installation">
        <p>
          Air conditioning earns its keep on the hottest days, when a building either stays comfortable
          or does not. A&amp;F HVAC provides AC repairs, maintenance, service, and installation for all
          major brands from Walnutport, covering Lehigh, Northampton, and Carbon counties.
        </p>
      </PageHeader>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
              Air conditioning repairs
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                An air conditioner that runs without cooling, cycles constantly, or makes unusual noise
                is no longer doing its job. Repair work starts with the symptom and follows it back to
                the part of the system that failed. Putting that right restores comfort and keeps the
                equipment from struggling through the rest of the season.
              </p>
              <p>
                A&amp;F HVAC handles those repairs for homes and other properties in the three-county
                service area. The company has been family-owned for over 25 years and is fully insured.
              </p>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/service-ac.jpg"
              alt="Technician servicing a large outdoor air conditioning unit."
              fill
              sizes="(min-width: 1024px) 20rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <PageSection title="AC maintenance and service" tone="deep">
        <p>
          Cooling equipment works hardest just when you need it most. Maintenance and service are the
          visits that happen before that stretch, so the system can be checked, cleaned up where
          needed, and confirmed to be performing.
        </p>
        <p>
          Professional attention helps the equipment hold its cooling performance instead of fading
          through a season of long runtimes. A&amp;F HVAC provides that service for all major air
          conditioning brands.
        </p>
      </PageSection>

      <PageSection title="Air conditioning installation">
        <p>
          Installation is the right conversation when the current system can no longer keep the
          building comfortable, or when a property needs cooling equipment for the first time. A
          careful installation is what lets a new system deliver the performance it was chosen for,
          from the first start-up onward.
        </p>
        <p>
          From 147 East Zimmer Drive in Walnutport, A&amp;F HVAC installs air conditioning equipment
          throughout{" "}
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
          . Call with the age of the system and what it is doing, and the company can talk through
          repair or installation.
        </p>
      </PageSection>

      <PageSection title="Cooling, alongside the rest of the work" tone="deep">
        <p>
          Air conditioning sits with the company&apos;s other services:{" "}
          <Link href="/heating" className="text-copper hover:underline">
            heating
          </Link>
          ,{" "}
          <Link href="/refrigeration" className="text-copper hover:underline">
            refrigeration
          </Link>
          , and{" "}
          <Link href="/water-heaters" className="text-copper hover:underline">
            water heater installation
          </Link>
          . Each is handled as its own job, by a local company that works on all major brands.
        </p>
      </PageSection>

      <PageCta
        title="Call about air conditioning"
        text="A&F HVAC is ready to talk through an AC repair, a maintenance visit, or an installation. The number is 610-704-4419."
      />
    </main>
  );
}
