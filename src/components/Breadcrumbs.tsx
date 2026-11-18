import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export function Breadcrumbs({ path, current }: { path: string; current: string }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(path, current)} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <li>
            <Link href="/" className="hover:text-copper">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-copper">
            /
          </li>
          <li aria-current="page" className="text-cream">
            {current}
          </li>
        </ol>
      </nav>
    </>
  );
}
