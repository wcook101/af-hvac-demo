import { site } from "@/lib/site";

export function PageCta({ title, text }: { title: string; text: string }) {
  return (
    <section className="px-4 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-panel px-6 py-8 shadow-xl shadow-black/10 sm:flex-row sm:items-center md:px-10">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-cream">{title}</h2>
          <p className="mt-2 max-w-xl leading-relaxed text-muted">{text}</p>
        </div>
        <a href={site.phoneHref} className="btn-copper h-12 shrink-0 px-6">
          Call {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
