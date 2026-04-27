import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VidMic – Download Videos from YouTube, Instagram & Facebook",
  description:
    "Free online video downloader. Paste any YouTube, Instagram, or Facebook video URL and download in your preferred quality.",
  openGraph: {
    title: "VidMic – Video Downloader",
    description: "Download videos from YouTube, Instagram & Facebook for free.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
