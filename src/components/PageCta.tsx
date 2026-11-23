import Link from "next/link";
import { site } from "@/lib/site";

export function PageCta({
  title,
  text,
  estimateHref,
}: {
  title: string;
  text: string;
  estimateHref?: string;
}) {
  return (
    <section className="px-4 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-panel px-6 py-8 shadow-xl shadow-black/10 sm:flex-row sm:items-center md:px-10">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-cream">{title}</h2>
          <p className="mt-2 max-w-xl leading-relaxed text-muted">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          {estimateHref ? (
            <Link href={estimateHref} className="btn-copper h-12 px-6">
              Request an Estimate
            </Link>
          ) : null}
          <a href={site.phoneHref} className={estimateHref ? "btn-ghost h-12 px-6" : "btn-copper h-12 shrink-0 px-6"}>
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
