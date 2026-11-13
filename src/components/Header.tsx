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
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center gap-3 px-4 md:h-20 md:px-6">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5 rounded-md"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/fox.png"
            alt=""
            width={433}
            height={372}
            priority
            className="h-11 w-auto"
          />
          <span className="min-w-0">
            <span className="block font-display text-lg font-semibold leading-none tracking-tight text-cream md:text-xl">
              A&amp;F HVAC
            </span>
            <span className="mt-1.5 block h-0.5 w-8 bg-copper" aria-hidden="true" />
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-muted sm:block">
              Heating &amp; Air Conditioning
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-8 lg:flex">
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

        <a href={site.phoneHref} className="btn-copper ml-auto h-11 px-4 lg:ml-2">
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
