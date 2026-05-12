import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedDownloaders from "@/components/RelatedDownloaders";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Instagram Video Downloader — Save Reels Without Watermark | VidMick",
  description:
    "Download Instagram Reels, videos, and posts in HD without watermark. Free, no login, works on iPhone & Android. Paste the Instagram URL and save instantly.",
  keywords: [
    "instagram video downloader",
    "instagram reels downloader",
    "download instagram reels without watermark",
    "save instagram reel",
    "instagram downloader",
    "download instagram video",
    "instagram reel downloader no watermark",
    "instagram reels downloader online",
    "instagram video downloader iphone",
    "instagram video downloader android",
    "instagram downloader 2026",
  ],
  ...withCanonical("/instagram-downloader"),
  openGraph: {
    title: "Instagram Video Downloader — Save Reels Without Watermark | VidMick",
    description: "Download Instagram Reels, posts, and videos in HD without watermark. Free and fast.",
    url: "https://vidmick.com/instagram-downloader",
    siteName: "VidMick",
    type: "website",
    images: defaultOgImage(
      "https://vidmick.com/og-instagram.png",
      "Instagram Reels Downloader — No Watermark | VidMick",
    ),
  },
};

const faqs = [
  {
    q: "Can I download Instagram Reels without a watermark?",
    a: "Yes. VidMick downloads Instagram Reels directly from the source without adding any watermark.",
  },
  {
    q: "Does VidMick support Instagram Stories and IGTV?",
    a: "VidMick supports Instagram Reels, video posts, and IGTV. Stories support depends on the privacy settings of the account.",
  },
  {
    q: "Can I download private Instagram videos?",
    a: "VidMick can only download publicly accessible Instagram content. Private account videos require the account owner's permission to access.",
  },
  {
    q: "How do I download Instagram Reels on iPhone?",
    a: "Open the Reel on Instagram, tap Share → Copy Link. Go to VidMick in Safari, paste the URL, click Get Formats, then long-press Download and select Download Linked File.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download Instagram Videos and Reels with VidMick",
  description: "Save Instagram Reels, videos, and posts in HD without watermark using VidMick.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "VidMick" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Copy the Instagram URL",
      text: "Open Instagram, go to the Reel or video post, tap the three-dot menu and select Copy Link.",
      url: "https://vidmick.com/instagram-downloader#step1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste into VidMick",
      text: "Paste the Instagram URL into the VidMick input box and click Get Formats.",
      url: "https://vidmick.com/instagram-downloader#step2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download the video",
      text: "Click Download. The Instagram video or Reel saves directly to your device without a watermark.",
      url: "https://vidmick.com/instagram-downloader#step3",
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
      name: "Instagram Downloader",
      item: "https://vidmick.com/instagram-downloader",
    },
  ],
};

export default function InstagramDownloaderPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>Instagram Video Downloader</h1>
        <p className="subtitle">Download Instagram Reels and videos in HD without watermark, no login required.</p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Instagram Downloader" }]} />

        <h2 className="section-title">How to Download Instagram Reels and Videos</h2>
        <div className="steps-how">
          <div className="step-how" id="step1">
            <div className="step-how-num">1</div>
            <h3>Copy the Instagram URL</h3>
            <p>Open Instagram, tap the 3-dot menu on a Reel or video post, then copy the link.</p>
          </div>
          <div className="step-how" id="step2">
            <div className="step-how-num">2</div>
            <h3>Paste into VidMick</h3>
            <p>Paste the link into the input box and click Get Formats to fetch quality options.</p>
          </div>
          <div className="step-how" id="step3">
            <div className="step-how-num">3</div>
            <h3>Download instantly</h3>
            <p>Click Download to save the video directly to your device at original quality.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Save Instagram Reels in Original Quality</h2>
          <p className="content-text">
            VidMick focuses on public Instagram content and returns clean direct formats for Reels, posts, and IGTV. No account sign-in is required for public links.
          </p>
          <h3 className="subsection-title">Looking for Reels-only instructions?</h3>
          <p className="content-text">
            If you want a dedicated workflow specifically for Reels, including phone-specific steps, visit our dedicated page: <a href="/instagram-reels-downloader">Instagram Reels Downloader</a>.
          </p>
          <p className="content-text">
            Private account content is not accessible unless you have explicit access permission from the account owner.
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
              description: "Download YouTube videos, Shorts, and MP3 audio.",
            },
            {
              href: "/facebook-downloader",
              label: "Facebook Downloader",
              description: "Save Facebook videos and Reels in HD.",
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
