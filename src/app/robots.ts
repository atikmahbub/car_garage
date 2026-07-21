import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://argarage.uk/sitemap.xml",
    host: "https://argarage.uk",
  };
}
