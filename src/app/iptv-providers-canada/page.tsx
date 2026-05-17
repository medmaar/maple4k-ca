import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Providers Canada 2026 — Top IPTV Service Comparison | Maple4K" },
  description: "Compare the best IPTV providers in Canada 2026. Maple4K leads with 50,000+ channels + Netflix, 4K Ultra HD, $9/month, free trial. See why Canadians choose Maple4K over other IPTV providers.",
  keywords: "iptv providers canada, best iptv providers, iptv provider canada, best iptv provider canada, iptv service canada, best iptv service canada, canadian iptv, best iptv in canada, best iptv canada, iptv subscription canada",
  alternates: { canonical: "https://maple4k.ca/iptv-providers-canada" },
  openGraph: {
    url: ""https://maple4k.ca/iptv-providers-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/iptv-from-canada.jpg", width: 1280, height: 720, alt: "IPTV Providers Canada – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const comparison = [
  { feature: "Price/month", maple4k: "$9", others: "$15–$25", cable: "$80–$150" },
  { feature: "Channels + Netflix", maple4k: "50,000+", others: "5,000–15,000", cable: "150–500" },
  { feature: "Max Resolution", maple4k: "4K Ultra HD", others: "1080p", cable: "1080i" },
  { feature: "Free Trial", maple4k: "✓ 24h Free", others: "Rarely", cable: "✗" },
  { feature: "No Contract", maple4k: "✓", others: "Varies", cable: "✗ 1–2 yr" },
  { feature: "Canadian Support", maple4k: "✓ 24/7", others: "✗", cable: "Business hrs" },
  { feature: "Setup Time", maple4k: "Minutes", others: "Varies", cable: "Technician" },
];

const faqs = [
  { q: "Who is the best IPTV provider in Canada in 2026?", a: "Maple4K is rated the best IPTV provider in Canada for 2026, offering 50,000+ channels + Netflix, 4K Ultra HD quality, plans from $9/month, and 24/7 Canadian support with a free 24-hour trial." },
  { q: "What should I look for in a Canadian IPTV provider?", a: "Look for Canadian-optimized servers, 4K quality, a large channel list including local Canadian channels, 24/7 support, and a free trial before committing. Maple4K offers all of these." },
  { q: "Are IPTV providers legal in Canada?", a: "IPTV technology is legal in Canada. Many major telecommunications companies use the same delivery method. Choose a reputable provider like Maple4K that operates transparently." },
  { q: "How do IPTV providers work?", a: "IPTV providers stream live TV channels and on-demand content over the internet instead of cable or satellite. After subscribing, you receive login credentials to use in an IPTV player app on any device." },
  { q: "What is the cheapest IPTV provider in Canada?", a: "Maple4K offers the best value at $9/month for 1 connection with all 50,000+ channels included. Longer subscriptions (6 or 12 months) reduce the monthly cost further." },
];

export default function IptvProvidersCanadaPage() {
  return (
    <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ padding: "80px 16px 60px", textAlign: "center", background: "#0E1120", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 24 }}>Best IPTV Providers Canada 2026</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, marginBottom: 20, lineHeight: 1.1 }}>
            Best <span style={{ color: "#E8041F" }}>IPTV Providers</span> in Canada
          </h1>

          {/* Hero image */}
          <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 28, marginTop: 20, border: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
            <img src="/iptv-from-canada.jpg" alt="IPTV from Canada — Canadian hockey player representing the best IPTV providers in Canada" style={{ width: "100%", height: "auto", maxHeight: 380, objectFit: "cover", display: "block" }} loading="eager" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,15,26,0.6) 0%, transparent 55%)" }} />
            <p style={{ position: "absolute", bottom: 16, left: 20, margin: 0, fontWeight: 700, fontSize: 14, color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>🏒 Proudly Canadian IPTV — serving every province from $9/month</p>
          </div>          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
            Compare the top IPTV providers in Canada for 2026. See why <strong style={{ color: "#fff" }}>Maple4K</strong> is Canada&apos;s highest-rated IPTV service — <strong style={{ color: "#E8041F" }}>50,000+ channels + Netflix</strong> from $9/month.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 40px", borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>▶ Free Trial 24H</Link>
            <Link href="/pricing" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "16px 32px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>View Plans →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, marginBottom: 12, textAlign: "center" }}>Maple4K vs Cable vs Other IPTV Providers</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", textAlign: "center", marginBottom: 40, fontSize: 15 }}>See why 50,000+ Canadians chose Maple4K</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "14px 16px", color: "rgba(255,255,255,0.6)", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "14px 16px", color: "#E8041F", fontWeight: 800, borderBottom: "1px solid rgba(232,4,31,0.4)", background: "rgba(232,4,31,0.06)" }}>Maple4K ✓</th>
                  <th style={{ textAlign: "center", padding: "14px 16px", color: "rgba(255,255,255,0.5)", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Other IPTV</th>
                  <th style={{ textAlign: "center", padding: "14px 16px", color: "rgba(255,255,255,0.5)", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Cable TV</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                    <td style={{ padding: "14px 16px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#E8041F", fontWeight: 700, background: "rgba(232,4,31,0.04)" }}>{row.maple4k}</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "rgba(255,255,255,0.5)" }}>{row.others}</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "rgba(255,255,255,0.5)" }}>{row.cable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 16px", background: "#0E1120" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, marginBottom: 32, textAlign: "center" }}>IPTV Providers Canada — FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map(f => (
              <details key={f.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden" }}>
                <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, color: "#fff", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}<span style={{ color: "#E8041F", fontSize: 18, fontWeight: 400, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 16px", textAlign: "center", background: "linear-gradient(135deg, #0E1120, #1a0510 50%, #0E1120)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 16 }}>Canada&apos;s #1 Rated IPTV Provider</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>Join 50,000+ Canadians already streaming with Maple4K. Free 24h trial — no credit card.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 36px", borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>▶ Free Trial 24H</Link>
            <Link href="/pricing" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "16px 28px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>Subscribe →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
