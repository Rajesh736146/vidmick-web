import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Instagram Video Downloader – Download Reels, Videos & IGTV Free | VidMick",
  description:
    "Download Instagram Reels, videos, and IGTV in HD for free. No login needed. Save Instagram videos without watermark instantly — works on Android & iPhone.",
  keywords: [
    "instagram video downloader",
    "instagram reels downloader",
    "download instagram reels",
    "save instagram video",
    "instagram reel download online",
    "instagram video download without watermark",
    "download instagram video free",
    "instagram downloader online",
    "instagram reels save",
    "igtv downloader",
    "instagram video downloader android",
    "instagram video downloader iphone",
  ],
  alternates: { canonical: "https://vidmick.com/instagram-downloader" },
  openGraph: {
    title: "Instagram Video Downloader – Save Reels Without Watermark | VidMick",
    description: "Download Instagram Reels and videos in HD quality. Free, fast, no account required.",
    type: "website",
    url: "https://vidmick.com/instagram-downloader",
    siteName: "VidMick",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Reels Downloader – Free HD Downloads | VidMick",
    description: "Save Instagram Reels and videos without watermark. Free, no login required.",
  },
};

const faqs = [
  {
    q: "How do I download an Instagram Reel?",
    a: "Open the Reel on Instagram, tap the three-dot menu (⋯) and select 'Copy Link'. Paste that link into VidMick above and click 'Get Formats', then choose your quality and download.",
  },
  {
    q: "Can I download Instagram Reels without a watermark?",
    a: "Yes. VidMick downloads Instagram Reels directly from Instagram's servers at their original quality with no watermark added. The file you get is the original video.",
  },
  {
    q: "Can I download private Instagram videos?",
    a: "VidMick can only download publicly available Instagram content. Private account videos require you to be logged in on Instagram and are not accessible via public URLs.",
  },
  {
    q: "Does VidMick support Instagram Stories?",
    a: "Instagram Stories are only accessible while they are live and require authentication. VidMick works best with public posts, Reels, and IGTV videos.",
  },
  {
    q: "What quality are Instagram Reel downloads?",
    a: "VidMick downloads Instagram videos at the highest quality Instagram provides, typically up to 1080p for Reels and standard posts.",
  },
  {
    q: "How do I save an Instagram video on iPhone?",
    a: "On iPhone, tap the Download button in Safari, then long-press and select 'Download Linked File'. The video will save to your Files app. You can then move it to your Photos app.",
  },
  {
    q: "How do I save an Instagram Reel on Android?",
    a: "On Android, tap the Download button in your browser. The video will save to your Downloads folder and should appear in your gallery app automatically.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VidMick Instagram Downloader",
  url: "https://vidmick.com/instagram-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: "Free Instagram video downloader. Download Instagram Reels and videos in HD without watermark. No login required.",
  featureList: [
    "Download Instagram Reels without watermark",
    "Download Instagram videos in HD",
    "Download IGTV videos",
    "No login or registration required",
    "Works on Android, iPhone, and desktop",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vidmick.com" },
    { "@type": "ListItem", position: 2, name: "Instagram Downloader", item: "https://vidmick.com/instagram-downloader" },
  ],
};

export default function InstagramDownloaderPage() {
  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>Instagram Video Downloader</h1>
        <p className="subtitle">
          Download Instagram Reels &amp; videos without watermark — free, HD, no login needed
        </p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <h2 className="section-title">How to Download Instagram Reels &amp; Videos</h2>
        <p className="section-subtitle">Save any Instagram Reel or video in seconds</p>
        <div className="steps-how">
          <div className="step-how">
            <div className="step-how-num">1</div>
            <h3>Copy the Instagram link</h3>
            <p>Open the Instagram post or Reel, tap the three-dot menu (⋯) and select "Copy Link". On desktop, copy the URL from the address bar.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">2</div>
            <h3>Paste into VidMick</h3>
            <p>Paste the Instagram URL into the input above and click "Get Formats". VidMick will detect the video and show available download options.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">3</div>
            <h3>Download in HD</h3>
            <p>Choose your preferred quality and click Download. The video saves directly to your phone or computer — no watermark, no compression.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Save Instagram Reels Without Watermark</h2>
          <p className="content-text">
            VidMick downloads Instagram Reels and videos directly from Instagram's servers at their original quality — no watermarks, no compression, no re-encoding. What you download is exactly what Instagram hosts, typically up to 1080p HD.
          </p>
          <p className="content-text">
            Whether it's a viral Reel, a cooking tutorial, a travel video, or a fitness clip, VidMick makes it easy to save Instagram content to your device for offline viewing. Works on Android, iPhone, and all desktop browsers.
          </p>

          <h3 className="subsection-title">Download Instagram Reels on Android</h3>
          <p className="content-text">
            Open your Android browser, paste the Instagram Reel URL into VidMick, and tap Download. The video saves to your Downloads folder and appears in your gallery automatically. No app installation needed.
          </p>

          <h3 className="subsection-title">Download Instagram Reels on iPhone</h3>
          <p className="content-text">
            On iPhone, use Safari to open VidMick. After clicking Download, long-press the button and select "Download Linked File" to save the Reel to your Files app. From there you can move it to your Photos library.
          </p>

          <h3 className="subsection-title">Download Instagram IGTV Videos</h3>
          <p className="content-text">
            IGTV long-form videos are fully supported. Paste the IGTV URL into VidMick and download the full video in the best available resolution.
          </p>
        </section>

        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything about downloading Instagram Reels and videos</p>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="related-links">
          <h3>Also Download From</h3>
          <div className="related-grid">
            <a href="/youtube-downloader" className="related-card">
              <span>▶</span>
              <div>
                <strong>YouTube Downloader</strong>
                <p>Save videos &amp; Shorts in 4K</p>
              </div>
            </a>
            <a href="/facebook-downloader" className="related-card">
              <span>f</span>
              <div>
                <strong>Facebook Downloader</strong>
                <p>Save FB videos &amp; Reels</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/youtube-downloader">YouTube Downloader</a>
          <a href="/instagram-downloader">Instagram Downloader</a>
          <a href="/facebook-downloader">Facebook Downloader</a>
          <a href="/how-to-download-videos">How To</a>
        </div>
        <p>© {new Date().getFullYear()} VidMick. All rights reserved.</p>
      </footer>
    </>
  );
}
