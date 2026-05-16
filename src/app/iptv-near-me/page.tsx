import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Near Me Canada 2026 — Local IPTV Service from $9 | Maple4K" },
  description: "Looking for IPTV near me in Canada? Maple4K serves all Canadian cities — Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton. 50,000+ channels + Netflix. Try free 24h.",
  keywords: "iptv near me, best iptv near me, iptv 4k near me, iptv canada, iptv service canada, iptv providers canada, iptv subscription canada, canadian iptv, best iptv in canada",
  alternates: { canonical: "https://maple4k.ca/iptv-near-me" },
};

const cities = [
  { name: "Toronto", href: "/iptv-toronto", province: "Ontario" },
  { name: "Vancouver", href: "/iptv-vancouver", province: "British Columbia" },
  { name: "Montreal", href: "/iptv-montreal", province: "Quebec" },
  { name: "Calgary", href: "/iptv-calgary", province: "Alberta" },
  { name: "Ottawa", href: "/iptv-ottawa", province: "Ontario" },
  { name: "Edmonton", href: "/iptv-edmonton", province: "Alberta" },
  { name: "Winnipeg", href: "/pricing", province: "Manitoba" },
  { name: "Quebec City", href: "/iptv-quebec", province: "Quebec" },
  { name: "Hamilton", href: "/pricing", province: "Ontario" },
  { name: "Kitchener", href: "/pricing", province: "Ontario" },
  { name: "London", href: "/pricing", province: "Ontario" },
  { name: "Halifax", href: "/pricing", province: "Nova Scotia" },
];

const faqs = [
  { q: "Is there IPTV available near me in Canada?", a: "Yes — Maple4K serves all of Canada. Our servers are optimized for Canadian routes, so whether you're in Toronto, Vancouver, Montreal, Calgary, or any other Canadian city, you get fast, stable 4K streaming." },
  { q: "How do I get IPTV in Canada?", a: "Simply choose a plan on Maple4K, complete the order form, and receive your login credentials by email within minutes. No hardware installation required — works on any device with internet." },
  { q: "Does IPTV work in rural Canada?", a: "Yes — as long as you have at least 10 Mbps internet (25 Mbps for 4K), Maple4K works anywhere in Canada including rural areas." },
  { q: "What channels are available in my Canadian city?", a: "All plans include local Canadian channels for your region — CBC, CTV, Global, and city-specific channels — plus 50,000+ international channels and Netflix content." },
];

export default function IptvNearMePage() {
  return (
    <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ padding: "80px 16px 60px", textAlign: "center", background: "#0E1120", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 24 }}>Serving All of Canada</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, marginBottom: 20, lineHeight: 1.1 }}>
            Best <span style={{ color: "#E8041F" }}>IPTV Near Me</span> in Canada
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 17, lineHeight: 1.7, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
            Maple4K serves every Canadian city with optimized servers. <strong style={{ color: "#fff" }}>50,000+ channels + Netflix</strong>, 4K Ultra HD, instant access from <strong style={{ color: "#E8041F" }}>$9/month</strong>.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 40px", borderRadius: 14, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>▶ Free Trial 24H</Link>
            <Link href="/pricing" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", padding: "16px 32px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>View Plans →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, marginBottom: 12, textAlign: "center" }}>IPTV Available in Your City</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", textAlign: "center", marginBottom: 40, fontSize: 15 }}>Fast Canadian servers — optimized for every major city</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            {cities.map(c => (
              <Link key={c.name} href={c.href} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "20px 16px", textAlign: "center", textDecoration: "none", color: "#fff", display: "block" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>🍁</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>IPTV {c.name}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>{c.province}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 16px", background: "#0E1120" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 900, marginBottom: 32, textAlign: "center" }}>IPTV Near Me — FAQ</h2>
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
    </main>
  );
}
