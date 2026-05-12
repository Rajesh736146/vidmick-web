import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How to Download Videos from YouTube, Instagram & Facebook | VidMick",
  description:
    "Step-by-step guide to downloading videos from YouTube, Instagram, and Facebook for free. Learn how to save HD videos to any device using VidMick.",
  keywords: [
    "how to download videos online",
    "how to download youtube videos",
    "how to download instagram reels",
    "how to download facebook videos",
    "how to save youtube video",
    "how to save instagram reel",
    "how to save facebook video",
    "download video from social media",
    "save social media videos",
    "video download guide",
    "download youtube video tutorial",
    "how to download videos on android",
    "how to download videos on iphone",
  ],
  ...withCanonical("/how-to-download-videos"),
  openGraph: {
    title: "How to Download Videos from YouTube, Instagram & Facebook | VidMick",
    description: "Complete guide for downloading online videos in HD using VidMick.",
    type: "article",
    url: "https://vidmick.com/how-to-download-videos",
    images: defaultOgImage(),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://vidmick.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "How to Download Videos",
      item: "https://vidmick.com/how-to-download-videos",
    },
  ],
};

export default function HowToPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>How to Download Videos Online</h1>
        <p className="subtitle">A complete guide to saving videos from YouTube, Instagram, and Facebook on any device.</p>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "How to Download Videos" }]} />

        <article className="article-content">
          <p className="content-text lead">
            VidMick makes it simple to save publicly available social media videos without installing software or creating an account. This guide walks through the exact process for each platform.
          </p>

          <h2 className="section-title" style={{ textAlign: "left", marginTop: "2.5rem" }}>
            How to Download YouTube Videos
          </h2>
          <ol className="guide-list">
            <li>Open YouTube and copy the video or Shorts URL.</li>
            <li>Go to <a href="/youtube-downloader">YouTube Downloader</a>.</li>
            <li>Paste the URL and click Get Formats.</li>
            <li>Select MP4 quality or audio-only format.</li>
            <li>Click Download to save the file locally.</li>
          </ol>

          <h2 className="section-title" style={{ textAlign: "left", marginTop: "2.5rem" }}>
            How to Download Instagram Reels and Videos
          </h2>
          <ol className="guide-list">
            <li>Open the Reel or video post and copy its Instagram link.</li>
            <li>Visit <a href="/instagram-downloader">Instagram Downloader</a>.</li>
            <li>Paste, fetch formats, and choose the quality you prefer.</li>
            <li>Download and save to your device.</li>
          </ol>

          <h2 className="section-title" style={{ textAlign: "left", marginTop: "2.5rem" }}>
            How to Download Facebook Videos
          </h2>
          <ol className="guide-list">
            <li>Copy the URL of a public Facebook video, Reel, or completed Live recording.</li>
            <li>Open <a href="/facebook-downloader">Facebook Downloader</a>.</li>
            <li>Paste and fetch available formats.</li>
            <li>Download your preferred version.</li>
          </ol>

          <h2 className="section-title" style={{ textAlign: "left", marginTop: "2.5rem" }}>
            Quick Tips
          </h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Use fresh links</h3>
              <p>Stream URLs expire. If a download fails, run Get Formats again to refresh the links.</p>
            </div>
            <div className="tip-card">
              <h3>Prefer Wi-Fi for large files</h3>
              <p>1080p and 4K downloads are larger; stable internet improves completion speed and reliability.</p>
            </div>
            <div className="tip-card">
              <h3>Respect copyright rules</h3>
              <p>Only download content you own, have permission to use, or can legally keep for personal offline use.</p>
            </div>
          </div>
        </article>
      </div>

      <SiteFooter />
    </>
  );
}
