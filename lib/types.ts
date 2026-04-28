export type Platform = "yt" | "insta" | "fb";

export interface FormatInfo {
  format_id: string | null;
  ext: string | null;
  quality: string | null;
  resolution: string | null;
  width: number | null;
  height: number | null;
  fps: number | null;
  vcodec: string | null;
  acodec: string | null;
  filesize: number | null;
  filesize_approx: number | null;
  has_video: boolean;
  has_audio: boolean;
  download_url: string | null;
  audio_url?: string | null;
}

export interface VideoResponse {
  title: string | null;
  thumbnail?: string | null;
  platform?: string;
  note?: string;
  extractor: string;
  formats: FormatInfo[];
}
