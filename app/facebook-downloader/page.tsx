import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Facebook Video Downloader – Download FB Videos & Reels Free | VidMick",
  description:
    "Download Facebook videos and Reels in HD for free. Save public FB videos to your device instantly. No login, no software — paste the URL and download now.",
  keywords: [
    "facebook video downloader",
    "download facebook videos",
    "facebook reels downloader",
    "download facebook reels",
    "fb video downloader online",
    "save facebook video",
    "facebook video download free",
    "facebook video downloader hd",
    "download fb video online",
    "facebook live video downloader",
    "facebook video downloader android",
    "facebook video downloader iphone",
  ],
  alternates: { canonical: "https://vidmic.app/facebook-downloader" },
  openGraph: {
    title: "Facebook Video Downloader – Save FB Videos & Reels Free | VidMick",
    description: "Download public Facebook videos and Reels in HD. Free, fast, no account required.",
    type: "website",
    url: "https://vidmic.app/facebook-downloader",
    siteName: "VidMick",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Video Downloader – Free HD Downloads | VidMick",
    description: "Download Facebook videos and Reels in HD. Free, no login required.",
  },
};

const faqs = [
  {
    q: "How do I copy a Facebook video link?",
    a: "On desktop, click the timestamp of the post to open it on its own page and copy the URL from the address bar. On mobile, tap the three-dot menu on the post and select 'Copy link'.",
  },
  {
    q: "How do I download a Facebook video online?",
    a: "Copy the Facebook video URL, paste it into VidMick above, and click 'Get Formats'. Select your preferred quality (SD or HD) and click Download. The video saves directly to your device.",
  },
  {
    q: "Can I download private Facebook videos?",
    a: "VidMick only works with publicly accessible Facebook videos. Videos set to 'Friends only' or 'Private' cannot be downloaded without authentication.",
  },
  {
    q: "Does VidMick support Facebook Reels?",
    a: "Yes. Facebook Reels are fully supported. Copy the Reel URL and paste it into VidMick to download in HD.",
  },
  {
    q: "What video quality is available for Facebook downloads?",
    a: "Facebook typically provides SD and HD versions of videos. VidMick will show all available options so you can choose the quality that suits you.",
  },
  {
    q: "Can I download Facebook Live videos?",
    a: "Facebook Live recordings that are saved as public posts can be downloaded with VidMick after the stream has ended. Just copy the post URL and paste it in.",
  },
  {
    q: "Does VidMick work for downloading Facebook videos on mobile?",
    a: "Yes. VidMick works in any mobile browser on Android and iPhone. No app installation is required to download Facebook videos.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VidMick Facebook Downloader",
  url: "https://vidmic.app/facebook-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: "Free Facebook video downloader. Download public Facebook videos and Reels in HD. No login required.",
  featureList: [
    "Download Facebook videos in HD",
    "Download Facebook Reels",
    "Download Facebook Live recordings",
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
    { "@type": "ListItem", position: 2, name: "Facebook Downloader", item: "https://vidmic.app/facebook-downloader" },
  ],
};

export default function FacebookDownloaderPage() {
  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>Facebook Video Downloader</h1>
        <p className="subtitle">
          Download public Facebook videos &amp; Reels in HD — free, no login, works on all devices
        </p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <h2 className="section-title">How to Download Facebook Videos Online</h2>
        <p className="section-subtitle">Save any public Facebook video in three steps</p>
        <div className="steps-how">
          <div className="step-how">
            <div className="step-how-num">1</div>
            <h3>Get the Facebook video URL</h3>
            <p>On desktop, click the video timestamp to open it on its own page and copy the URL. On mobile, tap the three-dot menu on the post and choose "Copy link".</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">2</div>
            <h3>Paste into VidMick</h3>
            <p>Paste the Facebook URL into the input above and click "Get Formats". VidMick will fetch all available quality options for that video.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">3</div>
            <h3>Choose quality and save</h3>
            <p>Select SD or HD and click Download. The video saves directly to your device — no account or app required.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">The Easiest Way to Download Facebook Videos</h2>
          <p className="content-text">
            VidMick makes downloading Facebook videos simple and fast. Whether it's a funny clip, a news segment, a sports highlight, or a Facebook Reel, you can save any public Facebook video to your device in seconds using just the video URL.
          </p>
          <p className="content-text">
            VidMick works entirely in your browser — no extensions, no desktop apps, no sign-in. It's compatible with all major browsers on Android, iPhone, Windows, and Mac.
          </p>

          <h3 className="subsection-title">Download Facebook Reels</h3>
          <p className="content-text">
            Facebook Reels are short-form videos that can go viral fast. With VidMick, you can save any public Facebook Reel to your device by copying its link and pasting it above. Downloads are in HD at the original quality Facebook stores.
          </p>

          <h3 className="subsection-title">Download Facebook Videos on Android</h3>
          <p className="content-text">
            Open your Android browser, paste the Facebook video URL into VidMick, and tap Download. The video saves to your Downloads folder and appears in your gallery. No app needed.
          </p>

          <h3 className="subsection-title">Save Facebook Live Recordings</h3>
          <p className="content-text">
            Missed a live stream? If the broadcaster saved it as a public post, you can download the recording with VidMick after the stream ends. Just grab the post URL and paste it in.
          </p>
        </section>

        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything about downloading Facebook videos and Reels</p>
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
            <a href="/instagram-downloader" className="related-card">
              <span>📷</span>
              <div>
                <strong>Instagram Downloader</strong>
                <p>Save Reels without watermark</p>
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
