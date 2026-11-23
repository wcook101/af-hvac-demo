import Image from "next/image";
import Link from "next/link";
import { CarrierSpecsLink, InfinityBenefits } from "@/components/InfinitySystem";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta } from "@/lib/seo";
import { infinityConsultHref, siteUrl } from "@/lib/site";

const title = "Carrier Infinity® System | A&F HVAC | Walnutport, PA";
const description =
  "A&F HVAC in Walnutport can discuss the Carrier Infinity System for home heating and cooling. Request a consultation. Specifications stay on Carrier’s site.";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Carrier Infinity System",
  description,
  url: `${siteUrl}/carrier-infinity-system`,
  about: { "@id": `${siteUrl}/#business` },
};

const photos = [
  {
    src: "/images/carrier-infinity-outdoor.jpg",
    alt: "Carrier Infinity Greenspeed outdoor unit on a white background.",
    caption: "Infinity outdoor unit",
    width: 720,
    height: 540,
    frame: "bg-white",
  },
  {
    src: "/images/carrier-infinity-furnace.jpg",
    alt: "Carrier Infinity gas furnace cabinet with the Infinity badge on the upper door.",
    caption: "Infinity gas furnace",
    width: 1100,
    height: 1650,
    frame: "bg-black",
  },
  {
    src: "/images/carrier-infinity-control.jpg",
    alt: "Carrier Infinity System Control showing a 72 degree room temperature.",
    caption: "Infinity System Control",
    width: 1872,
    height: 1586,
    frame: "bg-white",
  },
] as const;

export const metadata = pageMeta(title, description, "/carrier-infinity-system");

export default function CarrierInfinityPage() {
  return (
    <main id="main">
      <JsonLd data={pageJsonLd} />
      <PageHeader
        eyebrow="Carrier heating and cooling equipment"
        title="Carrier Infinity® System"
        crumb="Infinity System"
        path="/carrier-infinity-system"
      >
        <p>
          The Carrier Infinity System is Carrier’s advanced family of connected heating and cooling
          products. A&amp;F HVAC can walk through it with you and help decide whether it fits the
          property. Model features, ratings, and warranties are published by Carrier, not restated here.
        </p>
      </PageHeader>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
            What the system is
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Infinity equipment is a range, not a single box. It includes outdoor air conditioners and
              heat pumps, indoor furnaces, and the Infinity System Control. The pieces that are installed
              together can communicate, which is how the system manages comfort in the home.
            </p>
            <p>
              Some models are single-stage. Others, including models with Greenspeed Intelligence, use
              variable-speed technology. A consultation is the time to match those choices to the house,
              the ductwork, and how the home is used. A&amp;F HVAC does not claim a separate certification
              for Infinity installations.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {photos.map((photo) => (
              <li key={photo.src} className="overflow-hidden rounded-3xl border border-white/10 bg-panel">
                <div className={`relative aspect-[4/3] ${photo.frame}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 22rem, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <p className="px-5 py-4 text-sm font-semibold text-cream">{photo.caption}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Product photographs are official Carrier Ad Kit images, shown without alteration.
          </p>
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-cream">
            What homeowners usually care about
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            These are the practical reasons people ask about an Infinity System. None of them is a
            promise that every model, or every house, will perform the same way.
          </p>
          <InfinityBenefits />
        </div>
      </section>

      <PageSection title="Heating, cooling, and heat pumps">
        <p>
          An Infinity System can be part of a{" "}
          <Link href="/heating" className="text-copper hover:underline">
            heating
          </Link>{" "}
          installation, an{" "}
          <Link href="/air-conditioning" className="text-copper hover:underline">
            air conditioning
          </Link>{" "}
          installation, or a{" "}
          <Link href="/heat-pumps" className="text-copper hover:underline">
            heat pump
          </Link>{" "}
          installation. Heat pumps both heat and cool. A furnace and air conditioner split those jobs
          between indoor and outdoor equipment. Which arrangement fits is a property-by-property
          question.
        </p>
        <p>
          A&amp;F HVAC also services all major HVAC brands. Choosing Infinity equipment for a new
          installation does not change that.
        </p>
      </PageSection>

      <PageSection title="Specifications stay with Carrier" tone="deep">
        <p>
          Efficiency ratings, sound data, warranties, and compatibility belong on Carrier’s product
          information, where they can stay current. A&amp;F HVAC does not reprint those numbers and does
          not publish prices.
        </p>
        <p>
          <CarrierSpecsLink /> covers the Infinity System in Carrier’s own words, including the current
          model lineup.
        </p>
      </PageSection>

      <section className="px-4 pb-6 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-panel px-6 py-8 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-cream">
              Talk through an Infinity System
            </h2>
            <p className="mt-2 max-w-xl leading-relaxed text-muted">
              The consultation uses the same estimate form as every other project. Choose Carrier
              Infinity System so the request is labeled clearly.
            </p>
          </div>
          <Link href={infinityConsultHref} className="btn-copper h-12 px-6">
            Request a Consultation
          </Link>
        </div>
      </section>

      <PageCta
        title="Call A&F HVAC in Walnutport"
        text="For a heating, cooling, or heat pump conversation, including Carrier Infinity equipment, call 610-704-4419."
        estimateHref={infinityConsultHref}
        estimateLabel="Request a Consultation"
      />
    </main>
  );
}
