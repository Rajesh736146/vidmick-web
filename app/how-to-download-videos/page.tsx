import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Download Videos from YouTube, Instagram & Facebook | VidMick",
  description:
    "Step-by-step guide to downloading videos from YouTube, Instagram, and Facebook for free. Learn how to save HD videos to any device using VidMick.",
  alternates: { canonical: "https://vidmick.com/how-to-download-videos" },
  keywords: [
    "how to download videos online",
    "how to download youtube videos",
    "how to download instagram reels",
    "how to download facebook videos",
    "how to save youtube video",
    "how to save instagram reel",
    "how to save facebook video",
    "download video from social media",
    "save social media videos",
    "video download guide",
    "download youtube video tutorial",
    "how to download videos on android",
    "how to download videos on iphone",
  ],
  openGraph: {
    title: "How to Download Videos Online – Complete Guide | VidMick",
    description: "Learn how to download videos from YouTube, Instagram, and Facebook in HD. Free, no software needed.",
    type: "article",
    url: "https://vidmick.com/how-to-download-videos",
  },
};

export default function HowToPage() {
  return (
    <>
      <section className="hero">
        <h1>How to Download Videos Online</h1>
        <p className="subtitle">
          A complete guide to saving videos from YouTube, Instagram, and Facebook to any device
        </p>
      </section>

      <div className="main-content">
        <article className="article-content">

          <p className="content-text lead">
            Downloading videos from social media platforms used to require desktop software, browser extensions, or shady third-party apps. VidMick changes that — it's a free, browser-based video downloader that works on any device without installation.
          </p>

          {/* YouTube Section */}
          <h2 className="section-title" style={{ textAlign: "left", marginTop: "2.5rem" }}>
            How to Download YouTube Videos
          </h2>
          <p className="content-text">
            YouTube is the world's largest video platform, hosting billions of videos across every category imaginable. Here's how to save any YouTube video using VidMick:
          </p>
          <ol className="guide-list">
            <li>Open YouTube and navigate to the video you want to download.</li>
            <li>Copy the URL from your browser's address bar, or tap <strong>Share → Copy link</strong> on the YouTube mobile app.</li>
            <li>Go to <a href="/youtube-downloader">VidMick's YouTube Downloader</a> and paste the URL into the input field.</li>
            <li>Click <strong>Get Formats</strong>. VidMick will fetch all available resolutions — 360p, 480p, 720p HD, 1080p Full HD, and 4K where available.</li>
            <li>Select your preferred quality and click <strong>Download</strong>. The video saves directly to your device.</li>
          </ol>
          <p className="content-text">
            For videos where the highest quality streams are video-only (common with 1080p and above on YouTube), VidMick automatically merges the video and audio tracks so you get a complete, playable file.
          </p>

          {/* Instagram Section */}
          <h2 className="section-title" style={{ textAlign: "left", marginTop: "2.5rem" }}>
            How to Download Instagram Reels and Videos
          </h2>
          <p className="content-text">
            Instagram Reels, feed videos, and IGTV content can all be downloaded with VidMick as long as the account is public. Here's how:
          </p>
          <ol className="guide-list">
            <li>Open Instagram and find the Reel or video post you want to save.</li>
            <li>Tap the <strong>three-dot menu (⋯)</strong> on the post and select <strong>Copy Link</strong>. On desktop, copy the URL from the address bar.</li>
            <li>Go to <a href="/instagram-downloader">VidMick's Instagram Downloader</a> and paste the link.</li>
            <li>Click <strong>Get Formats</strong> and choose your preferred quality.</li>
            <li>Hit <strong>Download</strong> — the video saves to your camera roll or downloads folder.</li>
          </ol>
          <p className="content-text">
            Instagram videos are downloaded without any watermark, at the original quality Instagram stores them — typically up to 1080p for Reels.
          </p>

          {/* Facebook Section */}
          <h2 className="section-title" style={{ textAlign: "left", marginTop: "2.5rem" }}>
            How to Download Facebook Videos
          </h2>
          <p className="content-text">
            Facebook hosts a huge amount of video content — from personal clips and news segments to live stream recordings and Reels. To download a public Facebook video:
          </p>
          <ol className="guide-list">
            <li>Find the Facebook video you want to download.</li>
            <li>On desktop: click the video's timestamp to open it on its own page, then copy the URL. On mobile: tap the three-dot menu on the post and select <strong>Copy link</strong>.</li>
            <li>Go to <a href="/facebook-downloader">VidMick's Facebook Downloader</a> and paste the URL.</li>
            <li>Click <strong>Get Formats</strong> to see available SD and HD options.</li>
            <li>Select your quality and click <strong>Download</strong>.</li>
          </ol>

          {/* Tips Section */}
          <h2 className="section-title" style={{ textAlign: "left", marginTop: "2.5rem" }}>
            Tips for Downloading Videos
          </h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>⏱ Download links expire</h3>
              <p>Video stream URLs from YouTube, Instagram, and Facebook are time-limited — usually 1 to 2 minutes. If a download fails, click "Get Formats" again to get fresh links.</p>
            </div>
            <div className="tip-card">
              <h3>📶 Use a stable connection</h3>
              <p>HD and 4K video files can be large. A stable Wi-Fi connection ensures your download completes without interruption, especially on mobile.</p>
            </div>
            <div className="tip-card">
              <h3>📱 On iPhone</h3>
              <p>iOS may open the video in Safari instead of downloading it. Long-press the Download button and select "Download Linked File" to save it to your Files app.</p>
            </div>
            <div className="tip-card">
              <h3>🔒 Respect copyright</h3>
              <p>Only download videos you have the right to save — your own content, content with a Creative Commons license, or content the creator has made available for download.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-box">
            <h2>Ready to Download?</h2>
            <p>Paste any video URL and start downloading for free — no account, no software, no limits.</p>
            <a href="/" className="cta-btn">Go to VidMick Downloader →</a>
          </div>

        </article>
      </div>

      <footer>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/youtube-downloader">YouTube</a>
          <a href="/instagram-downloader">Instagram</a>
          <a href="/facebook-downloader">Facebook</a>
          <a href="/how-to-download-videos">How To</a>
        </div>
        <p>© {new Date().getFullYear()} VidMick. All rights reserved.</p>
      </footer>
    </>
  );
}
