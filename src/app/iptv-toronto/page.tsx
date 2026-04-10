import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Service in Toronto 2026 | Maple4K – From $9",
  description:
    "Maple4K is the best IPTV service in Toronto. 25,000+ live channels, NHL Maple Leafs, TSN, Sportsnet & CBC in 4K. Free 24h trial. From $9/month.",
  alternates: { canonical: "https://maple4k.ca/iptv-toronto" },
  openGraph: {
    title: "Best IPTV Service in Toronto 2026 | Maple4K – From $9",
    description:
      "Maple4K is the best IPTV service in Toronto. 25,000+ live channels, NHL Maple Leafs, TSN, Sportsnet & CBC in 4K. Free 24h trial. From $9/month.",
    url: "https://maple4k.ca/iptv-toronto",
    type: "website",
    siteName: "Maple4K",
  },
  twitter: { card: "summary_large_image" },
};

export default function IPTVTorontoPage() {
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
            Best IPTV Service in Toronto 2026
          </h1>
          <p
            style={{
              color: "#d1d5db",
              fontSize: "1.1rem",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            Toronto is Canada&apos;s largest city and has some of the fastest internet
            speeds in the country — making it perfect for 4K IPTV streaming.
            Maple4K serves thousands of Toronto subscribers with reliable,
            high-speed Maple4K streams delivering 25,000+ live channels and
            120,000+ movies &amp; series.
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
        {/* What Canadian Channels */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            What Canadian Channels Do You Get in Toronto?
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
            Maple4K&apos;s Toronto channel lineup covers everything locals love.
            You get CBC Toronto, CTV Toronto, Sportsnet Ontario, TSN, Global
            Toronto, CP24, and City TV — all in crisp HD and 4K quality.
            Toronto Maple Leafs fans get every game in HD and 4K on Sportsnet
            and TSN, so you&apos;ll never miss a faceoff at Scotiabank Arena.
          </p>
          <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
            Beyond local Toronto channels, Maple4K gives you access to
            25,000+ live channels from across Canada and around the world —
            including international sports, news, entertainment, kids&apos; content,
            and on-demand libraries with 120,000+ movies &amp; series.
          </p>
        </div>

        {/* Why #1 Choice */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Why Maple4K is the #1 IPTV Choice in Toronto
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              {
                icon: "⚡",
                title: "Fast Ontario Servers",
                desc: "Our server infrastructure is optimized for Ontario subscribers, ensuring low latency and buttery-smooth 4K playback for Toronto residents.",
              },
              {
                icon: "📺",
                title: "25,000+ Channels",
                desc: "One subscription unlocks the largest Maple4K channel library — sports, news, entertainment, lifestyle, and international content all in one place.",
              },
              {
                icon: "🇨🇦",
                title: "Canadian Support Team",
                desc: "Our bilingual support team operates in English and French, and is available 24/7 to assist Toronto subscribers with setup, troubleshooting, and billing.",
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
                  <p
                    style={{
                      fontWeight: 700,
                      marginBottom: 4,
                      color: "#fff",
                    }}
                  >
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

        {/* Cost comparison */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            How Much Does IPTV Cost vs Bell and Rogers in Toronto?
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
            Bell and Rogers cable packages in Toronto typically run $90–$150 per
            month — before taxes, equipment fees, and add-ons. Maple4K
            starts at just $9/month, with longer plans dropping the cost
            even further: 3 months for $29, 6 months for $49, or a full year for
            $49.
          </p>
          <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
            Toronto residents save an average of $900/year by switching to IPTV
            Canada with Maple4K. You get more channels, better picture
            quality, and the flexibility to cancel anytime — without a two-year
            contract locking you in.
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
              Maple4K Plans — Toronto
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
        <h2
          style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}
        >
          Start Streaming in Toronto Today
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: 32 }}>
          Plans from $9/month. Free 24h trial available. No contracts, no
          hidden fees — just great TV for Toronto.
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
