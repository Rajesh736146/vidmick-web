import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "VidMick – Free Online Video Downloader for YouTube, Instagram & Facebook",
  description:
    "Download videos from YouTube, Instagram, and Facebook for free. Save HD, 1080p, 4K videos and MP3 audio instantly. No login, no software, works on all devices.",
  keywords: [
    "video downloader",
    "youtube video downloader",
    "instagram video downloader",
    "facebook video downloader",
    "download youtube videos free",
    "instagram reels downloader",
    "youtube shorts downloader",
    "online video downloader",
    "free video downloader",
    "HD video downloader",
  ],
  alternates: { canonical: "https://vidmic.app" },
  openGraph: {
    title: "VidMick – Free Online Video Downloader",
    description: "Download HD videos from YouTube, Instagram & Facebook. Free, fast, no login needed.",
    type: "website",
    url: "https://vidmic.app",
    siteName: "VidMick",
  },
  twitter: {
    card: "summary_large_image",
    title: "VidMick – Free Online Video Downloader",
    description: "Download HD videos from YouTube, Instagram & Facebook. Free, fast, no login needed.",
  },
};

const faqs = [
  {
    q: "Is VidMick completely free to use?",
    a: "Yes, VidMick is 100% free. No subscriptions, no hidden fees. We support the service through minimal advertising.",
  },
  {
    q: "Which platforms does VidMick support?",
    a: "VidMick supports YouTube, Instagram, and Facebook. Paste any video URL from these platforms to get started.",
  },
  {
    q: "What video quality options are available?",
    a: "Available qualities depend on the original video. We show all available formats including HD, Full HD, 4K, and audio-only options.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account or login required. Just paste the video URL and download instantly.",
  },
  {
    q: "Can I download videos on mobile?",
    a: "Yes. VidMick works on all devices — Android, iPhone, tablet, and desktop — directly in your browser.",
  },
  {
    q: "Does VidMick store downloaded videos?",
    a: "No. VidMick does not host or store any videos. All content is served directly from the original platform's servers to your device.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VidMick",
  url: "https://vidmic.app",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free online video downloader. Download HD videos from YouTube, Instagram, and Facebook. No software needed.",
  featureList: [
    "Download YouTube videos in HD, 1080p, 4K",
    "Download Instagram Reels and videos",
    "Download Facebook videos and Reels",
    "Audio-only MP3 downloads",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://vidmic.app" },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="hero">
        <h1>Free Online Video Downloader</h1>
        <p className="subtitle">
          Download videos from YouTube, Instagram &amp; Facebook — HD, 1080p, 4K, free, no login
        </p>
        <div className="input-section">
          <Downloader />
        </div>
        <div className="apk-banner">
          <span className="apk-banner-text">📱 Get the Android App</span>
          <a href="/vidmick.apk" download className="apk-download-btn">
            ⬇ Download APK
          </a>
        </div>
      </section>

      <div className="main-content">

        {/* Platform links */}
        <div className="platform-links">
          <a href="/youtube-downloader" className="platform-link yt">
            <span>▶</span> YouTube Downloader
          </a>
          <a href="/instagram-downloader" className="platform-link ig">
            <span>📷</span> Instagram Downloader
          </a>
          <a href="/facebook-downloader" className="platform-link fb">
            <span>f</span> Facebook Downloader
          </a>
        </div>

        {/* How to */}
        <h2 className="section-title">How to Download Videos</h2>
        <p className="section-subtitle">Three simple steps to save any video to your device</p>
        <div className="steps-how">
          <div className="step-how">
            <div className="step-how-num">1</div>
            <h3>Copy the video URL</h3>
            <p>Open YouTube, Instagram, or Facebook, find the video you want, and copy its link from the address bar or share menu.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">2</div>
            <h3>Paste and fetch formats</h3>
            <p>Paste the URL into the input above and click "Get Formats". VidMick will fetch all available quality options instantly.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">3</div>
            <h3>Choose quality and download</h3>
            <p>Pick your preferred quality — HD, Full HD, or audio only — and click Download. The file saves directly to your device.</p>
          </div>
        </div>

        {/* Features */}
        <h2 className="section-title">Why Use VidMick?</h2>
        <p className="section-subtitle">Everything you need in a free video downloader</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Downloads</h3>
            <p>Videos are processed and delivered at full speed. No waiting, no queues.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Multiple Formats</h3>
            <p>Choose from all available resolutions including HD, Full HD, 4K, and audio-only MP3.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>All Devices</h3>
            <p>Works on Android, iPhone, tablet, and desktop. No app installation required.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Safe &amp; Private</h3>
            <p>We don't store your URLs or downloaded files. Everything stays between you and the platform.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♾️</div>
            <h3>Unlimited</h3>
            <p>No daily limits, no caps. Download as many videos as you need, whenever you want.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🆓</div>
            <h3>Always Free</h3>
            <p>VidMick is and will always be free to use. No premium tiers or paywalls.</p>
          </div>
        </div>

        {/* SEO content block */}
        <section className="content-section">
          <h2 className="section-title">Download Videos from Any Platform</h2>
          <p className="content-text">
            VidMick is a free online video downloader that lets you save videos from YouTube, Instagram, and Facebook directly to your device — no software installation, no browser extension, and no account required.
          </p>
          <p className="content-text">
            Whether you want to download a <a href="/youtube-downloader">YouTube video</a> in 4K, save an <a href="/instagram-downloader">Instagram Reel</a> without a watermark, or grab a <a href="/facebook-downloader">Facebook video</a> for offline viewing, VidMick handles it all in seconds. Just paste the URL, pick your quality, and download.
          </p>
          <p className="content-text">
            VidMick supports YouTube Shorts, YouTube videos, Instagram Reels, Instagram posts, Facebook Reels, Facebook videos, and Facebook Live recordings. It works on Android, iPhone, Windows, Mac, and Linux — any device with a modern browser.
          </p>
        </section>

        {/* FAQ */}
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Common questions about VidMick</p>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

      </div>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/youtube-downloader">YouTube Downloader</a>
          <a href="/instagram-downloader">Instagram Downloader</a>
          <a href="/facebook-downloader">Facebook Downloader</a>
          <a href="/how-to-download-videos">How To</a>
        </div>
        <p>© {new Date().getFullYear()} VidMick. All rights reserved. VidMick is not affiliated with YouTube, Instagram, or Facebook.</p>
      </footer>
    </>
  );
}
