import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedDownloaders from "@/components/RelatedDownloaders";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free YouTube Video Downloader — HD, 4K & MP3 | VidMick",
  description:
    "Download YouTube videos and Shorts in HD, 1080p, 4K or MP3 audio free. No login, no software. Paste URL and save instantly on Android, iPhone & desktop.",
  keywords: [
    "youtube video downloader",
    "download youtube video",
    "youtube to mp4",
    "youtube to mp3",
    "youtube shorts downloader",
    "download youtube shorts",
    "youtube hd downloader",
    "youtube 4k downloader",
    "save youtube video",
    "youtube downloader free",
    "online youtube downloader",
    "youtube downloader no login",
    "youtube audio downloader",
    "youtube downloader 2026",
  ],
  ...withCanonical("/youtube-downloader"),
  openGraph: {
    title: "Free YouTube Video Downloader — HD, 4K & MP3 | VidMick",
    description: "Save YouTube videos in any quality — HD, 1080p, 4K, or MP3 audio. Free, fast, no account needed.",
    url: "https://vidmick.com/youtube-downloader",
    siteName: "VidMick",
    type: "website",
    images: defaultOgImage(
      "https://vidmick.com/og-youtube.png",
      "YouTube Video Downloader — HD, 4K & MP3 | VidMick",
    ),
  },
};

const faqs = [
  {
    q: "How do I download a YouTube video with VidMick?",
    a: "Copy the YouTube URL, paste it into VidMick, click Get Formats, choose your preferred quality, and click Download. The file saves to your device in seconds.",
  },
  {
    q: "Can I download YouTube videos in 1080p or 4K?",
    a: "Yes. VidMick fetches all available resolutions from YouTube including 720p HD, 1080p Full HD, and 4K Ultra HD where the original video supports these qualities.",
  },
  {
    q: "How do I download YouTube Shorts?",
    a: "Paste any YouTube Shorts URL (youtube.com/shorts/...) into VidMick and it will detect and download the Shorts video in the best available quality.",
  },
  {
    q: "Can I download just the audio from a YouTube video?",
    a: "Yes. VidMick detects audio-only streams. Select the audio format from the format list to download MP3 audio from any YouTube video.",
  },
  {
    q: "Is it safe to download YouTube videos?",
    a: "VidMick is safe to use. We do not store your URLs or files, and no account or personal information is required. Downloads come directly from YouTube's servers.",
  },
  {
    q: "Why do YouTube download links expire quickly?",
    a: "YouTube generates temporary signed URLs for video streams that expire after a short time (usually 6 hours). Use the download link immediately after clicking Get Formats.",
  },
  {
    q: "Does VidMick work on Android and iPhone?",
    a: "Yes. VidMick works on any mobile browser. On Android, files save to your Downloads folder. On iPhone, long-press the Download button and select Download Linked File to save to Files.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download YouTube Videos with VidMick",
  description: "Download any YouTube video or Short in HD, 1080p, 4K or MP3 in three easy steps using VidMick.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "VidMick" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Copy the YouTube URL",
      text: "Go to YouTube, open the video or Short you want, and copy the URL from the address bar or tap Share → Copy Link on mobile.",
      url: "https://vidmick.com/youtube-downloader#step1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste and fetch formats",
      text: "Paste the link into the VidMick input box and click Get Formats. All available resolutions and audio options will appear instantly.",
      url: "https://vidmick.com/youtube-downloader#step2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Choose quality and download",
      text: "Select HD, Full HD, 4K, or audio-only MP3 and click Download. The file saves directly to your device.",
      url: "https://vidmick.com/youtube-downloader#step3",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
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
      name: "YouTube Downloader",
      item: "https://vidmick.com/youtube-downloader",
    },
  ],
};

export default function YouTubeDownloaderPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>YouTube Video Downloader</h1>
        <p className="subtitle">Download YouTube videos and Shorts in HD, 1080p, 4K, or MP3 with no login.</p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "YouTube Downloader" }]} />

        <h2 className="section-title">How to Download YouTube Videos as MP4 or MP3</h2>
        <p className="section-subtitle">Save any YouTube video or Short in three steps.</p>
        <div className="steps-how">
          <div className="step-how" id="step1">
            <div className="step-how-num">1</div>
            <h3>Copy the YouTube URL</h3>
            <p>Open YouTube, find the video or Short, then copy the link from the address bar or Share menu.</p>
          </div>
          <div className="step-how" id="step2">
            <div className="step-how-num">2</div>
            <h3>Paste and fetch formats</h3>
            <p>Paste the URL into VidMick and click Get Formats to load all available video and audio streams.</p>
          </div>
          <div className="step-how" id="step3">
            <div className="step-how-num">3</div>
            <h3>Choose quality and download</h3>
            <p>Select your format and click Download. The file saves directly to your phone or computer.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Download YouTube Videos in Any Quality</h2>
          <p className="content-text">
            VidMick supports a full range of YouTube download options, from low-bandwidth 360p to high-quality 4K streams where available. You can choose based on your screen size, storage constraints, and internet speed.
          </p>
          <p className="content-text">
            The page works in modern browsers on Android, iPhone, Windows, macOS, and Linux. No extension is required and no account is needed.
          </p>

          <h3 className="subsection-title">Download YouTube Shorts</h3>
          <p className="content-text">
            YouTube Shorts links are fully supported and detected automatically. If you want a dedicated workflow for short-form vertical clips, use our dedicated page: <a href="/youtube-shorts-downloader">YouTube Shorts Downloader</a>.
          </p>

          <h3 className="subsection-title">YouTube to MP3 — Audio-Only Downloads</h3>
          <p className="content-text">
            If you only need audio for music, podcasts, interviews, or lectures, choose the audio-only stream to save space and download faster. <a href="/youtube-to-mp3">Visit our dedicated YouTube to MP3 page →</a>
          </p>
        </section>

        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <RelatedDownloaders
          links={[
            {
              href: "/instagram-downloader",
              label: "Instagram Downloader",
              description: "Save Reels, posts, and IGTV in HD.",
            },
            {
              href: "/facebook-downloader",
              label: "Facebook Downloader",
              description: "Download FB videos, Reels, and Live recordings.",
            },
            {
              href: "/tiktok-downloader",
              label: "TikTok Downloader",
              description: "Download TikTok videos without watermark.",
            },
          ]}
        />
      </div>

      <SiteFooter />
    </>
  );
}
