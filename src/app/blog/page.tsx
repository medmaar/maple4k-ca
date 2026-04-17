import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maple4K Blog | IPTV Guides, Reviews & News – Canada",
  description:
    "Read Maple4K's IPTV blog. Expert guides on setup, legality, pricing comparisons, player reviews, and the best 4K IPTV services in Canada for 2026.",
  keywords: "Maple4K blog, IPTV guide Canada 2026, best IPTV Canada review",
  alternates: { canonical: "https://maple4k.ca/blog" },
  openGraph: {
    title: "Maple4K Blog | IPTV Guides, Reviews & News – Canada",
    description: "Read Maple4K's IPTV blog. Expert guides on setup, legality, pricing comparisons, and player reviews for the best 4K IPTV in Canada.",
    url: "https://maple4k.ca/blog",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K IPTV Blog Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const posts = [
  {
    slug: "best-iptv-canada-2026",
    title: "10 Best IPTV Providers in Canada for 2026 (Tested & Ranked)",
    excerpt: "We tested and ranked the top 10 IPTV providers available in Canada for 2026. Maple4K takes the #1 spot — find out why.",
    date: "2026-01-10",
    readTime: "8 min read",
    tag: "Reviews",
  },
  {
    slug: "is-iptv-legal-canada",
    title: "Is IPTV Legal in Canada in 2026? (Honest Answer)",
    excerpt: "A clear breakdown of Canadian IPTV laws, CRTC regulations, and what it means for consumers who want to use IPTV services.",
    date: "2026-02-05",
    readTime: "5 min read",
    tag: "Legal",
  },
  {
    slug: "iptv-vs-cable-canada",
    title: "IPTV vs Cable in Canada 2026 – Is It Worth Switching?",
    excerpt: "A detailed cost and feature comparison between IPTV and cable TV in Canada. Spoiler: the savings are significant.",
    date: "2026-02-20",
    readTime: "6 min read",
    tag: "Comparison",
  },
  {
    slug: "best-iptv-player-canada",
    title: "Best IPTV Player Apps for Canada in 2026",
    excerpt: "TiviMate, IPTV Smarters Pro, GSE Smart IPTV, or Perfect Player? We tested all four with a real Maple4K subscription.",
    date: "2026-04-01",
    readTime: "5 min read",
    tag: "Guide",
  },
];

export default function BlogPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>
      <section style={{ padding: "48px 16px 32px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ background: "#1A3D45", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(26,61,69,0.25)", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 20 }}>
              Maple4K Blog
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
              Maple4K Guides &amp; Reviews
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
              Expert articles on IPTV setup, legality, pricing, and the best Canadian IPTV services for 2026.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 16px 100px", background: "transparent" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: "28px 24px",
                  height: "100%",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.25)", color: "#F96E5B", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 999 }}>
                    {post.tag}
                  </span>
                  <span style={{ color: "#000000", fontSize: 12 }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontWeight: 800, fontSize: 18, lineHeight: 1.4, color: "#000000", marginBottom: 12 }}>
                  {post.title}
                </h2>
                <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  {post.excerpt}
                </p>
                <time dateTime={post.date} style={{ color: "#000000", fontSize: 12 }}>
                  {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
