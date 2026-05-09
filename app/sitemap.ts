import type { MetadataRoute } from "next";

const base = "https://vidmic.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/youtube-downloader`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/instagram-downloader`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/facebook-downloader`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/how-to-download-videos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
