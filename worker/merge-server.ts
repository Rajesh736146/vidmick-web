import express from "express";
import cors from "cors";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/merge", (req, res) => {
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
    .on("start", (cmd) => console.log("FFmpeg started:", cmd))
    .on("error", (err) => {
      console.error("FFmpeg error:", err.message);
      if (!res.headersSent) {
        res.status(500).json({ error: err.message });
      } else {
        res.end();
      }
    })
    .on("end", () => console.log("Merge complete:", safeFilename))
    .pipe(res, { end: true });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Merge worker running on http://localhost:${PORT}`));
