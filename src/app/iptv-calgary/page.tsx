import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Service in Calgary 2026 | Maple4K – From $9",
  description:
    "Best IPTV service in Calgary Alberta. Watch Calgary Flames on Sportsnet West, TSN, 25,000+ channels in 4K. Maple4K. Free 24h trial.",
  alternates: { canonical: "https://maple4k.ca/iptv-calgary" },
  openGraph: {
    title: "Best IPTV Service in Calgary 2026 | Maple4K – From $9",
    description:
      "Best IPTV service in Calgary Alberta. Watch Calgary Flames on Sportsnet West, TSN, 25,000+ channels in 4K. Maple4K. Free 24h trial.",
    url: "https://maple4k.ca/iptv-calgary",
    type: "website",
    siteName: "Maple4K",
  },
  twitter: { card: "summary_large_image" },
};

export default function IPTVCalgaryPage() {
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
            Best IPTV Service in Calgary 2026
          </h1>
          <p
            style={{
              color: "#d1d5db",
              fontSize: "1.1rem",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            Calgary is one of Canada&apos;s fastest-growing cities, backed by
            excellent internet infrastructure built for high-speed fibre
            connections. Maple4K brings the best Maple4K experience
            to Calgary homes — 25,000+ live channels, 120,000+ on-demand
            titles, and every Calgary Flames game in 4K.
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
            Calgary Channels &amp; Sports
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
            Maple4K delivers the complete Calgary broadcast package:
            Sportsnet West for Calgary Flames games, CBC Calgary, CTV Calgary,
            Global Calgary, and TSN for national sports coverage. Calgary
            Flames fans — never miss a game with Maple4K.
            Every regular season and playoff game is streamed in HD and 4K
            quality direct to your screen.
          </p>
          <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
            Beyond hockey, Calgary subscribers enjoy the NFL, CFL, NBA,
            Premier League, UFC, and hundreds of international channels. With
            120,000+ on-demand movies and series also included, there&apos;s always
            something to watch after the final buzzer.
          </p>
        </div>

        {/* Why Calgary Residents Choose */}
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Why Calgary Residents Choose Maple4K
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              {
                icon: "🏒",
                title: "4K Calgary Flames Games Every Night",
                desc: "Our Alberta-optimized servers deliver Sportsnet West at full 4K resolution — no downscaling, no buffering, just pure hockey the way it&apos;s meant to be watched.",
              },
              {
                icon: "🖥️",
                title: "Reliable Alberta Server Infrastructure",
                desc: "Maple4K operates dedicated infrastructure to serve Calgary and the surrounding Alberta region, ensuring consistent uptime and low-latency streams year-round.",
              },
              {
                icon: "🎧",
                title: "24/7 Canadian Support",
                desc: "Have a question? Our Calgary-friendly support team is reachable any time via email at help@maple4k.ca — in English or French — for fast, friendly help.",
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
            IPTV Cost vs Shaw/Telus in Calgary
          </h2>
          <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
            Shaw and Telus TV packages in Calgary routinely cost $90–$140 per
            month once you add sports packs, HD fees, and equipment rental.
            Maple4K gives Calgary residents access to more content for a
            fraction of the price — starting at just $9 for a full month
            of Maple4K service.
          </p>
          <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
            Switching to Maple4K means no contracts, no cable boxes to
            rent, and no surprise fees. Stream on your smart TV, phone, tablet,
            Fire Stick, or Apple TV — anywhere in Calgary or on the go.
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
            <p style={{ color: "#E53935", fontWeight: 700, margin: 0 }}>
              Maple4K Plans — Calgary
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
          Start Streaming in Calgary Today
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: 32 }}>
          Plans from $9/month. Free 24h trial available. Watch every
          Calgary Flames game in 4K.
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
