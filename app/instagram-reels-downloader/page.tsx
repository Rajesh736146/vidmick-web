import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedDownloaders from "@/components/RelatedDownloaders";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Instagram Reels Downloader — Download Reels Without Watermark | VidMick",
  description:
    "Download Instagram Reels without watermark in HD for free. No login needed. Paste any Instagram Reels URL and save to your phone or computer instantly.",
  keywords: [
    "instagram reels downloader",
    "download instagram reels without watermark",
    "instagram reels download",
    "save instagram reels",
    "reels downloader",
    "instagram reel downloader no watermark",
    "download reels on iphone",
    "download reels on android",
  ],
  ...withCanonical("/instagram-reels-downloader"),
  openGraph: {
    title: "Instagram Reels Downloader — Download Reels Without Watermark | VidMick",
    description: "Save Instagram Reels in HD without watermark, free and no login required.",
    type: "website",
    url: "https://vidmick.com/instagram-reels-downloader",
    images: defaultOgImage(),
  },
};

const faqs = [
  {
    q: "Does VidMick add a watermark to downloaded Reels?",
    a: "No. VidMick downloads directly from Instagram's source without adding any watermark.",
  },
  {
    q: "What quality are downloaded Instagram Reels?",
    a: "VidMick downloads in the original quality published by the creator, typically up to 1080p.",
  },
  {
    q: "Can I download Instagram Stories?",
    a: "VidMick primarily supports public Reels and video posts. Story support varies by privacy settings.",
  },
  {
    q: "Is it legal to download Instagram Reels?",
    a: "Downloading for personal offline viewing is generally acceptable. Redistributing or commercializing downloaded content may violate Instagram's Terms of Service.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download Instagram Reels",
  description: "Download Instagram Reels without watermark in three easy steps.",
  totalTime: "PT1M",
  tool: [{ "@type": "HowToTool", name: "VidMick" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Copy Reels URL",
      text: "Open Instagram, find the Reel, and tap the 3-dot menu to copy the link.",
      url: "https://vidmick.com/instagram-reels-downloader#step1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste URL in VidMick",
      text: "Paste the Reels URL into VidMick and click Get Formats.",
      url: "https://vidmick.com/instagram-reels-downloader#step2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download without watermark",
      text: "Click Download to save the Reel directly to your device.",
      url: "https://vidmick.com/instagram-reels-downloader#step3",
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
      name: "Instagram Reels Downloader",
      item: "https://vidmick.com/instagram-reels-downloader",
    },
  ],
};

export default function InstagramReelsDownloaderPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>Instagram Reels Downloader</h1>
        <p className="subtitle">Download Instagram Reels without watermark — free, HD, no login</p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Instagram Reels Downloader" }]} />

        <h2 className="section-title">How to Download Instagram Reels</h2>
        <div className="steps-how">
          <div className="step-how" id="step1">
            <div className="step-how-num">1</div>
            <h3>Copy Link</h3>
            <p>Open a Reel and copy the URL from the 3-dot menu.</p>
          </div>
          <div className="step-how" id="step2">
            <div className="step-how-num">2</div>
            <h3>Paste into VidMick</h3>
            <p>Paste the URL into VidMick and fetch formats.</p>
          </div>
          <div className="step-how" id="step3">
            <div className="step-how-num">3</div>
            <h3>Download instantly</h3>
            <p>Click Download and save the Reel without watermark.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Download Instagram Reels on Android</h2>
          <p className="content-text">
            Copy the Reel link from Instagram, open your browser, go to VidMick, paste the URL, fetch formats, and download. Files save to Downloads and usually appear in Gallery.
          </p>

          <h2 className="section-title">Download Instagram Reels on iPhone (iOS)</h2>
          <p className="content-text">
            Copy the link, open Safari, paste into VidMick, and click Download. Long-press the Download link and select Download Linked File to save into Files.
          </p>

          <h2 className="section-title">Why Download Instagram Reels Without Watermark?</h2>
          <ul className="guide-list">
            <li>Keep clean copies for personal archive and offline viewing.</li>
            <li>Save favorite Reels before they disappear from feeds.</li>
            <li>Review educational or tutorial clips while traveling.</li>
            <li>Always respect original creator rights and copyrights.</li>
          </ul>

          <h2 className="section-title">Can You Download Private Instagram Reels?</h2>
          <p className="content-text">
            VidMick can only access publicly available Reels. Private account content is not accessible without the account owner's permission.
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
            <a href="/instagram-downloader">Instagram Downloader</a> · <a href="/youtube-downloader">YouTube Downloader</a> · <a href="/facebook-downloader">Facebook Downloader</a>
          </p>
        </section>

        <RelatedDownloaders
          links={[
            {
              href: "/instagram-downloader",
              label: "Instagram Downloader",
              description: "Download Reels, posts, and IGTV content.",
            },
            {
              href: "/youtube-downloader",
              label: "YouTube Downloader",
              description: "Save YouTube videos, Shorts, and audio.",
            },
            {
              href: "/facebook-downloader",
              label: "Facebook Downloader",
              description: "Download public Facebook videos and Reels.",
            },
          ]}
        />
      </div>

      <SiteFooter />
    </>
  );
}
