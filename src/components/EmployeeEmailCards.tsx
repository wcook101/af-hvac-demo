"use client";

import { useState } from "react";

const webmailUrl = "https://gvam1318.siteground.biz/webmail/mail/";

const accounts = [
  { name: "James F.", email: "jamesF@afhvacservice.com" },
  { name: "James M.", email: "jamesM@afhvacservice.com" },
  { name: "Service Department", email: "service@afhvacservice.com" },
] as const;

export function EmployeeEmailCards() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyEmail(email: string) {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      return;
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.append(field);
      field.select();
      const copiedWithFallback = document.execCommand("copy");
      field.remove();
      setCopied(copiedWithFallback ? email : null);
    }
  }

  return (
    <div>
      <ul className="grid gap-5 md:grid-cols-3">
        {accounts.map((account) => (
          <li key={account.email}>
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-panel p-6 sm:p-7">
              <h2 className="font-display text-2xl font-semibold text-cream">{account.name}</h2>
              <p className="mt-2 break-all text-base text-cream">{account.email}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                SiteGround may automatically open the mailbox that was last signed in on this
                browser. Opening webmail does not switch accounts.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  className="btn-ghost min-h-11 px-5 py-3 text-sm"
                  onClick={() => copyEmail(account.email)}
                >
                  {copied === account.email ? "Email Address Copied" : "Copy Email Address"}
                </button>
                <a
                  href={webmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-copper min-h-11 px-5 py-3 text-sm"
                >
                  Open Webmail
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <section
        id="switch-email-account"
        className="mt-8 rounded-3xl border border-copper/40 bg-navy-deep p-6 sm:p-8"
        aria-labelledby="switch-email-heading"
      >
        <h2 id="switch-email-heading" className="font-display text-2xl font-semibold text-cream">
          Switch Email Account
        </h2>
        <p className="mt-4 text-base leading-relaxed text-cream">
          Already seeing another employee&apos;s inbox? Click Logout in SiteGround Webmail, then
          sign in using your own email address and password.
        </p>
        <ol className="mt-5 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
          <li>In SiteGround Webmail, click Logout in the side menu.</li>
          <li>Copy your email address from the card above.</li>
          <li>On the SiteGround login page, paste that address and enter your password.</li>
        </ol>
      </section>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
        On a shared computer, always log out when finished. For separate employees, use individual
        browser profiles to keep mailboxes separate.
      </p>
    </div>
  );
}
