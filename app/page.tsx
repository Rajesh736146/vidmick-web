import type { Metadata } from "next";
import Downloader from "@/components/Downloader";
import FaqItem from "@/components/FaqItem";

export const metadata: Metadata = {
  title: "VidMick – Download Videos from YouTube, Instagram & Facebook",
  description:
    "Free online video downloader. Download HD videos from YouTube, Instagram, and Facebook. No software needed. Fast, free, and unlimited.",
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
    a: "Available qualities depend on the original video. We show all available formats including HD, Full HD, and audio-only options.",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Download Videos Online</h1>
        <p className="subtitle">
          YouTube · Instagram · Facebook — HD quality, free, no software needed
        </p>
        <div className="input-section">
          <Downloader />
        </div>
      </section>

      <div className="main-content">

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
        <p className="section-subtitle">Everything you need in a video downloader</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Downloads</h3>
            <p>Videos are processed and delivered at full speed. No waiting, no queues.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Multiple Formats</h3>
            <p>Choose from all available resolutions including HD, Full HD, and audio-only MP3.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>All Devices</h3>
            <p>Works on Android, iPhone, tablet, and desktop. No app installation required.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Safe & Private</h3>
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
          <a href="#">Home</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} VidMick. All rights reserved. VidMick is not affiliated with YouTube, Instagram, or Facebook.</p>
      </footer>
    </>
  );
}
