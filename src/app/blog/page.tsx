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
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
      <section
        style={{
          background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(229,57,53,0.12) 0%, transparent 65%), #0a0a0a",
          padding: "80px 16px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "#E53935", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Maple4K Blog
          </p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            Maple4K Guides &amp; Reviews
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 16, lineHeight: 1.7 }}>
            Expert articles on IPTV setup, legality, pricing, and the best Canadian IPTV services for 2026.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 16px 100px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: "28px 24px",
                  height: "100%",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ background: "rgba(229,57,53,0.12)", border: "1px solid rgba(229,57,53,0.25)", color: "#E53935", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 999 }}>
                    {post.tag}
                  </span>
                  <span style={{ color: "#6b7280", fontSize: 12 }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontWeight: 800, fontSize: 18, lineHeight: 1.4, color: "#fff", marginBottom: 12 }}>
                  {post.title}
                </h2>
                <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  {post.excerpt}
                </p>
                <time dateTime={post.date} style={{ color: "#6b7280", fontSize: 12 }}>
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
