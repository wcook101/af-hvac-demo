"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { pageLinks, services, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const desktopServicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLLIElement>(null);
  const pinned = useRef(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const serviceActive = services.some((service) => service.href === pathname);

  function closeServices() {
    pinned.current = false;
    setServicesOpen(false);
  }

  function toggleServices() {
    const next = !(servicesOpen && pinned.current);
    pinned.current = next;
    setServicesOpen(next);
  }

  function returnHome(event: MouseEvent<HTMLAnchorElement>) {
    setOpen(false);
    closeServices();
    if (window.location.pathname !== "/") return;

    event.preventDefault();
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  useEffect(() => {
    closeServices();
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeServices();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, servicesOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
      const onPointerDown = (event: PointerEvent) => {
        const target = event.target;
        if (!(target instanceof Node)) return;
        if (desktopServicesRef.current?.contains(target)) return;
        if (mobileServicesRef.current?.contains(target)) return;
        closeServices();
      };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [servicesOpen]);

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
            ref={desktopServicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              if (!pinned.current) setServicesOpen(false);
            }}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1 text-sm font-semibold tracking-wide transition hover:text-copper ${serviceActive || servicesOpen ? "text-copper" : "text-cream/90"}`}
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={toggleServices}
            >
              Services
              <ChevronIcon className={`size-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen ? (
              <div className="absolute left-0 top-full z-20 pt-3">
                <ul
                  id="services-menu"
                  className="w-56 rounded-2xl border border-white/10 bg-navy-deep p-2 shadow-2xl shadow-black/30"
                >
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        aria-current={pathname === service.href ? "page" : undefined}
                        className={`block rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-white/5 hover:text-copper ${pathname === service.href ? "text-copper" : "text-cream"}`}
                        onClick={closeServices}
                      >
                        {service.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
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
            <li>
              <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                className={`block rounded-xl px-2 py-3 text-lg font-semibold hover:bg-white/5 hover:text-copper ${pathname === "/" ? "text-copper" : "text-cream"}`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li ref={mobileServicesRef}>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-lg font-semibold hover:bg-white/5 hover:text-copper ${serviceActive || servicesOpen ? "text-copper" : "text-cream"}`}
                aria-expanded={servicesOpen}
                aria-controls="services-menu-mobile"
                aria-haspopup="true"
                onClick={toggleServices}
              >
                Services
                <ChevronIcon className={`size-5 transition ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen ? (
                <ul id="services-menu-mobile" className="pb-1">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        aria-current={pathname === service.href ? "page" : undefined}
                        className={`block rounded-xl py-2.5 pr-2 pl-6 text-base font-semibold hover:bg-white/5 hover:text-copper ${pathname === service.href ? "text-copper" : "text-cream/90"}`}
                        onClick={() => {
                          closeServices();
                          setOpen(false);
                        }}
                      >
                        {service.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            {pageLinks
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`block rounded-xl px-2 py-3 text-lg font-semibold hover:bg-white/5 hover:text-copper ${pathname === item.href ? "text-copper" : "text-cream"}`}
                    onClick={() => setOpen(false)}
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
