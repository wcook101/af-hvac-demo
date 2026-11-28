import type { MetadataRoute } from "next";
import { sitemapPaths, siteUrl } from "@/lib/site";

const priorContentDate = "2026-11-23";
const revisedContentDate = "2026-11-28";

const revisedPaths = new Set([
  "/",
  "/heating",
  "/air-conditioning",
  "/refrigeration",
  "/service-area",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified: new Date(
      `${revisedPaths.has(path) ? revisedContentDate : priorContentDate}T00:00:00.000Z`,
    ),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
