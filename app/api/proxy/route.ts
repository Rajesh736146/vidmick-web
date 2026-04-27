import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "url param required" }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 300000);

    // Don't pass any Range headers from client
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "video",
      },
      redirect: "follow",
    });

    clearTimeout(timeout);

    if (!res.ok) {
      console.error(`[proxy] ${res.status} ${res.statusText} for ${url.substring(0, 100)}...`);
      
      // Return more detailed error
      const errorBody = await res.text().catch(() => "");
      return NextResponse.json(
        { 
          error: `Upstream error: ${res.status} ${res.statusText}`,
          details: errorBody.substring(0, 200),
          url: url.substring(0, 100)
        },
        { status: res.status }
      );
    }

    const headers = new Headers({
      "Content-Type": res.headers.get("Content-Type") ?? "video/mp4",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "Content-Length",
    });

    if (res.headers.get("Content-Length")) {
      headers.set("Content-Length", res.headers.get("Content-Length")!);
    }

    return new NextResponse(res.body, { status: 200, headers });
  } catch (e: any) {
    console.error("[proxy] Error:", e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
