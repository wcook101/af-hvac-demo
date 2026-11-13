"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="h-1 bg-copper" aria-hidden="true" />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 md:px-6 md:py-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8">
        <a href="#top" className="min-w-0 justify-self-start rounded-md" onClick={() => setOpen(false)}>
          <Image
            src="/brand/af-hvac-logo.png"
            alt="A&F HVAC, Heating and Air Conditioning"
            width={2172}
            height={724}
            priority
            className="h-auto w-auto max-h-[4.5rem] max-w-full object-contain object-left sm:max-h-[5.5rem] lg:max-h-[6.75rem] lg:max-w-[20.25rem]"
          />
        </a>

        <nav aria-label="Primary" className="hidden min-w-0 items-center justify-end gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-cream/90 transition hover:text-copper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="btn-copper h-11 shrink-0 px-4">
            <PhoneIcon className="size-4" />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">Call Now</span>
          </a>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-4 py-3 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-2 py-3 text-lg font-semibold text-cream hover:bg-white/5 hover:text-copper"
                  onClick={() => {
                    window.setTimeout(() => setOpen(false), 0);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
