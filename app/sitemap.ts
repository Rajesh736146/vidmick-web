import type { MetadataRoute } from "next";

const base = "https://vidmick.com";
const lastModified = "2026-05-12";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/youtube-downloader`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/instagram-downloader`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/facebook-downloader`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/how-to-download-videos`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/youtube-to-mp3`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/youtube-to-mp4`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/youtube-shorts-downloader`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/instagram-reels-downloader`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/tiktok-downloader`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${base}/blog/how-to-download-youtube-videos-on-iphone`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/how-to-download-instagram-reels-without-watermark`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/is-it-legal-to-download-youtube-videos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
