import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "TiviMate Canada 2026 — Setup Guide for Fire Stick & Android TV | Maple4K" },
  description: "TiviMate IPTV player setup guide for Canada 2026. Configure TiviMate on Fire Stick, Android TV Box, and Shield TV with Maple4K. Best IPTV player for 4K H.265 streams.",
  keywords: "tivimate canada, tivimate iptv canada, tivimate fire stick canada, tivimate android tv canada, tivimate setup canada, best iptv player canada",
  alternates: { canonical: "https://maple4k.ca/tivimate-canada" },
  openGraph: {
    title: "TiviMate Canada 2026 — Complete Setup Guide | Maple4K",
    description: "Set up TiviMate with Maple4K on Fire Stick or Android TV. Best 4K IPTV player in Canada — EPG, recordings, multi-screen. Full 2026 guide.",
    url: "https://maple4k.ca/tivimate-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TiviMate Canada Setup – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up TiviMate with Maple4K in Canada",
  description: "Step-by-step guide to configure TiviMate IPTV player on Fire Stick or Android TV with Maple4K credentials.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Install TiviMate Companion", text: "On your phone, install TiviMate Companion from the Play Store. On your Fire Stick or Android TV, install TiviMate from the Amazon App Store or sideload the APK." },
    { "@type": "HowToStep", position: 2, name: "Subscribe to Maple4K", text: "Get your Maple4K credentials (Server URL, Username, Password) by subscribing via the website or contacting us on WhatsApp." },
    { "@type": "HowToStep", position: 3, name: "Add Playlist in TiviMate", text: "Open TiviMate on your Fire Stick or Android TV. Go to Settings > Playlists > Add Playlist. Select Xtream Codes. Enter your Maple4K server URL, username, and password." },
    { "@type": "HowToStep", position: 4, name: "Add EPG Guide", text: "In TiviMate, go to Settings > EPG Sources. Your EPG URL is provided with your Maple4K credentials. Add it for full TV schedule support." },
    { "@type": "HowToStep", position: 5, name: "Configure 4K Playback", text: "Go to Settings > Playback > select Hardware Acceleration and set video decoder to Auto. This enables smooth 4K H.265 playback on all content." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is TiviMate free in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "TiviMate has a free version with basic features. TiviMate Premium costs around $4.99 USD/year and unlocks recordings, multiple playlists, and advanced EPG. You still need a separate IPTV subscription like Maple4K." },
    },
    {
      "@type": "Question",
      name: "Does TiviMate work on Fire Stick in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. TiviMate is available on the Amazon App Store for Fire Stick and Fire TV. It's the top-rated IPTV player for Fire Stick in Canada, especially for 4K H.265 streams with full EPG." },
    },
    {
      "@type": "Question",
      name: "What is TiviMate Premium and is it worth it?",
      acceptedAnswer: { "@type": "Answer", text: "TiviMate Premium (~$4.99/year) adds: catch-up TV recordings, multiple playlists, parental controls, panel view, and advanced EPG features. For Canadian sports fans watching TSN and Sportsnet, the catch-up recording feature alone makes it worth every cent." },
    },
    {
      "@type": "Question",
      name: "Why is TiviMate better than IPTV Smarters Pro for Canada?",
      acceptedAnswer: { "@type": "Answer", text: "TiviMate has a more polished TV-first UI, smoother EPG, better buffer management for 4K streams, and superior catch-up/recording. IPTV Smarters Pro is better for mobile. For Fire Stick and Android TV in Canada, TiviMate is the clear winner." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://maple4k.ca" },
    { "@type": "ListItem", position: 2, name: "TiviMate Canada", item: "https://maple4k.ca/tivimate-canada" },
  ],
};

const bg = "#0C0F1A";
const red = "#E8041F";
const rs = { color: red } as const;

const steps = [
  { n: "1", title: "Install TiviMate on Your Device", body: "Fire Stick / Fire TV: search 'TiviMate' in the Amazon App Store and install directly. Android TV Box / Shield TV: find it on the Google Play Store. No sideloading needed on either." },
  { n: "2", title: "Get Your Maple4K Credentials", body: "Subscribe to Maple4K and contact us via WhatsApp, Telegram, or email. You'll receive your Server URL, Username, and Password within minutes." },
  { n: "3", title: "Add Playlist via Xtream Codes", body: "Open TiviMate → Settings → Playlists → Add Playlist → Xtream Codes. Enter your Maple4K Server URL, Username, and Password. Tap Load. Your 50,000+ channels load automatically." },
  { n: "4", title: "Set Up EPG (TV Guide)", body: "Go to Settings → EPG Sources. Enter the EPG URL provided with your credentials. Set refresh to every 24 hours. You'll get full TV schedules for TSN, Sportsnet, CBC, CTV and all channels." },
  { n: "5", title: "Enable Hardware Acceleration for 4K", body: "Settings → Playback → Video Decoder → Auto (Hardware). This enables the Fire Stick or Android TV's built-in H.265 decoder for butter-smooth 4K without buffering." },
];

const features = [
  { icon: "📺", title: "Full EPG / TV Guide", body: "See what's on now and next on every channel. TSN, Sportsnet, CBC game schedules — all visible 7 days ahead." },
  { icon: "⏺️", title: "Catch-Up & Recording", body: "TiviMate Premium lets you record live TV and access catch-up on supported channels. Never miss a Leafs game again." },
  { icon: "🎬", title: "4K H.265 Native", body: "Hardware-accelerated H.265 decoding means true 4K streams play without buffering on Fire Stick 4K and Android TV." },
  { icon: "📱", title: "Multi-Screen Layout", body: "Watch one channel while browsing the EPG guide. Picture-in-picture style panel view only in TiviMate Premium." },
  { icon: "🔍", title: "Fast Channel Search", body: "Type any channel name and find it instantly across 50,000+ channels. No endless scrolling." },
  { icon: "⭐", title: "Favourites & Groups", body: "Organize channels into custom groups. Put TSN, Sportsnet, and CBC in one folder — open and done." },
];

export default function TiviMateCanadaPage() {
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
              TiviMate Canada · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, margin: "24px 0 20px", lineHeight: 1.1 }}>
              TiviMate Canada — Best IPTV Player for Fire Stick & Android TV 2026
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", maxWidth: 680, marginBottom: 36, lineHeight: 1.65 }}>
              TiviMate is the #1 rated IPTV player in Canada for Fire Stick and Android TV. Pair it with Maple4K for the best 4K streaming experience — full EPG, recordings, hardware-accelerated H.265. This guide shows you exactly how to set it up.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Get Maple4K Free Trial</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
          </div>
        </section>

        {/* TiviMate vs Smarters comparison */}
        <section style={{ background: "#0E1120", padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 12 }}>TiviMate vs IPTV Smarters Pro — Which Is Better for Canada?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
              Both are excellent IPTV players for Canada, but they serve different use cases. Here&apos;s the honest comparison:
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "rgba(232,4,31,0.12)", borderBottom: "2px solid rgba(232,4,31,0.3)" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "#fff" }}>Feature</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontWeight: 700, color: red }}>TiviMate</th>
                    <th style={{ padding: "14px 16px", textAlign: "center", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>IPTV Smarters Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Best For", "Fire Stick / Android TV", "iPhone / Android Phone"],
                    ["EPG Quality", "⭐⭐⭐⭐⭐ Excellent", "⭐⭐⭐⭐ Good"],
                    ["4K H.265 Support", "✅ Hardware decoded", "✅ Hardware decoded"],
                    ["Catch-Up TV", "✅ Premium feature", "⚠️ Limited"],
                    ["Recording", "✅ Premium feature", "❌ Not available"],
                    ["Price", "Free / $4.99/yr Premium", "Free"],
                    ["Mobile App", "❌ TV only", "✅ iPhone & Android"],
                    ["Fire Stick", "✅ App Store", "✅ App Store"],
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
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 12 }}>Verdict: Use TiviMate on your TV, use IPTV Smarters Pro on your phone.</p>
          </div>
        </section>

        {/* Step-by-step setup */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 36 }}>
              TiviMate + Maple4K Setup Guide (2026)
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
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32 }}>Why Canadians Love TiviMate</h2>
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

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32 }}>TiviMate Canada — FAQ</h2>
            {[
              { q: "Is TiviMate free in Canada?", a: "TiviMate has a free version with basic features. TiviMate Premium costs ~$4.99 USD/year and unlocks recordings, multiple playlists, and advanced EPG. You still need a separate IPTV subscription like Maple4K from $9/month." },
              { q: "Does TiviMate work on Fire Stick in Canada?", a: "Yes. Available on the Amazon App Store — search 'TiviMate' and install directly. No sideloading needed. It's the top-rated IPTV player for Fire Stick in Canada, optimized for 4K H.265 and full EPG." },
              { q: "What is TiviMate Premium and is it worth it?", a: "TiviMate Premium (~$4.99/year) adds catch-up TV recordings, multiple playlists, parental controls, panel view, and advanced EPG. For Canadian sports fans watching TSN and Sportsnet, the catch-up recording feature alone makes it worth every cent." },
              { q: "Why is TiviMate better than IPTV Smarters Pro for Canada?", a: "TiviMate has a more polished TV-first UI, smoother EPG, better buffer management for 4K H.265, and superior catch-up/recording. For Fire Stick and Android TV in Canada, TiviMate wins. For mobile (iPhone/Android phone), use IPTV Smarters Pro." },
            ].map(item => (
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
        <section style={{ padding: "80px 16px", background: "#0E1120", textAlign: "center" }}>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Get Your Maple4K Credentials for TiviMate</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              Free 24H trial — no credit card. Get credentials in minutes and start streaming 50,000+ channels in 4K on TiviMate.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
            <p style={{ marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              Also:{" "}
              <Link href="/blog/iptv-smarters-pro-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>IPTV Smarters Pro</Link>{" · "}
              <Link href="/iptv-firestick-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>Fire Stick Canada</Link>{" · "}
              <Link href="/iptv-android-tv-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>Android TV Canada</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
