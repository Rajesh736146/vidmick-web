import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedDownloaders from "@/components/RelatedDownloaders";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "YouTube to MP3 Converter — Free Audio Download | VidMick",
  description:
    "Convert any YouTube video to MP3 audio for free. No login, no software. Paste the YouTube URL and download high-quality audio instantly on any device.",
  keywords: [
    "youtube to mp3",
    "youtube mp3 converter",
    "convert youtube to mp3",
    "youtube audio downloader",
    "youtube to mp3 free",
    "youtube mp3 download",
    "extract audio from youtube",
  ],
  ...withCanonical("/youtube-to-mp3"),
  openGraph: {
    title: "YouTube to MP3 Converter — Free Audio Download | VidMick",
    description: "Convert YouTube videos to MP3 audio instantly with no login and no software.",
    type: "website",
    url: "https://vidmick.com/youtube-to-mp3",
    images: defaultOgImage(),
  },
};

const faqs = [
  {
    q: "Is it free to convert YouTube to MP3?",
    a: "Yes, VidMick is completely free to use with no limits.",
  },
  {
    q: "What audio quality does VidMick provide?",
    a: "VidMick provides the original audio stream from YouTube, typically 128kbps–160kbps AAC. Quality depends on the original video's audio track.",
  },
  {
    q: "Can I download audio from YouTube Shorts?",
    a: "Yes. Paste any YouTube Shorts URL and select the audio format.",
  },
  {
    q: "Is YouTube to MP3 conversion legal?",
    a: "Downloading YouTube content for personal offline use is generally tolerated, but distributing or commercializing downloaded content may violate YouTube's Terms of Service and copyright law.",
  },
  {
    q: "Does VidMick work for YouTube Music?",
    a: "VidMick works with standard YouTube URLs. YouTube Music tracks require a separate YouTube Music URL.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Convert YouTube to MP3 with VidMick",
  description: "Extract audio from any YouTube video in three quick steps using VidMick.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "VidMick" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Copy the YouTube video URL",
      text: "Open YouTube and copy the URL from the address bar or Share menu.",
      url: "https://vidmick.com/youtube-to-mp3#step1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste into VidMick",
      text: "Paste the URL into VidMick and click Get Formats.",
      url: "https://vidmick.com/youtube-to-mp3#step2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Select audio and download",
      text: "Choose the audio-only format and click Download.",
      url: "https://vidmick.com/youtube-to-mp3#step3",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vidmick.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "YouTube to MP3",
      item: "https://vidmick.com/youtube-to-mp3",
    },
  ],
};

export default function YouTubeToMp3Page() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>YouTube to MP3 Converter</h1>
        <p className="subtitle">Extract audio from any YouTube video — free, instant, no login</p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "YouTube to MP3" }]} />

        <h2 className="section-title">How to Convert YouTube to MP3</h2>
        <div className="steps-how">
          <div className="step-how" id="step1">
            <div className="step-how-num">1</div>
            <h3>Copy the YouTube video URL</h3>
            <p>Copy the link from YouTube desktop or mobile app share menu.</p>
          </div>
          <div className="step-how" id="step2">
            <div className="step-how-num">2</div>
            <h3>Paste into VidMick</h3>
            <p>Paste the URL into VidMick and click Get Formats.</p>
          </div>
          <div className="step-how" id="step3">
            <div className="step-how-num">3</div>
            <h3>Select audio-only and download</h3>
            <p>Choose the audio stream and click Download to save instantly.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Why Download YouTube Audio with VidMick?</h2>
          <ul className="guide-list">
            <li>No login or account required.</li>
            <li>Audio extracted directly from YouTube's source streams.</li>
            <li>Works on Android, iPhone, Windows, Mac, and Linux.</li>
            <li>No file size limits.</li>
          </ul>

          <h2 className="section-title">What Is YouTube to MP3 Conversion?</h2>
          <p className="content-text">
            YouTube often serves audio and video as separate streams. VidMick detects the audio-only stream, usually M4A/AAC, and lets you download it directly without re-encoding. This preserves source quality and speeds up downloads.
          </p>

          <h2 className="section-title">YouTube to MP3 vs YouTube to MP4 — Which Should You Choose?</h2>
          <ul className="guide-list">
            <li>MP3 or audio-only is best for music, podcasts, interviews, and lectures.</li>
            <li>MP4 is best when you need to watch the full visual content offline.</li>
            <li>If you only need sound, choose audio-only for smaller files and faster transfers.</li>
          </ul>
        </section>

        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <section className="content-section">
          <h3 className="subsection-title">Explore More Tools</h3>
          <p className="content-text">
            <a href="/youtube-downloader">YouTube Downloader</a> · <a href="/youtube-to-mp4">YouTube to MP4</a> · <a href="/instagram-downloader">Instagram Downloader</a>
          </p>
        </section>

        <RelatedDownloaders
          links={[
            {
              href: "/youtube-to-mp4",
              label: "YouTube to MP4",
              description: "Download YouTube videos in HD, 1080p, and 4K MP4.",
            },
            {
              href: "/youtube-shorts-downloader",
              label: "YouTube Shorts Downloader",
              description: "Save Shorts videos in vertical HD quality.",
            },
            {
              href: "/youtube-downloader",
              label: "YouTube Downloader",
              description: "General downloader for video and audio formats.",
            },
          ]}
        />
      </div>

      <SiteFooter />
    </>
  );
}
