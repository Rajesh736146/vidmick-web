import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 300;

// This route fetches fresh download URL from the source API and immediately
// streams the file — both happen server-side so IP stays consistent
export async function GET(req: NextRequest) {
  const videoUrl = req.nextUrl.searchParams.get("videoUrl");
  const sourceUrl = req.nextUrl.searchParams.get("sourceUrl");
  const platform = req.nextUrl.searchParams.get("platform") as "yt" | "insta" | "fb";
  const formatId = req.nextUrl.searchParams.get("formatId");
  const filename = req.nextUrl.searchParams.get("filename") ?? "video.mp4";

  if (!videoUrl || !sourceUrl || !platform) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  try {
    // Step 1: Get fresh URL from the API (same server IP that will download)
    const BASE = "https://yt-downloader-fp63.vercel.app";
    const pathMap: Record<string, string> = {
      yt: "/social/yt/formats",
      insta: "/social/insta/formats",
      fb: "/social/fb/formats",
    };

    const apiRes = await fetch(`${BASE}${pathMap[platform]}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: sourceUrl }),
    });

    if (!apiRes.ok) {
      return NextResponse.json({ error: "Failed to get fresh URL" }, { status: 502 });
    }

    const data = await apiRes.json();
    const format = data.formats?.find((f: any) =>
      formatId ? f.format_id === formatId : f.download_url === videoUrl
    );

    const freshUrl = format?.download_url ?? videoUrl;

    // Step 2: Download from CDN using the same server IP that got the URL
    const cdnRes = await fetch(freshUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Accept-Encoding": "identity",
      },
      redirect: "follow",
    });

    if (!cdnRes.ok) {
      return NextResponse.json(
        { error: `CDN error: ${cdnRes.status}` },
        { status: cdnRes.status }
      );
    }

    const headers = new Headers({
      "Content-Type": cdnRes.headers.get("Content-Type") ?? "video/mp4",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Access-Control-Allow-Origin": "*",
    });

    if (cdnRes.headers.get("Content-Length")) {
      headers.set("Content-Length", cdnRes.headers.get("Content-Length")!);
    }

    return new NextResponse(cdnRes.body, { status: 200, headers });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
