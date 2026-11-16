import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[70vh] place-items-center px-6 py-24 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-cream">
          This page is not on the site.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          The page you requested is not available. Choose a page from the menu or return home.
        </p>
        <Link href="/" className="btn-copper mx-auto mt-8 h-12 px-6">
          Back to A&amp;F HVAC
        </Link>
      </div>
    </main>
  );
}
