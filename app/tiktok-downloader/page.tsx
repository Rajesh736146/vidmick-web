import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedDownloaders from "@/components/RelatedDownloaders";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "TikTok Video Downloader — Download TikTok Without Watermark | VidMick",
  description:
    "Download TikTok videos without watermark for free. No login, no app. Paste any TikTok URL and save to your phone or computer instantly in HD.",
  keywords: [
    "tiktok video downloader",
    "tiktok downloader without watermark",
    "download tiktok video",
    "tiktok downloader",
    "save tiktok video",
    "tiktok to mp4",
    "tiktok video download no watermark",
    "download tiktok on iphone",
    "download tiktok on android",
  ],
  ...withCanonical("/tiktok-downloader"),
  openGraph: {
    title: "TikTok Video Downloader — Download TikTok Without Watermark | VidMick",
    description: "Save TikTok videos without watermark in HD with no login.",
    type: "website",
    url: "https://vidmick.com/tiktok-downloader",
    images: defaultOgImage(),
  },
};

const faqs = [
  {
    q: "Does VidMick remove the TikTok watermark?",
    a: "VidMick fetches the original video stream from TikTok's servers. Where a watermark-free stream is available, VidMick provides it.",
  },
  {
    q: "Can I download TikTok videos as MP3?",
    a: "Yes. Select the audio-only format to download the audio track from any TikTok video.",
  },
  {
    q: "Is it safe to use VidMick for TikTok downloads?",
    a: "Yes. VidMick does not store your URLs or videos, and no account is required.",
  },
  {
    q: "Can I download TikTok Live videos?",
    a: "TikTok Live recordings are not consistently available after the stream ends. VidMick can only download videos that are publicly accessible via a standard TikTok URL.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download TikTok Videos Without Watermark",
  description: "Download TikTok videos in HD in three easy steps using VidMick.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "VidMick" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Copy TikTok URL",
      text: "Open TikTok and tap Share → Copy Link.",
      url: "https://vidmick.com/tiktok-downloader#step1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste into VidMick",
      text: "Paste the TikTok URL into VidMick and click Get Formats.",
      url: "https://vidmick.com/tiktok-downloader#step2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Select quality and download",
      text: "Choose your quality and click Download.",
      url: "https://vidmick.com/tiktok-downloader#step3",
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
      name: "TikTok Downloader",
      item: "https://vidmick.com/tiktok-downloader",
    },
  ],
};

export default function TikTokDownloaderPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>TikTok Video Downloader</h1>
        <p className="subtitle">Download TikTok videos without watermark — free, HD, no login</p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "TikTok Downloader" }]} />

        <h2 className="section-title">How to Download TikTok Videos Without Watermark</h2>
        <div className="steps-how">
          <div className="step-how" id="step1">
            <div className="step-how-num">1</div>
            <h3>Copy TikTok Link</h3>
            <p>Open TikTok and tap Share → Copy Link on the video you want.</p>
          </div>
          <div className="step-how" id="step2">
            <div className="step-how-num">2</div>
            <h3>Paste into VidMick</h3>
            <p>Paste the URL into VidMick and click Get Formats.</p>
          </div>
          <div className="step-how" id="step3">
            <div className="step-how-num">3</div>
            <h3>Select quality and download</h3>
            <p>Choose your format and download directly to your device.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Download TikTok on Android</h2>
          <p className="content-text">
            Copy the link in TikTok, open Chrome, paste into VidMick, and download. The file usually saves to your Downloads folder.
          </p>

          <h2 className="section-title">Download TikTok on iPhone</h2>
          <p className="content-text">
            Use Safari to open VidMick, paste the link, fetch formats, and long-press Download to save into the Files app.
          </p>

          <h2 className="section-title">TikTok to MP3 — Extract Audio from TikTok</h2>
          <p className="content-text">
            If you only need sound, choose the audio-only format in the format list to download TikTok audio as MP3.
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
            <a href="/instagram-reels-downloader">Instagram Reels Downloader</a> · <a href="/youtube-downloader">YouTube Downloader</a> · <a href="/facebook-downloader">Facebook Downloader</a>
          </p>
        </section>

        <RelatedDownloaders
          links={[
            {
              href: "/instagram-reels-downloader",
              label: "Instagram Reels Downloader",
              description: "Download Reels without watermark.",
            },
            {
              href: "/youtube-downloader",
              label: "YouTube Downloader",
              description: "Save YouTube videos and Shorts in HD/4K.",
            },
            {
              href: "/facebook-downloader",
              label: "Facebook Downloader",
              description: "Download Facebook videos, Reels, and Live recordings.",
            },
          ]}
        />
      </div>

      <SiteFooter />
    </>
  );
}
