import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Service in Vancouver 2026 — 4K Streaming from $9 | Maple4K" },
  description:
    "Maple4K is Vancouver's best IPTV service. Stream Canucks, Whitecaps, TSN, Sportsnet, CBC and 25,000+ channels in 4K. Plans from $9. Free trial available.",
  keywords:
    "IPTV Vancouver, best IPTV Vancouver, IPTV service Vancouver, Maple4K Vancouver, IPTV Canada Vancouver",
  alternates: { canonical: "https://maple4k.ca/iptv-vancouver" },
  openGraph: {
    title: "Best IPTV Service in Vancouver 2026 — 4K Streaming from $9 | Maple4K",
    description:
      "Maple4K is Vancouver's best IPTV service. Stream Canucks, Whitecaps, TSN, Sportsnet and 25,000+ channels in 4K. Plans from $9.",
    url: "https://maple4k.ca/iptv-vancouver",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Is IPTV legal in Vancouver?",
    a: "IPTV technology is legal in Vancouver and across British Columbia. Maple4K delivers live TV streams over the internet to your device. Users in Vancouver are responsible for ensuring the content they access complies with Canadian copyright law.",
  },
  {
    q: "What is the best IPTV service in Vancouver?",
    a: "Maple4K is the best IPTV service in Vancouver, offering 25,000+ live channels including local BC channels (CBC Vancouver, CTV BC, Global BC, OMNI BC), complete NHL Canucks coverage on Sportsnet Pacific and TSN, and 120,000+ on-demand titles starting at $9/month.",
  },
  {
    q: "Does Maple4K work in Vancouver?",
    a: "Yes. Maple4K works seamlessly in Vancouver with all major internet providers including Shaw, Telus, and Rogers. Our servers are optimized for BC connections, delivering stable 4K streams with minimal buffering even during Canucks playoff nights.",
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

export default function IPTVVancouverPage() {
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
              IPTV Vancouver · Maple4K
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                marginTop: 20,
                marginBottom: 16,
              }}
            >
              Best IPTV Service in Vancouver — 4K Streaming from $9
            </h1>
            <p
              style={{
                color: "#d1d5db",
                fontSize: "1.1rem",
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              Vancouver enjoys some of the best fibre internet in Canada — making it ideal for
              4K IPTV streaming. Maple4K serves thousands of Vancouver subscribers with
              25,000+ live channels, NHL Canucks, Whitecaps, and 120,000+ on-demand titles.
              The best IPTV Vancouver has to offer, starting at just $9/month.
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
              IPTV Vancouver — Complete Canadian Coverage
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Maple4K delivers the best IPTV experience in Vancouver with a channel lineup built
              for BC residents. You get CBC Vancouver, CTV BC, Global BC, Sportsnet Pacific, TSN,
              OMNI BC, and all regional Canadian channels in HD and 4K. Canucks fans get every
              game on Sportsnet Pacific with no blackouts.
            </p>
            <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
              Beyond local Vancouver channels, Maple4K IPTV gives you 25,000+ live channels from
              across Canada and the world — plus 120,000+ movies and series on demand, 7-day
              catch-up TV, and a full electronic program guide (EPG). IPTV Vancouver subscribers
              can watch on any device: Firestick, Smart TV, phone, tablet, or computer.
            </p>
          </div>

          {/* Features */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
              Why Vancouver Subscribers Choose Maple4K
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  icon: "⚡",
                  title: "BC-Optimized Servers",
                  desc: "Our infrastructure is tuned for Shaw and Telus connections in BC, delivering low latency and smooth 4K streams for every Vancouver subscriber.",
                },
                {
                  icon: "📺",
                  title: "25,000+ Live Channels",
                  desc: "From local BC news to international sports and entertainment — one Maple4K subscription covers every screen in your Vancouver home.",
                },
                {
                  icon: "🏒",
                  title: "Canucks & Whitecaps Coverage",
                  desc: "Watch every Vancouver Canucks game live on Sportsnet Pacific and TSN in 4K. Whitecaps and BC Lions games also included — no blackouts, no extra fees.",
                },
                {
                  icon: "🇨🇦",
                  title: "Canadian Support 24/7",
                  desc: "Our bilingual support team is available around the clock to help Vancouver subscribers via WhatsApp (+1 782-802-6280) or email.",
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
              Maple4K Pricing for Vancouver — From $9/Month
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Shaw and Telus TV packages in Vancouver cost $80–$140/month. Maple4K starts at
              just $9/month with no contracts, no hidden fees, and instant activation.
              Vancouver subscribers save $800–$1,200/year by switching to IPTV.
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
                Maple4K Plans — Available in Vancouver
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
              IPTV Vancouver — Frequently Asked Questions
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
            Start Streaming IPTV in Vancouver Today
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
