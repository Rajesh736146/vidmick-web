import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedDownloaders from "@/components/RelatedDownloaders";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "YouTube to MP4 — Download YouTube Videos as MP4 Free | VidMick",
  description:
    "Download any YouTube video as MP4 in HD, 1080p, or 4K. Free, no login. Paste the YouTube URL and get an MP4 download link in seconds.",
  keywords: [
    "youtube to mp4",
    "convert youtube to mp4",
    "youtube mp4 downloader",
    "download youtube video mp4",
    "youtube to mp4 free",
    "youtube mp4 converter online",
  ],
  ...withCanonical("/youtube-to-mp4"),
  openGraph: {
    title: "YouTube to MP4 — Download YouTube Videos as MP4 Free | VidMick",
    description: "Download YouTube videos as MP4 in HD, 1080p, and 4K quality.",
    type: "website",
    url: "https://vidmick.com/youtube-to-mp4",
    images: defaultOgImage(),
  },
};

const faqs = [
  {
    q: "Why does 4K quality show as a separate video-only stream?",
    a: "YouTube serves 4K as a video-only DASH stream. VidMick provides it as-is; to merge 4K video with audio you may need a tool like FFmpeg on desktop.",
  },
  {
    q: "Can I download YouTube playlists as MP4?",
    a: "Currently VidMick downloads individual videos. Paste each video URL separately.",
  },
  {
    q: "Is there a file size limit?",
    a: "VidMick has no file size limit. File size depends on the video's duration and quality.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download YouTube Videos as MP4",
  description: "Convert YouTube videos to MP4 in HD, 1080p, or 4K in three easy steps.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "VidMick" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Copy YouTube video URL",
      text: "Copy the YouTube video link from browser or mobile app share menu.",
      url: "https://vidmick.com/youtube-to-mp4#step1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste into VidMick",
      text: "Paste the URL and click Get Formats to load available MP4 qualities.",
      url: "https://vidmick.com/youtube-to-mp4#step2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Select MP4 quality and download",
      text: "Choose MP4 quality and click Download to save the file.",
      url: "https://vidmick.com/youtube-to-mp4#step3",
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
      name: "YouTube to MP4",
      item: "https://vidmick.com/youtube-to-mp4",
    },
  ],
};

export default function YouTubeToMp4Page() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>YouTube to MP4 Downloader</h1>
        <p className="subtitle">Download YouTube videos as MP4 in HD, 1080p or 4K — free, no login</p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "YouTube to MP4" }]} />

        <h2 className="section-title">How to Download YouTube Videos as MP4</h2>
        <div className="steps-how">
          <div className="step-how" id="step1">
            <div className="step-how-num">1</div>
            <h3>Copy YouTube video URL</h3>
            <p>Copy the link for any YouTube video you want to save.</p>
          </div>
          <div className="step-how" id="step2">
            <div className="step-how-num">2</div>
            <h3>Paste into VidMick and fetch formats</h3>
            <p>Paste the URL into VidMick and click Get Formats.</p>
          </div>
          <div className="step-how" id="step3">
            <div className="step-how-num">3</div>
            <h3>Select MP4 quality and download</h3>
            <p>Choose 360p, 480p, 720p, 1080p, or 4K when available.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Available MP4 Quality Options</h2>
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Quality</th>
                  <th>Resolution</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>360p</td><td>640×360</td><td>Small file size, low storage</td></tr>
                <tr><td>480p</td><td>854×480</td><td>Standard quality</td></tr>
                <tr><td>720p HD</td><td>1280×720</td><td>Good for phones and tablets</td></tr>
                <tr><td>1080p Full HD</td><td>1920×1080</td><td>Large screens, presentations</td></tr>
                <tr><td>4K Ultra HD</td><td>3840×2160</td><td>4K displays, archiving</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="section-title">YouTube to MP4 vs YouTube to MP3</h2>
          <p className="content-text">
            Choose MP4 when you need the full visual content for tutorials, demos, entertainment, and offline viewing. Choose MP3 or audio-only when you only need sound and smaller file sizes.
          </p>

          <h2 className="section-title">Download YouTube Playlists as MP4</h2>
          <p className="content-text">
            VidMick currently downloads individual videos. For playlist downloads, save each video's URL separately or use a desktop tool like yt-dlp for batch downloads.
          </p>
        </section>

        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <section className="content-section">
          <h3 className="subsection-title">Useful Links</h3>
          <p className="content-text">
            <a href="/youtube-to-mp3">YouTube to MP3</a> · <a href="/youtube-downloader">YouTube Downloader</a> · <a href="/how-to-download-videos">How-to Guide</a>
          </p>
        </section>

        <RelatedDownloaders
          links={[
            {
              href: "/youtube-to-mp3",
              label: "YouTube to MP3",
              description: "Extract audio streams from YouTube videos.",
            },
            {
              href: "/youtube-shorts-downloader",
              label: "YouTube Shorts Downloader",
              description: "Download Shorts in the best available quality.",
            },
            {
              href: "/youtube-downloader",
              label: "YouTube Downloader",
              description: "General YouTube downloader with MP4 and audio support.",
            },
          ]}
        />
      </div>

      <SiteFooter />
    </>
  );
}
