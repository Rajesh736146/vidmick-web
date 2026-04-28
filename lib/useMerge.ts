"use client";

import { useRef, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

export type MergeStep = 1 | 2 | 3;

export function useMerge() {
  const ffmpegRef = useRef<FFmpeg | null>(null);
  const [currentStep, setCurrentStep] = useState<MergeStep | null>(null);
  const [stepProgress, setStepProgress] = useState(0);

  const merging = currentStep !== null;

  const stepLabels: Record<MergeStep, string> = {
    1: "Downloading video & audio",
    2: "Downloading audio",
    3: "Merging & saving",
  };

  async function getFFmpeg(): Promise<FFmpeg> {
    if (ffmpegRef.current?.loaded) return ffmpegRef.current;

    const ff = new FFmpeg();
    const base = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";

    ff.on("progress", ({ progress: p }) => setStepProgress(Math.round(p * 100)));
    ff.on("log", ({ message }) => console.log("[ffmpeg]", message));

    await ff.load({
      coreURL: await toBlobURL(`${base}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(`${base}/ffmpeg-core.wasm`, "application/wasm"),
    });

    ffmpegRef.current = ff;
    return ff;
  }

  // Use /api/download which fetches fresh URL and streams from same server IP
  async function fetchViaDownloadRoute(
    params: {
      videoUrl: string;
      sourceUrl: string;
      platform: string;
      formatId: string;
      filename: string;
    },
    onProgress: (pct: number) => void
  ): Promise<Uint8Array> {
    const qs = new URLSearchParams({
      videoUrl: params.videoUrl,
      sourceUrl: params.sourceUrl,
      platform: params.platform,
      formatId: params.formatId,
      filename: params.filename,
    });

    const res = await fetch(`/api/download?${qs.toString()}`, { cache: "no-store" });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: res.statusText }));
      throw new Error(err.error ?? `Download failed: ${res.status}`);
    }

    return await streamToArray(res, onProgress);
  }

  async function streamToArray(res: Response, onProgress: (pct: number) => void): Promise<Uint8Array> {
    const contentLength = res.headers.get("Content-Length");
    const total = contentLength ? parseInt(contentLength, 10) : 0;
    const reader = res.body!.getReader();
    const chunks: Uint8Array[] = [];
    let received = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.length;
      if (total > 0) {
        onProgress(Math.round((received / total) * 100));
      } else {
        onProgress(Math.min(99, Math.round((received / 50_000_000) * 100)));
      }
    }

    const result = new Uint8Array(received);
    let offset = 0;
    for (const chunk of chunks) {
      result.set(chunk, offset);
      offset += chunk.length;
    }
    return result;
  }

  async function merge(
    videoUrl: string,
    audioUrl: string,
    filename: string,
    sourceUrl: string,
    platform: string,
    videoFormatId: string,
    audioFormatId: string,
  ): Promise<void> {
    try {
      setCurrentStep(1);
      setStepProgress(0);

      let videoProgress = 0;
      let audioProgress = 0;

      const [videoData, audioData] = await Promise.all([
        fetchViaDownloadRoute(
          { videoUrl, sourceUrl, platform, formatId: videoFormatId, filename: "video.mp4" },
          (p) => { videoProgress = p; setStepProgress(Math.round((videoProgress + audioProgress) / 2)); }
        ),
        fetchViaDownloadRoute(
          { videoUrl: audioUrl, sourceUrl, platform, formatId: audioFormatId, filename: "audio.mp4" },
          (p) => { audioProgress = p; setStepProgress(Math.round((videoProgress + audioProgress) / 2)); }
        ),
      ]);

      setCurrentStep(3);
      setStepProgress(0);

      const ff = await getFFmpeg();
      await ff.writeFile("video.mp4", videoData);
      await ff.writeFile("audio.mp4", audioData);

      await ff.exec(["-i", "video.mp4", "-i", "audio.mp4", "-c:v", "copy", "-c:a", "aac", "-shortest", "output.mp4"]);

      const data = await ff.readFile("output.mp4");
      const blob = new Blob([new Uint8Array(data as Uint8Array)], { type: "video/mp4" });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(blobUrl);

      ff.deleteFile("video.mp4");
      ff.deleteFile("audio.mp4");
      ff.deleteFile("output.mp4");
    } finally {
      setCurrentStep(null);
      setStepProgress(0);
    }
  }

  return { merge, merging, currentStep, stepProgress, stepLabels };
}
