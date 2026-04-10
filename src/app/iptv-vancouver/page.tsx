import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Service in Vancouver 2026 | Maple4K – From $9",
  description:
    "Best IPTV service in Vancouver BC. Stream Canucks games, TSN, Sportsnet Pacific & 25,000+ channels in 4K. Maple4K. Free trial available.",
  alternates: { canonical: "https://maple4k.ca/iptv-vancouver" },
  openGraph: {
    title: "Best IPTV Service in Vancouver 2026 | Maple4K – From $9",
    description:
      "Best IPTV service in Vancouver BC. Stream Canucks games, TSN, Sportsnet Pacific & 25,000+ channels in 4K. Maple4K. Free trial available.",
    url: "https://maple4k.ca/iptv-vancouver",
    type: "website",
    siteName: "Maple4K",
  },
  twitter: { card: "summary_large_image" },
};

export default function IPTVVancouverPage() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 100%)",
          padding: "80px 16px 60px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span
            style={{
              background: "#E53935",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: 999,
            }}
          >
            IPTV CANADA · MAPLESTREAMTV
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              marginTop: 20,
              marginBottom: 16,
            }}
          >
            Best IPTV Service in Vancouver 2026
          </h1>
          <p
            style={{
              color: "#d1d5db",
              fontSize: "1.1rem",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            Vancouver is one of BC&apos;s most connected cities, with widespread fibre
            internet infrastructure that&apos;s ideal for 4K IPTV streaming.
            Maple4K delivers rock-solid Maple4K service to Vancouver
            households, with 25,000+ live channels and 120,000+ movies &amp; series
            — all at a fraction of the cost of cable.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="/pricing"
              style={{
                background: "#E53935",
                color: "#fff",
                padding: "14px 36px",
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Get Your Plan →
            </a>
            <a
              href="/free-trial"
              style={{
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "14px 36px",
                borderRadius: 10,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Try 24h Free
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section
        style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}
      >
        {/* Channels & Sports */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Vancouver Channels &amp; Sports
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
            Maple4K&apos;s Vancouver channel package puts the full BC broadcast
            lineup at your fingertips. Stream Sportsnet Pacific for Vancouver
            Canucks coverage, plus CBC Vancouver, CTV BC, Global BC, and TSN
            for complete national sports and news.
          </p>
          <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
            Never miss a Canucks game with Maple4K. Every
            home and away game is available in HD and 4K, so Vancouver fans
            can follow their team wherever the season takes them. Beyond
            hockey, you get the NFL, NBA, Premier League, and hundreds of
            international sports channels included.
          </p>
        </div>

        {/* Why Maple4K Works */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Why Maple4K Works So Well in Vancouver
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              {
                icon: "🌊",
                title: "West Coast Server Network",
                desc: "Maple4K maintains dedicated servers on the West Coast, meaning Vancouver subscribers experience ultra-low latency and minimal buffering even during peak hours.",
              },
              {
                icon: "📶",
                title: "Optimized for BC Fibre Networks",
                desc: "Whether you&apos;re on Shaw, Telus, or a regional ISP, our streams are optimized to deliver consistent HD and 4K quality across all major Vancouver internet providers.",
              },
              {
                icon: "🎧",
                title: "24/7 Canadian Support",
                desc: "Our Vancouver-friendly support team is available around the clock via email at help@maple4k.ca to help with setup on any device — smart TV, phone, or streaming stick.",
              },
            ].map((item) => (
              <li
                key={item.title}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  marginBottom: 20,
                  background: "#111",
                  borderRadius: 12,
                  padding: 20,
                  border: "1px solid #222",
                }}
              >
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, marginBottom: 4, color: "#fff" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* IPTV vs Cable */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            IPTV vs Cable in Vancouver
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
            Shaw and Telus cable TV packages in Vancouver start around $80–$130
            per month. With Maple4K, you pay just $9 for your first
            month — or lock in a full year for $49 total, which works out to
            under $7/month.
          </p>
          <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
            Vancouver residents who switch from Shaw or Telus to Maple4K
            Maple4K typically save over $800 per year. You get more
            channels, higher picture quality, and the freedom to watch on any
            device — no cable box required.
          </p>
          <div
            style={{
              background: "#111",
              border: "1px solid #E53935",
              borderRadius: 12,
              padding: 20,
              marginTop: 24,
            }}
          >
            <p
              style={{
                color: "#E53935",
                fontWeight: 700,
                marginBottom: 8,
                margin: 0,
              }}
            >
              Maple4K Plans — Vancouver
            </p>
            <ul
              style={{
                color: "#d1d5db",
                margin: "12px 0 0",
                paddingLeft: 20,
                lineHeight: 2,
              }}
            >
              <li>1 Month — $9</li>
              <li>3 Months — $29</li>
              <li>6 Months — $49</li>
              <li>12 Months — $49</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#111",
          padding: "60px 16px",
          textAlign: "center",
          borderTop: "1px solid #222",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>
          Start Streaming in Vancouver Today
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: 32 }}>
          Plans from $9/month. Free 24h trial available. No contracts,
          cancel anytime.
        </p>
        <a
          href="/pricing"
          style={{
            background: "#E53935",
            color: "#fff",
            padding: "16px 48px",
            borderRadius: 12,
            fontWeight: 700,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          View Maple4K Plans →
        </a>
      </section>
    </main>
  );
}
