import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV on Apple TV & iPhone in Canada 2026 | Maple4K",
  description:
    "Use Maple4K IPTV on Apple TV, iPhone, and iPad in Canada. 25,000+ live channels, NHL, TSN, CBC in 4K. Easy Infuse or IPTV Smarters setup. From $9/month.",
  keywords: "IPTV Apple TV Canada, IPTV iPhone Canada, IPTV iPad Canada 2026",
  alternates: { canonical: "https://maple4k.ca/iptv-apple-tv-canada" },
  openGraph: {
    title: "IPTV on Apple TV & iPhone in Canada 2026 | Maple4K",
    description: "Use Maple4K IPTV on Apple TV, iPhone, and iPad in Canada. 25,000+ live channels, NHL, TSN, CBC in 4K. Easy Infuse or IPTV Smarters setup. From $9/month.",
    url: "https://maple4k.ca/iptv-apple-tv-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K IPTV Apple TV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up IPTV on Apple TV or iPhone in Canada",
  description: "Install Maple4K on your Apple TV or iPhone in under 5 minutes.",
  step: [
    { "@type": "HowToStep", name: "Download IPTV app", text: "Open the App Store on your Apple TV or iPhone and download 'IPTV Smarters Pro' or 'GSE Smart IPTV'." },
    { "@type": "HowToStep", name: "Get your credentials", text: "After subscribing to Maple4K, receive your server URL, username, and password by email within 5 minutes." },
    { "@type": "HowToStep", name: "Add your playlist", text: "Open the app, select 'Add via URL' and enter your M3U playlist URL or Xtream Codes credentials." },
    { "@type": "HowToStep", name: "Start streaming", text: "Browse and stream 25,000+ live channels and 120,000+ on-demand titles on your Apple device." },
  ],
};

export default function IPTVAppleTVCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 100%)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ display: "inline-block", background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 999, marginBottom: 24 }}>
              Maple4K · Apple Devices
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
              IPTV on Apple TV &amp; iPhone<br />
              <span style={{ color: "#F96E5B" }}>in Canada 2026</span>
            </h1>
            <p style={{ color: "#000000", fontSize: 17, lineHeight: 1.7, maxWidth: 680, marginBottom: 36 }}>
              Maple4K is fully compatible with all Apple devices in Canada — Apple TV (4th gen and later), iPhone, and iPad. Stream 25,000+ live channels including CBC, TSN, and Sportsnet in 4K without a cable subscription.
            </p>
            <Link href="/pricing" style={{ background: "#F96E5B", color: "#000000", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Get Your Maple4K Plan →
            </Link>
          </div>
        </section>

        <section style={{ padding: "60px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 32 }}>
              Why Maple4K Works Great on Apple Devices
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {[
                { title: "Apple TV Native Apps", desc: "Download IPTV Smarters Pro or GSE Smart IPTV directly from the Apple TV App Store — no sideloading required." },
                { title: "iPhone & iPad Support", desc: "Watch your favourite Canadian channels on the go. Stream in HD on your iPhone or iPad anywhere in Canada." },
                { title: "AirPlay Compatible", desc: "Start streaming on iPhone and AirPlay it directly to your Apple TV or any AirPlay-compatible TV." },
                { title: "4K HDR Streaming", desc: "Apple TV 4K supports full 4K HDR output — perfect for watching NHL games and live sports in stunning quality." },
              ].map((f) => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(63,154,174,0.1)", borderRadius: 16, padding: "24px 20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#F96E5B" }}>{f.title}</h3>
                  <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 16px", background: "#E8F4F5" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 32 }}>
              How to Set Up IPTV on Apple TV or iPhone
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { n: "01", title: "Choose a Maple4K Plan", desc: "Select a plan from $9/month on our pricing page. Pay via Interac e-Transfer or other accepted methods." },
                { n: "02", title: "Receive Your Login Details", desc: "Within 5 minutes, we'll email your server URL, username, and password." },
                { n: "03", title: "Download an IPTV App", desc: "On your Apple TV or iPhone, download 'IPTV Smarters Pro' or 'GSE Smart IPTV' from the App Store." },
                { n: "04", title: "Enter Your Credentials", desc: "Open the app and enter your Xtream Codes or M3U URL. Your channel list loads automatically." },
                { n: "05", title: "Watch in 4K", desc: "Enjoy 25,000+ live Canadian and international channels plus 120,000+ on-demand titles." },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 20, background: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 24px" }}>
                  <span style={{ color: "#F96E5B", fontWeight: 900, fontSize: 24, opacity: 0.5, minWidth: 36 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 16px", background: "#E8F4F5", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 16 }}>Start Streaming on Your Apple Device</h2>
            <p style={{ color: "#000000", marginBottom: 32, fontSize: 15 }}>
              Best Maple4K service for Apple TV, iPhone, and iPad. Plans from $9/month.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/pricing" style={{ background: "#F96E5B", color: "#000000", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 12, textDecoration: "none" }}>View Maple4K Plans →</Link>
              <Link href="/free-trial" style={{ background: "transparent", border: "2px solid rgba(249,110,91,0.4)", color: "#F96E5B", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 12, textDecoration: "none" }}>Try 24h Free</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
