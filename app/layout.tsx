import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VidMick – Free Online Video Downloader for YouTube, Instagram & Facebook",
  description:
    "Download videos from YouTube, Instagram, and Facebook for free. Save HD, 1080p, 4K videos and MP3 audio instantly. No login, no software, works on all devices.",
  metadataBase: new URL("https://vidmic.app"),
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
  alternates: { canonical: "https://vidmic.app" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="site-nav">
          <a href="/" className="nav-logo">VidMick</a>
          <div className="nav-links">
            <a href="/youtube-downloader">YouTube</a>
            <a href="/instagram-downloader">Instagram</a>
            <a href="/facebook-downloader">Facebook</a>
            <a href="/how-to-download-videos">How To</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
