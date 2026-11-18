import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta, serviceJsonLd } from "@/lib/seo";

const title = "Water Heater Installation | A&F HVAC | Walnutport, PA";
const description =
  "A&F HVAC installs water heaters from its family-owned shop in Walnutport, PA, for customers throughout Lehigh, Northampton, and Carbon counties.";

export const metadata = pageMeta(title, description, "/water-heaters");

export default function WaterHeatersPage() {
  return (
    <main id="main">
      <JsonLd data={serviceJsonLd("Water heater installation", description, "/water-heaters")} />
      <PageHeader
        eyebrow="Water heater installation"
        title="Professional Water Heater Installation"
        crumb="Water Heaters"
        path="/water-heaters"
      >
        <p>
          Hot water is part of an ordinary day, and it depends on a water heater that was installed
          correctly. A&amp;F HVAC provides professional water heater installation for customers in
          Lehigh, Northampton, and Carbon counties.
        </p>
      </PageHeader>

      <PageSection title="Why installation matters">
        <p>
          A water heater has to be set, connected, and checked before anyone should rely on it.
          Proper installation is what makes the equipment safe to leave in service and able to supply
          dependable hot water. Skipping that care is how a new unit becomes a problem instead of a
          solution.
        </p>
        <p>
          A&amp;F HVAC treats installation as its own service. The company is family-owned, has been
          in business for over 25 years, and is fully insured. The shop is at 147 East Zimmer Drive in
          Walnutport, Pennsylvania.
        </p>
      </PageSection>

      <PageSection title="Dependable hot water" tone="deep">
        <p>
          People notice a water heater when the hot water runs out or never arrives. A properly
          installed unit is what stands between a household and that interruption. The work includes
          fitting the equipment to the property and confirming it is ready to deliver hot water as
          expected.
        </p>
        <p>
          If you are ready for a water heater to be installed, call A&amp;F HVAC and describe the
          property. This page covers installation. It is the water heater service the company confirms.
        </p>
      </PageSection>

      <PageSection title="Available throughout the service area">
        <p>
          Water heater installation is available in{" "}
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
          . You can also reach the company for{" "}
          <Link href="/heating" className="text-copper hover:underline">
            heating
          </Link>
          ,{" "}
          <Link href="/air-conditioning" className="text-copper hover:underline">
            air conditioning
          </Link>
          , and{" "}
          <Link href="/refrigeration" className="text-copper hover:underline">
            refrigeration
          </Link>
          .
        </p>
      </PageSection>

      <PageCta
        title="Schedule a water heater installation"
        text="Call 610-704-4419 and ask A&F HVAC about professional water heater installation in Walnutport and the surrounding counties."
      />
    </main>
  );
}
