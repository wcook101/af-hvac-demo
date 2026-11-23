import Image from "next/image";
import Link from "next/link";
import { DealerSection } from "@/components/Dealers";
import { MailIcon, PhoneIcon, PinIcon, ShieldIcon } from "@/components/Icons";
import { PageCta } from "@/components/PageCta";
import { PageHeader } from "@/components/PageHeader";
import { addressLine, services, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const description =
  "A&F HVAC is a family-owned dealer for Carrier, Whirlpool, and Ducane in Walnutport, PA, offering heating, air conditioning, refrigeration, and water heater installation for more than 25 years.";

export const metadata = pageMeta(
  "About A&F HVAC | Family-Owned HVAC in Walnutport, PA",
  description,
  "/about",
);

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Walnutport, Pennsylvania"
        title="Family-Owned HVAC Service for Over 25 Years"
        crumb="About"
        path="/about"
      >
        <p>
          A&amp;F HVAC is an established family-owned business at {site.street} in Walnutport. For more
          than 25 years, local customers have been able to call one company for heating, air
          conditioning, and refrigeration.
        </p>
      </PageHeader>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
              A local company with deep roots
            </h2>
            <p>
              Family ownership is the character of the business. The people who answer the phone are
              part of a company that has stayed in Walnutport and kept its work close to home. That
              longevity is practical: customers know where the company is, and the company knows the
              counties it serves.
            </p>
            <p>
              A&amp;F HVAC is fully insured. The work covers repairs, service, and installation for all
              major brands, including heating maintenance and air conditioning maintenance, refrigeration
              service, and water heater installation.
            </p>
            <h2 className="pt-6 font-display text-3xl font-semibold tracking-tight text-cream">
              Heating, cooling, and refrigeration
            </h2>
            <p>
              The company&apos;s days are built around comfort equipment and refrigeration equipment.
              Heating and air conditioning cover repairs, service, maintenance, and installation.
              Refrigeration covers repairs, service, and installation. Water heater installation is
              available when a property needs a water heater put in.
            </p>
            <p>
              Those services are offered throughout Lehigh, Northampton, and Carbon counties, including
              ductless mini-split and side-discharge installations. The details live on the{" "}
              <Link href="/service-area" className="text-copper hover:underline">
                service area
              </Link>{" "}
              page, and each service has its own page if you want to read further before you call.{" "}
              <Link href="/financing" className="text-copper hover:underline">
                Financing
              </Link>{" "}
              is available for qualifying major HVAC installation projects.
            </p>
            <ul className="grid gap-3 pt-2 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="block rounded-2xl border border-white/10 bg-panel px-4 py-3 font-semibold text-cream hover:border-copper/40 hover:text-copper"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-panel px-6 py-8 shadow-2xl shadow-black/20 sm:px-8">
            <div className="border-t-4 border-copper pt-8 text-center">
              <Image
                src="/brand/af-hvac-logo.png"
                alt="A&F HVAC fox logo"
                width={1125}
                height={375}
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="mx-auto h-auto w-full max-w-md object-contain"
              />
            </div>
            <ul className="mt-8 space-y-4 text-left text-cream">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-3 hover:text-copper">
                  <PhoneIcon className="mt-0.5 size-5 shrink-0 text-copper" />
                  <span>{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-start gap-3 hover:text-copper">
                  <MailIcon className="mt-0.5 size-5 shrink-0 text-copper" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 size-5 shrink-0 text-copper" />
                <span>{addressLine}</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldIcon className="mt-0.5 size-5 shrink-0 text-copper" />
                <span>
                  {site.insurance}
                  <span className="mt-1 block text-sm text-muted">{site.license}</span>
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <DealerSection intro="A&F HVAC is a dealer for Carrier, Whirlpool, and Ducane, in that order. This is not an exclusive arrangement or a special certification. The company also repairs and services all major brands." />

      <PageCta
        title="Call the Walnutport shop"
        text="A&F HVAC is family-owned, fully insured, and ready to talk about heating, air conditioning, refrigeration, or water heater installation."
      />
    </main>
  );
}
