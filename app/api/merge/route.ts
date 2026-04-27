import { NextRequest, NextResponse } from "next/server";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import { PassThrough } from "stream";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

export async function POST(req: NextRequest) {
  const { videoUrl, audioUrl, filename } = await req.json();

  if (!videoUrl || !audioUrl) {
    return NextResponse.json({ error: "videoUrl and audioUrl are required" }, { status: 400 });
  }

  const passThrough = new PassThrough();

  ffmpeg()
    .input(videoUrl)
    .input(audioUrl)
    .outputOptions(["-c:v copy", "-c:a aac", "-movflags frag_keyframe+empty_moov"])
    .format("mp4")
    .on("error", (err) => {
      console.error("FFmpeg error:", err.message);
      passThrough.destroy(err);
    })
    .pipe(passThrough, { end: true });

    const readable = new ReadableStream({
    start(controller) {
      passThrough.on("data", (chunk) => controller.enqueue(chunk));
      passThrough.on("end", () => controller.close());
      passThrough.on("error", (err) => controller.error(err));
    },
  });

  return new NextResponse(readable, {
    headers: {
      "Content-Type": "video/mp4",
      "Content-Disposition": `attachment; filename="${filename ?? "video.mp4"}"`,
    },
  });
}
