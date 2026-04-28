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
  f, audioFormat, title, onMerge, activeMerge, currentStep, stepProgress, stepLabels, sourceUrl, platform,
}: {
  f: FormatInfo;
  audioFormat: FormatInfo | null;
  title: string | null;
  onMerge: (videoUrl: string, audioUrl: string, filename: string, videoFormatId: string, audioFormatId: string) => void;
  activeMerge: string | null;
  currentStep: MergeStep | null;
  stepProgress: number;
  stepLabels: Record<MergeStep, string>;
  sourceUrl: string;
  platform: Platform;
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
              onMerge(f.download_url!, audioFormat.download_url!, filename, f.format_id ?? "", audioFormat.format_id ?? "");
            }
          }}
        >
          {isThisMerging ? "Working..." : "Download"}
        </button>
      ) : f.download_url ? (
        <a
          className="download-btn"
          href={`/api/download?videoUrl=${encodeURIComponent(f.download_url)}&sourceUrl=${encodeURIComponent(sourceUrl)}&platform=${platform}&formatId=${encodeURIComponent(f.format_id ?? "")}&filename=${encodeURIComponent(filename)}`}
          download={filename}
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
  const [fetchTime, setFetchTime] = useState<number | null>(null);

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
      else {
        setResult(data);
        setFetchTime(Date.now());
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleMerge(videoUrl: string, audioUrl: string, filename: string, videoFormatId: string, audioFormatId: string) {
    if (activeMerge) return;
    setActiveMerge(filename);
    try {
      await merge(videoUrl, audioUrl, filename, url.trim(), platform, videoFormatId, audioFormatId);
    } catch (e: any) {
      console.error("[handleMerge] Error:", e);
      alert(`Merge failed: ${e?.message ?? "Unknown error"}`);
    } finally {
      setActiveMerge(null);
    }
  }

  const bestAudio = result ? getBestAudio(result.formats) : null;

  // Filter formats based on platform
  const filteredFormats = result?.formats.filter((f) => {
    // Show video formats
    if (f.has_video) {
      if (platform === "yt") {
        // For YouTube: check file size
        const fileSize = f.filesize ?? f.filesize_approx ?? 0;
        const fileSizeMB = fileSize / (1024 * 1024);
        
        if (fileSizeMB > 50) {
          // Over 50MB: only show video+audio formats
          return f.has_audio;
        } else {
          // Under 50MB: show all video formats (including merge option)
          return true;
        }
      }
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
          <div className="video-info">
            {result.thumbnail && (
              <img
                src={result.thumbnail}
                alt={result.title ?? "Video thumbnail"}
                className="video-thumbnail"
              />
            )}
            {result.title && <p className="video-title">{result.title}</p>}
          </div>
          <p className="info-message">
            ⚠️ Download links are valid for 1-2 minutes. Download immediately or click "Get Formats" again for fresh links.
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
                  sourceUrl={url}
                  platform={platform}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}
