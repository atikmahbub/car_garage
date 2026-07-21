import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://argarage.uk",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
