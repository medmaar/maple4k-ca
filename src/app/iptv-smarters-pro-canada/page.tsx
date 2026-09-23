import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "IPTV Smarters Pro Canada 2026 — Setup Guide & Free Trial | Maple4K" },
  description:
    "IPTV Smarters Pro setup guide for Canada 2026. Configure Smarters Pro on Firestick, Android, iPhone & Smart TV with Maple4K. 50,000+ channels, free 24h trial.",
  keywords:
    "ip tv smarters pro, iptv smarters pro, iptv smarters, smarters pro, smarterspro, smarters players lite, iptv smarters pro free, iptv smarters pro pc, smarters player, ip tv smarter pro, ip tv smarters, ip tv smart pro, smarters iptv pro, smarters pro iptv, iptv smarters lite, iptv smarters downloader, iptv smarters pro canada",
  alternates: { canonical: "https://maple4k.ca/iptv-smarters-pro-canada" },
  openGraph: {
    title: "IPTV Smarters Pro Canada 2026 — Setup Guide & Free Trial | Maple4K",
    description:
      "Set up IPTV Smarters Pro with Maple4K in minutes. 50,000+ channels in 4K, works on Firestick, Android, iOS, Smart TV. Free 24h trial, no credit card.",
    url: "https://maple4k.ca/iptv-smarters-pro-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "IPTV Smarters Pro Canada – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up IPTV Smarters Pro with Maple4K in Canada",
  description: "Step-by-step guide to configure IPTV Smarters Pro on Firestick, Android, iOS, or Smart TV with Maple4K credentials.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Download IPTV Smarters Pro", text: "Install IPTV Smarters Pro from the Amazon App Store (Firestick), Google Play (Android), the App Store (iPhone/iPad), or smarterspro.tv for Smart TVs." },
    { "@type": "HowToStep", position: 2, name: "Subscribe to Maple4K", text: "Order a Maple4K plan or start the free 24-hour trial. You'll receive your Server URL, Username, and Password by email within 5 minutes." },
    { "@type": "HowToStep", position: 3, name: "Add Playlist via Xtream Codes API", text: "Open IPTV Smarters Pro, choose 'Login with Xtream Codes API', enter any name, then paste your Maple4K Server URL, Username, and Password. Tap Add User." },
    { "@type": "HowToStep", position: 4, name: "Load Channels & EPG", text: "Smarters Pro automatically loads all 50,000+ Maple4K channels and the full TV guide (EPG) — no extra setup needed." },
    { "@type": "HowToStep", position: 5, name: "Enable 4K Playback", text: "In Settings > Player, keep the default hardware decoder enabled so 4K H.265 streams play smoothly without buffering." },
  ],
};

const faqItems = [
  {
    q: "Is IPTV Smarters Pro free in Canada?",
    a: "Yes. IPTV Smarters Pro is a completely free app to download and use. It's just a player — you still need a channel subscription like Maple4K (from $9/month, with a free 24-hour trial) to actually watch content through it.",
  },
  {
    q: "How do I add Maple4K to IPTV Smarters Pro?",
    a: "Open the app, select 'Login with Xtream Codes API', then enter the Server URL, Username, and Password you receive from Maple4K after subscribing. Your channels and EPG load automatically within seconds.",
  },
  {
    q: "Does IPTV Smarters Pro work on Firestick and iPhone?",
    a: "Yes — IPTV Smarters Pro is available on Firestick/Fire TV (Amazon App Store), Android phones and boxes (Google Play), iPhone and iPad (App Store), and most Smart TVs. One Maple4K subscription can be used across multiple devices depending on your plan.",
  },
  {
    q: "What is IPTV Smarters Pro Lite / Smarters Player Lite?",
    a: "Smarters Player Lite is a lighter, simplified version of the same app with fewer settings but the same core Xtream Codes login. Either version works fine with Maple4K — Smarters Pro has more customization options.",
  },
  {
    q: "Why won't my Smarters Pro connect to Maple4K?",
    a: "This is almost always a typo in the Server URL, username, or password, or an expired subscription. Double-check for extra spaces, confirm your plan is active, and restart the app. If it still fails, our support team can verify your credentials in minutes via WhatsApp.",
  },
  {
    q: "Is IPTV Smarters Pro better than TiviMate?",
    a: "They serve different devices well. Smarters Pro has native iPhone and Android phone apps, which TiviMate lacks. TiviMate has a more polished TV-first interface with better EPG and catch-up recording on Firestick and Android TV. Many Maple4K customers use Smarters Pro on mobile and TiviMate on the TV.",
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
    { "@type": "ListItem", position: 2, name: "IPTV Smarters Pro Canada", item: "https://maple4k.ca/iptv-smarters-pro-canada" },
  ],
};

const bg = "#0C0F1A";
const red = "#E8041F";
const rs = { color: red } as const;

const steps = [
  { n: "1", title: "Download IPTV Smarters Pro", body: "Firestick/Fire TV: search 'IPTV Smarters Pro' in the Amazon App Store. Android: Google Play. iPhone/iPad: the App Store. Smart TV: smarterspro.tv. It's free on every platform." },
  { n: "2", title: "Get Your Maple4K Credentials", body: "Subscribe to Maple4K or start the free 24-hour trial. Your Server URL, Username, and Password arrive by email (check spam) within 5 minutes." },
  { n: "3", title: "Login with Xtream Codes API", body: "Open Smarters Pro → 'Login with Xtream Codes API' → enter any playlist name → paste your Maple4K Server URL, Username, and Password → Add User." },
  { n: "4", title: "Browse Live TV, Movies & Series", body: "All 50,000+ Maple4K channels plus 120,000+ VOD titles load automatically, organized into categories with full EPG for every Canadian channel." },
  { n: "5", title: "Turn On Hardware Decoding for 4K", body: "Settings → Player → keep 'Hardware Decoder' enabled. This uses your device's built-in H.265 decoder so 4K plays smoothly with no buffering." },
];

const features = [
  { icon: "📱", title: "Works on Every Device", body: "Firestick, Android phones & boxes, iPhone, iPad, Smart TV — one app, almost every screen you own." },
  { icon: "🗂️", title: "Multi-Screen (4 Screens)", body: "Watch up to 4 channels at once in a grid layout — perfect for tracking multiple live games simultaneously." },
  { icon: "🎬", title: "Live TV + VOD + Catch-Up", body: "50,000+ live channels, 120,000+ on-demand movies and series, and catch-up TV on supported channels, all in one app." },
  { icon: "🔎", title: "Parental Controls", body: "Lock adult categories with a PIN — set it up once in Settings and control exactly what's accessible on shared devices." },
  { icon: "⚡", title: "Fast, Free & No Ads", body: "The app itself is completely free with no ads. All you pay for is your Maple4K channel subscription." },
  { icon: "📺", title: "Full EPG / TV Guide", body: "See what's airing now and up to 7 days ahead on every channel, including TSN, Sportsnet, CBC and CTV." },
];

export default function SmartersProCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: bg, color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: bg, padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: red, fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              IPTV Smarters Pro · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, margin: "24px 0 20px", lineHeight: 1.1 }}>
              IPTV Smarters Pro Canada — Full Setup Guide 2026
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", maxWidth: 680, marginBottom: 36, lineHeight: 1.65 }}>
              IPTV Smarters Pro is the most-downloaded IPTV player in Canada — free, and available on nearly every device. Pair it with Maple4K for 50,000+ live channels in true 4K. This guide shows you the exact setup, step by step.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Get Maple4K Free Trial</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
          </div>
        </section>

        {/* What is it */}
        <section style={{ background: "#0E1120", padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 16 }}>What Is IPTV Smarters Pro?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>
              IPTV Smarters Pro is a free media player app that connects to an IPTV subscription — like Maple4K — using a Server URL, Username, and Password (an "Xtream Codes" connection). The app itself has no channels built in; it&apos;s the player, and Maple4K is the content.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              It&apos;s the go-to choice for Canadians who want one app that works identically across Firestick, Android, iPhone, and Smart TV — with live TV, 120,000+ movies and series, catch-up, and parental controls, all for free.
            </p>
          </div>
        </section>

        {/* Step-by-step setup */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 36 }}>
              IPTV Smarters Pro + Maple4K Setup Guide
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {steps.map(step => (
                <div key={step.n} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", background: red, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 900 }}>{step.n}</div>
                  <div style={{ paddingTop: 4 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{step.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: "60px 16px", background: "#0E1120" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32 }}>Why Canadians Choose IPTV Smarters Pro</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {features.map(f => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 22 }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section style={{ background: bg, padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 12 }}>Smarters Pro vs TiviMate — Which Should You Use?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Both work great with Maple4K. Here&apos;s the honest breakdown so you pick the right one per device:
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "rgba(232,4,31,0.12)", borderBottom: "2px solid rgba(232,4,31,0.3)" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "#fff" }}>Feature</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontWeight: 700, color: red }}>IPTV Smarters Pro</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>TiviMate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Best For", "iPhone / Android phone", "Firestick / Android TV"],
                    ["Price", "Free", "Free / $4.99/yr Premium"],
                    ["Mobile App", "✅ iPhone & Android", "❌ TV only"],
                    ["EPG Quality", "⭐⭐⭐⭐ Good", "⭐⭐⭐⭐⭐ Excellent"],
                    ["Catch-Up TV", "⚠️ Limited", "✅ Premium feature"],
                    ["4K H.265 Support", "✅ Hardware decoded", "✅ Hardware decoded"],
                    ["Multi-Screen View", "✅ Up to 4 screens", "⚠️ Premium only"],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                      <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{row[0]}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center", color: "#fff" }}>{row[1]}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center", color: "rgba(255,255,255,0.55)" }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 12 }}>Verdict: Smarters Pro on mobile, TiviMate on the TV — many Maple4K customers run both.</p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: "#0E1120" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32 }}>IPTV Smarters Pro Canada — FAQ</h2>
            {faqItems.map(item => (
              <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
                <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.q}<span style={rs}>+</span>
                </summary>
                <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 16px", background: bg, textAlign: "center" }}>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Get Your Maple4K Credentials for Smarters Pro</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              Free 24H trial — no credit card. Get credentials in minutes and start streaming 50,000+ channels in 4K on IPTV Smarters Pro.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
            <p style={{ marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              Also:{" "}
              <Link href="/tivimate-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>TiviMate Canada</Link>{" · "}
              <Link href="/best-iptv-apps-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>All IPTV Player Apps</Link>{" · "}
              <Link href="/blog/iptv-smarters-pro-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>Full Smarters Pro Guide (Blog)</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
