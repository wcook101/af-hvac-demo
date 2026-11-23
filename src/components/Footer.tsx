import Image from "next/image";
import Link from "next/link";
import { pageLinks, serviceAreas, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#141228]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <Link href="/" className="inline-block max-w-full">
            <Image
              src="/brand/af-hvac-logo.png"
              alt="A&F HVAC, Heating and Air Conditioning"
              width={1125}
              height={375}
              sizes="272px"
              className="h-auto w-full max-w-[17rem] object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Family-owned heating, air conditioning, and refrigeration in Walnutport, Pennsylvania.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={site.phoneHref} className="font-semibold text-cream hover:text-copper">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="break-all hover:text-copper">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-copper">
                {site.street}
                <span className="block">{site.locality}</span>
              </a>
            </li>
            <li>
              {site.insurance}
              <span className="block">{site.license}</span>
            </li>
          </ul>
        </div>

        <nav aria-label="Services">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="text-sm text-muted hover:text-copper">
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service counties">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">Service Area</p>
          <ul className="mt-4 space-y-2">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/service-area#${area.slug}`} className="text-sm text-muted hover:text-copper">
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">Explore</p>
          <ul className="mt-4 space-y-2">
            {pageLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-copper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 A&amp;F HVAC. All rights reserved.</p>
          <p>Carrier product photos are from the Carrier Ad Kit. The Whirlpool lineup is an approved equipment photo. Other equipment photographs are stock images.</p>
          <Link href="/email" className="hover:text-copper">
            Employee Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
