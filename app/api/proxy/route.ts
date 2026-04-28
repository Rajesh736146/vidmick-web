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

    // Do NOT send Referer or Origin — YouTube CDN blocks datacenter IPs
    // when they see a non-YouTube referer
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "identity",
        // No Referer, no Origin — avoids CDN hotlink protection
      },
      redirect: "follow",
    });

    clearTimeout(timeout);

    if (!res.ok) {
      console.error(`[proxy] ${res.status} ${res.statusText} for ${url.substring(0, 80)}`);
      return NextResponse.json(
        { error: `CDN error ${res.status}: URL may have expired. Fetch the video again.` },
        { status: res.status }
      );
    }

    const headers = new Headers({
      "Content-Type": res.headers.get("Content-Type") ?? "video/mp4",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "Content-Length, Content-Type",
      "Referrer-Policy": "no-referrer",
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
