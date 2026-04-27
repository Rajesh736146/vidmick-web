import Downloader from "@/components/Downloader";

export default function Home() {
  return (
    <main className="container">
      <h1>VidMic Downloader</h1>
      <p className="subtitle">
        Paste a YouTube, Instagram, or Facebook video URL to get available download formats.
      </p>
      <Downloader />
    </main>
  );
}
