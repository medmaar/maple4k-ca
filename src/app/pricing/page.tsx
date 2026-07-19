import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "../PricingSection";

export const metadata: Metadata = {
  title: { absolute: "4K IPTV Plans Canada — H.265/HEVC from $9 | Maple4K" },
  description: "Compare Maple4K premium 4K IPTV plans. H.265/HEVC encoded, HDR10 & Dolby Vision. 1, 3, 6 & 12-month options from $9. 50,000+ channels + Netflix, no.",
  keywords: "Maple4K pricing, 4K IPTV plans Canada, H.265 HEVC IPTV Canada, HDR IPTV subscription 2026",
  alternates: { canonical: "https://maple4k.ca/pricing" },
};

const pricingFaqs = [
  { q: "Are there any hidden fees?", a: "No hidden fees. The price you see is the price you pay. All plans include the same channels and VOD library." },
  { q: "How fast do I get access after ordering?", a: "Instantly. Login credentials are sent to your email within minutes of payment confirmation." },
  { q: "Can I use multiple devices at the same time?", a: "Yes — each connection supports one simultaneous stream. Order multiple connections for concurrent use on different TVs or devices." },
  { q: "Is there a free trial?", a: "Yes! We offer a free 24-hour trial with no credit card required. Contact us via WhatsApp or email to activate." },
  { q: "What if I need help setting up?", a: "Our Canadian support team is available 24/7. We provide setup guides for all devices and walk you through any issues." },
  { q: "Can I cancel my subscription?", a: "You can stop at any time. Subscriptions remain active for the paid duration — no automatic renewals." },
];


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Are there any hidden fees?","acceptedAnswer":{"@type":"Answer","text":"No hidden fees. The price you see is the price you pay. All plans include the same channels and VOD library."}},
    {"@type":"Question","name":"How fast do I get access after ordering?","acceptedAnswer":{"@type":"Answer","text":"Instantly. Login credentials are sent to your email within minutes of payment confirmation."}},
    {"@type":"Question","name":"Is there a free trial?","acceptedAnswer":{"@type":"Answer","text":"Yes — Maple4K offers a free 24-hour trial with no credit card required. Contact us via WhatsApp or email to activate."}},
    {"@type":"Question","name":"Can I cancel my subscription?","acceptedAnswer":{"@type":"Answer","text":"You can stop at any time. Subscriptions remain active for the paid duration — no automatic renewals."}}
  ]
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://maple4k.ca"},
    {"@type":"ListItem","position":2,"name":"Pricing","item":"https://maple4k.ca/pricing"}
  ]
};
export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ padding: "80px 16px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 24 }}>
            Transparent Pricing
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", marginBottom: 16, lineHeight: 1.1 }}>
            Maple4K <span style={{ color: "#E8041F" }}>Premium 4K Plans</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.7, fontSize: 16 }}>
            No hidden fees. Every plan streams in True 4K Ultra HD with H.265/HEVC encoding, HDR10 &amp; Dolby Vision, and 24/7 Canadian support.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
            {["No contracts", "Instant activation", "Cancel anytime", "24h free trial available"].map(item => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#E8041F" }}>✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section style={{ padding: "0 0 60px", background: "#0E1120" }}>
        <PricingSection />
      </section>

      {/* What's included */}
      <section style={{ padding: "80px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            Included in Every Plan
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#fff", marginBottom: 40 }}>
            Everything You Need — <span style={{ color: "#E8041F" }}>Zero Extras</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              "50,000+ Live TV Channels + Netflix",
              "120,000+ Movies & Series (VOD)",
              "True 4K Ultra HD — H.265/HEVC",
              "HDR10 & Dolby Vision Support",
              "NHL, NFL, NBA, MLB, UFC, CFL",
              "TSN, Sportsnet, CBC, CTV, Global",
              "PPV Events Included — No Extra Cost",
              "Full EPG + Catch-Up TV (7 days)",
              "TiviMate & IBO Player Compatible",
              "All Devices: Fire TV, Smart TV, iOS, Android",
              "99.9% Uptime Guarantee",
              "24/7 Canadian Support",
            ].map(feature => (
              <div key={feature} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "14px 18px" }}>
                <span style={{ color: "#E8041F", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontWeight: 500 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial CTA */}
      <section style={{ padding: "80px 16px", textAlign: "center", background: "linear-gradient(135deg, #0E1120, #1a0510 50%, #0E1120)" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
            Not Sure Yet? Try the Full 4K Experience Free
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, fontSize: 15, lineHeight: 1.7 }}>
            No credit card required. Test True 4K H.265 streams on your own hardware.{" "}
            Also check our{" "}
            <Link href="/channels-list" style={{ color: "#00E5FF", textDecoration: "underline" }}>full channel list</Link>.
          </p>
          <Link href="/free-trial" style={{ display: "inline-block", background: "#E8041F", color: "#fff", padding: "16px 40px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 24px rgba(232,4,31,0.4)" }}>
            ▶ Get Free Trial
          </Link>
        </div>
      </section>

      {/* City links */}
      <section style={{ padding: "48px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
            Available in your city:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { name: "Toronto", href: "/iptv-toronto" },
              { name: "Vancouver", href: "/iptv-vancouver" },
              { name: "Montreal", href: "/iptv-montreal" },
              { name: "Calgary", href: "/iptv-calgary" },
              { name: "Ottawa", href: "/iptv-ottawa" },
              { name: "Edmonton", href: "/iptv-edmonton" },
            ].map(city => (
              <Link key={city.href} href={city.href} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                🍁 IPTV {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 16px 80px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "40px 28px" }}>
          <p style={{ color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: 32, textAlign: "center" }}>
            Pricing FAQ
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {pricingFaqs.map(f => (
              <details key={f.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden" }}>
                <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, color: "#fff", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}
                  <span style={{ color: "#E8041F", fontSize: 18, fontWeight: 400, flexShrink: 0, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
    </>
  );
}