import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IPTV Halifax 2026 — Best 4K IPTV Nova Scotia | Maple4K" },
  description: "Best IPTV service in Halifax 2026. Stream Mooseheads, TSN, Sportsnet, CBC and 50,000+ channels + Netflix in 4K. Plans from $9/month. Free 24h trial — no credit card.",
  keywords: "iptv halifax, iptv near me, best iptv halifax, iptv nova scotia, iptv canada, iptv service canada, iptv providers canada, best iptv in canada, canadian iptv, iptv subscription canada",
  alternates: { canonical: "https://maple4k.ca/iptv-halifax" },
  openGraph: {
    title: "IPTV Halifax 2026 — Best 4K IPTV Nova Scotia | Maple4K",
    description: "Maple4K is Halifax's best IPTV service. 50,000+ channels + Netflix in 4K. Plans from $9.",
    url: "https://maple4k.ca/iptv-halifax",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maple4K IPTV Halifax" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "Is IPTV legal in Halifax?",
    a: "IPTV technology is legal in Halifax and throughout Nova Scotia. Maple4K delivers live TV streams over the internet to your device. Users in Halifax are responsible for ensuring the content they access complies with Canadian copyright law.",
  },
  {
    q: "What is the best IPTV service in Halifax?",
    a: "Maple4K is the best IPTV service in Halifax, offering 50,000+ channels + Netflix including all local Nova Scotia channels (CBC Halifax, CTV Atlantic, Global Halifax), Halifax Mooseheads QMJHL coverage, and 120,000+ on-demand titles — starting at $9/month.",
  },
  {
    q: "Does Maple4K work in Halifax?",
    a: "Yes. Maple4K works seamlessly in Halifax with all major internet providers including Bell Aliant, Eastlink, and Rogers. Our servers deliver stable 4K streams with minimal buffering for all Halifax subscribers.",
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

export default function IPTVHalifaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
        <section style={{ background: "#0C0F1A", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#E8041F", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              IPTV Halifax · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
              Best IPTV Service in Halifax — 4K Streaming from $9
            </h1>
            <p style={{ color: "#fff", fontSize: "1.1rem", maxWidth: 640, lineHeight: 1.7 }}>
              Maple4K serves Halifax and all of Nova Scotia with 50,000+ live channels, full Atlantic Canadian coverage, and 120,000+ on-demand titles. The best IPTV Halifax has to offer — starting at just $9/month with a free 24h trial.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/pricing" style={{ background: "#E8041F", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans →</a>
              <a href="/free-trial" style={{ border: "2px solid rgba(249,110,91,0.5)", color: "#E8041F", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Free Trial</a>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>IPTV Halifax — Complete Atlantic Canada Coverage</h2>
            <p style={{ color: "#fff", lineHeight: 1.8, marginBottom: 16 }}>
              Maple4K delivers the best IPTV experience in Halifax with all the channels Nova Scotia residents rely on. You get CBC Halifax, CTV Atlantic, Global Halifax, and all regional Atlantic Canadian networks in HD and 4K. Sports fans get TSN, Sportsnet, and full NHL coverage — no blackouts, no extra fees.
            </p>
            <p style={{ color: "#fff", lineHeight: 1.8 }}>
              Halifax IPTV subscribers also get 50,000+ international channels, 120,000+ movies and series on demand, and a full EPG. Maple4K works on every device — Firestick, Smart TV, Android, iPhone, and more — with instant activation within minutes of your order.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Why Halifax Subscribers Choose Maple4K</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { icon: "⚡", title: "Atlantic-Optimized Servers", desc: "Our infrastructure delivers low latency and smooth 4K streams for every Halifax subscriber on Bell Aliant, Eastlink, or Rogers." },
                { icon: "🏒", title: "Full Atlantic Sports Coverage", desc: "TSN and Sportsnet in HD and 4K. Complete NHL, QMJHL Halifax Mooseheads, and CFL coverage with no blackouts." },
                { icon: "📺", title: "50,000+ Channels + Netflix", desc: "Sports, news, entertainment, lifestyle, and international content — one Maple4K subscription covers every screen in your Halifax home." },
                { icon: "🇨🇦", title: "Canadian Support 24/7", desc: "Our bilingual support team is available around the clock to help Halifax subscribers via WhatsApp or email." },
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
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Maple4K Pricing for Halifax — From $9/Month</h2>
            <p style={{ color: "#fff", lineHeight: 1.8, marginBottom: 16 }}>
              Bell Aliant and Eastlink TV packages in Halifax cost $80–$130/month. Maple4K starts at just $9/month with no contracts and no hidden fees. Halifax subscribers save an average of $900/year by switching to IPTV with Maple4K.
            </p>
            <div style={{ background: "rgba(249,110,91,0.08)", border: "1px solid rgba(249,110,91,0.3)", borderRadius: 12, padding: 20 }}>
              <p style={{ color: "#E8041F", fontWeight: 700, marginBottom: 12 }}>Maple4K Plans — Available in Halifax</p>
              <ul style={{ color: "#fff", margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                <li>1 Month — $9</li>
                <li>3 Months — $29</li>
                <li>6 Months — $39</li>
                <li>12 Months — $49 (Best Value)</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>IPTV Halifax — Frequently Asked Questions</h2>
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

        <section style={{ background: "rgba(255,255,255,0.05)", padding: "60px 16px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>Start Streaming IPTV in Halifax Today</h2>
          <p style={{ color: "#fff", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>Plans from $9/month. Free trial available. No contracts, no hidden fees.</p>
          <a href="/pricing" style={{ background: "#E8041F", color: "#fff", padding: "16px 48px", borderRadius: 12, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>View Maple4K Plans →</a>
        </section>

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
