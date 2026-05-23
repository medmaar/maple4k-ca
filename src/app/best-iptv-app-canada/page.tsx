import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV App Canada 2026 — Top 5 Rated Players | Maple4K" },
  description: "The 5 best IPTV apps in Canada for 2026. TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect Player and more — compared for Fire Stick, Android, iPhone, and Smart TV.",
  keywords: "best iptv app canada, best iptv player canada, iptv app canada, iptv smarters canada, tivimate canada, best iptv app for fire stick canada, best iptv app iphone canada",
  alternates: { canonical: "https://maple4k.ca/best-iptv-app-canada" },
  openGraph: {
    title: "Best IPTV App Canada 2026 — Top 5 Players Compared | Maple4K",
    description: "TiviMate vs IPTV Smarters Pro vs GSE Smart IPTV — the best IPTV apps for Canada in 2026. Honest comparison for every device.",
    url: "https://maple4k.ca/best-iptv-app-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Best IPTV App Canada 2026 – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best IPTV app for Fire Stick in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "TiviMate is the best IPTV app for Fire Stick in Canada. It has the best EPG guide, hardware-accelerated 4K H.265 playback, recording features, and a TV-first interface. Available directly in the Amazon App Store." },
    },
    {
      "@type": "Question",
      name: "What is the best IPTV app for iPhone in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "IPTV Smarters Pro is the best IPTV app for iPhone in Canada. Available on the App Store, it supports Xtream Codes API, has a smooth mobile UI, EPG support, and plays 4K H.265 streams. GSE Smart IPTV is a solid alternative." },
    },
    {
      "@type": "Question",
      name: "What is the best IPTV app for Android in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "For Android phones and tablets, IPTV Smarters Pro is the top choice in Canada. For Android TV boxes, TiviMate is better. Both are available on the Google Play Store and support H.265 4K streams with Maple4K." },
    },
    {
      "@type": "Question",
      name: "Is there a free IPTV app for Canada?",
      acceptedAnswer: { "@type": "Answer", text: "TiviMate, IPTV Smarters Pro, and GSE Smart IPTV all have free versions in Canada. They are apps only — you still need an IPTV subscription like Maple4K (from $9/month) to access channels." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://maple4k.ca" },
    { "@type": "ListItem", position: 2, name: "Best IPTV App Canada", item: "https://maple4k.ca/best-iptv-app-canada" },
  ],
};

const bg = "#0C0F1A";
const red = "#E8041F";
const rs = { color: red } as const;

const apps = [
  {
    rank: 1,
    name: "TiviMate",
    badge: "Best for TV",
    badgeColor: "#E8041F",
    platforms: ["Fire Stick", "Android TV", "Shield TV"],
    price: "Free / $4.99/yr Premium",
    rating: "4.8/5",
    pros: ["Best EPG guide in Canada", "4K H.265 hardware decode", "Catch-up & recording (Premium)", "Clean TV-first interface", "Direct Amazon App Store install"],
    cons: ["No iPhone/Android phone app", "Premium needed for recordings"],
    verdict: "If you watch IPTV on a Fire Stick or Android TV box, TiviMate is the clear #1. The EPG and catch-up alone make it irreplaceable for TSN and Sportsnet.",
    link: "/tivimate-canada",
  },
  {
    rank: 2,
    name: "IPTV Smarters Pro",
    badge: "Best for Mobile",
    badgeColor: "#1565C0",
    platforms: ["iPhone", "iPad", "Android", "Fire Stick"],
    price: "Free",
    rating: "4.5/5",
    pros: ["Free on all platforms", "iPhone + iPad App Store", "Xtream Codes + M3U support", "Multi-screen playback", "Works on Fire Stick too"],
    cons: ["Less polished TV interface vs TiviMate", "No recording feature"],
    verdict: "The go-to for iPhone users in Canada. Also solid on Android and Fire Stick. 100% free and supports Maple4K's Xtream Codes API natively.",
    link: "/blog/iptv-smarters-pro-canada",
  },
  {
    rank: 3,
    name: "GSE Smart IPTV",
    badge: "Best for iOS",
    badgeColor: "#2E7D32",
    platforms: ["iPhone", "iPad", "Apple TV", "Android"],
    price: "Free / $2.99 Pro",
    rating: "4.3/5",
    pros: ["Excellent Apple TV support", "M3U + Xtream Codes + JSON API", "Clean iOS/tvOS design", "Chromecast support"],
    cons: ["Smaller feature set than TiviMate", "Apple TV app costs $2.99"],
    verdict: "If you use Apple TV 4K in Canada, GSE Smart IPTV is the best native tvOS option. Excellent alternative to Smarters for iPhone too.",
    link: "/iptv-apple-tv-canada",
  },
  {
    rank: 4,
    name: "Perfect Player",
    badge: "Lightweight",
    badgeColor: "#6A1B9A",
    platforms: ["Android TV", "Android Phone"],
    price: "Free",
    rating: "4.0/5",
    pros: ["Very lightweight — no lag on older boxes", "Good EPG display", "Simple and fast", "Free"],
    cons: ["Android only", "Minimal UI compared to TiviMate", "Less active development"],
    verdict: "Best for older Android TV boxes or low-RAM devices in Canada where TiviMate might be heavy. Does the job without bells and whistles.",
    link: "/iptv-android-tv-canada",
  },
  {
    rank: 5,
    name: "VLC Media Player",
    badge: "For Advanced Users",
    badgeColor: "#E65100",
    platforms: ["Windows", "Mac", "Android", "iPhone"],
    price: "Free",
    rating: "3.8/5",
    pros: ["Available on every platform", "Handles any codec including H.265", "Free and open-source", "No account needed"],
    cons: ["No EPG guide", "Manual M3U playlist management", "Not designed for IPTV"],
    verdict: "Not a dedicated IPTV app, but VLC works as a fallback on Windows, Mac, Android, or iPhone. Good for testing streams or as a backup player.",
    link: "/iptv-windows-canada",
  },
];

export default function BestIPTVAppCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: bg, color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: bg, padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: red, fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Updated May 2026
            </span>
            <h1 style={{ fontSize: "clamp(30px, 5vw, 58px)", fontWeight: 900, margin: "24px 0 20px", lineHeight: 1.1 }}>
              Best IPTV App Canada 2026 — Top 5 Players Ranked
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", maxWidth: 680, marginBottom: 36, lineHeight: 1.65 }}>
              The IPTV app you use is just as important as the service you subscribe to. Here are the 5 best IPTV player apps for Canada in 2026 — ranked by platform, features, and 4K H.265 support for Maple4K.
            </p>
            <div style={{ background: "rgba(232,4,31,0.08)", border: "1px solid rgba(232,4,31,0.2)", borderRadius: 12, padding: "16px 20px", maxWidth: 560 }}>
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                <strong style={{ color: "#fff" }}>Quick answer:</strong> Fire Stick / Android TV → <strong>TiviMate</strong>. iPhone / iPad → <strong>IPTV Smarters Pro</strong>. Apple TV → <strong>GSE Smart IPTV</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* App rankings */}
        <section style={{ padding: "60px 16px", background: "#0E1120" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 36 }}>Top 5 IPTV Apps for Canada (2026)</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {apps.map(app => (
                <div key={app.name} style={{ background: app.rank === 1 ? "rgba(232,4,31,0.07)" : "rgba(255,255,255,0.03)", border: app.rank === 1 ? "1px solid rgba(232,4,31,0.25)" : "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "28px 24px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
                    <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16 }}>#{app.rank}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{app.name}</h3>
                        <span style={{ background: app.badgeColor, color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, letterSpacing: "0.05em" }}>{app.badge}</span>
                        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}>★ {app.rating}</span>
                      </div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
                        {app.platforms.map(p => (
                          <span key={p} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, padding: "3px 10px", fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{p}</span>
                        ))}
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "0 0 4px" }}>Price: <strong style={{ color: "#fff" }}>{app.price}</strong></p>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 16 }}>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#4CAF50", letterSpacing: "0.07em", textTransform: "uppercase", margin: "0 0 8px" }}>Pros</p>
                      {app.pros.map(p => <p key={p} style={{ margin: "0 0 4px", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>✓ {p}</p>)}
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: "#EF5350", letterSpacing: "0.07em", textTransform: "uppercase", margin: "0 0 8px" }}>Cons</p>
                      {app.cons.map(c => <p key={c} style={{ margin: "0 0 4px", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>✗ {c}</p>)}
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 16px", marginBottom: 14 }}>
                    <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}><strong style={{ color: "#fff" }}>Verdict: </strong>{app.verdict}</p>
                  </div>
                  <Link href={app.link} style={{ color: red, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Full Setup Guide →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32 }}>Frequently Asked Questions</h2>
            {[
              { q: "What is the best IPTV app for Fire Stick in Canada?", a: "TiviMate is the best IPTV app for Fire Stick in Canada. Best EPG, hardware-accelerated 4K H.265 playback, recording features, and clean TV interface. Available directly in the Amazon App Store." },
              { q: "What is the best IPTV app for iPhone in Canada?", a: "IPTV Smarters Pro is the best for iPhone in Canada. Available on the App Store, supports Xtream Codes API, smooth mobile UI, EPG support, and 4K H.265. GSE Smart IPTV is a solid alternative especially for Apple TV." },
              { q: "What is the best IPTV app for Android in Canada?", a: "For Android phones: IPTV Smarters Pro. For Android TV boxes: TiviMate. Both on Google Play Store and both support H.265 4K streams with Maple4K." },
              { q: "Is there a free IPTV app for Canada?", a: "TiviMate, IPTV Smarters Pro, and GSE Smart IPTV all have free versions. They're apps only — you still need a Maple4K subscription (from $9/month) to access channels." },
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
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Ready to Stream? Start with Maple4K</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              Get your credentials, pick your IPTV app, and start watching 50,000+ channels in 4K. Free 24H trial — no credit card.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
