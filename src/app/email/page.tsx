import { EmployeeEmailCards } from "@/components/EmployeeEmailCards";
import { pageMeta } from "@/lib/seo";

const description =
  "A&F HVAC employees can choose a company mailbox and open the SiteGround webmail login.";

export const metadata = {
  ...pageMeta("A&F HVAC — Employee Email", description, "/email"),
  robots: { index: false, follow: false },
};

export default function EmployeeEmailPage() {
  return (
    <main id="main">
      <header className="border-b border-white/10 bg-navy-deep px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Employees</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            A&amp;F HVAC — Employee Email
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Select your email account to access your company mailbox.
          </p>
        </div>
      </header>
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <EmployeeEmailCards />
        </div>
      </section>
    </main>
  );
}
