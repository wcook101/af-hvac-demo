import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta, serviceJsonLd } from "@/lib/seo";

const title = "Refrigeration Repair & Service | A&F HVAC | Pennsylvania";
const description =
  "A&F HVAC provides refrigeration repairs, service, and installation throughout Lehigh, Northampton, and Carbon counties, Pennsylvania.";

export const metadata = pageMeta(title, description, "/refrigeration");

export default function RefrigerationPage() {
  return (
    <main id="main">
      <JsonLd data={serviceJsonLd("Refrigeration repair, service, and installation", description, "/refrigeration")} />
      <PageHeader eyebrow="A core A&F HVAC service" title="Refrigeration Repair, Service & Installation">
        <p>
          Refrigeration is not an afterthought at A&amp;F HVAC. It is one of the services the company
          provides alongside heating and air conditioning: repairs, service, and installation for all
          major brands, from a family-owned shop in Walnutport.
        </p>
      </PageHeader>

      <PageSection title="Refrigeration equipment repairs">
        <p>
          Refrigeration equipment has one job, and that job does not wait. When it no longer holds
          temperature, the contents and the people who rely on it are affected right away. A repair
          visit is how that equipment gets diagnosed and put back into working order.
        </p>
        <p>
          A&amp;F HVAC repairs refrigeration equipment throughout Lehigh, Northampton, and Carbon
          counties. The company has been family-owned for over 25 years, is fully insured, and works
          on all major brands. If the equipment is not cooling the way it should, call and describe
          what changed.
        </p>
      </PageSection>

      <PageSection title="Refrigeration service" tone="deep">
        <p>
          Service is the ongoing care that keeps refrigeration equipment dependable between failures.
          A technician can check operation, address what is wearing, and help the system keep doing
          the work it was installed to do.
        </p>
        <p>
          That attention is worth scheduling before a temperature problem becomes the reason for the
          visit. A&amp;F HVAC provides refrigeration service for customers based across the three
          counties, with the shop at 147 East Zimmer Drive in Walnutport.
        </p>
      </PageSection>

      <PageSection title="Refrigeration installation">
        <p>
          New refrigeration equipment only performs as well as the installation behind it. The
          connections, the start-up, and the checks that follow are what turn a piece of equipment
          into a system that holds temperature day after day.
        </p>
        <p>
          A&amp;F HVAC installs refrigeration equipment for all major brands. The company will talk
          through the installation you need without assuming a particular setting or a specialized
          type of equipment. Bring the details of the job, and the conversation can start from there.
        </p>
      </PageSection>

      <PageSection title="Local refrigeration across three counties" tone="deep">
        <p>
          Refrigeration service is available in{" "}
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
          . A&amp;F HVAC is based in Walnutport, so the work stays with a company that already serves
          this part of Pennsylvania.
        </p>
        <p>
          The same company also handles{" "}
          <Link href="/heating" className="text-copper hover:underline">
            heating
          </Link>
          ,{" "}
          <Link href="/air-conditioning" className="text-copper hover:underline">
            air conditioning
          </Link>
          , and{" "}
          <Link href="/water-heaters" className="text-copper hover:underline">
            water heater installation
          </Link>
          . Refrigeration stands on its own as a full service, not a line added at the bottom of a
          heating and cooling list.
        </p>
      </PageSection>

      <PageCta
        title="Call for refrigeration service"
        text="Reach A&F HVAC at 610-704-4419 for refrigeration repairs, service, or installation in Lehigh, Northampton, or Carbon County."
      />
    </main>
  );
}
