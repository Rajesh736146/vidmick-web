import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedDownloaders from "@/components/RelatedDownloaders";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "YouTube Shorts Downloader — Save YouTube Shorts in HD | VidMick",
  description:
    "Download YouTube Shorts to your phone or desktop for free. No watermark, no login, HD quality. Paste any Shorts URL and save instantly.",
  keywords: [
    "youtube shorts downloader",
    "download youtube shorts",
    "save youtube shorts",
    "youtube shorts download",
    "download youtube shorts on iphone",
    "download youtube shorts on android",
    "youtube shorts to mp4",
  ],
  ...withCanonical("/youtube-shorts-downloader"),
  openGraph: {
    title: "YouTube Shorts Downloader — Save YouTube Shorts in HD | VidMick",
    description: "Download YouTube Shorts in HD without watermark and without login.",
    type: "website",
    url: "https://vidmick.com/youtube-shorts-downloader",
    images: defaultOgImage(),
  },
};

const faqs = [
  {
    q: "What is the URL format for YouTube Shorts?",
    a: "YouTube Shorts URLs follow this format: youtube.com/shorts/VIDEO_ID",
  },
  {
    q: "Can I download YouTube Shorts in 1080p?",
    a: "Quality depends on the original Short. Most Shorts are available in up to 1080p vertical (1080×1920).",
  },
  {
    q: "Does VidMick add a watermark to downloaded Shorts?",
    a: "No. VidMick downloads directly from YouTube's servers with no watermark added.",
  },
  {
    q: "Can I download YouTube Shorts as MP3 audio?",
    a: "Yes. Select the audio-only format from the format list.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download YouTube Shorts",
  description: "Save any YouTube Short in HD in three quick steps.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "VidMick" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Copy the Shorts URL",
      text: "Open YouTube, find the Short, and tap Share → Copy Link.",
      url: "https://vidmick.com/youtube-shorts-downloader#step1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste into VidMick",
      text: "Paste the URL into VidMick and click Get Formats.",
      url: "https://vidmick.com/youtube-shorts-downloader#step2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Select quality and download",
      text: "Choose the best format and click Download to save the Short.",
      url: "https://vidmick.com/youtube-shorts-downloader#step3",
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
      name: "YouTube Shorts Downloader",
      item: "https://vidmick.com/youtube-shorts-downloader",
    },
  ],
};

export default function YouTubeShortsDownloaderPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>YouTube Shorts Downloader</h1>
        <p className="subtitle">Save any YouTube Short to your device in HD — free, no login, no watermark</p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "YouTube Shorts Downloader" }]} />

        <h2 className="section-title">How to Download YouTube Shorts</h2>
        <div className="steps-how">
          <div className="step-how" id="step1">
            <div className="step-how-num">1</div>
            <h3>Copy the Shorts link</h3>
            <p>Use Share → Copy Link from the YouTube app for any Short.</p>
          </div>
          <div className="step-how" id="step2">
            <div className="step-how-num">2</div>
            <h3>Paste Shorts URL into VidMick</h3>
            <p>Paste a link in the format youtube.com/shorts/VIDEO_ID.</p>
          </div>
          <div className="step-how" id="step3">
            <div className="step-how-num">3</div>
            <h3>Get formats and download</h3>
            <p>Choose quality and save the Short directly to your device.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Download YouTube Shorts on Android</h2>
          <p className="content-text">
            Copy the Shorts link in the YouTube app, open Chrome on Android, go to vidmick.com/youtube-shorts-downloader, paste the URL, and download. The file is usually saved in your Downloads folder.
          </p>

          <h2 className="section-title">Download YouTube Shorts on iPhone</h2>
          <p className="content-text">
            Copy the Shorts link, open Safari and load VidMick, paste and fetch formats, then long-press Download and choose Download Linked File to save in Files.
          </p>

          <h2 className="section-title">Why Download YouTube Shorts?</h2>
          <ul className="guide-list">
            <li>Save trending Shorts for offline viewing.</li>
            <li>Keep personal references and inspiration clips.</li>
            <li>Archive Shorts before they are removed.</li>
            <li>Share clips locally with friends where appropriate.</li>
          </ul>
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
            <a href="/youtube-downloader">YouTube Downloader</a> · <a href="/youtube-to-mp4">YouTube to MP4</a> · <a href="/youtube-to-mp3">YouTube to MP3</a>
          </p>
        </section>

        <RelatedDownloaders
          links={[
            {
              href: "/youtube-downloader",
              label: "YouTube Downloader",
              description: "Download full YouTube videos and Shorts.",
            },
            {
              href: "/youtube-to-mp4",
              label: "YouTube to MP4",
              description: "Choose MP4 quality from 360p to 4K.",
            },
            {
              href: "/youtube-to-mp3",
              label: "YouTube to MP3",
              description: "Extract audio-only streams in seconds.",
            },
          ]}
        />
      </div>

      <SiteFooter />
    </>
  );
}
