import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Toronto | Maple4K – Best 4K IPTV Canada" },
  description: "Maple4K is Toronto's best IPTV service. Watch Leafs, Raptors, Blue Jays live in 4K Ultra HD. H.265 codec, HDR10, 50,000+ channels + Netflix from $9/month.",
  keywords: "iptv toronto, iptv near me, best iptv toronto, iptv canada, iptv service canada, iptv providers canada, best iptv in canada, canadian iptv, iptv subscription canada",
  alternates: { canonical: "https://maple4k.ca/iptv-toronto" },
  openGraph: {
    title: "IPTV Toronto | Maple4K – Best 4K IPTV Canada",
    description: "Maple4K is Toronto's best IPTV service. Watch Leafs, Raptors, Blue Jays live in 4K. 50,000+ channels from $9/month.",
    url: "https://maple4k.ca/iptv-toronto",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maple4K IPTV Toronto" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  {
    q: "What is the best IPTV service in Toronto?",
    a: "Maple4K is the top-rated IPTV service in Toronto for 2026. It offers True 4K Ultra HD, 50,000+ channels including all TSN, Sportsnet, and Canadian locals, plus a free 24-hour trial from $9/month.",
  },
  {
    q: "Can I watch the Toronto Maple Leafs in 4K with Maple4K?",
    a: "Yes. Maple4K streams all Maple Leafs games on TSN and Sportsnet in full 4K Ultra HD via H.265 codec. You get all TSN feeds (TSN1–TSN4) and Sportsnet regional channels.",
  },
  {
    q: "What internet speed do I need for IPTV in Toronto?",
    a: "Most Toronto homes on Rogers Ignite or Bell Fibe get 100+ Mbps — more than enough. Maple4K's H.265 codec only needs 15-25 Mbps per stream for smooth 4K. You can run multiple streams simultaneously.",
  },
  {
    q: "Is there a free trial for IPTV in Toronto?",
    a: "Yes — Maple4K offers a free 24-hour trial with no credit card required. Toronto residents can test the full 4K quality on any device before subscribing.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://maple4k.ca" },
    { "@type": "ListItem", position: 2, name: "IPTV Toronto", item: "https://maple4k.ca/iptv-toronto" },
  ],
};

const s = { color: "#E8041F" } as const;

export default function TorontoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ background: "#0C0F1A", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: "#E8041F", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              IPTV Toronto · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, margin: "24px 0 20px", lineHeight: 1.1 }}>
              Best IPTV in Toronto — 4K Ultra HD, 50,000+ Channels
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.7)", maxWidth: 680, marginBottom: 36, lineHeight: 1.65 }}>
              Forget cable's grainy HD. Watch Maple Leafs, Raptors, and Blue Jays live in True 4K Ultra HD. H.265 codec, HDR10, and 50,000+ channels on any Toronto device from $9/month.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
          </div>
        </section>

        {/* Why Toronto */}
        <section style={{ background: "#0E1120", padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, marginBottom: 32 }}>Why Toronto Chooses Maple4K</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { icon: "🏒", title: "Maple Leafs in 4K", desc: "Every game on TSN and Sportsnet — all regional feeds — streamed in True 4K H.265." },
                { icon: "🏀", title: "Raptors in 4K", desc: "NBA action with stunning 4K clarity and 60 FPS smooth motion on every device." },
                { icon: "⚾", title: "Blue Jays in 4K", desc: "Baseball looks incredible in 4K. Every pitch, every hit — crystal clear." },
                { icon: "📺", title: "50,000+ Channels", desc: "All Canadian locals, international channels, movies, and series included." },
                { icon: "🆓", title: "Free 24H Trial", desc: "No credit card needed. Test the full 4K quality before you subscribe." },
                { icon: "💰", title: "From $9/Month", desc: "Unlimited devices, no contracts, no hidden fees. Cancel anytime." },
              ].map(f => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channels */}
        <section style={{ padding: "60px 16px", background: "#0C0F1A" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, marginBottom: 20 }}>Toronto Channels Included</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["TSN 1, 2, 3, 4, 5 — all feeds", "Sportsnet, Sportsnet Ontario, East", "CTV Toronto, Global Toronto, CBC", "City TV, CTV2", "NHL Network, NBA TV Canada", "NFL Network, TSN Radio", "All 50,000+ international channels"].map(ch => (
                  <li key={ch} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.7)", fontSize: 15 }}>
                    <span style={s}>✓</span> {ch}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, marginBottom: 20 }}>Best Devices for Toronto</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { d: "Fire Stick 4K", note: "$79 CAD — perfect for 4K sports" },
                  { d: "Samsung / LG 4K Smart TV", note: "Native 4K app support (2016+)" },
                  { d: "Android TV Box", note: "Best living room option, H.265 HW decode" },
                  { d: "Apple TV 4K", note: "Premium, flawless reliability" },
                  { d: "iPhone & iPad", note: "Stream anywhere on Rogers/Bell LTE" },
                  { d: "Windows PC / Mac", note: "VLC or IPTV Smarters Pro" },
                ].map(item => (
                  <li key={item.d} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 700, color: "#fff" }}>{item.d}</span> — {item.note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Internet speed section */}
        <section style={{ background: "#0E1120", padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, marginBottom: 20 }}>Toronto Internet Speed & 4K IPTV</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
              Most Toronto homes on Rogers Ignite or Bell Fibe get 100–1000 Mbps — far more than needed. Maple4K's H.265 codec uses only 15–25 Mbps per 4K stream. You can run multiple 4K streams simultaneously on a standard Toronto fibre plan.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[{ speed: "25 Mbps", note: "1× 4K stream" }, { speed: "50 Mbps", note: "2-3× 4K streams" }, { speed: "100 Mbps+", note: "Full household 4K" }].map(s => (
                <div key={s.speed} style={{ background: "rgba(232,4,31,0.08)", border: "1px solid rgba(232,4,31,0.2)", borderRadius: 12, padding: "16px 24px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#E8041F" }}>{s.speed}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: "#0C0F1A" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, marginBottom: 32, textAlign: "center" }}>
              IPTV Toronto — Frequently Asked Questions
            </h2>
            {faqItems.map(item => (
              <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
                <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.q}<span style={{ color: "#E8041F", fontSize: 18 }}>+</span>
                </summary>
                <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 16px", background: "#0E1120", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Start Streaming Toronto Sports in 4K</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>No credit card for trial. Setup in minutes on any device. Toronto's best IPTV from $9/month.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">Subscribe →</Link>
            </div>
            <p style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
              Also available: <Link href="/iptv-vancouver" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Vancouver</Link> · <Link href="/iptv-montreal" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Montreal</Link> · <Link href="/iptv-calgary" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Calgary</Link> · <Link href="/iptv-ottawa" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Ottawa</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
