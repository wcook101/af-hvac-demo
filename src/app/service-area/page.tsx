import Link from "next/link";
import { PinIcon } from "@/components/Icons";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const description =
  "A&F HVAC serves Lehigh, Northampton, and Carbon counties from Walnutport, PA, with heating, air conditioning, refrigeration, and water heater installation.";

export const metadata = pageMeta(
  "HVAC Service Areas | Lehigh, Northampton & Carbon Counties",
  description,
  "/service-area",
);

export default function ServiceAreaPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Based in Walnutport, Pennsylvania"
        title="HVAC Service in Lehigh, Northampton, and Carbon Counties"
        crumb="Service Area"
        path="/service-area"
      >
        <p>
          A&amp;F HVAC is based at {site.street} in Walnutport and serves three Pennsylvania counties.
          Heating, air conditioning, refrigeration, and water heater installation are available in each
          one. The company is family-owned, fully insured, and has been in business for over 25 years.
        </p>
      </PageHeader>

      <section id="lehigh-county" className="scroll-mt-40 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-2xl bg-copper/15 text-copper">
              <PinIcon className="size-6" />
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">Lehigh County, PA</h2>
          </div>
          <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Lehigh County is part of the regular service area for A&amp;F HVAC. Homeowners and other
              customers here can call for heating repairs, heating service and maintenance, and heating
              installation, as well as the same scope of work on air conditioning: repairs, maintenance,
              service, and installation.
            </p>
            <p>
              Refrigeration is available in the county too, covering repairs, service, and installation
              for all major brands. When a property needs a water heater put in, that installation is
              part of the work A&amp;F HVAC will schedule. The company comes from Walnutport, just
              outside the busier parts of the valley, and treats Lehigh County as home territory.
            </p>
          </div>
        </div>
      </section>

      <section id="northampton-county" className="scroll-mt-40 bg-navy-deep px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-2xl bg-copper/15 text-copper">
              <PinIcon className="size-6" />
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
              Northampton County, PA
            </h2>
          </div>
          <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Northampton County neighbors the company&apos;s Walnutport base, and A&amp;F HVAC serves
              it with the full set of confirmed services. That includes heating and air conditioning
              repairs, ongoing service and maintenance, and installation when equipment needs to be
              replaced or added.
            </p>
            <p>
              Customers in the county can also schedule refrigeration repairs, refrigeration service, and
              refrigeration installation. Water heater installation is available for properties that need
              a water heater set and connected. All major brands are part of the heating, cooling, and
              refrigeration work. Call {site.phoneDisplay} and say where in Northampton County the
              property sits.
            </p>
          </div>
        </div>
      </section>

      <section id="carbon-county" className="scroll-mt-40 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-2xl bg-copper/15 text-copper">
              <PinIcon className="size-6" />
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">Carbon County, PA</h2>
          </div>
          <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Carbon County rounds out the service area. A&amp;F HVAC is available here for heating
              system repairs, service, maintenance, and installation, and for air conditioning work of
              the same kind. The company&apos;s Walnutport location sits within reach of the county, so
              Carbon County customers are calling a nearby shop rather than a distant one.
            </p>
            <p>
              Refrigeration repairs, service, and installation are offered in Carbon County as well, on
              all major brands. Professional water heater installation is available when that is the job.
              Whatever the county, the place to start is a phone call to a family-owned company that has
              been doing this work for over 25 years.
            </p>
            <p>
              Read more about{" "}
              <Link href="/heating" className="text-copper hover:underline">
                heating
              </Link>
              ,{" "}
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
              , or go straight to the{" "}
              <Link href="/contact" className="text-copper hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <PageCta
        title="Serving three counties from Walnutport"
        text="Call A&F HVAC at 610-704-4419 for heating, air conditioning, refrigeration, or water heater installation in Lehigh, Northampton, or Carbon County."
      />
    </main>
  );
}
