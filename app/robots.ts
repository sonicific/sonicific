import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: ["https://sonicgroup.site/sitemap.xml"],
    host: "https://sonicgroup.site",
  };
}
