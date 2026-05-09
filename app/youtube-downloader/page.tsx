import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "YouTube Video Downloader – Download YouTube Videos & Shorts Free | VidMick",
  description:
    "Download YouTube videos and Shorts in HD, 1080p, 4K, or MP3 audio for free. No login, no software. Paste any YouTube URL and save instantly — works on Android & iPhone.",
  keywords: [
    "youtube video downloader",
    "download youtube videos free",
    "youtube to mp4",
    "youtube to mp3",
    "youtube shorts downloader",
    "download youtube shorts",
    "youtube hd downloader",
    "save youtube video",
    "youtube 1080p downloader",
    "youtube 4k downloader",
    "online youtube downloader",
    "youtube downloader no login",
    "youtube video download online",
    "how to download youtube videos",
    "youtube downloader free no software",
    "download youtube video to phone",
    "youtube mp4 downloader online",
    "youtube audio downloader",
    "download youtube shorts on android",
    "download youtube shorts on iphone",
    "youtube video downloader android",
    "youtube video downloader iphone",
    "best youtube downloader online",
    "fast youtube downloader",
    "youtube downloader 2024",
  ],
  alternates: { canonical: "https://vidmick.com/youtube-downloader" },
  openGraph: {
    title: "YouTube Video Downloader – Free HD, 4K & MP3 Downloads | VidMick",
    description: "Save YouTube videos in any quality — HD, 1080p, 4K, or MP3 audio. Free, fast, no account needed.",
    type: "website",
    url: "https://vidmick.com/youtube-downloader",
    siteName: "VidMick",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Video Downloader – Free HD Downloads | VidMick",
    description: "Download YouTube videos in HD, 1080p, 4K or MP3. Free, no login required.",
  },
};

const faqs = [
  {
    q: "How do I download a YouTube video with VidMick?",
    a: "Copy the YouTube video URL from your browser or the YouTube app share menu. Paste it into the input above and click 'Get Formats'. Choose your preferred quality and hit Download.",
  },
  {
    q: "Can I download YouTube videos in 1080p or 4K?",
    a: "Yes. VidMick fetches all available resolutions directly from YouTube, including 720p, 1080p, and 4K where available. Higher resolutions may require an audio merge step which VidMick handles automatically.",
  },
  {
    q: "How do I download YouTube Shorts?",
    a: "YouTube Shorts work exactly like regular videos. Copy the Shorts URL (it looks like youtube.com/shorts/...) and paste it into VidMick. All available formats will appear for download.",
  },
  {
    q: "Can I download just the audio from a YouTube video?",
    a: "Absolutely. VidMick shows audio-only formats so you can save any YouTube video as an audio file — perfect for music, podcasts, and lectures.",
  },
  {
    q: "Is it safe to download YouTube videos?",
    a: "VidMick does not store your URLs or any video data. Downloads go directly from YouTube's servers to your device. Always respect copyright and YouTube's terms of service.",
  },
  {
    q: "Why do YouTube download links expire quickly?",
    a: "YouTube generates time-limited signed URLs for video streams. Links are typically valid for 1–2 minutes. If a link expires, click 'Get Formats' again to refresh.",
  },
  {
    q: "Does VidMick work on Android and iPhone?",
    a: "Yes. VidMick is a browser-based tool that works on all devices including Android phones, iPhones, tablets, and desktop computers. No app installation needed.",
  },
];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VidMick YouTube Downloader",
  url: "https://vidmick.com/youtube-downloader",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: "Free YouTube video downloader. Download YouTube videos in HD, 1080p, 4K, or MP3 audio. No login required.",
  featureList: [
    "Download YouTube videos in HD, 1080p, 4K",
    "Download YouTube Shorts",
    "YouTube to MP3 audio download",
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
    { "@type": "ListItem", position: 2, name: "YouTube Downloader", item: "https://vidmick.com/youtube-downloader" },
  ],
};

export default function YouTubeDownloaderPage() {
  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>YouTube Video Downloader</h1>
        <p className="subtitle">
          Download YouTube videos &amp; Shorts in HD, 1080p, 4K, or MP3 — free, no login required
        </p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">
        <h2 className="section-title">How to Download YouTube Videos</h2>
        <p className="section-subtitle">Save any YouTube video or Short in three easy steps</p>
        <div className="steps-how">
          <div className="step-how">
            <div className="step-how-num">1</div>
            <h3>Copy the YouTube URL</h3>
            <p>Go to YouTube, open the video or Short you want to save, and copy the URL from the address bar or tap Share → Copy Link on mobile.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">2</div>
            <h3>Paste and fetch formats</h3>
            <p>Paste the link into the box above and click "Get Formats". VidMick will instantly show all available resolutions and audio options.</p>
          </div>
          <div className="step-how">
            <div className="step-how-num">3</div>
            <h3>Pick quality and download</h3>
            <p>Select HD, Full HD, 4K, or audio-only and click Download. The file saves directly to your device — no app needed.</p>
          </div>
        </div>

        <section className="content-section">
          <h2 className="section-title">Download YouTube Videos in Any Quality</h2>
          <p className="content-text">
            VidMick is a fast, free YouTube video downloader that works entirely in your browser. Whether you want to save a tutorial, a music video, a documentary, or a short clip, VidMick fetches every available format directly from YouTube — including 360p, 480p, 720p HD, 1080p Full HD, and 4K Ultra HD where the original video supports it.
          </p>
          <p className="content-text">
            No registration, no browser extension, and no desktop software required. Just paste the YouTube URL and download in seconds. VidMick works on all devices — Android, iPhone, Windows, Mac, and Linux.
          </p>

          <h3 className="subsection-title">Download YouTube Shorts</h3>
          <p className="content-text">
            YouTube Shorts are fully supported. Paste any Shorts URL (youtube.com/shorts/...) into VidMick and download the vertical video in the best available quality. Great for saving trending Shorts to your camera roll.
          </p>

          <h3 className="subsection-title">YouTube to MP3 — Audio-Only Downloads</h3>
          <p className="content-text">
            Want just the audio? VidMick detects all audio-only streams from YouTube videos. This is ideal for saving music, podcasts, interviews, and lectures as audio files. Simply select the audio format from the list and download.
          </p>

          <h3 className="subsection-title">Download YouTube Videos on Android &amp; iPhone</h3>
          <p className="content-text">
            VidMick works on mobile browsers without any app installation. On Android, downloaded files go to your Downloads folder. On iPhone, long-press the Download button in Safari and select "Download Linked File" to save to your Files app.
          </p>
        </section>

        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything about downloading YouTube videos and Shorts</p>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="related-links">
          <h3>Also Download From</h3>
          <div className="related-grid">
            <a href="/instagram-downloader" className="related-card">
              <span>📷</span>
              <div>
                <strong>Instagram Downloader</strong>
                <p>Save Reels, videos &amp; IGTV</p>
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
