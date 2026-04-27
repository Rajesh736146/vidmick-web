import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge"; // Use edge runtime for better performance
export const maxDuration = 300;

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "url param required" }, { status: 400 });
  }

  try {
    // Forward some headers from the original request to look more like a real browser
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "identity",
        "Referer": "https://www.youtube.com/",
        "Origin": "https://www.youtube.com",
        "Sec-Fetch-Dest": "video",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
      },
      redirect: "follow",
    });

    if (!res.ok) {
      console.error(`[proxy] ${res.status} for ${url.substring(0, 100)}`);
      
      return NextResponse.json(
        { 
          error: `CDN returned ${res.status}. The download URL may have expired. Try fetching the video again.`,
          status: res.status,
        },
        { status: res.status }
      );
    }

    const headers = new Headers({
      "Content-Type": res.headers.get("Content-Type") ?? "video/mp4",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "Content-Length, Content-Type",
    });

    if (res.headers.get("Content-Length")) {
      headers.set("Content-Length", res.headers.get("Content-Length")!);
    }

    return new NextResponse(res.body, { status: 200, headers });
  } catch (e: any) {
    console.error("[proxy] Error:", e.message);
    return NextResponse.json(
      { error: `Network error: ${e.message}` },
      { status: 500 }
    );
  }
}
