import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Smarters Pro Canada 2026: Setup Guide for iPhone, Android & TV | Maple4K",
  description: "Complete IPTV Smarters Pro setup guide for Canada 2026. Configure Smarters Pro on iPhone, Android, Fire Stick, and Smart TV. Step-by-step tutorial with Maple4K.",
  keywords: "iptv smarters pro canada, iptv smarters pro setup, iptv smarters canada, smarters pro iptv, iptv smarters pro android, iptv smarters pro iphone, iptv smarters pro fire stick",
  alternates: { canonical: "https://maple4k.ca/blog/iptv-smarters-pro-canada" },
  openGraph: {
    title: "IPTV Smarters Pro Canada 2026 — Setup Guide | Maple4K",
    description: "How to set up IPTV Smarters Pro in Canada on any device. Works with iPhone, Android, Fire Stick, Smart TV. Complete 2026 tutorial.",
    url: "https://maple4k.ca/blog/iptv-smarters-pro-canada",
    type: "article",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "IPTV Smarters Pro Canada Setup Guide – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IPTV Smarters Pro Canada 2026 — Complete Setup Guide",
  description: "How to set up IPTV Smarters Pro in Canada on iPhone, Android, Fire Stick, and Smart TV. Step-by-step tutorial for Maple4K subscribers.",
  datePublished: "2026-01-10",
  dateModified: "2026-05-23",
  author: { "@type": "Person", name: "Alex Tremblay", url: "https://maple4k.ca/about" },
  publisher: { "@type": "Organization", name: "Maple4K", url: "https://maple4k.ca" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://maple4k.ca/blog/iptv-smarters-pro-canada" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up IPTV Smarters Pro in Canada",
  step: [
    { "@type": "HowToStep", position: 1, name: "Download IPTV Smarters Pro", text: "On Android: Google Play Store. On iPhone/iPad: App Store. On Fire Stick: Amazon App Store." },
    { "@type": "HowToStep", position: 2, name: "Select Xtream Codes API Login", text: "On the login screen, tap 'Login with Xtream Codes API'. Do NOT use M3U URL unless specified." },
    { "@type": "HowToStep", position: 3, name: "Enter Your Maple4K Credentials", text: "Enter the Server URL, Username, and Password sent to you after subscribing. Tap Add User." },
    { "@type": "HowToStep", position: 4, name: "Wait for Channels to Load", text: "IPTV Smarters Pro will load your full channel list. This can take 30-60 seconds on first load." },
    { "@type": "HowToStep", position: 5, name: "Browse and Watch", text: "Navigate to Live TV, Movies, or Series. Use the EPG for TV schedules." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is IPTV Smarters Pro free in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "IPTV Smarters Pro is a free app on Android, iOS, and Amazon Fire Stick. You need a separate IPTV subscription like Maple4K. The app itself costs nothing." },
    },
    {
      "@type": "Question",
      name: "Does IPTV Smarters Pro work on iPhone in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Available on the App Store for iPhone and iPad. Works perfectly with Maple4K's Xtream Codes API credentials." },
    },
    {
      "@type": "Question",
      name: "What is the difference between IPTV Smarters Pro and IPTV Smarters?",
      acceptedAnswer: { "@type": "Answer", text: "IPTV Smarters Pro has a better UI, multi-screen support, EPG integration, and H.265/HEVC hardware decoding — ideal for Maple4K's 4K streams." },
    },
    {
      "@type": "Question",
      name: "Can I use IPTV Smarters Pro on Fire Stick in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Search 'IPTV Smarters Pro' in the Amazon App Store on your Fire Stick and install directly — no sideloading required." },
    },
  ],
};

const bg = "#0C0F1A";
const rs = { color: "#E8041F" } as const;

const steps = [
  { n: "1", title: "Download IPTV Smarters Pro", body: "Android: Google Play Store. iPhone/iPad: App Store. Fire Stick/Fire TV: Amazon App Store (search directly, no sideloading). Smart TV: contact us for device-specific guidance." },
  { n: "2", title: "Select Login Method: Xtream Codes API", body: "On the login screen, tap 'Login with Xtream Codes API'. This is the most reliable method for Maple4K. Only use M3U URL if specifically instructed." },
  { n: "3", title: "Enter Your Maple4K Credentials", body: "Fill in: Server URL, Username, and Password — sent to you after subscribing via WhatsApp, Telegram, or email. Tap 'Add User'." },
  { n: "4", title: "Wait for Channel List to Load", body: "Smarters Pro loads your full channel list — 50,000+ channels. First load takes 30–60 seconds. Subsequent loads are faster due to local caching." },
  { n: "5", title: "Navigate and Stream", body: "Use the bottom navigation bar: Live TV, Movies, Series. Tap the EPG icon for the Electronic Programme Guide. Use search to find specific channels like TSN or Sportsnet." },
];

export default function IPTVSmartersProPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: bg, color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: bg, padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 20, alignItems: "center" }}>
              <Link href="/blog" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Blog</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>IPTV Smarters Pro Canada</span>
            </div>
            <h1 style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 900, margin: "0 0 20px", lineHeight: 1.1 }}>
              IPTV Smarters Pro Canada — Complete Setup Guide 2026
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 24 }}>
              IPTV Smarters Pro is the most popular IPTV player app in Canada. This guide covers downloading the app, entering Maple4K credentials, and streaming on any device — iPhone, Android, Fire Stick, or Smart TV.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              <span>By Alex Tremblay</span>
              <span>·</span>
              <span>Updated May 23, 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section style={{ background: "#0E1120", padding: "40px 16px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ background: "rgba(232,4,31,0.06)", border: "1px solid rgba(232,4,31,0.2)", borderRadius: 16, padding: 28 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", ...rs }}>Quick Answer: Setup in 5 Steps</h2>
              <ol style={{ margin: 0, paddingLeft: 20, color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 2 }}>
                <li>Download IPTV Smarters Pro (Play Store / App Store / Amazon App Store)</li>
                <li>Select <strong>"Login with Xtream Codes API"</strong></li>
                <li>Enter your Maple4K Server URL, Username, Password</li>
                <li>Tap <strong>Add User</strong> → wait 30–60s for channels to load</li>
                <li>Stream 50,000+ channels in HD and 4K</li>
              </ol>
            </div>
          </div>
        </section>

        {/* What is Smarters Pro */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, marginBottom: 20 }}>What Is IPTV Smarters Pro?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>
              IPTV Smarters Pro is a free IPTV player app available on Android, iOS, and Amazon Fire Stick. It acts as the front-end for your IPTV subscription — you bring the subscription (Maple4K), the app handles playback.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
              In Canada, it&apos;s the go-to choice because it supports Xtream Codes API (the format Maple4K uses), has full EPG support, handles H.265/HEVC for 4K streams, and runs on virtually every device.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
              {[{ icon: "📱", label: "Android" }, { icon: "🍎", label: "iPhone & iPad" }, { icon: "🔥", label: "Fire Stick / Fire TV" }, { icon: "📺", label: "Smart TV" }].map(d => (
                <div key={d.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{d.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{d.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step */}
        <section style={{ padding: "60px 16px", background: "#0E1120" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, marginBottom: 36 }}>Step-by-Step Setup Guide</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {steps.map(step => (
                <div key={step.n} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: "50%", background: "#E8041F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800 }}>{step.n}</div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, margin: "8px 0 8px" }}>{step.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, marginBottom: 24 }}>Pro Tips for Canadian Users</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {[
                { title: "Use Xtream Codes, Not M3U", body: "M3U re-downloads the entire playlist every launch — slow with 50,000+ channels. Xtream Codes API is faster, more stable, and supports EPG natively." },
                { title: "Enable Hardware Decoding", body: "In Settings, enable Hardware Decoding for H.265 4K streams. Without it, software decoding causes buffering on mid-range devices." },
                { title: "Set EPG to Daily Refresh", body: "Settings > EPG > Refresh every 24 hours. Accurate schedules for TSN, Sportsnet, CBC without overloading the server." },
                { title: "External Player for 4K", body: "For True 4K streams, set VLC or MX Player as external player in Settings. Better H.265 handling on some Android devices and Fire Sticks." },
              ].map(tip => (
                <div key={tip.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 22 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 8px", ...rs }}>{tip.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{tip.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: "#0E1120" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 800, marginBottom: 32 }}>Frequently Asked Questions</h2>
            {[
              { q: "Is IPTV Smarters Pro free in Canada?", a: "Yes — IPTV Smarters Pro is a free app on Android, iOS, and Amazon Fire Stick. You need a separate IPTV subscription like Maple4K. The app itself costs nothing." },
              { q: "Does IPTV Smarters Pro work on iPhone in Canada?", a: "Yes. Available on the App Store for iPhone and iPad. Works perfectly with Maple4K's Xtream Codes API credentials." },
              { q: "What is the difference between IPTV Smarters Pro and IPTV Smarters?", a: "IPTV Smarters Pro has a better UI, multi-screen support, EPG integration, and H.265/HEVC hardware decoding — ideal for Maple4K's 4K content." },
              { q: "Can I use IPTV Smarters Pro on Fire Stick in Canada?", a: "Yes. Search 'IPTV Smarters Pro' in the Amazon App Store on your Fire Stick and install directly — no sideloading required." },
            ].map(item => (
              <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
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
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Ready to Start Streaming?</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              Get your Maple4K credentials and start using IPTV Smarters Pro in minutes. Free 24H trial — no credit card required.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
            <p style={{ marginTop: 32, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              Related:{" "}
              <Link href="/blog/best-iptv-player-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>Best IPTV Player Canada</Link>{" · "}
              <Link href="/iptv-firestick-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>IPTV Fire Stick Canada</Link>{" · "}
              <Link href="/iptv-android-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>IPTV Android Canada</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
