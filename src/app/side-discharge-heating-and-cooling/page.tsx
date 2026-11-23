import Image from "next/image";
import Link from "next/link";
import { DealerSection } from "@/components/Dealers";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta, serviceJsonLd } from "@/lib/seo";

const title = "Side-Discharge Heating & Cooling | A&F HVAC | Walnutport, PA";
const description =
  "A&F HVAC installs side-discharge heating and cooling systems in Walnutport and throughout Lehigh, Northampton, and Carbon counties, PA.";

export const metadata = pageMeta(title, description, "/side-discharge-heating-and-cooling");

export default function SideDischargePage() {
  return (
    <main id="main">
      <JsonLd
        data={serviceJsonLd(
          "Side-discharge heating and cooling installation",
          description,
          "/side-discharge-heating-and-cooling",
        )}
      />
      <PageHeader
        eyebrow="Compact outdoor equipment"
        title="Side-Discharge Heating and Cooling"
        crumb="Side-Discharge Systems"
        path="/side-discharge-heating-and-cooling"
      >
        <p>
          A side-discharge system uses an outdoor cabinet that sends air out through the side, rather
          than straight up through the top the way many traditional condensers do. A&amp;F HVAC installs
          this equipment for heating and cooling projects in Lehigh, Northampton, and Carbon counties.
        </p>
      </PageHeader>

      <DealerSection />

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
              Why the cabinet shape matters
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                The practical difference is where the air leaves the outdoor unit and how the cabinet is
                shaped. Side discharge is often built as a lower, more compact outdoor unit. That can
                make it easier to place where a taller top-discharge condenser is a poor fit, including
                spots with limited overhead clearance.
              </p>
              <p>
                Clearance still depends on the equipment and the property. Discharged air needs an open
                path, and the unit still has to sit on a sound base with the line set and electrical
                work the installation requires. A&amp;F HVAC looks at the location before recommending
                this style of system.
              </p>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/service-side-discharge.jpg"
              alt="Compact outdoor heating and cooling unit with a side-facing fan on an exterior wall."
              fill
              sizes="(min-width: 1024px) 20rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <PageSection title="Heating and cooling projects" tone="deep">
        <p>
          Side-discharge equipment is used for heating and cooling installations. Some projects pair the
          outdoor unit with ducted indoor equipment. A ductless project, with an indoor unit mounted in
          the room, is a related but separate installation and is described on the{" "}
          <Link href="/ductless-mini-splits" className="text-copper hover:underline">
            ductless mini-split page
          </Link>
          .
        </p>
        <p>
          The system selected for a house depends on the existing ducts, the space around the outdoor
          unit, and whether the job is a replacement or new equipment. A&amp;F HVAC does not assign
          efficiency, sound, or capacity figures on this page. Those belong to the model chosen for the
          property.
        </p>
      </PageSection>

      <PageSection title="Where this option is considered">
        <p>
          Homeowners ask about side-discharge equipment when the side yard is tight, when something
          overhead limits a traditional condenser, or when a lower outdoor cabinet simply fits the
          property better. It is one installation option alongside conventional{" "}
          <Link href="/heating" className="text-copper hover:underline">
            heating
          </Link>{" "}
          and{" "}
          <Link href="/air-conditioning" className="text-copper hover:underline">
            air conditioning
          </Link>{" "}
          systems.
        </p>
        <p>
          <Link href="/financing" className="text-copper hover:underline">
            Financing
          </Link>{" "}
          may be available for qualifying major installation projects. Mention that when you request an
          estimate. Service is available in{" "}
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
      </PageSection>

      <PageCta
        title="Request a side-discharge estimate"
        text="Tell A&F HVAC about the property, the current equipment, and where an outdoor unit could sit. Call 610-704-4419 or send the estimate form."
        estimateHref="/contact#estimate"
      />
    </main>
  );
}