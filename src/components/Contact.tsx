import { EstimateForm } from "@/components/EstimateForm";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { services, site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-40 bg-navy-deep px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Call or email A&amp;F HVAC at {site.street} in {site.city}, {site.region}. Heating, air
            conditioning, refrigeration, and water heater installation are available throughout
            Lehigh, Carbon, and Northampton counties.
          </p>
          <ul className="mt-6 grid gap-2 text-sm font-semibold text-cream/90 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.title} className="rounded-2xl border border-white/10 bg-panel px-4 py-3">
                {service.title}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Call</p>
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex flex-wrap items-center gap-3 font-display text-3xl font-semibold tracking-tight text-cream hover:text-copper sm:text-5xl"
            >
              <PhoneIcon className="size-8 text-copper" />
              {site.phoneDisplay}
            </a>
          </div>

          <ul className="mt-8 space-y-5">
            <li>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Email</p>
              <a
                href={site.emailHref}
                className="mt-2 inline-flex items-center gap-3 text-lg text-cream hover:text-copper"
              >
                <MailIcon className="size-5 shrink-0 text-copper" />
                {site.email}
              </a>
            </li>
            <li>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Address</p>
              <address className="mt-2 not-italic">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 text-lg leading-relaxed text-cream hover:text-copper"
                >
                  <PinIcon className="mt-1 size-5 shrink-0 text-copper" />
                  <span>
                    {site.street}
                    <span className="block">
                      {site.city}, {site.region} {site.postalCode}
                    </span>
                  </span>
                </a>
              </address>
            </li>
          </ul>
        </div>

        <EstimateForm />
      </div>
    </section>
  );
}
