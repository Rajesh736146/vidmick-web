import Downloader from "@/components/Downloader";

export default function Home() {
  return (
    <main className="container">
      <h1>VidMick Downloader</h1>
      <p className="subtitle">
        Download videos from YouTube, Instagram, and Facebook in HD quality. Fast, free, and unlimited.
      </p>
      <div className="input-section">
        <Downloader />
      </div>
    </main>
  );
}
