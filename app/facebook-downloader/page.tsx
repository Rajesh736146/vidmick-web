import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedDownloaders from "@/components/RelatedDownloaders";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Facebook Video Downloader — Save FB Videos & Reels Free | VidMick",
  description:
    "Download Facebook videos, Reels, and Live recordings in HD for free. No login, no software. Paste any Facebook video URL and download instantly.",
  keywords: [
    "facebook video downloader",
    "download facebook videos",
    "facebook reels downloader",
    "facebook video download online",
    "save facebook video",
    "facebook downloader free",
    "facebook live downloader",
    "download facebook video to phone",
    "facebook video downloader online free 2026",
  ],
  ...withCanonical("/facebook-downloader"),
  openGraph: {
    title: "Facebook Video Downloader — Save FB Videos & Reels Free | VidMick",
    description: "Download Facebook videos, Reels, and Live recordings in HD for free.",
    url: "https://vidmick.com/facebook-downloader",
    siteName: "VidMick",
    type: "website",
    images: defaultOgImage(),
  },
};

const faqs = [
  {
    q: "Can I download Facebook Live recordings?",
    a: "Yes, VidMick supports downloading Facebook Live recordings after the stream has ended, as long as the video is publicly accessible.",
  },
  {
    q: "Why can't I download some Facebook videos?",
    a: "Videos set to Friends Only or Private on Facebook cannot be downloaded by third-party tools. Only publicly shared videos are accessible.",
  },
  {
    q: "Can I download Facebook Reels?",
    a: "Yes. Facebook Reels are supported. Paste the Reel URL into VidMick and download in the available quality.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download Facebook Videos with VidMick",
  description: "Download Facebook videos, Reels, and Live recordings for free using VidMick.",
  totalTime: "PT1M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Copy the Facebook video URL",
      text: "Open Facebook, click the three-dot menu on the video and select Copy Link, or copy the URL from your browser address bar.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste into VidMick and fetch formats",
      text: "Paste the URL into VidMick and click Get Formats to see available quality options.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download",
      text: "Select your preferred quality and click Download. The video saves directly to your device.",
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
      name: "Facebook Downloader",
      item: "https://vidmick.com/facebook-downloader",
    },
  ],
};

export default function FacebookDownloaderPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>Facebook Video Downloader</h1>
        <p className="subtitle">Download Facebook videos, Reels, and Live recordings in HD with no login.</p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Facebook Downloader" }]} />

        <h2 className="section-title">How to Download Facebook Videos</h2>
        <div className="steps-how">
          <div className="step-how">
            <div className="step-how-num">1</div>
            <h3>Copy the Facebook URL</h3>
            <p>Copy the video post URL from your browser or use the Copy Link option in the Facebook app.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">2</div>
            <h3>Paste into VidMick</h3>
            <p>Paste the URL in the input and click Get Formats to fetch all available options.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">3</div>
            <h3>Choose quality and download</h3>
            <p>Select the quality you want and click Download to save the file directly to your device.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Public Facebook Videos, Reels, and Live Recordings</h2>
          <p className="content-text">
            VidMick works with publicly accessible Facebook videos including Reels and completed Live recordings. Private or friends-only videos are not available to third-party download tools.
          </p>
          <p className="content-text">
            Use the latest copied URL and fetch formats right before downloading, since source links may expire after a short window.
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
              href: "/youtube-downloader",
              label: "YouTube Downloader",
              description: "Download YouTube videos and Shorts in HD and 4K.",
            },
            {
              href: "/instagram-downloader",
              label: "Instagram Downloader",
              description: "Save Instagram Reels and videos without watermark.",
            },
            {
              href: "/tiktok-downloader",
              label: "TikTok Downloader",
              description: "Download TikTok videos and audio quickly.",
            },
          ]}
        />
      </div>

      <SiteFooter />
    </>
  );
}
