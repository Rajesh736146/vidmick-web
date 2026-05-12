import type { Metadata } from "next";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import { defaultOgImage, withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Video Downloading Guides | VidMick",
  description:
    "Guides, tips and tutorials on how to download YouTube videos, Instagram Reels, TikTok videos and more.",
  ...withCanonical("/blog"),
  openGraph: {
    title: "VidMick Blog — Video Downloading Guides & Tips",
    description:
      "Guides, tips and tutorials on downloading videos from YouTube, Instagram, TikTok, and Facebook.",
    type: "website",
    url: "https://vidmick.com/blog",
    images: defaultOgImage(),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://vidmick.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://vidmick.com/blog",
    },
  ],
};

const posts = [
  {
    href: "/blog/how-to-download-youtube-videos-on-iphone",
    title: "How to Download YouTube Videos on iPhone in 2026",
    desc: "Step-by-step iPhone guide using Safari and VidMick.",
  },
  {
    href: "/blog/how-to-download-instagram-reels-without-watermark",
    title: "How to Download Instagram Reels Without Watermark (2026 Guide)",
    desc: "Android and iPhone workflow for clean Reels downloads.",
  },
  {
    href: "/blog/is-it-legal-to-download-youtube-videos",
    title: "Is It Legal to Download YouTube Videos? (2026 Answer)",
    desc: "Clear explanation of personal use, copyright, and platform rules.",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="hero">
        <h1>VidMick Blog — Video Downloading Guides &amp; Tips</h1>
        <p className="subtitle">Practical tutorials for downloading videos across platforms in 2026.</p>
      </section>

      <div className="main-content">
        <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

        <div className="related-grid blog-grid">
          {posts.map((post) => (
            <a key={post.href} href={post.href} className="related-card">
              <div>
                <strong>{post.title}</strong>
                <p>{post.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
