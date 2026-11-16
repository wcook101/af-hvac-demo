import { site } from "@/lib/site";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="border-b border-white/10 bg-navy-deep px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>
        <a href={site.phoneHref} className="btn-copper mt-8 h-12 px-6">
          Call Now
        </a>
      </div>
    </header>
  );
}
