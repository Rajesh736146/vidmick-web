"use client";

import { useState } from "react";
import type { Platform, VideoResponse, FormatInfo } from "@/lib/types";
import { useMerge, type MergeStep } from "@/lib/useMerge";

const platforms: { id: Platform; label: string }[] = [
  { id: "yt", label: "YouTube" },
  { id: "insta", label: "Instagram" },
  { id: "fb", label: "Facebook" },
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

  return (
    <>
      <div className="platform-tabs">
        {platforms.map((p) => (
          <button
            key={p.id}
            className={platform === p.id ? "active" : ""}
            onClick={() => { setPlatform(p.id); setResult(null); setError(""); }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="input-row">
        <input
          type="url"
          placeholder={`Paste ${platforms.find((p) => p.id === platform)?.label} video URL...`}
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
          <p style={{ fontSize: "0.85rem", color: "#888", marginBottom: "1rem" }}>
            ⚠️ Download links expire quickly. Click download immediately after fetching.
          </p>
          <div className="formats-grid">
            {result.formats
              .filter((f) => f.has_video)
              .sort((a, b) => {
                // Sort: video+audio first, then by resolution/quality
                const aHasBoth = a.has_video && a.has_audio ? 1 : 0;
                const bHasBoth = b.has_video && b.has_audio ? 1 : 0;
                if (aHasBoth !== bHasBoth) return bHasBoth - aHasBoth;
                
                // Then by height (resolution)
                return (b.height ?? 0) - (a.height ?? 0);
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
