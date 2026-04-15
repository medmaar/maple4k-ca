import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IPTV Toronto | Maple4K – Best 4K IPTV Canada" },
  description:
    "Maple4K is Toronto's best IPTV service. Stream NHL Maple Leafs, Raptors, TSN, Sportsnet, CBC and 25,000+ channels in 4K. Plans from $9. Free trial available.",
  keywords:
    "IPTV Toronto, best IPTV Toronto, IPTV service Toronto, Maple4K Toronto, IPTV Canada Toronto",
  alternates: { canonical: "https://maple4k.ca/iptv-toronto" },
  openGraph: {
    title: "IPTV Toronto | Maple4K – Best 4K IPTV Canada",
    description:
      "Maple4K is Toronto's best IPTV service. Stream NHL Maple Leafs, Raptors, TSN, Sportsnet and 25,000+ channels in 4K. Plans from $9.",
    url: "https://maple4k.ca/iptv-toronto",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K IPTV Toronto" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Is IPTV legal in Toronto?",
    a: "IPTV technology is legal in Toronto and across Canada. Maple4K delivers streams over the internet to your device. Users in Toronto are responsible for ensuring the content they access complies with Canadian copyright law.",
  },
  {
    q: "What is the best IPTV service in Toronto?",
    a: "Maple4K is widely considered the best IPTV service in Toronto. It offers 25,000+ live channels including all local Toronto channels (CBC Toronto, CTV Toronto, CP24, City TV), complete NHL Maple Leafs coverage on TSN and Sportsnet, and 120,000+ on-demand titles — all starting at $9/month.",
  },
  {
    q: "Does Maple4K work in Toronto?",
    a: "Yes. Maple4K works perfectly in Toronto with any major internet provider including Rogers, Bell, and Fido. Our servers are optimized for Ontario connections, delivering stable 4K streams with minimal buffering even during peak hours like Leafs game nights.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function IPTVTorontoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(229,57,53,0.15) 0%, transparent 65%), #0a0a0a",
            padding: "80px 16px 60px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                background: "rgba(229,57,53,0.12)",
                border: "1px solid rgba(229,57,53,0.3)",
                color: "#E53935",
                fontSize: 12,
                fontWeight: 700,
                padding: "4px 14px",
                borderRadius: 999,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              IPTV Toronto · Maple4K
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                marginTop: 20,
                marginBottom: 16,
              }}
            >
              Best IPTV Service in Toronto — 4K Streaming from $9
            </h1>
            <p
              style={{
                color: "#d1d5db",
                fontSize: "1.1rem",
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              Toronto has some of the fastest internet in Canada — the perfect foundation
              for 4K IPTV streaming. Maple4K serves thousands of Toronto subscribers with
              25,000+ live channels, NHL Maple Leafs, Raptors, and 120,000+ on-demand
              titles. IPTV Toronto has never been this affordable or reliable.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
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
                View Plans →
              </a>
              <a
                href="/free-trial"
                style={{
                  border: "2px solid rgba(229,57,53,0.5)",
                  color: "#E53935",
                  padding: "14px 36px",
                  borderRadius: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
          {/* Intro */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
              IPTV Toronto — Everything You Need in One Subscription
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Maple4K delivers the best IPTV experience in Toronto with a channel lineup that
              covers everything locals love. You get CBC Toronto, CTV Toronto, Sportsnet Ontario,
              TSN, Global Toronto, CP24, and City TV — all in crisp HD and 4K quality.
              Toronto Maple Leafs fans get every game on Sportsnet and TSN with no blackouts.
            </p>
            <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
              Beyond local Toronto channels, Maple4K gives you access to 25,000+ live channels
              from across Canada and around the world — including international sports, news,
              entertainment, kids&apos; content, and on-demand libraries with 120,000+ movies &amp; series.
              IPTV Toronto subscribers also get 7-day catch-up TV and a full electronic program guide (EPG).
            </p>
          </div>

          {/* Features */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
              Why Toronto Subscribers Choose Maple4K
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  icon: "⚡",
                  title: "Ontario-Optimized Servers",
                  desc: "Our infrastructure is tuned for Ontario internet providers — Rogers, Bell, Fido — delivering low latency and smooth 4K playback for every Toronto subscriber.",
                },
                {
                  icon: "📺",
                  title: "25,000+ Live Channels",
                  desc: "One Maple4K subscription unlocks the biggest IPTV channel library in Canada — sports, news, entertainment, lifestyle, and international content in one place.",
                },
                {
                  icon: "🏒",
                  title: "Full NHL Coverage — No Blackouts",
                  desc: "Watch every Toronto Maple Leafs game live on TSN and Sportsnet in 4K. No blackouts, no extra fees. All NHL, NBA, NFL, MLB, UFC, and CFL games included.",
                },
                {
                  icon: "🇨🇦",
                  title: "Canadian Support 24/7",
                  desc: "Our bilingual support team is available around the clock to help Toronto subscribers with setup, troubleshooting, and billing via WhatsApp or email.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    marginBottom: 16,
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 12,
                    padding: 20,
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 4, color: "#fff" }}>{item.title}</p>
                    <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
              Maple4K Pricing for Toronto — From $9/Month
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Bell and Rogers cable packages in Toronto run $90–$150/month before taxes and fees.
              Maple4K starts at just $9/month, with longer plans offering even better value.
              Toronto subscribers save an average of $900/year by switching to IPTV.
            </p>
            <div
              style={{
                background: "rgba(229,57,53,0.08)",
                border: "1px solid rgba(229,57,53,0.3)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <p style={{ color: "#E53935", fontWeight: 700, marginBottom: 12 }}>
                Maple4K Plans — Available in Toronto
              </p>
              <ul style={{ color: "#d1d5db", margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                <li>1 Month — $9</li>
                <li>3 Months — $29</li>
                <li>6 Months — $39</li>
                <li>12 Months — $49 (Best Value)</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, color: "#fff" }}>
              IPTV Toronto — Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 12,
                    padding: "20px 24px",
                  }}
                >
                  <p style={{ fontWeight: 700, color: "#fff", marginBottom: 8 }}>{item.q}</p>
                  <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(229,57,53,0.12) 0%, transparent 70%), #111",
            padding: "60px 16px",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>
            Start Streaming IPTV in Toronto Today
          </h2>
          <p style={{ color: "#9ca3af", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Plans from $9/month. Free trial available. No contracts, no hidden fees.
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
    </>
  );
}
