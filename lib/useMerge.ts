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

    ff.on("progress", ({ progress: p }) => {
      if (currentStep === 3) setStepProgress(Math.round(p * 100));
    });
    ff.on("log", ({ message }) => console.log("[ffmpeg]", message));

    await ff.load({
      coreURL: await toBlobURL(`${base}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(`${base}/ffmpeg-core.wasm`, "application/wasm"),
    });

    ffmpegRef.current = ff;
    return ff;
  }

  // Always use proxy to avoid CORS and URL expiration issues
  async function fetchDirect(url: string, onProgress: (pct: number) => void): Promise<Uint8Array> {
    console.log("[fetch] Fetching via proxy:", url.substring(0, 100));
    
    const proxyUrl = `/api/proxy?url=${encodeURIComponent(url)}`;
    
    try {
      const res = await fetch(proxyUrl, { 
        mode: "cors",
        cache: "no-store",
        credentials: "omit",
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => "");
        console.error("[fetch] Proxy error:", res.status, errorText);
        throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
      }

      return await streamToArray(res, onProgress);
    } catch (error: any) {
      console.error("[fetch] Error:", error);
      throw new Error(`Failed to download: ${error.message}`);
    }
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
        onProgress(Math.min(99, Math.round((received / 10_000_000) * 100)));
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

  async function merge(videoUrl: string, audioUrl: string, filename: string): Promise<void> {
    try {
      console.log("[merge] Starting merge for:", filename);
      
      // Download video and audio in parallel
      setCurrentStep(1);
      setStepProgress(0);
      console.log("[merge] Step 1: Downloading");

      let videoProgress = 0;
      let audioProgress = 0;

      const [videoData, audioData] = await Promise.all([
        fetchDirect(videoUrl, (p) => {
          videoProgress = p;
          const avg = Math.round((videoProgress + audioProgress) / 2);
          console.log("[merge] Video:", p, "Audio:", audioProgress, "Avg:", avg);
          setStepProgress(avg);
        }),
        fetchDirect(audioUrl, (p) => {
          audioProgress = p;
          const avg = Math.round((videoProgress + audioProgress) / 2);
          console.log("[merge] Video:", videoProgress, "Audio:", p, "Avg:", avg);
          setStepProgress(avg);
        }),
      ]);

      console.log("[merge] Downloads complete");

      // Step 3: Merge and save
      setCurrentStep(3);
      setStepProgress(0);
      console.log("[merge] Step 3: Merging");

      const ff = await getFFmpeg();
      await ff.writeFile("video.mp4", videoData);
      await ff.writeFile("audio.mp4", audioData);

      await ff.exec([
        "-i", "video.mp4",
        "-i", "audio.mp4",
        "-c:v", "copy",
        "-c:a", "aac",
        "-shortest",
        "output.mp4",
      ]);

      const data = await ff.readFile("output.mp4");
      const uint8Data = new Uint8Array(data as Uint8Array);
      const blob = new Blob([uint8Data], { type: "video/mp4" });
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
