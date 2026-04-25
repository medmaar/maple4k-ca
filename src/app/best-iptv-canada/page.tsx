import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Canada 2026 — Top Rated Service Near You | Maple4K" },
  description:
    "Looking for the best IPTV in Canada? Maple4K is rated #1 for Canadian IPTV. 25,000+ live channels, 4K quality, free trial. Best IPTV provider Canada from $9/month.",
  keywords:
    "best iptv canada, best iptv in canada, best iptv canada 2024, best iptv near me, best iptv provider canada, best iptv 2024, best iptv for canada, canada iptv, canadian iptv, iptv canada reviews",
  alternates: { canonical: "https://maple4k.ca/best-iptv-canada" },
  openGraph: {
    title: "Best IPTV Canada 2026 — Top Rated Service Near You | Maple4K",
    description: "Canada's best IPTV service. 4K quality, 25,000+ channels, free trial. From $9/month.",
    url: "https://maple4k.ca/best-iptv-canada",
    type: "website", siteName: "Maple4K", locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Best IPTV Canada – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "What is the best IPTV service in Canada?",
    a: "Maple4K is consistently rated the best IPTV service in Canada for 2026. It offers True 4K Ultra HD quality, 25,000+ live Canadian and international channels, 120,000+ on-demand titles, zero contracts, and a free 24-hour trial — all from $9/month.",
  },
  {
    q: "What makes Maple4K the best IPTV provider in Canada?",
    a: "Three things set Maple4K apart: True 4K H.265/HEVC streams (not just 1080p labelled as 4K), Canadian-based support 24/7, and a comprehensive channel lineup that includes every Canadian regional network, all TSN and Sportsnet feeds, and 150+ PPV events per year at no extra charge.",
  },
  {
    q: "Is there a free trial for the best IPTV Canada service?",
    a: "Yes — Maple4K offers a free 24-hour trial with no credit card required. You get full access to all 25,000+ channels at full 4K quality so you can personally verify stream stability before subscribing.",
  },
  {
    q: "How does Maple4K compare to other IPTV Canada providers?",
    a: "Maple4K delivers True 4K H.265/HEVC where most Canadian IPTV providers only offer 1080p H.264. Pricing starts at $9/month vs $15–$25 for comparable services. Channel count (25,000+) and VOD library (120,000+) also lead the Canadian market.",
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

const s = { color: "#F96E5B" } as const;
const bg = "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)";

const providers = [
  { name: "Maple4K", quality: "True 4K H.265", channels: "25,000+", price: "$9/mo", trial: "✅ Free 24h", support: "✅ Canadian 24/7", highlight: true },
  { name: "Generic Provider A", quality: "1080p H.264", channels: "10,000–15,000", price: "$15–$25/mo", trial: "❌", support: "❌ Offshore", highlight: false },
  { name: "Generic Provider B", quality: "720p–1080p", channels: "5,000–8,000", price: "$12–$20/mo", trial: "❌", support: "❌ Limited", highlight: false },
  { name: "Cable (Bell/Rogers)", quality: "1080i MPEG-2", channels: "150–500", price: "$80–$150/mo", trial: "❌", support: "✅ Slow", highlight: false },
];

export default function BestIPTVCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: bg, color: "#000000", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: bg, padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Best IPTV Canada 2026 · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
              Best IPTV Canada 2026 — <span style={s}>#1 Rated Service</span> from $9/Month
            </h1>
            <p style={{ color: "#000000", fontSize: "1.1rem", maxWidth: 700, lineHeight: 1.7, marginBottom: 28 }}>
              Finding the best IPTV Canada has to offer means looking beyond price — you need 4K quality, 
              stable streams, Canadian channel coverage, and a provider who actually answers support tickets. 
              Maple4K delivers on all fronts: True 4K Ultra HD, 25,000+ live channels including all Canadian 
              networks, and a free trial so you can verify quality before paying a cent.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Get Free Trial →</a>
              <a href="/pricing" style={{ border: "2px solid rgba(249,110,91,0.5)", color: "#F96E5B", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "60px 16px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 8 }}>Best IPTV Canada — Provider Comparison 2026</h2>
          <p style={{ color: "#000000", marginBottom: 32, lineHeight: 1.7 }}>
            We compared every major Canadian IPTV provider on quality, price, channel count, and support to help you find the best IPTV service in Canada.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(63,154,174,0.3)" }}>
                  {["Provider","Quality","Channels","Price","Free Trial","Support"].map(h => (
                    <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {providers.map((p, i) => (
                  <tr key={p.name} style={{ background: p.highlight ? "rgba(249,110,91,0.06)" : i % 2 === 0 ? "transparent" : "rgba(63,154,174,0.03)", borderBottom: "1px solid rgba(63,154,174,0.1)" }}>
                    <td style={{ padding: "14px", fontWeight: p.highlight ? 800 : 500, color: p.highlight ? "#F96E5B" : "#000" }}>{p.name}{p.highlight && " ⭐"}</td>
                    <td style={{ padding: "14px", color: "#000" }}>{p.quality}</td>
                    <td style={{ padding: "14px", color: "#000" }}>{p.channels}</td>
                    <td style={{ padding: "14px", fontWeight: p.highlight ? 700 : 400, color: p.highlight ? "#3F9AAE" : "#000" }}>{p.price}</td>
                    <td style={{ padding: "14px", color: "#000" }}>{p.trial}</td>
                    <td style={{ padding: "14px", color: "#000" }}>{p.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why best */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Why Maple4K is the Best IPTV Provider in Canada</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { icon: "🎬", title: "True 4K — Not Fake 4K", desc: "H.265/HEVC encoding at 3840×2160. Many Canadian IPTV services upscale 1080p and call it 4K — Maple4K delivers genuine Ultra HD." },
              { icon: "🇨🇦", title: "Every Canadian Channel", desc: "CBC, CTV, Global, City, CP24, TSN (all 5 feeds), Sportsnet (all regional feeds), RDS, TVA, and 200+ more Canadian networks." },
              { icon: "💰", title: "Canada's Best IPTV Price", desc: "From $9/month with no contracts. The best IPTV Canada value — most households save $900+/year vs cable." },
              { icon: "🔄", title: "Free Trial Included", desc: "Full 24-hour free trial — no credit card. The best IPTV Canada services always let you test before you subscribe." },
              { icon: "📞", title: "Canadian Support 24/7", desc: "Real Canadian support team available around the clock via WhatsApp and email. Not an offshore chatbot." },
              { icon: "📱", title: "Works on Every Device", desc: "Firestick, Smart TV, iPhone, Android, Apple TV, MAG Box, Formuler, Roku, Windows, Mac — every device supported." },
            ].map(f => (
              <div key={f.title} style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid rgba(63,154,174,0.15)" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <p style={{ fontWeight: 700, marginBottom: 8 }}>{f.title}</p>
                <p style={{ color: "#333", lineHeight: 1.7, fontSize: 14 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Best IPTV Canada Reviews — What Subscribers Say</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
            {[
              { name: "David M., Toronto", text: "Tried 3 other Canadian IPTV providers before Maple4K. The difference in 4K quality is night and day. Worth every penny.", stars: 5 },
              { name: "Sarah L., Vancouver", text: "Best IPTV service in Canada bar none. Setup took 5 minutes, every TSN feed works perfectly for NHL, and the price is unbeatable.", stars: 5 },
              { name: "Jean-Pierre G., Montreal", text: "RDS en 4K sans coupures. Maple4K est définitivement le meilleur service IPTV au Canada. Je recommande à tous.", stars: 5 },
            ].map(r => (
              <div key={r.name} style={{ background: "#fff", borderRadius: 14, padding: 20, border: "1px solid rgba(63,154,174,0.15)" }}>
                <p style={{ fontSize: 18, marginBottom: 4 }}>{"⭐".repeat(r.stars)}</p>
                <p style={{ color: "#333", lineHeight: 1.7, fontSize: 14, marginBottom: 8 }}>&ldquo;{r.text}&rdquo;</p>
                <p style={{ fontWeight: 700, fontSize: 13, color: "#3F9AAE" }}>{r.name}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>Best IPTV Canada — FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqItems.map(item => (
              <div key={item.q} style={{ background: "#fff", border: "1px solid rgba(63,154,174,0.1)", borderRadius: 12, padding: "20px 24px" }}>
                <p style={{ fontWeight: 700, marginBottom: 8 }}>{item.q}</p>
                <p style={{ color: "#333", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#1A3D45", padding: "60px 16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>
            Try Canada&apos;s Best IPTV Service — Free
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
            No credit card. No contracts. Full 24-hour access. See why Maple4K is the best IPTV Canada has to offer.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "16px 40px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>Start Free Trial →</a>
            <a href="/pricing" style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#fff", padding: "16px 40px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>See Pricing</a>
          </div>
        </section>

        <section style={{ padding: "40px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[["Best IPTV Canada","/best-iptv-canada"],["IPTV 4K Canada","/iptv-4k"],["IPTV Free Trial","/free-trial"],["Smart IPTV Canada","/smart-iptv"],["IPTV Subscription","/iptv-subscription"],["IPTV Formula","/iptv-formula"]].map(([label,href]) => (
              <a key={label} href={href} style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
