import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IPTV Winnipeg 2026 — Best 4K IPTV Service Manitoba | Maple4K" },
  description: "Best IPTV service in Winnipeg 2026. Stream Jets, TSN, Sportsnet, CBC and 50,000+ channels + Netflix in 4K. Plans from $9/month. Free 24h trial — no credit.",
  keywords: "iptv winnipeg, iptv near me, best iptv winnipeg, iptv manitoba, iptv canada, iptv service canada, iptv providers canada, best iptv in canada, canadian iptv, iptv subscription canada",
  alternates: { canonical: "https://maple4k.ca/iptv-winnipeg" },
  openGraph: {
    title: "IPTV Winnipeg 2026 — Best 4K IPTV Service Manitoba | Maple4K",
    description: "Maple4K is Winnipeg's best IPTV service. Stream Jets, TSN, Sportsnet and 50,000+ channels + Netflix in 4K. Plans from $9.",
    url: "https://maple4k.ca/iptv-winnipeg",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maple4K IPTV Winnipeg" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Is IPTV legal in Winnipeg?",
    a: "IPTV technology is legal in Winnipeg and throughout Manitoba. Maple4K delivers live TV streams over the internet to your device. Users in Winnipeg are responsible for ensuring the content they access complies with Canadian copyright law.",
  },
  {
    q: "What is the best IPTV service in Winnipeg?",
    a: "Maple4K is the best IPTV service in Winnipeg, offering 50,000+ channels + Netflix including all local Manitoba channels (CBC Winnipeg, CTV Winnipeg, Global Winnipeg, City TV), complete NHL Jets coverage on TSN and Sportsnet, and 120,000+ on-demand titles — starting at $9/month.",
  },
  {
    q: "Does Maple4K work in Winnipeg?",
    a: "Yes. Maple4K works seamlessly in Winnipeg with all major internet providers including Bell MTS, Shaw, and Rogers. Our servers are optimized for Manitoba connections, delivering stable 4K streams with minimal buffering even during peak Winnipeg Jets game nights.",
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

export default function IPTVWinnipegPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ background: "#0C0F1A", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#E8041F", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              IPTV Winnipeg · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
              Best IPTV Service in Winnipeg — 4K Streaming from $9
            </h1>
            <p style={{ color: "#fff", fontSize: "1.1rem", maxWidth: 640, lineHeight: 1.7 }}>
              Maple4K serves thousands of Winnipeg subscribers with 50,000+ live channels, complete NHL Jets coverage, and 120,000+ on-demand titles. The best IPTV Winnipeg has to offer — starting at just $9/month with a free 24h trial.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/pricing" style={{ background: "#E8041F", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans →</a>
              <a href="/free-trial" style={{ border: "2px solid rgba(249,110,91,0.5)", color: "#E8041F", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Free Trial</a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>IPTV Winnipeg — Full Manitoba Coverage</h2>
            <p style={{ color: "#fff", lineHeight: 1.8, marginBottom: 16 }}>
              Maple4K delivers the best IPTV experience in Winnipeg with all the channels Manitoba residents rely on. You get CBC Winnipeg, CTV Winnipeg, Global Winnipeg, APTN, and all regional Canadian networks in HD and 4K. Winnipeg Jets fans get every game live on TSN and Sportsnet — no blackouts, no extra fees.
            </p>
            <p style={{ color: "#fff", lineHeight: 1.8 }}>
              Winnipeg IPTV subscribers also get 50,000+ international channels, 120,000+ movies and series on demand, and a full EPG. Maple4K works on every device — Firestick, Smart TV, Android, iPhone, and more — with instant activation within minutes of your order.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Why Winnipeg Subscribers Choose Maple4K</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { icon: "⚡", title: "Manitoba-Optimized Servers", desc: "Our infrastructure is tuned for Bell MTS and Shaw connections in Manitoba, delivering low latency and smooth 4K streams for every Winnipeg subscriber." },
                { icon: "🏒", title: "Winnipeg Jets — Every Game Live", desc: "Watch the Jets live on TSN and Sportsnet in HD and 4K. No blackouts, no pay-per-view fees. Full NHL and CFL Bombers coverage included." },
                { icon: "📺", title: "50,000+ Channels + Netflix", desc: "Sports, news, entertainment, lifestyle, and international content — one Maple4K subscription covers every screen in your Winnipeg home." },
                { icon: "🇨🇦", title: "Canadian Support 24/7", desc: "Our bilingual support team is available around the clock to help Winnipeg subscribers via WhatsApp or email." },
              ].map((item) => (
                <li key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16, background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 20, border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 4, color: "#fff" }}>{item.title}</p>
                    <p style={{ color: "#fff", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Maple4K Pricing for Winnipeg — From $9/Month</h2>
            <p style={{ color: "#fff", lineHeight: 1.8, marginBottom: 16 }}>
              Bell MTS and Shaw TV packages in Winnipeg cost $80–$130/month. Maple4K starts at just $9/month with no contracts and no hidden fees. Winnipeg subscribers save an average of $900/year by switching to IPTV with Maple4K.
            </p>
            <div style={{ background: "rgba(249,110,91,0.08)", border: "1px solid rgba(249,110,91,0.3)", borderRadius: 12, padding: 20 }}>
              <p style={{ color: "#E8041F", fontWeight: 700, marginBottom: 12 }}>Maple4K Plans — Available in Winnipeg</p>
              <ul style={{ color: "#fff", margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                <li>1 Month — $9</li>
                <li>3 Months — $29</li>
                <li>6 Months — $39</li>
                <li>12 Months — $49 (Best Value)</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>IPTV Winnipeg — Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {faqItems.map((item) => (
                <div key={item.q} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(63,154,174,0.1)", borderRadius: 12, padding: "20px 24px" }}>
                  <p style={{ fontWeight: 700, color: "#fff", marginBottom: 8 }}>{item.q}</p>
                  <p style={{ color: "#fff", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "rgba(255,255,255,0.05)", padding: "60px 16px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>Start Streaming IPTV in Winnipeg Today</h2>
          <p style={{ color: "#fff", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>Plans from $9/month. Free trial available. No contracts, no hidden fees.</p>
          <a href="/pricing" style={{ background: "#E8041F", color: "#fff", padding: "16px 48px", borderRadius: 12, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>View Maple4K Plans →</a>
        </section>

        {/* Internal links */}
        <section style={{ padding: "48px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Other Canadian cities we serve:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 16 }}>
              {[["IPTV Toronto","/iptv-toronto"],["IPTV Vancouver","/iptv-vancouver"],["IPTV Montreal","/iptv-montreal"],["IPTV Calgary","/iptv-calgary"],["IPTV Ottawa","/iptv-ottawa"],["IPTV Edmonton","/iptv-edmonton"]].map(([label, href]) => (
                <a key={href} href={href} style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#fff", textDecoration: "none" }}>🍁 {label}</a>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              <a href="/pricing" style={{ background: "#E8041F", color: "#fff", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
              <a href="/free-trial" style={{ background: "#E8041F", color: "#fff", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Free Trial</a>
              <a href="/channels-list" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#fff", textDecoration: "none" }}>Channel List</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
