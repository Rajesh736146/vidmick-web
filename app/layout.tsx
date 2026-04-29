import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VidMick – Download Videos from YouTube, Instagram & Facebook",
  description:
    "Free online video downloader. Download HD videos from YouTube, Instagram, and Facebook. No software needed. Fast, free, and unlimited.",
  openGraph: {
    title: "VidMick – Video Downloader",
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
