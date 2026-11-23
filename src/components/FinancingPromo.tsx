import Link from "next/link";

export function FinancingPromo() {
  return (
    <section id="financing" className="scroll-mt-40 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-3xl border border-white/10 bg-panel px-6 py-10 shadow-xl shadow-black/10 md:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:py-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">Major installations</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            Financing for qualifying projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Financing is available for qualifying major HVAC installation projects. Whether it applies
            depends on the project and on qualification. A&amp;F HVAC does not guarantee approval, and
            this website does not publish lenders, rates, or terms.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/contact#estimate" className="btn-copper h-12 px-6">
            Request an Estimate
          </Link>
          <Link href="/financing" className="btn-ghost h-12 px-6">
            Financing Details
          </Link>
        </div>
      </div>
    </section>
  );
}
