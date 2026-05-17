import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Box Canada 2026 — Best IPTV Box + Subscription | Maple4K" },
  description: "Best IPTV box Canada 2026. Formuler, MAG, Firestick, Android TV box with 50,000+ channels + Netflix. IPTV subscription from $9/month. Free 24h trial — no credit card.",
  keywords: "iptv box, iptv with box, at iptv box, iptv box at, free box for iptv in canada, iptv box canada, best iptv box canada, formuler box canada, mag box iptv, android tv box iptv",
  alternates: { canonical: "https://maple4k.ca/iptv-box" },
  openGraph: {
    url: ""https://maple4k.ca/iptv-box",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/iptv-box.jpg", width: 1280, height: 720, alt: "IPTV Box Canada – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const boxes = [
  { name: "Formuler Z10 Pro", desc: "Best Android IPTV box with built-in Maple4K support. Pre-configured, plug-and-play.", badge: "Most Popular" },
  { name: "MAG Box", desc: "Reliable Linux-based IPTV set-top box. Stable performance for live TV and VOD.", badge: "" },
  { name: "Amazon Firestick 4K", desc: "Affordable streaming stick. Install TiviMate or IPTV Smarters — ready in minutes.", badge: "Budget Pick" },
  { name: "Android TV Box", desc: "Any Android TV box running Android 7+ is fully compatible with Maple4K.", badge: "" },
  { name: "Apple TV 4K", desc: "Premium streaming box. Install IPTV Smarters Pro for native 4K H.265 playback.", badge: "" },
  { name: "Smart TV", desc: "Samsung & LG Smart TVs can use Maple4K directly — no extra box needed.", badge: "" },
];

const faqs = [
  { q: "What is the best IPTV box in Canada?", a: "The Formuler Z10 Pro is the top choice for IPTV in Canada — it comes pre-configured with the best IPTV player (MytvOnline2) and supports 4K H.265 hardware decoding. The Amazon Firestick 4K is the best budget option." },
  { q: "Do I need a box to use IPTV?", a: "No — you can use Maple4K on any Smart TV, Android phone, iPhone, iPad, Windows PC, or Mac. A dedicated IPTV box like Formuler or Firestick simply provides the best living-room experience." },
  { q: "Does Maple4K offer a free IPTV box?", a: "Contact our team about bundle deals — we occasionally offer promotional packages combining an IPTV box with a 12-month subscription at a discounted price." },
  { q: "How do I set up an IPTV box?", a: "After ordering, you receive login credentials by email within minutes. Simply enter your server URL, username, and password in your IPTV player app (TiviMate, IPTV Smarters, MytvOnline2). Our setup guides cover every device." },
  { q: "What IPTV subscription works with my box?", a: "All Maple4K plans work on every IPTV box — Formuler, MAG, Firestick, Android box, or Apple TV. Plans start at $9/month for 1 connection, up to 10 simultaneous connections." },
];

export default function IptvBoxPage() {
  return (
    <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ padding: "80px 16px 60px", textAlign: "center", background: "#0E1120", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 24 }}>IPTV Box Canada</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, marginBottom: 20, lineHeight: 1.1 }}>
            Best <span style={{ color: "#E8041F" }}>IPTV Box</span> + Subscription Canada
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
            Every IPTV box works with Maple4K — Formuler, MAG, Firestick, Android TV box, Apple TV. Get <strong style={{ color: "#fff" }}>50,000+ channels + Netflix</strong> from <strong style={{ color: "#E8041F" }}>$9/month</strong>.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 40px", borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>▶ Free Trial 24H</Link>
            <Link href="/pricing" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "16px 32px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>View Plans →</Link>
          </div>

          {/* Hero image — IPTV on TV */}
          <div style={{ marginTop: 40, borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", position: "relative", maxWidth: 820, margin: "40px auto 0" }}>
            <img src="/iptv-box.jpg" alt="IPTV box Canada — stream live hockey on your TV with Maple4K" style={{ width: "100%", height: "auto", maxHeight: 380, objectFit: "cover", display: "block" }} loading="eager" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,15,26,0.65) 0%, transparent 55%)" }} />
            <div style={{ position: "absolute", bottom: 18, left: 22 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>📺 Stream IPTV on any box — instant setup, 4K quality</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, marginBottom: 12, textAlign: "center" }}>Compatible IPTV Boxes</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", textAlign: "center", marginBottom: 40, fontSize: 15 }}>Maple4K works on every device — pick what suits you</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {boxes.map(b => (
              <div key={b.name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "28px 24px", position: "relative" }}>
                {b.badge && <span style={{ position: "absolute", top: -12, left: 20, background: "#E8041F", color: "#fff", fontSize: 10, fontWeight: 800, padding: "4px 12px", borderRadius: 999 }}>{b.badge}</span>}
                <h3 style={{ fontWeight: 700, fontSize: 17, margin: "0 0 10px", color: "#fff" }}>{b.name}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 16px", background: "#0E1120" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, marginBottom: 32, textAlign: "center" }}>IPTV Box FAQ</h2>
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
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {/* Trophy image */}
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 40, position: "relative" }}>
            <img src="/iptv-with-box.jpg" alt="Canada wins — celebrate every game with IPTV Maple4K" style={{ width: "100%", maxHeight: 360, objectFit: "cover", objectPosition: "center 20%", display: "block" }} loading="lazy" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,15,26,0.7) 0%, transparent 50%)" }} />
            <div style={{ position: "absolute", bottom: 18, left: 22 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}>🏆 Never miss a championship moment — stream live with Maple4K</p>
            </div>
          </div>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 16 }}>Get Started with Any IPTV Box</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>50,000+ channels + Netflix on your box in minutes. Free 24h trial — no credit card.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 36px", borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>▶ Free Trial 24H</Link>
            <Link href="/pricing" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "16px 28px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>Subscribe →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
