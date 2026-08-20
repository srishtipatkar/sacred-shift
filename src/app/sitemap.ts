import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const siteUrl = "https://thesacredshift.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
