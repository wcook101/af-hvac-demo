import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EstimateForm } from "@/components/EstimateForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { serviceAreas, services, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const description =
  "Contact A&F HVAC at 147 East Zimmer Drive in Walnutport, Pennsylvania, or call 610-704-4419. Serving Lehigh, Northampton, and Carbon counties.";

export const metadata = pageMeta("Contact A&F HVAC | Walnutport, PA", description, "/contact");

export default function ContactPage() {
  return (
    <main id="main">
      <header className="border-b border-white/10 bg-navy-deep px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs path="/contact" current="Contact" />
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Walnutport, Pennsylvania</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            Contact A&amp;F HVAC
          </h1>
          <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Call, email, or send an estimate request. A&amp;F HVAC is a family-owned company at{" "}
              {site.street} in {site.locality}, with more than 25 years in business.
            </p>
            <p>
              Heating, air conditioning, heat pumps, and refrigeration include repairs, service, and
              installation for all major brands, including ductless mini-split and side-discharge systems.
              A&amp;F HVAC can also discuss the{" "}
              <Link href="/carrier-infinity-system" className="text-copper hover:underline">
                Carrier Infinity System
              </Link>
              . Water heater work is installation. Service is available in Lehigh, Northampton, and Carbon
              counties.{" "}
              <Link href="/financing" className="text-copper hover:underline">
                Financing
              </Link>{" "}
              is available for qualifying major HVAC installation projects. Ask about it in the estimate
              form.
            </p>
          </div>
        </div>
      </header>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">
              Phone, email, and address
            </h2>
            <div className="mt-6 rounded-3xl border border-white/10 bg-panel p-6 sm:p-8">
              <p className="font-display text-2xl font-semibold text-cream">{site.name}</p>
              <address className="mt-4 not-italic text-lg leading-relaxed text-cream">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 hover:text-copper"
                >
                  <PinIcon className="mt-1 size-5 shrink-0 text-copper" />
                  <span>
                    {site.street}
                    <span className="block">{site.locality}</span>
                  </span>
                </a>
              </address>
              <p className="mt-5">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 font-display text-3xl font-semibold text-cream hover:text-copper"
                >
                  <PhoneIcon className="size-7 text-copper" />
                  {site.phoneDisplay}
                </a>
              </p>
              <ul className="mt-5 space-y-5">
                <li>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    Service &amp; General Inquiries
                  </p>
                  <a
                    href={site.emailHref}
                    className="mt-2 inline-flex items-center gap-3 break-all text-lg text-cream hover:text-copper"
                  >
                    <MailIcon className="size-5 shrink-0 text-copper" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    Owner — {site.ownerName}
                  </p>
                  <a
                    href={site.ownerEmailHref}
                    className="mt-2 inline-flex items-center gap-3 break-all text-lg text-cream hover:text-copper"
                  >
                    <MailIcon className="size-5 shrink-0 text-copper" />
                    {site.ownerEmail}
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-copper">
                {site.insurance}
              </p>
            </div>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-tight text-cream">
              How to request service
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                The direct number is {site.phoneDisplay}. The form on this page sends your name, phone
                number, email address, the service you need, and your message to {site.email}. You can
                also email that address, or write to {site.ownerName} at {site.ownerEmail}.
              </p>
              <p>
                A useful request names the service, the town or county, and what the equipment is doing
                or what needs to be installed. That is enough for A&amp;F HVAC to respond.
              </p>
            </div>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-tight text-cream">
              Three-county service area
            </h2>
            <ul className="mt-5 grid gap-3">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-area#${area.slug}`}
                    className="block rounded-2xl border border-white/10 bg-panel px-4 py-3 font-semibold text-cream hover:border-copper/40 hover:text-copper"
                  >
                    {area.name}, Pennsylvania
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl font-semibold tracking-tight text-cream">Services</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
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

          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream">Request an estimate</h2>
            <div className="mt-5">
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
