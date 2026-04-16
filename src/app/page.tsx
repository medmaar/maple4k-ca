import type { Metadata } from "next";
import Link from "next/link";
import HomePricing from "./components/HomePricing";

export const metadata: Metadata = {
  title: { absolute: "True 4K Ultra HD IPTV Canada 2026 — H.265/HEVC Streams | Maple4K" },
  description:
    "Canada's premium 4K IPTV service. H.265/HEVC encoded streams with HDR10 & Dolby Vision support. 25,000+ live channels, 120,000+ titles — at the resolution your display deserves. From $9/month.",
  keywords:
    "4K IPTV Canada, Ultra HD IPTV Canada, H.265 HEVC IPTV, HDR IPTV Canada, Maple4K, 4K streaming Canada 2026, Dolby Vision IPTV",
  alternates: { canonical: "https://maple4k.ca" },
  openGraph: {
    title: "True 4K Ultra HD IPTV Canada 2026 — H.265/HEVC Streams | Maple4K",
    description:
      "Canada's premium 4K IPTV service. H.265/HEVC encoded with HDR10 & Dolby Vision. 25,000+ live channels, 120,000+ titles at resolutions your screen deserves.",
    url: "https://maple4k.ca",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Canada's Premium 4K IPTV" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqs = [
  {
    q: "What video quality does Maple4K deliver?",
    a: "Maple4K delivers True 4K Ultra HD at 3840×2160 resolution, encoded in H.265/HEVC for maximum picture clarity at lower bitrates. HDR10 and Dolby Vision are fully supported on compatible displays and IPTV players, delivering the same peak brightness and colour depth you'd expect from 4K Blu-ray.",
  },
  {
    q: "What internet speed do I need for 4K IPTV streaming?",
    a: "A stable 25 Mbps connection handles butter-smooth 4K H.265 streams. Most Canadian fibre and cable plans at 75 Mbps+ run multiple simultaneous 4K streams with zero buffering. HD fallback is automatic on slower connections, and our servers prioritize low-latency Canadian routes.",
  },
  {
    q: "Does Maple4K support HDR — HDR10 or Dolby Vision?",
    a: "Yes. Where broadcasters provide HDR feeds, Maple4K streams in HDR10 and Dolby Vision. Pair it with an Apple TV 4K, Samsung QLED, or LG OLED and your display's full HDR capability engages automatically — peak brightness, wide colour gamut, no manual configuration required.",
  },
  {
    q: "What codec does Maple4K use — H.264 or H.265?",
    a: "All streams use H.265/HEVC encoding — the codec that delivers twice the picture quality of H.264 at the same bitrate. Sharper 4K, less buffering on shared connections, smaller data usage. Legacy H.264 fallback ensures compatibility with older devices that don't support hardware HEVC decoding.",
  },
  {
    q: "Which IPTV player works best for 4K H.265 streams?",
    a: "TiviMate on Android TV and Fire TV is the top choice for hardware-accelerated 4K H.265 playback with full EPG. IBO Player (included free with 12-month plans) delivers native 4K on Android TV boxes. IPTV Smarters Pro performs excellently on iOS and Apple TV 4K using native hardware decoding.",
  },
  {
    q: "Can I stream 4K on multiple TVs simultaneously?",
    a: "Yes — multi-connection plans support 2–10 independent simultaneous streams, each capable of full 4K Ultra HD. Ideal for households with multiple 4K displays, a dedicated home theatre room, and mobile devices — all running concurrently without any quality degradation.",
  },
  {
    q: "Is IPTV legal in Canada?",
    a: "IPTV technology is legal in Canada and is the same delivery method used by major telecoms. Maple4K operates within Canadian broadcasting standards and provides access to publicly available streams. Users are responsible for ensuring content access rights in their jurisdiction.",
  },
  {
    q: "Is there a free trial to test the 4K quality?",
    a: "Yes — Maple4K offers a free 2-hour trial with no credit card required. The trial streams at full 4K quality so you can personally validate H.265 performance, HDR rendering, and channel lineup on your own hardware before committing. Activate instantly via WhatsApp or email.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maple4K",
  url: "https://maple4k.ca",
  logo: "https://maple4k.ca/favicon.svg",
  email: "help@maple4k.ca",
  description:
    "Canada's premium 4K IPTV service. H.265/HEVC encoded, HDR10 & Dolby Vision supported. 25,000+ live channels, 120,000+ movies & series.",
  areaServed: "CA",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maple4K",
  url: "https://maple4k.ca",
};

const deviceNames = [
  "Amazon Fire Stick", "Samsung Smart TV", "LG Smart TV", "iPhone & iPad",
  "Android Phone", "Android TV Box", "MAG Box", "Apple TV",
  "Roku", "Windows PC", "Mac", "Kodi", "VLC Player", "Formuler", "Xbox", "PlayStation",
];

const sportsChannels = [
  "TSN", "Sportsnet", "CBC Sports", "TVA Sports", "RDS", "NHL Network",
  "NFL Network", "NBA TV", "ESPN", "ESPN 2", "beIN Sports", "Sky Sports",
  "DAZN", "UFC Fight Pass", "Golf Channel", "Olympic Channel",
];

const cities = [
  { name: "Toronto", href: "/iptv-toronto" },
  { name: "Vancouver", href: "/iptv-vancouver" },
  { name: "Montreal", href: "/iptv-montreal" },
  { name: "Calgary", href: "/iptv-calgary" },
  { name: "Ottawa", href: "/iptv-ottawa" },
  { name: "Edmonton", href: "/iptv-edmonton" },
];

const comparison = [
  { feature: "Price/month", us: "$9", cable: "$80–$150", other: "$15–$25" },
  { feature: "Live Channels", us: "25,000+", cable: "150–500", other: "5,000–15,000" },
  { feature: "Max Resolution", us: "4K Ultra HD", cable: "1080i", other: "1080p" },
  { feature: "Codec", us: "H.265/HEVC", cable: "MPEG-2/H.264", other: "H.264" },
  { feature: "HDR Support", us: "HDR10 + Dolby Vision", cable: "×", other: "Rarely" },
  { feature: "Contracts", us: "None", cable: "1–2 years", other: "Varies" },
  { feature: "Free Trial", us: "Free 2-hour trial", cable: "×", other: "Rarely" },
  { feature: "Canadian Support", us: "24/7", cable: "Business hours", other: "×" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main style={{ background: "#E8F4F5", color: "#1A3D45" }}>
        {/* ── 1. HERO ── */}
        <section
          style={{
            background: "#E8F4F5",
            padding: "90px 16px 80px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(63,154,174,0.12)",
                border: "1px solid rgba(63,154,174,0.35)",
                color: "#3F9AAE",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 18px",
                borderRadius: 999,
                marginBottom: 28,
              }}
            >
              🍁 Canada's Premium 4K IPTV — 2026
            </span>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 24,
                color: "#1A3D45",
              }}
            >
              True 4K Ultra HD<br />
              <span style={{ color: "#F96E5B" }}>IPTV for Canada</span>
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "#1A3D45",
                maxWidth: 640,
                margin: "0 auto 36px",
                lineHeight: 1.7,
              }}
            >
              H.265/HEVC encoded streams with HDR10 &amp; Dolby Vision support. 25,000+ live
              channels and 120,000+ movies &amp; series — at the resolution your screen was built for.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link
                href="/pricing"
                style={{
                  background: "#F96E5B",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0 6px 20px rgba(249,110,91,0.4)",
                }}
              >
                Subscribe Now →
              </Link>
              <Link
                href="/free-trial"
                style={{
                  background: "transparent",
                  border: "2px solid #3F9AAE",
                  color: "#3F9AAE",
                  fontWeight: 700,
                  fontSize: 17,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Try Free Trial
              </Link>
            </div>
            <p style={{ color: "#1A3D45", fontSize: 13 }}>
              ✓ Free Trial &nbsp;&nbsp; ✓ No Contracts &nbsp;&nbsp; ✓ Interac e-Transfer Accepted
            </p>
          </div>
        </section>

        {/* ── 2. STATS BAR ── */}
        <section style={{ background: "#E8F4F5", padding: "0 16px 48px" }}>
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              textAlign: "center",
            }}
          >
            {[
              { val: "25,000+", label: "Live Channels", icon: "📺" },
              { val: "True 4K", label: "HDR10 & Dolby Vision", icon: "🎯" },
              { val: "Zero Buffer", label: "H.265 Smart Codec", icon: "⚡" },
              { val: "24/7", label: "Canadian Support", icon: "🍁" },
            ].map((s) => (
              <div key={s.val} style={{
                background: "#3F9AAE",
                borderRadius: 16,
                padding: "24px 16px",
                boxShadow: "0 4px 20px rgba(63,154,174,0.25)",
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{s.val}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. PRICING + CONNECTION SELECTOR ── */}
        <HomePricing />

        {/* ── 4. DEVICES MARQUEE ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#1A3D45" }}>
              Works on All Your Devices
            </h2>
            <p style={{ textAlign: "center", color: "#1A3D45", marginBottom: 48, fontSize: 15 }}>
              One subscription — every screen in your home.
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...deviceNames, ...deviceNames].map((name, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "rgba(63,154,174,0.1)",
                    border: "1px solid rgba(63,154,174,0.25)",
                    borderRadius: 14,
                    padding: "14px 24px",
                    color: "#1A3D45",
                    fontSize: 13,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CANADIAN CHANNELS ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
              Canadian Content
            </p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 16, color: "#1A3D45" }}>
              All Your Favourite Canadian Channels
            </h2>
            <p style={{ textAlign: "center", color: "#1A3D45", marginBottom: 40, fontSize: 15, maxWidth: 620, margin: "0 auto 40px" }}>
              Maple4K includes every major Canadian network in the highest available quality — no blackouts, no compression artifacts on NHL, CFL, or NBA games.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 32 }}>
              {["CBC", "CTV", "Global", "City TV", "CP24", "TSN 1", "TSN 2", "TSN 3", "TSN 4", "TSN 5", "Sportsnet", "Sportsnet ONE", "Sportsnet West", "Sportsnet Pacific", "RDS", "TVA Sports", "TVA", "Canal Vie"].map((ch) => (
                <span
                  key={ch}
                  style={{
                    background: "rgba(63,154,174,0.08)",
                    border: "1px solid rgba(63,154,174,0.2)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1A3D45",
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
            <p style={{ textAlign: "center", color: "#1A3D45", fontSize: 13 }}>
              + 25,000+ more channels from around the world
            </p>
          </div>
        </section>

        {/* ── 6. SPORTS ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5", overflow: "hidden" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#1A3D45" }}>
              Never Miss a Game
            </h2>
            <p style={{ textAlign: "center", color: "#1A3D45", marginBottom: 16, fontSize: 15 }}>
              All PPV events included at no extra charge. Every game streamed at maximum broadcast quality — 4K Ultra HD where available.
            </p>
            <p style={{ textAlign: "center", color: "#3F9AAE", fontSize: 13, marginBottom: 44 }}>
              ✓ No blackouts &nbsp;&nbsp; ✓ All PPV events free &nbsp;&nbsp; ✓ 4K Ultra HD live sports
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track" style={{ gap: 16 }}>
              {[...sportsChannels, ...sportsChannels].map((ch, i) => (
                <div
                  key={i}
                  style={{
                    flexShrink: 0,
                    background: "rgba(249,110,91,0.06)",
                    border: "1px solid rgba(249,110,91,0.15)",
                    borderRadius: 14,
                    padding: "14px 24px",
                    color: "#1A3D45",
                    fontSize: 13,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {ch}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. COMPARISON TABLE ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#1A3D45" }}>
              Maple4K vs Cable vs Generic IPTV
            </h2>
            <p style={{ textAlign: "center", color: "#1A3D45", marginBottom: 48, fontSize: 15 }}>
              Cable tops out at 1080i. Generic IPTV uses H.264. Maple4K streams True 4K H.265/HEVC with HDR.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "14px 16px", color: "#1A3D45", fontWeight: 600, borderBottom: "1px solid rgba(63,154,174,0.2)" }}>Feature</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#F96E5B", fontWeight: 700, borderBottom: "1px solid rgba(249,110,91,0.3)", background: "rgba(249,110,91,0.06)" }}>Maple4K</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#1A3D45", fontWeight: 600, borderBottom: "1px solid rgba(63,154,174,0.2)" }}>Cable</th>
                    <th style={{ textAlign: "center", padding: "14px 16px", color: "#1A3D45", fontWeight: 600, borderBottom: "1px solid rgba(63,154,174,0.2)" }}>Other IPTV</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? "transparent" : "rgba(63,154,174,0.04)" }}>
                      <td style={{ padding: "14px 16px", color: "#1A3D45", fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#3F9AAE", fontWeight: 600, background: "rgba(249,110,91,0.04)" }}>{row.us}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#1A3D45" }}>{row.cable}</td>
                      <td style={{ padding: "14px 16px", textAlign: "center", color: "#1A3D45" }}>{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>FAQ</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 48, color: "#1A3D45" }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    background: "rgba(63,154,174,0.08)",
                    border: "1px solid rgba(63,154,174,0.2)",
                    borderRadius: 16,
                    padding: "24px 28px",
                  }}
                >
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: "#1A3D45" }}>{faq.q}</h3>
                  <p style={{ color: "#1A3D45", fontSize: 14, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. CITIES ── */}
        <section style={{ padding: "80px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#1A3D45" }}>
              Serving Canadians Coast to Coast
            </h2>
            <p style={{ textAlign: "center", color: "#1A3D45", marginBottom: 48, fontSize: 15 }}>
              Fast Maple4K servers optimized for every major Canadian city.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 14,
              }}
            >
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  style={{
                    background: "rgba(63,154,174,0.08)",
                    border: "1px solid rgba(63,154,174,0.2)",
                    borderRadius: 12,
                    padding: "18px 16px",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#1A3D45",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "block",
                  }}
                >
                  🍁 {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          style={{
            padding: "80px 16px",
            textAlign: "center",
            background: "#E8F4F5",
          }}
        >
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, marginBottom: 16, color: "#1A3D45" }}>
              Start Streaming Today
            </h2>
            <p style={{ color: "#1A3D45", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
              The only Canadian IPTV built around True 4K Ultra HD. H.265/HEVC encoded, HDR10 & Dolby Vision supported — at $9/month. Try free, no credit card required.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/free-trial"
                style={{
                  background: "#F96E5B",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Get Free Trial
              </Link>
              <Link
                href="/pricing"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(249,110,91,0.4)",
                  color: "#F96E5B",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "16px 36px",
                  borderRadius: 14,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                View Pricing →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
