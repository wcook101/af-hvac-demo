import { ComfortIcon, PhoneIcon, PinIcon, ShieldIcon } from "@/components/Icons";
import { reasons, site } from "@/lib/site";

const icons = {
  pin: PinIcon,
  comfort: ComfortIcon,
  shield: ShieldIcon,
  phone: PhoneIcon,
} as const;

export function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-40 bg-navy px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
            A local heating and cooling company
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Why Choose A&amp;F HVAC
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-muted">
            A Walnutport company for heating and cooling, with insured service and a direct phone
            number.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {reasons.map((reason) => {
            const Icon = icons[reason.icon];
            return (
              <li
                key={reason.title}
                className="group rounded-3xl border border-white/10 bg-panel p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-copper/40 md:p-9"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-copper/15 text-copper transition duration-300 group-hover:bg-copper group-hover:text-navy-deep">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-cream">
                  {reason.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{reason.text}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-center">
          <a href={site.phoneHref} className="btn-copper h-12 px-8 text-base">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
