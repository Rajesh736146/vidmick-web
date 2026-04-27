import { createServer } from "http";
import next from "next";
import express from "express";
import cors from "cors";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import type { Request, Response } from "express";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const worker = express();
worker.use(cors());
worker.use(express.json());

worker.post("/merge", (req: Request, res: Response) => {
  const { videoUrl, audioUrl, filename } = req.body;

  if (!videoUrl || !audioUrl) {
    res.status(400).json({ error: "videoUrl and audioUrl are required" });
    return;
  }

  const safeFilename = (filename ?? "video.mp4").replace(/[^a-z0-9_\-. ]/gi, "_");

  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Content-Disposition", `attachment; filename="${safeFilename}"`);
  res.setHeader("Transfer-Encoding", "chunked");

  ffmpeg()
    .input(videoUrl)
    .input(audioUrl)
    .outputOptions([
      "-c:v copy",
      "-c:a aac",
      "-movflags frag_keyframe+empty_moov+default_base_moof",
    ])
    .format("mp4")
    .on("start", (cmd) => console.log("[ffmpeg] started:", cmd))
    .on("error", (err) => {
      console.error("[ffmpeg] error:", err.message);
      if (!res.headersSent) res.status(500).json({ error: err.message });
      else res.end();
    })
    .on("end", () => console.log("[ffmpeg] done:", safeFilename))
    .pipe(res, { end: true });
});

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = new URL(req.url!, `http://localhost:3000`);

    // Route /merge to the express worker
    if (parsedUrl.pathname === "/merge") {
      worker(req as any, res as any);
      return;
    }

    handle(req, res, { pathname: parsedUrl.pathname, query: Object.fromEntries(parsedUrl.searchParams) });
  }).listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
});
