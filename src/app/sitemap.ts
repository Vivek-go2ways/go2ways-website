import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/projects",
    "/case-studies",
    "/industries",
    "/about",
    "/contact",
    "/careers",
    "/privacy",
    "/terms",
    "/security",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

