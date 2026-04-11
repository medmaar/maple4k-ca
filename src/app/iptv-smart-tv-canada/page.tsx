import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV for Samsung & LG Smart TV in Canada 2026 | Maple4K",
  description:
    "Install Maple4K IPTV on your Samsung or LG Smart TV in Canada. 25,000+ live channels, NHL, TSN, CTV in 4K. Easy setup in minutes. From $9/month.",
  keywords: "IPTV Samsung TV Canada, IPTV LG Smart TV Canada, Smart TV Maple4K",
  alternates: { canonical: "https://maple4k.ca/iptv-smart-tv-canada" },
  openGraph: {
    title: "IPTV for Samsung & LG Smart TV in Canada 2026 | Maple4K",
    description: "Install Maple4K IPTV on your Samsung or LG Smart TV in Canada. 25,000+ live channels, NHL, TSN, CTV in 4K. Easy setup in minutes. From $9/month.",
    url: "https://maple4k.ca/iptv-smart-tv-canada",
    type: "website",
    siteName: "Maple4K",
  },
  twitter: { card: "summary_large_image" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up IPTV on Samsung or LG Smart TV in Canada",
  description: "Install Maple4K IPTV on your Smart TV in under 5 minutes.",
  step: [
    { "@type": "HowToStep", name: "Open Smart Hub", text: "Press the Home button on your Samsung or LG remote and open the app store (Samsung Apps or LG Content Store)." },
    { "@type": "HowToStep", name: "Download IPTV app", text: "Search for 'IPTV Smarters' or 'Smart IPTV' and install it on your Smart TV." },
    { "@type": "HowToStep", name: "Enter credentials", text: "Open the app and enter the server URL, username, and password that Maple4K sends to your email." },
    { "@type": "HowToStep", name: "Start streaming", text: "Browse 25,000+ channels, Canadian sports, and 120,000+ on-demand titles in 4K." },
  ],
};

export default function IPTVSmartTVCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 100%)", padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ display: "inline-block", background: "rgba(229,57,53,0.12)", border: "1px solid rgba(229,57,53,0.3)", color: "#E53935", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 999, marginBottom: 24 }}>
              Maple4K · Smart TV
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
              IPTV for Samsung &amp; LG Smart TV<br />
              <span style={{ color: "#E53935" }}>in Canada 2026</span>
            </h1>
            <p style={{ color: "#9ca3af", fontSize: 17, lineHeight: 1.7, maxWidth: 680, marginBottom: 36 }}>
              Maple4K works seamlessly on Samsung and LG Smart TVs across Canada. Get 25,000+ live channels including CBC, CTV, TSN, and Sportsnet in stunning 4K quality — all without a cable subscription.
            </p>
            <Link href="/pricing" style={{ background: "#E53935", color: "#fff", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12, textDecoration: "none", display: "inline-block" }}>
              Get Your Maple4K Plan →
            </Link>
          </div>
        </section>

        {/* Why Maple4K */}
        <section style={{ padding: "60px 16px", background: "#0d0d0d" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 32 }}>
              Why Maple4K Works Great on Smart TV
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {[
                { title: "4K Ultra HD Picture", desc: "Stream every NHL, NBA, and CFL game in crystal-clear 4K on your big screen Samsung or LG TV." },
                { title: "Zero Buffering", desc: "Our Canadian servers deliver smooth, lag-free streams optimized for Smart TV connections." },
                { title: "Electronic Program Guide", desc: "Navigate channels easily with a built-in EPG — just like traditional cable TV, on your Smart TV." },
                { title: "25,000+ Live Channels", desc: "Access every Canadian network plus thousands of international channels directly on your Smart TV." },
              ].map((f) => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "#E53935" }}>{f.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section style={{ padding: "60px 16px", background: "#0a0a0a" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 32 }}>
              How to Set Up IPTV on Your Smart TV
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { n: "01", title: "Subscribe to Maple4K", desc: "Choose a plan on our pricing page — starting at $9/month. Pay securely via Interac e-Transfer." },
                { n: "02", title: "Receive Your Credentials", desc: "We'll email you a server URL, username, and password within 5 minutes of your order." },
                { n: "03", title: "Install IPTV App on Smart TV", desc: "Open the Samsung Apps or LG Content Store and download 'Smart IPTV' or 'IPTV Smarters'." },
                { n: "04", title: "Enter Your Login Details", desc: "Open the app, input your server URL and credentials, then load your channel list." },
                { n: "05", title: "Start Streaming in 4K", desc: "Enjoy 25,000+ live channels and 120,000+ on-demand titles on your big-screen Smart TV." },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "20px 24px" }}>
                  <span style={{ color: "#E53935", fontWeight: 900, fontSize: 24, opacity: 0.5, minWidth: 36 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "60px 16px", background: "#0d0d0d", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: 16 }}>
              Ready to Cut the Cable?
            </h2>
            <p style={{ color: "#9ca3af", marginBottom: 32, fontSize: 15 }}>
              Get the best Maple4K service on your Smart TV. Plans start at $9/month with a free 2-hour trial.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/pricing" style={{ background: "#E53935", color: "#fff", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 12, textDecoration: "none" }}>
                View Maple4K Plans →
              </Link>
              <Link href="/free-trial" style={{ background: "transparent", border: "2px solid rgba(229,57,53,0.4)", color: "#E53935", fontWeight: 700, fontSize: 15, padding: "14px 30px", borderRadius: 12, textDecoration: "none" }}>
                Try 24h Free
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
