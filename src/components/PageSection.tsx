export function PageSection({
  id,
  title,
  tone = "default",
  children,
}: {
  id?: string;
  title: string;
  tone?: "default" | "deep";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={
        tone === "deep"
          ? "scroll-mt-40 bg-navy-deep px-4 py-16 md:px-6 md:py-20"
          : "scroll-mt-40 px-4 py-16 md:px-6 md:py-20"
      }
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-cream">{title}</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">{children}</div>
      </div>
    </section>
  );
}
