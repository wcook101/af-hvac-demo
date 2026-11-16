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
  const [selected, setSelected] = useState<string | null>(null);

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
        {accounts.map((account) => {
          const isSelected = selected === account.email;
          return (
            <li key={account.email}>
              <article
                className={`flex h-full flex-col rounded-3xl border bg-panel p-6 sm:p-7 ${
                  isSelected ? "border-copper" : "border-white/10"
                }`}
              >
                <h2 className="font-display text-2xl font-semibold text-cream">{account.name}</h2>
                <p className="mt-2 break-all text-base text-muted">{account.email}</p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={webmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-copper min-h-11 px-5 py-3 text-sm"
                    onClick={() => setSelected(account.email)}
                  >
                    Open Webmail
                  </a>
                  <button
                    type="button"
                    className="btn-ghost min-h-11 px-5 py-3 text-sm"
                    onClick={() => copyEmail(account.email)}
                  >
                    {copied === account.email ? "Email Address Copied" : "Copy Email Address"}
                  </button>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">
        SiteGround asks for the mailbox address on its own login page. This site never asks for or
        stores your password. If another mailbox opens automatically, log out of that account before
        signing in with the address you selected.
      </p>
    </div>
  );
}
