import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  return [
    {
      url: url + "/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: url + "/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
