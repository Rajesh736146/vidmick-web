import { NextRequest, NextResponse } from "next/server";
import type { Platform } from "@/lib/types";

const BASE = "https://yt-downloader-fp63.vercel.app";

const platformPath: Record<Platform, string> = {
  yt: "/social/yt/formats",
  insta: "/social/insta/formats",
  fb: "/social/fb/formats",
};

export async function POST(req: NextRequest) {
  const { url, platform }: { url: string; platform: Platform } = await req.json();

  if (!url || !platform) {
    return NextResponse.json({ error: "url and platform are required" }, { status: 400 });
  }

  const path = platformPath[platform];
  if (!path) {
    return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
  }

  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data?.detail ?? "Failed to fetch formats" }, { status: res.status });
  }

  return NextResponse.json(data);
}
