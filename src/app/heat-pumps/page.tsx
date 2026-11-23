import Image from "next/image";
import Link from "next/link";
import { DealerSection } from "@/components/Dealers";
import { InfinityCallout } from "@/components/InfinitySystem";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta, serviceJsonLd } from "@/lib/seo";

const title = "Heat Pump Repair & Installation | A&F HVAC | Walnutport, PA";
const description =
  "A&F HVAC provides heat pump repairs, service, and installation in Lehigh, Northampton, and Carbon counties, including Carrier Infinity equipment when it fits.";

export const metadata = pageMeta(title, description, "/heat-pumps");

export default function HeatPumpsPage() {
  return (
    <main id="main">
      <JsonLd data={serviceJsonLd("Heat pump repair, service, and installation", description, "/heat-pumps")} />
      <PageHeader
        eyebrow="Heating and cooling from one system"
        title="Heat Pump Repair, Service & Installation"
        crumb="Heat Pumps"
        path="/heat-pumps"
      >
        <p>
          A heat pump heats a building and cools it. A&amp;F HVAC provides heat pump repairs, service,
          maintenance, and installation for all major brands from Walnutport, covering Lehigh,
          Northampton, and Carbon counties.
        </p>
      </PageHeader>

      <DealerSection />
      <InfinityCallout />

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
              Heat pump repairs
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                When a heat pump stops heating, stops cooling, or short-cycles, the building loses the
                one system that was doing both jobs. A repair visit traces the symptom, corrects the
                fault, and checks that the equipment can run in the season it is in.
              </p>
              <p>
                A&amp;F HVAC handles those repairs across the three-county area. The company has been
                family-owned for more than 25 years and is fully insured.
              </p>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10 bg-white">
            <Image
              src="/images/carrier-infinity-outdoor.jpg"
              alt="Carrier Infinity Greenspeed outdoor unit on a white background."
              fill
              sizes="(min-width: 1024px) 20rem, 100vw"
              className="object-contain p-4"
            />
          </div>
        </div>
      </section>

      <PageSection title="Heat pump service and maintenance" tone="deep">
        <p>
          A heat pump works in winter and in summer, so it spends more of the year running than
          equipment that sits idle for a season. Service and maintenance are the visits that check
          operation before a busy stretch, rather than waiting for a breakdown.
        </p>
        <p>
          A&amp;F HVAC provides that service for all major heat pump brands. The{" "}
          <Link href="/carrier-infinity-system" className="text-copper hover:underline">
            Carrier Infinity System
          </Link>{" "}
          includes heat pump models. Whether an Infinity heat pump is the right equipment is a separate
          question from routine service on the system already in the home.
        </p>
      </PageSection>

      <PageSection title="Heat pump installation">
        <p>
          Installation comes up when the current equipment can no longer keep the property comfortable,
          or when a home is ready for a system that both heats and cools. The outdoor unit, the indoor
          equipment, and the controls have to be selected and started as one system.
        </p>
        <p>
          Carrier’s Infinity line is one option A&amp;F HVAC can discuss. It is not the only brand the
          company installs. Specifications for Infinity models stay on{" "}
          <Link href="/carrier-infinity-system" className="text-copper hover:underline">
            the Infinity System page
          </Link>
          , with Carrier’s own product page linked from there. This website does not publish efficiency
          ratings or claim a special heat pump certification.
        </p>
      </PageSection>

      <PageSection title="Alongside heating and air conditioning" tone="deep">
        <p>
          Heat pumps sit with the rest of the company’s comfort work:{" "}
          <Link href="/heating" className="text-copper hover:underline">
            heating
          </Link>
          ,{" "}
          <Link href="/air-conditioning" className="text-copper hover:underline">
            air conditioning
          </Link>
          ,{" "}
          <Link href="/ductless-mini-splits" className="text-copper hover:underline">
            ductless mini-splits
          </Link>
          , and{" "}
          <Link href="/side-discharge-heating-and-cooling" className="text-copper hover:underline">
            side-discharge heating and cooling
          </Link>
          . Service covers{" "}
          <Link href="/service-area" className="text-copper hover:underline">
            Lehigh, Northampton, and Carbon counties
          </Link>
          .{" "}
          <Link href="/financing" className="text-copper hover:underline">
            Financing
          </Link>{" "}
          may be available for qualifying major installation projects.
        </p>
      </PageSection>

      <PageCta
        title="Talk with A&F HVAC about a heat pump"
        text="Call 610-704-4419 to discuss a heat pump repair, a maintenance visit, or an installation."
        estimateHref="/contact#estimate"
      />
    </main>
  );
}
