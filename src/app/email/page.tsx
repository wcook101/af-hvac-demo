import { pageMeta } from "@/lib/seo";

const webmailLoginUrl = "https://gvam1318.siteground.biz/webmail/log-in/";

const mailboxes = [
  { name: "James F.", email: "jamesF@afhvacservice.com" },
  { name: "James M.", email: "jamesM@afhvacservice.com" },
  { name: "Service", email: "service@afhvacservice.com" },
] as const;

const description =
  "A&F HVAC employees sign in to company webmail with their own email address and password.";

export const metadata = {
  ...pageMeta("Employee Webmail Login | A&F HVAC", description, "/email"),
  robots: { index: false, follow: false },
};

export default function EmployeeEmailPage() {
  return (
    <main id="main">
      <header className="border-b border-white/10 bg-navy-deep px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Employees</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            Employee Webmail Login
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Access your A&amp;F HVAC company email using your individual email address and password.
          </p>
        </div>
      </header>

      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-cream">Company mailboxes</h2>
          <ul className="mt-5 divide-y divide-white/10 rounded-3xl border border-white/10 bg-panel">
            {mailboxes.map((mailbox) => (
              <li key={mailbox.email} className="px-6 py-5">
                <p className="font-display text-xl font-semibold text-cream">{mailbox.name}</p>
                <p className="mt-1 break-all text-base text-muted">{mailbox.email}</p>
              </li>
            ))}
          </ul>

          <a
            href={webmailLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-copper mt-8 min-h-12 px-8 py-3 text-base"
          >
            Sign In to Webmail
          </a>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            <p>
              If SiteGround Webmail is already signed in, it opens that mailbox. Clicking Sign In
              to Webmail does not switch accounts. Click Logout inside SiteGround Webmail before
              signing in to a different mailbox.
            </p>
            <p>
              Each employee has a separate mailbox. If another employee&apos;s inbox opens, click
              Logout in SiteGround Webmail, then sign in using your own email address and password.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
