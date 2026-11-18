import type { MetadataRoute } from "next";
import { sitemapPaths, siteUrl } from "@/lib/site";

const lastModified = new Date("2026-11-18T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
