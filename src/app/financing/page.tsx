import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { PageSection } from "@/components/PageSection";
import { pageMeta } from "@/lib/seo";
import { site, siteUrl } from "@/lib/site";

const title = "HVAC Financing | A&F HVAC | Walnutport, PA";
const description =
  "Financing is available for qualifying major HVAC installation projects with A&F HVAC in Walnutport, PA. Request an estimate to ask about your project.";

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "HVAC financing for qualifying installations",
  description,
  url: `${siteUrl}/financing`,
  about: { "@id": `${siteUrl}/#business` },
};

export const metadata = pageMeta(title, description, "/financing");

export default function FinancingPage() {
  return (
    <main id="main">
      <JsonLd data={pageJsonLd} />
      <PageHeader
        eyebrow="Qualifying installation projects"
        title="Financing for Major HVAC Installations"
        crumb="Financing"
        path="/financing"
      >
        <p>
          Financing is available for qualifying major HVAC installation projects. A&amp;F HVAC can
          discuss it when you request an estimate. Approval is not guaranteed, and this page does not
          list lenders, rates, or payment terms.
        </p>
      </PageHeader>

      <PageSection title="What financing covers">
        <p>
          Financing is for major installation work, not a published offer on every repair or service
          call. A conversation usually starts with a new heating or cooling installation, including{" "}
          <Link href="/heating" className="text-copper hover:underline">
            heating systems
          </Link>
          ,{" "}
          <Link href="/air-conditioning" className="text-copper hover:underline">
            air conditioning
          </Link>
          ,{" "}
          <Link href="/ductless-mini-splits" className="text-copper hover:underline">
            ductless mini-split systems
          </Link>
          , and{" "}
          <Link href="/side-discharge-heating-and-cooling" className="text-copper hover:underline">
            side-discharge heating and cooling systems
          </Link>
          .
        </p>
        <p>
          A project has to qualify. The equipment, the scope of the installation, and the customer’s
          qualification all matter. A&amp;F HVAC does not promise that financing will be available for
          every job.
        </p>
      </PageSection>

      <PageSection title="What this page does not promise" tone="deep">
        <p>
          Rates, payment length, down payments, and lender names are not listed here because they are
          not fixed offers A&amp;F HVAC publishes on the website. They depend on the project and on
          qualification. Nothing on this page is an application, a preapproval, or a guarantee of
          credit.
        </p>
        <p>
          If financing is available for a particular installation, the terms that apply to that project
          can be explained as part of the estimate. Until then, the useful step is to describe the job
          and say that you want to ask about financing.
        </p>
      </PageSection>

      <PageSection title="How to ask about financing">
        <p>
          Use the estimate form and include the installation you are considering. In the message, note
          that you want to discuss financing. You can also call {site.phoneDisplay} and ask the same
          question. A useful request names the town or county, the kind of system, and whether the
          project is a replacement or new equipment.
        </p>
        <p>
          A&amp;F HVAC is a family-owned company at 147 East Zimmer Drive in Walnutport, serving Lehigh,
          Northampton, and Carbon counties. The company is a dealer for Carrier, Whirlpool, and Ducane,
          and it also services all major brands.
        </p>
        <p>
          <Link href="/contact#estimate" className="font-semibold text-copper hover:underline">
            Request an estimate
          </Link>{" "}
          or read more about the company on the{" "}
          <Link href="/about" className="text-copper hover:underline">
            about page
          </Link>
          .
        </p>
      </PageSection>

      <PageCta
        title="Ask about financing with your estimate"
        text="Tell A&F HVAC about the installation and that you want to discuss financing. Approval is not guaranteed."
        estimateHref="/contact#estimate"
      />
    </main>
  );
}
