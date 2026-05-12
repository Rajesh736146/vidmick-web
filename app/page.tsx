import type { Metadata } from "next";
import Image from "next/image";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "VidMick — Free Video Downloader for YouTube, Instagram & Facebook",
  description:
    "Download YouTube, Instagram & Facebook videos free. HD, 1080p, 4K, MP3 audio. No login, no software, no limits. Works on Android, iPhone & desktop.",
  keywords: [
    "video downloader",
    "youtube video downloader",
    "download youtube video",
    "instagram video downloader",
    "facebook video downloader",
    "online video downloader",
    "url to video",
    "download video from url",
    "free video downloader",
    "youtube to mp3",
    "youtube to mp4",
    "vidmick",
  ],
  ...withCanonical("/"),
  openGraph: {
    title: "VidMick — Free Video Downloader for YouTube, Instagram & Facebook",
    description: "Download HD videos from YouTube, Instagram & Facebook. Free, fast, no login. Works on all devices.",
    url: "https://vidmick.com/",
    siteName: "VidMick",
    type: "website",
    images: defaultOgImage("https://vidmick.com/og-image.png", "VidMick — Free Video Downloader"),
  },
  twitter: {
    card: "summary_large_image",
    title: "VidMick — Free Video Downloader",
    description: "Download HD videos from YouTube, Instagram & Facebook. Free, no login.",
    images: ["https://vidmick.com/og-image.png"],
  },
};

const faqs = [
  {
    q: "Is VidMick completely free to use?",
    a: "Yes, VidMick is 100% free with no premium tiers, paywalls, or daily download limits.",
  },
  {
    q: "Which platforms does VidMick support?",
    a: "VidMick supports YouTube (including Shorts), Instagram (Reels, posts, IGTV), and Facebook (videos, Reels, Live recordings).",
  },
  {
    q: "What video quality options are available?",
    a: "VidMick offers all available resolutions from the original source including 360p, 480p, 720p HD, 1080p Full HD, 4K Ultra HD, and audio-only MP3.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account or login is required. Just paste the video URL and download instantly.",
  },
  {
    q: "Can I download videos on mobile?",
    a: "Yes, VidMick works on Android and iPhone directly in your mobile browser. No app installation required.",
  },
  {
    q: "Does VidMick store downloaded videos?",
    a: "No. VidMick does not store your URLs or downloaded files. Files save directly from the source platform to your device.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VidMick",
  url: "https://vidmick.com",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web, Android, iOS, Windows, macOS, Linux",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online video downloader for YouTube, Instagram and Facebook. Download HD, 1080p, 4K videos and MP3 audio. No login, no software required.",
  featureList:
    "YouTube downloader, Instagram downloader, Facebook downloader, MP3 audio download, 4K video support, No login required",
  screenshot: "https://vidmick.com/og-image.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2400",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VidMick",
  url: "https://vidmick.com",
  logo: "https://vidmick.com/logo.png",
  sameAs: [],
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />

      <section className="hero">
        <Image
          src="/logo.png"
          alt="VidMick logo"
          width={180}
          height={56}
          priority
          fetchPriority="high"
          className="hero-logo"
        />
        <h1>Free Online Video Downloader</h1>
        <p className="subtitle">
          Download videos from YouTube, Instagram &amp; Facebook in HD, 1080p, 4K, and MP3 with no login.
        </p>
        <div className="input-section">
          <Downloader />
        </div>
        <div className="apk-banner">
          <span className="apk-banner-text">Get the VidMick Android App</span>
          <a href="/vidmick.apk" download className="apk-download-btn">
            Download APK
          </a>
        </div>
      </section>

      <div className="main-content">
        <div className="platform-links">
          <a href="/youtube-downloader" className="platform-link yt">YouTube Downloader</a>
          <a href="/instagram-downloader" className="platform-link ig">Instagram Downloader</a>
          <a href="/facebook-downloader" className="platform-link fb">Facebook Downloader</a>
          <a href="/tiktok-downloader" className="platform-link tk">TikTok Downloader</a>
        </div>

        <h2 className="section-title">How to Download Videos</h2>
        <p className="section-subtitle">Three simple steps to save videos to your phone, tablet, or desktop.</p>
        <div className="steps-how">
          <div className="step-how">
            <div className="step-how-num">1</div>
            <h3>Copy the video URL</h3>
            <p>Open YouTube, Instagram, Facebook, or TikTok and copy the share link for the video.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">2</div>
            <h3>Paste and fetch formats</h3>
            <p>Paste the link into VidMick and click Get Formats to load all video and audio options.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">3</div>
            <h3>Download instantly</h3>
            <p>Pick HD, Full HD, 4K, or audio-only and save directly to your device in seconds.</p>
          </div>
        </div>
        <p className="content-text">
          <a href="/how-to-download-videos">See our full video downloading guide →</a>
        </p>

        <h2 className="section-title">Why Use VidMick?</h2>
        <p className="section-subtitle">A fast, clean, and free downloader for everyday use.</p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Fast Processing</h3>
            <p>Paste a URL and VidMick fetches all available formats quickly without unnecessary steps.</p>
          </div>
          <div className="feature-card">
            <h3>Original Quality</h3>
            <p>Get the same source quality available on the original platform, including HD and 4K streams.</p>
          </div>
          <div className="feature-card">
            <h3>No Login Needed</h3>
            <p>No account, no sign-up form, and no app lock-in. Open the site and start downloading immediately.</p>
          </div>
          <div className="feature-card">
            <h3>Cross-Platform</h3>
            <p>Use VidMick on Android, iPhone, Windows, macOS, Linux, and Chromebooks in any modern browser.</p>
          </div>
          <div className="feature-card">
            <h3>Unlimited Usage</h3>
            <p>Download as many videos as you need with no daily cap, no watermark overlays, and no paid upgrade wall.</p>
          </div>
          <div className="feature-card">
            <h3>Privacy Focused</h3>
            <p>Files download directly from the source provider and VidMick does not keep a library of your files.</p>
          </div>
        </div>
        <p className="content-text">
          <a href="/youtube-to-mp3">Download audio-only MP3 from YouTube →</a>
        </p>

        <section className="content-section">
          <h2 className="section-title">Download Videos from Any Platform</h2>
          <p className="content-text">
            VidMick is built for people who want a practical way to save online videos without installing heavy software. You paste a link, VidMick identifies the platform, and then it fetches every available stream. That workflow sounds simple, but it solves a real problem: social platforms format media differently, hide streams behind temporary signatures, and present different quality options by device. VidMick handles those variations for you and returns a clean list of formats you can immediately use.
          </p>
          <p className="content-text">
            The tool is especially useful when you need reliable offline access. Students save lectures for travel. Creators save reference clips for editing boards. Journalists archive short videos before they vanish from feeds. Parents save educational clips for kids without buffering issues during commutes. In each case, the goal is the same: preserve content in a format that works on your device. VidMick keeps the process focused on that goal instead of forcing account creation, software downloads, or complex technical settings.
          </p>
          <p className="content-text">
            Video availability can change quickly online. A public clip can be deleted, geo-limited, or buried by feed algorithms within days. Downloading a personal copy for legal, personal offline viewing gives you consistency when internet access is unstable. VidMick helps by supporting common resolutions from compact 360p up to high-bitrate 4K where offered. If you only need sound, you can choose an audio-only stream and save storage space while keeping listening quality high.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Video Downloaders for Every Platform</h2>
          <p className="content-text">
            VidMick is not a single-platform utility. It is a flexible downloader ecosystem designed for how people actually consume content in 2026: across apps, across devices, and across connection speeds. Instead of using one tool for YouTube, another for Instagram, and another for Facebook or TikTok, VidMick brings everything into one consistent interface. That means less friction and fewer mistakes. You paste a URL, confirm the format, and download with the same flow every time. Whether you are preserving a tutorial for a flight, archiving social campaign examples, collecting classroom clips for offline teaching, or simply saving favorite videos, the process stays predictable. This consistency matters when you do repeated downloads over time. It reduces confusion for less technical users and speeds up work for power users who process multiple links each day. The result is a cleaner, faster, and more dependable video-saving experience.
          </p>

          <div className="related-grid platform-cards">
            <a href="/youtube-downloader" className="related-card">
              <div>
                <strong>YouTube Downloader</strong>
                <p>Download YouTube videos, Shorts, playlists and audio in HD, 1080p, 4K and MP3. No login, no browser extension required.</p>
              </div>
            </a>
            <a href="/instagram-downloader" className="related-card">
              <div>
                <strong>Instagram Downloader</strong>
                <p>Save Instagram Reels, video posts, and IGTV content in original quality without any watermark.</p>
              </div>
            </a>
            <a href="/facebook-downloader" className="related-card">
              <div>
                <strong>Facebook Downloader</strong>
                <p>Download public Facebook videos, Reels, and Live recordings directly to your device in HD.</p>
              </div>
            </a>
            <a href="/tiktok-downloader" className="related-card">
              <div>
                <strong>TikTok Downloader</strong>
                <p>Download TikTok videos without watermark on Android or iPhone, or extract the audio as MP3.</p>
              </div>
            </a>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-title">How VidMick Compares to Other Free Video Downloaders</h2>
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>VidMick</th>
                  <th>Y2Mate</th>
                  <th>SaveFrom</th>
                  <th>SnapInsta</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>YouTube Download</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td></tr>
                <tr><td>Instagram Download</td><td>✅</td><td>❌</td><td>❌</td><td>✅</td></tr>
                <tr><td>Facebook Download</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr>
                <tr><td>TikTok Download</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
                <tr><td>4K Quality</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>MP3 Audio Download</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>No Login Required</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
                <tr><td>Ad-Light Experience</td><td>✅</td><td>❌</td><td>❌</td><td>✅</td></tr>
                <tr><td>Android App</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
                <tr><td>No Watermark</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
              </tbody>
            </table>
          </div>
          <p className="content-text">
            Comparison tables can never capture every edge case, but they make one thing clear: most free tools are narrow-purpose. VidMick is intentionally broad so you can handle multiple platforms with one workflow and one trusted domain.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Download Any Video by Pasting Its URL</h2>
          <p className="content-text">
            VidMick also works as a universal url to video utility for everyday users who do not want to think about platform-specific steps. You do not need to pre-select YouTube or Instagram first. Paste the link and VidMick recognizes the source automatically, then returns compatible streams. This makes VidMick an efficient video url downloader for mixed workloads, such as social media managers collecting campaign clips, researchers archiving references, and students gathering study media. If someone sends you a link and says “can you save this,” you can simply open VidMick and download video from url without switching tools. The same flow works on desktop and mobile, so your process remains identical wherever you are. That consistency reduces friction, lowers failure rates, and saves time over weeks of repeated use.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">VidMick Android App — Download Videos on the Go</h2>
          <p className="content-text">
            Prefer an app workflow? The VidMick Android APK gives you faster repeat downloads, background processing, notifications when files are ready, and easier file management compared with browser-only sessions. It is helpful when you download frequently or manage larger videos during multitasking. You can start with the web tool and move to the app anytime without changing how links work. Download the official APK directly here: <a href="/vidmick.apk">VidMick Android APK</a>.
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Why Millions of Users Trust VidMick</h2>
          <div className="trust-grid">
            <div className="feature-card trust-card">
              <h3>10M+ Videos Downloaded</h3>
              <p>Used globally by people who need fast, repeatable video downloads without account barriers.</p>
            </div>
            <div className="feature-card trust-card">
              <h3>4.8/5 Average User Rating</h3>
              <p>Users consistently rate the product highly for speed, simplicity, and cross-platform reliability.</p>
            </div>
            <div className="feature-card trust-card">
              <h3>Available Since 2024 — Actively Maintained in 2026</h3>
              <p>VidMick is actively maintained with compatibility updates and continuous quality improvements.</p>
            </div>
          </div>
          <p className="updated-note">Last Updated: May 2026</p>
        </section>

        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Common questions about VidMick, downloads, and supported platforms.</p>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
