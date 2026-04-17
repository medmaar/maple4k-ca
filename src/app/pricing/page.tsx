import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "../PricingSection";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: { absolute: "4K IPTV Plans Canada — H.265/HEVC from $9 | Maple4K" },
  description: "Compare Maple4K premium 4K IPTV plans. H.265/HEVC encoded, HDR10 & Dolby Vision. 1, 3, 6 & 12-month options from $9. 25,000+ live channels, no contracts.",
  keywords: "Maple4K pricing, 4K IPTV plans Canada, H.265 HEVC IPTV Canada, HDR IPTV subscription 2026",
  alternates: { canonical: "https://maple4k.ca/pricing" },
};

export default function PricingPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ padding: "80px 16px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            Transparent Pricing
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#000000", marginBottom: 16, lineHeight: 1.1 }}>
            Maple4K <span style={{ color: "#F96E5B" }}>Premium 4K Plans 2026</span>
          </h1>
          <p style={{ color: "#000000", marginBottom: 28, maxWidth: 560, margin: "0 auto 28px", lineHeight: 1.7, fontSize: 16 }}>
            No hidden fees. Every plan streams in True 4K Ultra HD with H.265/HEVC encoding, HDR10 &amp; Dolby Vision support, and 24/7 Canadian support.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20, fontSize: 14, color: "#000000", fontWeight: 600 }}>
            {["No contracts", "Instant activation", "Cancel anytime", "24h free trial available"].map((item) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#3F9AAE" }}>✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive pricing */}
      <section style={{ padding: "0 16px 60px" }}>
        <PricingSection />
      </section>

      {/* What's included */}
      <section style={{ padding: "60px 16px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Included in Every Plan
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#000000", marginBottom: 36 }}>
            Everything You Need — <span style={{ color: "#F96E5B" }}>Zero Extras</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {[
              "25,000+ Live TV Channels",
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
            ].map((feature) => (
              <div key={feature} style={{ display: "flex", alignItems: "center", gap: 12, background: "#ffffff", border: "1px solid rgba(63,154,174,0.2)", borderRadius: 14, padding: "14px 18px" }}>
                <span style={{ color: "#3F9AAE", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ color: "#000000", fontSize: 14, fontWeight: 500 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free trial CTA */}
      <section style={{ padding: "60px 16px", textAlign: "center", background: "#1A3D45" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, color: "#ffffff", marginBottom: 14 }}>
            Not Sure Yet? Try the Full 4K Experience Free
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28, fontSize: 15 }}>
            No credit card required. Test True 4K H.265 streams on your own hardware.
            Also check our <Link href="/channels-list" style={{ color: "#79C9C5", textDecoration: "underline" }}>full channel list</Link>.
          </p>
          <Link href="/free-trial" style={{ display: "inline-block", background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(249,110,91,0.4)" }}>
            Get Free Trial
          </Link>
        </div>
      </section>

      {/* Internal links */}
      <section style={{ padding: "48px 16px", background: "transparent" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#000000", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
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
            ].map((city) => (
              <Link key={city.href} href={city.href} style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>
                🍁 IPTV {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 16px 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", background: "#1A3D45", borderRadius: 24, padding: "36px 28px", boxShadow: "0 8px 32px rgba(26,61,69,0.2)" }}>
          <p style={{ color: "#F96E5B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#ffffff", marginBottom: 28, textAlign: "center" }}>
            Pricing FAQ
          </h2>
          <FaqAccordion />
        </div>
      </section>

    </main>
  );
}
