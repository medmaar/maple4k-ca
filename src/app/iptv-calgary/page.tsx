import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IPTV Calgary | Maple4K – Best 4K IPTV Canada" },
  description:
    "Maple4K is Calgary's best IPTV service. Stream Flames, TSN, Sportsnet, CBC and 25,000+ channels in 4K. Plans from $9. Free trial available.",
  keywords:
    "IPTV Calgary, best IPTV Calgary, IPTV service Calgary, Maple4K Calgary, IPTV Canada Calgary, IPTV Alberta",
  alternates: { canonical: "https://maple4k.ca/iptv-calgary" },
  openGraph: {
    title: "IPTV Calgary | Maple4K – Best 4K IPTV Canada",
    description:
      "Maple4K is Calgary's best IPTV service. Stream Flames, TSN, Sportsnet and 25,000+ channels in 4K. Plans from $9.",
    url: "https://maple4k.ca/iptv-calgary",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K IPTV Calgary" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Is IPTV legal in Calgary?",
    a: "IPTV technology is legal in Calgary and throughout Alberta. Maple4K delivers live TV streams over the internet to your device. Users in Calgary are responsible for ensuring the content they access complies with Canadian copyright law.",
  },
  {
    q: "What is the best IPTV service in Calgary?",
    a: "Maple4K is the best IPTV service in Calgary, offering 25,000+ live channels including all local Alberta channels (CBC Calgary, CTV Calgary, Global Calgary, Sportsnet West), complete NHL Calgary Flames coverage on Sportsnet, and 120,000+ on-demand titles — starting at $9/month.",
  },
  {
    q: "Does Maple4K work in Calgary?",
    a: "Yes. Maple4K works seamlessly in Calgary with all major internet providers including Shaw, Telus, and Rogers. Our servers are optimized for Alberta connections, delivering stable 4K streams with minimal buffering even during peak Calgary Flames game nights.",
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

export default function IPTVCalgaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(249,110,91,0.15) 0%, transparent 65%), #0a0a0a",
            padding: "80px 16px 60px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span
              style={{
                background: "rgba(249,110,91,0.12)",
                border: "1px solid rgba(249,110,91,0.3)",
                color: "#F96E5B",
                fontSize: 12,
                fontWeight: 700,
                padding: "4px 14px",
                borderRadius: 999,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              IPTV Calgary · Maple4K
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                marginTop: 20,
                marginBottom: 16,
              }}
            >
              Best IPTV Service in Calgary — 4K Streaming from $9
            </h1>
            <p
              style={{
                color: "#d1d5db",
                fontSize: "1.1rem",
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              Calgary is one of Canada&apos;s fastest-growing cities with excellent internet
              infrastructure. Maple4K serves thousands of Calgary subscribers with 25,000+
              live channels, NHL Flames coverage, and 120,000+ on-demand titles.
              The best IPTV Calgary has to offer, starting at just $9/month.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="/pricing"
                style={{
                  background: "#F96E5B",
                  color: "#000000",
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
                  border: "2px solid rgba(249,110,91,0.5)",
                  color: "#F96E5B",
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#000000" }}>
              IPTV Calgary — Complete Alberta Coverage
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Maple4K delivers the best IPTV experience in Calgary with all the channels Alberta
              residents rely on. You get CBC Calgary, CTV Calgary, Global Calgary, Sportsnet West,
              TSN, and all regional Canadian networks in crisp HD and 4K. Calgary Flames fans
              get every game live on Sportsnet and TSN — no blackouts, no extra fees.
            </p>
            <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
              Calgary IPTV subscribers also get 25,000+ international channels, 120,000+ movies
              and series on demand, 7-day catch-up TV, and a full EPG. Maple4K works on every
              device — Firestick, Smart TV, Android, iPhone, and more — with instant activation
              within 5 minutes of placing your order.
            </p>
          </div>

          {/* Features */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#000000" }}>
              Why Calgary Subscribers Choose Maple4K
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  icon: "⚡",
                  title: "Alberta-Optimized Servers",
                  desc: "Our infrastructure is tuned for Shaw and Telus connections in Alberta, delivering low latency and smooth 4K streams for every Calgary subscriber.",
                },
                {
                  icon: "🏒",
                  title: "Calgary Flames — Every Game Live",
                  desc: "Watch the Flames live on Sportsnet West and TSN in HD and 4K. No blackouts, no pay-per-view fees. Full NHL, WHL, and CFL Stampeders coverage included.",
                },
                {
                  icon: "📺",
                  title: "25,000+ Live Channels",
                  desc: "Sports, news, entertainment, lifestyle, and international content — one Maple4K subscription covers every screen in your Calgary home.",
                },
                {
                  icon: "🇨🇦",
                  title: "Canadian Support 24/7",
                  desc: "Our bilingual support team is available around the clock to help Calgary subscribers via WhatsApp (+1 782-802-6280) or email.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    marginBottom: 16,
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: 12,
                    padding: 20,
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 4, color: "#000000" }}>{item.title}</p>
                    <p style={{ color: "#000000", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#000000" }}>
              Maple4K Pricing for Calgary — From $9/Month
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Shaw and Telus TV packages in Calgary cost $80–$130/month. Maple4K starts at
              just $9/month with no contracts and no hidden fees. Calgary subscribers save
              an average of $900/year by switching to IPTV with Maple4K.
            </p>
            <div
              style={{
                background: "rgba(249,110,91,0.08)",
                border: "1px solid rgba(249,110,91,0.3)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <p style={{ color: "#F96E5B", fontWeight: 700, marginBottom: 12 }}>
                Maple4K Plans — Available in Calgary
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, color: "#000000" }}>
              IPTV Calgary — Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(63,154,174,0.1)",
                    borderRadius: 12,
                    padding: "20px 24px",
                  }}
                >
                  <p style={{ fontWeight: 700, color: "#000000", marginBottom: 8 }}>{item.q}</p>
                  <p style={{ color: "#000000", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(249,110,91,0.12) 0%, transparent 70%), #111",
            padding: "60px 16px",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>
            Start Streaming IPTV in Calgary Today
          </h2>
          <p style={{ color: "#000000", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Plans from $9/month. Free trial available. No contracts, no hidden fees.
          </p>
          <a
            href="/pricing"
            style={{
              background: "#F96E5B",
              color: "#000000",
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
