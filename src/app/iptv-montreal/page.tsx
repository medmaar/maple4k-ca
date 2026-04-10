import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Service in Montreal / Montréal 2026 | Maple4K",
  description:
    "Meilleur service IPTV à Montréal. Maple4K offers English and French channels — RDS, TVA, V, Sportsnet, TSN, CBC. 25,000+ channels. Free trial.",
  alternates: { canonical: "https://maple4k.ca/iptv-montreal" },
  openGraph: {
    title: "Best IPTV Service in Montreal / Montréal 2026 | Maple4K",
    description:
      "Meilleur service IPTV à Montréal. Maple4K offers English and French channels — RDS, TVA, V, Sportsnet, TSN, CBC. 25,000+ channels. Free trial.",
    url: "https://maple4k.ca/iptv-montreal",
    type: "website",
    siteName: "Maple4K",
  },
  twitter: { card: "summary_large_image" },
};

export default function IPTVMontrealPage() {
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
            Best IPTV Service in Montreal / Montréal 2026
          </h1>
          <p
            style={{
              color: "#d1d5db",
              fontSize: "1.1rem",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            Montreal is Canada&apos;s most bilingual city — and Maple4K covers
            both languages perfectly with a massive selection of French and
            English channels. Whether you&apos;re watching RDS for the Canadiens or
            TSN for the big playoff game, Maple4K has you
            covered with 25,000+ live channels and 120,000+ movies &amp; series.
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
        {/* French & English Channels */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            French &amp; English Channels for Montreal
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 12 }}>
            Maple4K delivers the most complete bilingual channel lineup
            available in Montreal. Your subscription includes:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div
              style={{
                background: "#111",
                borderRadius: 12,
                padding: 20,
                border: "1px solid #222",
              }}
            >
              <p
                style={{
                  color: "#E53935",
                  fontWeight: 700,
                  marginBottom: 10,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Français
              </p>
              <ul
                style={{
                  color: "#d1d5db",
                  lineHeight: 2,
                  paddingLeft: 18,
                  margin: 0,
                }}
              >
                <li>RDS &amp; RDS2</li>
                <li>TVA &amp; TVA Sports</li>
                <li>Canal D</li>
                <li>V Télé</li>
                <li>TV5</li>
                <li>Séries+</li>
                <li>TFO</li>
              </ul>
            </div>
            <div
              style={{
                background: "#111",
                borderRadius: 12,
                padding: 20,
                border: "1px solid #222",
              }}
            >
              <p
                style={{
                  color: "#E53935",
                  fontWeight: 700,
                  marginBottom: 10,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                English
              </p>
              <ul
                style={{
                  color: "#d1d5db",
                  lineHeight: 2,
                  paddingLeft: 18,
                  margin: 0,
                }}
              >
                <li>CBC Montreal</li>
                <li>CTV Montreal</li>
                <li>TSN</li>
                <li>Sportsnet</li>
                <li>Global</li>
                <li>CP24</li>
                <li>City TV</li>
              </ul>
            </div>
          </div>
          <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
            Watch Montreal Canadiens games on RDS and TVA Sports in stunning
            4K — every game of the season, home and away, in the language of
            your choice.
          </p>
        </div>

        {/* Why Best */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Why Maple4K is Montreal&apos;s Best IPTV Service
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              {
                icon: "🗣️",
                title: "French + English Bilingual Support",
                desc: "Our customer support team serves Montreal subscribers in both French and English — reach us anytime at help@maple4k.ca.",
              },
              {
                icon: "🏒",
                title: "Complete Habs Coverage",
                desc: "Follow every Montreal Canadiens game on RDS, TVA Sports, and Sportsnet. Our Quebec-optimized servers ensure smooth 4K streams even on game nights.",
              },
              {
                icon: "📡",
                title: "Low Ping Quebec Servers",
                desc: "Dedicated server infrastructure serving the greater Montreal and Quebec region means less buffering and more watching — whether you&apos;re in Plateau-Mont-Royal or the South Shore.",
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

        {/* IPTV vs Vidéotron */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            IPTV vs Vidéotron in Montreal
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
            Vidéotron TV packages in Montreal typically cost $80–$140 per month,
            and that&apos;s before optional add-on packs for sports or international
            content. Maple4K gives you more channels — including all the
            French and English content you want — starting at just $9/month.
          </p>
          <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
            Montreal subscribers who switch to Maple4K save
            hundreds of dollars every year, with no long-term contracts and no
            equipment to rent. Stream on your smart TV, laptop, smartphone, or
            tablet — any device, anywhere.
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
                margin: 0,
              }}
            >
              Maple4K Plans — Montreal / Montréal
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
          Start Streaming in Montreal Today
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: 32 }}>
          Plans from $9/month. Free 24h trial available. Bilingual support
          en français et en anglais.
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
