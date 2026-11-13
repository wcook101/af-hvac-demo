import { ComfortIcon, PhoneIcon, PinIcon, ShieldIcon } from "@/components/Icons";
import { reasons } from "@/lib/site";

const icons = {
  pin: PinIcon,
  comfort: ComfortIcon,
  shield: ShieldIcon,
  phone: PhoneIcon,
} as const;

export function WhyChoose() {
  return (
    <section id="why" className="scroll-mt-28 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
            A local heating and cooling company
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Why Choose A&amp;F HVAC
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A Walnutport company for heating and cooling, with a direct phone number and insured
            status stated on the business card.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = icons[reason.icon];
            return (
              <li key={reason.title} className="rounded-3xl border border-white/10 bg-panel p-6 md:p-8">
                <span className="grid size-12 place-items-center rounded-2xl bg-copper/15 text-copper">
                  <Icon />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-cream">
                  {reason.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{reason.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
