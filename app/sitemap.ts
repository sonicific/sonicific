import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sonicgroup.site";

  const pages = ["", "/news", "/careers", "/activities", "/people"];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === "" ? 1 : path === "/news" || path === "/careers" ? 0.9 : 0.7,
  }));
}
