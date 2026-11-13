import Image from "next/image";
import { MailIcon, PhoneIcon, PinIcon, ShieldIcon } from "@/components/Icons";
import { addressLine, site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-40 bg-navy-deep px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">The company</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            About A&amp;F HVAC
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              A&amp;F HVAC is a heating and air conditioning business in Walnutport, Pennsylvania.
              The business is located at {site.street}, and customers can reach it by phone or email.
            </p>
            <p>
              Work is centered on heating and cooling for local customers. A&amp;F HVAC is fully
              insured, as stated on the company business card.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-panel px-6 py-8 shadow-2xl shadow-black/20 sm:px-8">
          <div className="border-t-4 border-copper pt-8 text-center">
            <Image
              src="/brand/af-hvac-logo.png"
              alt="A&F HVAC, Heating and Air Conditioning"
              width={2172}
              height={724}
              className="mx-auto h-auto w-full max-w-md object-contain"
            />
          </div>
          <ul className="mt-8 space-y-4 text-left text-cream">
            <li>
              <a href={site.phoneHref} className="flex items-start gap-3 rounded-xl hover:text-copper">
                <PhoneIcon className="mt-0.5 size-5 shrink-0 text-copper" />
                <span className="min-w-0">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-start gap-3 rounded-xl hover:text-copper">
                <MailIcon className="mt-0.5 size-5 shrink-0 text-copper" />
                <span className="min-w-0 break-all">{site.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-copper" />
              <span className="min-w-0">{addressLine}</span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldIcon className="mt-0.5 size-5 shrink-0 text-copper" />
              <span className="min-w-0">
                {site.insurance}
                <span className="mt-1 block text-sm text-muted">{site.license}</span>
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
