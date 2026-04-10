import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Service in Montreal 2026 — 4K Streaming from $9 | Maple4K" },
  description:
    "Maple4K is Montreal's best IPTV service. Stream Canadiens, RDS, TVA Sports, TSN, CBC, and 25,000+ channels in 4K. Plans from $9. Free trial available.",
  keywords:
    "IPTV Montreal, best IPTV Montreal, IPTV service Montreal, Maple4K Montreal, IPTV Canada Montreal, IPTV Quebec",
  alternates: { canonical: "https://maple4k.ca/iptv-montreal" },
  openGraph: {
    title: "Best IPTV Service in Montreal 2026 — 4K Streaming from $9 | Maple4K",
    description:
      "Maple4K is Montreal's best IPTV service. Stream Canadiens, RDS, TVA Sports and 25,000+ channels in 4K. Plans from $9.",
    url: "https://maple4k.ca/iptv-montreal",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Is IPTV legal in Montreal?",
    a: "IPTV technology is legal in Montreal and throughout Quebec. Maple4K delivers live TV streams over the internet to your device. Users in Montreal are responsible for ensuring the content they access complies with Canadian and Quebec copyright law.",
  },
  {
    q: "What is the best IPTV service in Montreal?",
    a: "Maple4K is the best IPTV service in Montreal, offering 25,000+ live channels including all Quebec channels (RDS, TVA, TVA Sports, Canal Vie, Radio-Canada, ICI), complete NHL Canadiens coverage, and 120,000+ on-demand titles — starting at $9/month with bilingual French and English support.",
  },
  {
    q: "Does Maple4K work in Montreal?",
    a: "Yes. Maple4K works perfectly in Montreal with Bell Fibres Optiques, Vidéotron, Cogeco, and all major Quebec ISPs. Our servers deliver stable 4K streams with minimal buffering — including during peak Montreal Canadiens game nights.",
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

export default function IPTVMontrealPage() {
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
              IPTV Montreal · Maple4K
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                marginTop: 20,
                marginBottom: 16,
              }}
            >
              Best IPTV Service in Montreal — 4K Streaming from $9
            </h1>
            <p
              style={{
                color: "#d1d5db",
                fontSize: "1.1rem",
                maxWidth: 640,
                lineHeight: 1.7,
              }}
            >
              Montreal is Canada&apos;s most bilingual city — and Maple4K is built for both French
              and English speakers. Stream 25,000+ live channels including RDS, TVA, Radio-Canada,
              CBC Montreal, NHL Canadiens, and 120,000+ on-demand titles. The best IPTV Montreal
              experience, starting at $9/month.
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
              IPTV Montreal — French &amp; English Channels in One Subscription
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Maple4K covers the full bilingual channel lineup Montreal subscribers demand.
              You get Radio-Canada, CBC Montreal, TVA, RDS, TVA Sports, Canal Vie, ICI, ARTV,
              Ztélé, and all French-language Quebec channels — alongside full English-language
              Canadian coverage. Montreal Canadiens fans get every game live on RDS and TSN.
            </p>
            <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
              IPTV Montreal subscribers also get 25,000+ international channels, 120,000+ movies
              and series on demand, 7-day catch-up TV, and a full EPG. Maple4K works on all
              devices — Firestick, Smart TV, Android, iOS, and more — with no contracts and
              instant activation within 5 minutes.
            </p>
          </div>

          {/* Features */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
              Why Montreal Subscribers Choose Maple4K
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  icon: "🇫🇷",
                  title: "Full French-Language Channel Coverage",
                  desc: "RDS, TVA, TVA Sports, Canal Vie, ICI, Radio-Canada, ARTV, Ztélé and all Quebec channels in HD and 4K — the most complete French-language IPTV package in Canada.",
                },
                {
                  icon: "🏒",
                  title: "Montreal Canadiens — Every Game Live",
                  desc: "Watch the Habs live on RDS and TSN in HD and 4K. No blackouts, no pay-per-view fees. Full NHL, AHL, and CHL coverage included.",
                },
                {
                  icon: "🌐",
                  title: "25,000+ International Channels",
                  desc: "Montreal's diverse population is served by Maple4K's massive international library — Arabic, Portuguese, Italian, Spanish, Greek, and hundreds of other language channels.",
                },
                {
                  icon: "🇨🇦",
                  title: "Bilingual Canadian Support 24/7",
                  desc: "Our support team speaks French and English and is available around the clock via WhatsApp and email to help Montreal subscribers.",
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
              Maple4K Pricing for Montreal — From $9/Month
            </h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.8, marginBottom: 16 }}>
              Bell and Vidéotron TV packages in Montreal cost $80–$130/month. Maple4K starts
              at just $9/month with no contracts and no hidden fees. Montreal subscribers save
              an average of $900/year by switching to IPTV with Maple4K.
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
                Maple4K Plans — Available in Montreal
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
              IPTV Montreal — Frequently Asked Questions
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
            Start Streaming IPTV in Montreal Today
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
