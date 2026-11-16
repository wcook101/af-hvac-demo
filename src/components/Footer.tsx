import Image from "next/image";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#141228]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <a href="#top" className="inline-block max-w-full">
            <Image
              src="/brand/af-hvac-logo.png"
              alt="A&F HVAC, Heating and Air Conditioning"
              width={2172}
              height={724}
              className="h-auto w-full max-w-[17rem] object-contain"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Family-owned heating, air conditioning, and refrigeration in Walnutport, Pennsylvania.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted hover:text-copper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cream">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={site.phoneHref} className="hover:text-copper">
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
                <span className="block">
                  {site.city}, {site.region} {site.postalCode}
                </span>
              </a>
            </li>
            <li>
              {site.license}
              <span className="block">{site.insurance}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 A&amp;F HVAC. All rights reserved.</p>
          <p>Equipment photographs are stock images used for this demo.</p>
        </div>
      </div>
    </footer>
  );
}
