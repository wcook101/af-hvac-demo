import Link from "next/link";
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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Walnutport, Pennsylvania</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            Contact A&amp;F HVAC
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Call, email, or use the estimate form. The form stays in your browser and does not send a
            message. For a direct answer, the phone is the surest way to reach the company.
          </p>
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
              <p className="mt-5">
                <a href={site.emailHref} className="inline-flex items-center gap-3 text-lg text-cream hover:text-copper">
                  <MailIcon className="size-5 text-copper" />
                  {site.email}
                </a>
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-copper">
                {site.insurance}
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
