"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { pageLinks, services, site } from "@/lib/site";

const mobileLinks = [
  { href: "/", label: "Home" },
  ...services.map((service) => ({ href: service.href, label: service.navLabel })),
  ...pageLinks.filter((item) => item.href !== "/"),
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const serviceActive = services.some((service) => service.href === pathname);

  function returnHome(event: MouseEvent<HTMLAnchorElement>) {
    setOpen(false);
    if (window.location.pathname !== "/") return;

    event.preventDefault();
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, servicesOpen]);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="h-1 bg-copper" aria-hidden="true" />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2.5 sm:px-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4 lg:px-6 lg:py-3">
        <Link
          href="/"
          aria-label="A&F HVAC — Back to Home"
          className="min-w-0 cursor-pointer justify-self-start rounded-md"
          onClick={returnHome}
        >
          <Image
            src="/brand/af-hvac-logo.png"
            alt="A&F HVAC, Heating and Air Conditioning"
            width={2172}
            height={724}
            priority
            className="h-auto w-auto max-h-none max-w-full object-contain object-left min-[400px]:max-w-[260px] lg:max-h-[125px] lg:max-w-[375px]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden min-w-0 items-center justify-end gap-4 lg:flex xl:gap-6">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`text-sm font-semibold tracking-wide transition hover:text-copper ${pathname === "/" ? "text-copper" : "text-cream/90"}`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
            }}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 text-sm font-semibold tracking-wide transition hover:text-copper ${serviceActive || servicesOpen ? "text-copper" : "text-cream/90"}`}
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <ChevronIcon className={`size-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen ? (
              <ul
                id="services-menu"
                className="absolute left-0 top-full z-20 mt-3 w-56 rounded-2xl border border-white/10 bg-navy-deep p-2 shadow-2xl shadow-black/30"
              >
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      aria-current={pathname === service.href ? "page" : undefined}
                      className={`block rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5 hover:text-copper ${pathname === service.href ? "text-copper" : "text-cream"}`}
                    >
                      {service.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {pageLinks
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`text-sm font-semibold tracking-wide transition hover:text-copper ${pathname === item.href ? "text-copper" : "text-cream/90"}`}
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="btn-copper h-11 shrink-0 px-3 sm:px-4">
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
            {mobileLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`block rounded-xl px-2 py-3 text-lg font-semibold hover:bg-white/5 hover:text-copper ${pathname === item.href ? "text-copper" : "text-cream"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
