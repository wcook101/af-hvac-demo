import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta, serviceJsonLd } from "@/lib/seo";

const title = "Heating Repair & Installation | A&F HVAC | Walnutport, PA";
const description =
  "A&F HVAC provides heating repairs, maintenance, service, and installation for all major brands throughout Lehigh, Northampton, and Carbon counties, PA.";

export const metadata = pageMeta(title, description, "/heating");

export default function HeatingPage() {
  return (
    <main id="main">
      <JsonLd data={serviceJsonLd("Heating repair, service, and installation", description, "/heating")} />
      <PageHeader eyebrow="Heating in Walnutport, Pennsylvania" title="Heating Repair, Service & Installation">
        <p>
          Reliable heating equipment is what keeps a building comfortable when the weather turns cold.
          A&amp;F HVAC is a family-owned company in Walnutport with more than 25 years in business, and
          heating repairs, service, maintenance, and installation are a central part of that work.
        </p>
      </PageHeader>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
              Heating system repairs
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                When a heating system stops producing steady warmth, the rest of the building feels it
                quickly. A repair visit is about finding the cause, correcting it, and returning the
                equipment to dependable operation. Professional service matters because heating equipment
                is interconnected: a small fault can affect comfort, runtime, and how hard the system has
                to work.
              </p>
              <p>
                A&amp;F HVAC repairs heating systems for customers throughout Lehigh, Northampton, and
                Carbon counties. The goal is straightforward: restore performance and leave the equipment
                operating the way it should.
              </p>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/service-heating.jpg"
              alt="Technician working on indoor heating equipment and piping."
              fill
              sizes="(min-width: 1024px) 20rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <PageSection title="Heating service and maintenance" tone="deep">
        <p>
          A heating system that runs every day through the cold season benefits from attention before
          a breakdown becomes the reason for the call. Service and maintenance give a technician time
          to check operation, address wear, and help the equipment keep its performance.
        </p>
        <p>
          That work protects comfort. A system that is maintained is better prepared for long runtimes,
          and small issues are easier to correct while the equipment is still heating the building.
          A&amp;F HVAC provides that service for all major brands.
        </p>
      </PageSection>

      <PageSection title="Heating system installation">
        <p>
          There comes a point when repairs are no longer the useful path and the building needs a new
          heating system. Installation is more than setting equipment in place. The system has to be
          connected, started, and checked so it can deliver the comfort it was selected to provide.
        </p>
        <p>
          A&amp;F HVAC installs heating equipment for properties across the three-county area. The
          company works with all major brands and is fully insured. If you are comparing a repair with
          a replacement, call and describe what the system is doing.
        </p>
      </PageSection>

      <PageSection title="All major brands, close to home" tone="deep">
        <p>
          Brand names change from one property to the next. A&amp;F HVAC provides heating repairs,
          service, maintenance, and installation for all major brands, from its shop at 147 East Zimmer
          Drive in Walnutport. The same crew serves{" "}
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
          .
        </p>
        <p>
          Heating is one part of the company&apos;s work, alongside{" "}
          <Link href="/air-conditioning" className="text-copper hover:underline">
            air conditioning
          </Link>
          ,{" "}
          <Link href="/refrigeration" className="text-copper hover:underline">
            refrigeration
          </Link>
          , and{" "}
          <Link href="/water-heaters" className="text-copper hover:underline">
            water heater installation
          </Link>
          .
        </p>
      </PageSection>

      <PageCta
        title="Talk with A&F HVAC about heating"
        text="Call 610-704-4419 to discuss a heating repair, a maintenance visit, or an installation in Lehigh, Northampton, or Carbon County."
      />
    </main>
  );
}
