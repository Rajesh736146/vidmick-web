import type { Metadata } from "next";

export const SITE_NAME = "VidMick";
export const SITE_URL = "https://vidmick.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function canonicalUrl(path: string): string {
  const normalized = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export function withCanonical(path: string): Pick<Metadata, "alternates"> {
  return {
    alternates: {
      canonical: canonicalUrl(path),
    },
  };
}

export function defaultOgImage(url = DEFAULT_OG_IMAGE, alt = "VidMick — Free Video Downloader") {
  return [{ url, width: 1200, height: 630, alt }];
}
