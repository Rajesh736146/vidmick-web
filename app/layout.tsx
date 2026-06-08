import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://vidmick.com"),
  title: "VidMick — Free Video Downloader for YouTube, Instagram & Facebook",
  description:
    "Download YouTube, Instagram & Facebook videos free. HD, 1080p, 4K, MP3 audio. No login, no software, no limits. Works on Android, iPhone & desktop.",
  openGraph: {
    title: "VidMick — Free Video Downloader for YouTube, Instagram & Facebook",
    description: "Download HD videos from YouTube, Instagram & Facebook. Free, fast, no login. Works on all devices.",
    type: "website",
    url: "https://vidmick.com/",
    siteName: "VidMick",
    images: defaultOgImage(),
  },
  twitter: {
    card: "summary_large_image",
    title: "VidMick — Free Video Downloader",
    description: "Download HD videos from YouTube, Instagram & Facebook. Free, no login.",
    images: ["https://vidmick.com/og-image.png"],
  },
  alternates: {
    canonical: "https://vidmick.com/",
  },
  verification: { google: "Vh2nyJuyt21kR633-sVPCmMqpg2s8FfhAdHvq14LyOU" },
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
            <a href="/tiktok-downloader">TikTok</a>
            <a href="/blog">Blog</a>
          </div>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
