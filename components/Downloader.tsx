"use client";

import { useState, useEffect } from "react";
import type { Platform, VideoResponse, FormatInfo } from "@/lib/types";
import { useMerge, type MergeStep } from "@/lib/useMerge";

const platforms: { id: Platform; label: string; pattern: RegExp }[] = [
  { id: "yt", label: "YouTube", pattern: /youtube\.com|youtu\.be/i },
  { id: "insta", label: "Instagram", pattern: /instagram\.com/i },
  { id: "fb", label: "Facebook", pattern: /facebook\.com|fb\.watch/i },
];

function formatSize(bytes: number | null): string {
  if (!bytes) return "";
  if (bytes > 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
  if (bytes > 1_000) return `${(bytes / 1_000).toFixed(0)} KB`;
  return `${bytes} B`;
}

function getBestAudio(formats: FormatInfo[]): FormatInfo | null {
  return (
    formats
      .filter((f) => f.has_audio && !f.has_video && f.download_url)
      .sort((a, b) => (b.filesize ?? b.filesize_approx ?? 0) - (a.filesize ?? a.filesize_approx ?? 0))[0] ?? null
  );
}

function FormatCard({
  f, audioFormat, title, onMerge, activeMerge, currentStep, stepProgress, stepLabels,
}: {
  f: FormatInfo;
  audioFormat: FormatInfo | null;
  title: string | null;
  onMerge: (videoUrl: string, audioUrl: string, filename: string) => void;
  activeMerge: string | null;
  currentStep: MergeStep | null;
  stepProgress: number;
  stepLabels: Record<MergeStep, string>;
}) {
  const size = formatSize(f.filesize ?? f.filesize_approx);
  const label = f.quality ?? f.resolution ?? f.format_id ?? "Unknown";
  const needsMerge = f.has_video && !f.has_audio;
  const type = f.has_video && f.has_audio ? "Video+Audio" : f.has_video ? "Video only" : "Audio only";
  const filename = `${title ?? "video"}_${label}_${f.format_id ?? f.ext}.mp4`;
  const isThisMerging = activeMerge === filename;

  return (
    <div className="format-card">
      <div className="format-info">
        <span className="format-quality">
          {label}
          <span className="badge">{f.ext?.toUpperCase()}</span>
          <span className="badge">{type}</span>
          {needsMerge && <span className="badge merge-badge">+Audio merge</span>}
          {!needsMerge && f.has_video && f.has_audio && (
            <span className="badge recommended-badge">Recommended</span>
          )}
        </span>
        <span className="format-meta">
          {[f.resolution, f.fps ? `${f.fps}fps` : null, size].filter(Boolean).join(" · ")}
        </span>

        {isThisMerging && currentStep && (
          <div className="merge-progress">
            <div className="steps-container">
              {[1, 3].map((step) => {
                const s = step as MergeStep;
                const isActive = currentStep === s;
                const isDone = currentStep > s;
                const displayNum = step === 1 ? 1 : 2;
                return (
                  <div key={s} className={`step ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}>
                    <div className="step-number">{displayNum}</div>
                    <div className="step-label">{stepLabels[s]}</div>
                    {isActive && <div className="step-progress">{stepProgress}%</div>}
                  </div>
                );
              })}
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${currentStep === 1 ? stepProgress / 2 : 50 + stepProgress / 2}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {needsMerge && audioFormat ? (
        <button
          className="download-btn"
          disabled={!!activeMerge}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!activeMerge) {
              console.log("[UI] Merge button clicked for:", filename);
              onMerge(f.download_url!, audioFormat.download_url!, filename);
            }
          }}
        >
          {isThisMerging ? "Working..." : "Download"}
        </button>
      ) : f.download_url ? (
        <a 
          className="download-btn" 
          href={f.download_url} 
          download={filename}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download
        </a>
      ) : null}
    </div>
  );
}

export default function Downloader() {
  const [platform, setPlatform] = useState<Platform>("yt");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<VideoResponse | null>(null);
  const [activeMerge, setActiveMerge] = useState<string | null>(null);

  const { merge, merging, currentStep, stepProgress, stepLabels } = useMerge();

  // Auto-detect platform from URL
  useEffect(() => {
    if (!url.trim()) return;
    
    for (const p of platforms) {
      if (p.pattern.test(url)) {
        setPlatform(p.id);
        break;
      }
    }
  }, [url]);

  async function handleFetch() {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/formats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), platform }),
      });
      const data = await res.json();
      if (!res.ok) setError(data?.error ?? "Something went wrong.");
      else setResult(data);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleMerge(videoUrl: string, audioUrl: string, filename: string) {
    if (activeMerge) return;
    console.log("[handleMerge] Starting:", filename);
    console.log("[handleMerge] Video URL:", videoUrl.substring(0, 100));
    console.log("[handleMerge] Audio URL:", audioUrl.substring(0, 100));
    
    setActiveMerge(filename);
    try {
      await merge(videoUrl, audioUrl, filename);
      console.log("[handleMerge] Success!");
    } catch (e: any) {
      console.error("[handleMerge] Error:", e);
      alert(`Merge failed: ${e?.message ?? "Unknown error"}\n\nThe download URLs may have expired. Try fetching the video again.`);
    } finally {
      setActiveMerge(null);
    }
  }

  const bestAudio = result ? getBestAudio(result.formats) : null;

  // Filter formats based on platform
  const filteredFormats = result?.formats.filter((f) => {
    // Show video formats
    if (f.has_video) {
      // For YouTube, only show video+audio formats
      if (platform === "yt") return f.has_audio;
      // For Instagram/Facebook, show all video formats
      return true;
    }
    // Also show audio-only formats
    if (f.has_audio && !f.has_video) return true;
    return false;
  }) ?? [];

  return (
    <>
      <div className="input-row">
        <input
          type="url"
          placeholder="Paste YouTube, Instagram, or Facebook video URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleFetch()}
        />
        <button onClick={handleFetch} disabled={loading || !url.trim()}>
          {loading ? "Fetching..." : "Get Formats"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {result && (
        <>
          {result.title && <p className="video-title">{result.title}</p>}
          <p className="info-message">
            ⚠️ Download links expire in 1-2 minutes. Click download immediately. If it fails, fetch the video again.
          </p>
          <div className="formats-grid">
            {filteredFormats
              .sort((a, b) => {
                // Video formats first, audio formats last
                if (a.has_video && !b.has_video) return -1;
                if (!a.has_video && b.has_video) return 1;
                
                // Among videos: video+audio first, then by resolution
                if (a.has_video && b.has_video) {
                  const aHasBoth = a.has_audio ? 1 : 0;
                  const bHasBoth = b.has_audio ? 1 : 0;
                  if (aHasBoth !== bHasBoth) return bHasBoth - aHasBoth;
                  return (b.height ?? 0) - (a.height ?? 0);
                }
                
                // Among audio: sort by filesize
                return (b.filesize ?? b.filesize_approx ?? 0) - (a.filesize ?? a.filesize_approx ?? 0);
              })
              .map((f, i) => (
                <FormatCard
                  key={f.format_id ?? i}
                  f={f}
                  audioFormat={bestAudio}
                  title={result.title}
                  onMerge={handleMerge}
                  activeMerge={activeMerge}
                  currentStep={currentStep}
                  stepProgress={stepProgress}
                  stepLabels={stepLabels}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}
