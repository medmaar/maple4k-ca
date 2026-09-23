import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "STB Emu Pro Canada 2026 — MAC-Address Setup Guide | Maple4K" },
  description:
    "STB Emu Pro setup guide for Canada 2026. Configure STB Emu / StbEmu Pro with Maple4K using portal URL and MAC address. 50,000+ channels, free 24h trial.",
  keywords: "stb emu pro, stbemu pro, iptv stbemu, stb emu canada, stbemu pro canada, stb emulator iptv, mag emulator canada",
  alternates: { canonical: "https://maple4k.ca/stb-emu-canada" },
  openGraph: {
    title: "STB Emu Pro Canada 2026 — MAC-Address Setup Guide | Maple4K",
    description: "Configure STB Emu Pro with Maple4K using your portal URL and device MAC address. Full 2026 setup guide.",
    url: "https://maple4k.ca/stb-emu-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "STB Emu Pro Canada – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up STB Emu Pro with Maple4K in Canada",
  description: "Step-by-step guide to configure STB Emu / STB Emu Pro using a Maple4K portal URL and MAC address.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Install STB Emu Pro", text: "Download STB Emu Pro (paid, ad-free) or the free STB Emu Lite from the Google Play Store, or sideload the APK on Firestick." },
    { "@type": "HowToStep", position: 2, name: "Get Your Maple4K Portal & MAC", text: "Subscribe to Maple4K and request an MAG/Portal-style connection. We'll send your Portal URL and a unique MAC address." },
    { "@type": "HowToStep", position: 3, name: "Enter the Portal URL", text: "In STB Emu, go to Settings > check the MAC address shown, then enter the Portal URL Maple4K gave you in the same Settings screen." },
    { "@type": "HowToStep", position: 4, name: "Register the MAC Address", text: "Send us the exact MAC address shown in the app so we can whitelist your device on the portal. This takes a few minutes." },
    { "@type": "HowToStep", position: 5, name: "Reload the Channel List", text: "Restart STB Emu. Your Maple4K channel list and EPG will load automatically like a real MAG set-top box." },
  ],
};

const faqItems = [
  {
    q: "What is STB Emu Pro?",
    a: "STB Emu Pro is an Android app that emulates a MAG-style IPTV set-top box. Instead of logging in with a username and password like Xtream Codes players, it connects using a Portal URL and a device MAC address — the same method real MAG boxes use.",
  },
  {
    q: "Is STB Emu Pro free?",
    a: "STB Emu Lite is free with ads; STB Emu Pro is a one-time paid purchase (a few dollars) that removes ads and adds extra settings. Either version works with Maple4K's portal connection.",
  },
  {
    q: "Do I need a specific MAC address for STB Emu?",
    a: "Yes — Maple4K issues you a unique MAC address tied to your subscription when you request a portal-style connection. You enter this exact MAC (or we register the one your app already shows) so the portal recognizes your device.",
  },
  {
    q: "Does STB Emu Pro work on Firestick?",
    a: "Yes, via sideloading (it isn't on the official Amazon App Store). We recommend using the Downloader app to install the STB Emu APK on Firestick, then following the same portal + MAC setup.",
  },
  {
    q: "Should I use STB Emu Pro or IPTV Smarters Pro?",
    a: "Use STB Emu Pro if you specifically want a MAG-style portal connection (common with certain resellers and older MAG boxes). For most Canadians, Xtream Codes players like Smarters Pro or TiviMate are simpler to set up and just as reliable with Maple4K.",
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
    { "@type": "ListItem", position: 2, name: "STB Emu Canada", item: "https://maple4k.ca/stb-emu-canada" },
  ],
};

const bg = "#0C0F1A";
const red = "#E8041F";
const rs = { color: red } as const;

const steps = [
  { n: "1", title: "Install STB Emu", body: "Get STB Emu Pro (paid, ad-free) or STB Emu Lite (free) from Google Play, or sideload the APK on Firestick using the Downloader app." },
  { n: "2", title: "Request a Portal Connection", body: "Tell our support team you want a MAG-style STB Emu connection when subscribing to Maple4K. We'll issue a Portal URL and MAC address." },
  { n: "3", title: "Enter Portal URL in Settings", body: "Open STB Emu → Settings → enter the Portal URL exactly as sent. Note the MAC address the app displays." },
  { n: "4", title: "Send Us Your MAC Address", body: "Send the exact MAC address shown in the app to our support team so we can whitelist it on your Maple4K portal — usually done within minutes." },
  { n: "5", title: "Restart & Load Channels", body: "Close and reopen STB Emu. All 50,000+ Maple4K channels and full EPG load automatically, just like a physical MAG box." },
];

export default function StbEmuCanadaPage() {
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
              STB Emu Pro · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, margin: "24px 0 20px", lineHeight: 1.1 }}>
              STB Emu Pro Canada — Portal & MAC Setup Guide 2026
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", maxWidth: 680, marginBottom: 36, lineHeight: 1.65 }}>
              STB Emu Pro turns your Android device or Firestick into a virtual MAG set-top box. Connect it to Maple4K with a portal URL and MAC address for 50,000+ channels in true 4K. Here's the exact setup.
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
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 16 }}>What Is STB Emu Pro?</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, marginBottom: 12 }}>
              STB Emu Pro emulates a physical MAG set-top box on your Android phone, Android TV box, or Firestick. Instead of a username/password login like Xtream Codes players, it authenticates using a <strong style={{ color: "#fff" }}>Portal URL</strong> and your device&apos;s <strong style={{ color: "#fff" }}>MAC address</strong> — the exact method real MAG boxes use.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              It&apos;s a great option if you already prefer the classic MAG-style portal experience, or if you&apos;re replacing an aging physical MAG box without buying new hardware.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 36 }}>
              STB Emu Pro + Maple4K Setup Guide
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

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: "#0E1120" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32 }}>STB Emu Pro Canada — FAQ</h2>
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
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Get Your Maple4K Portal & MAC for STB Emu</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              Free 24H trial — no credit card. We'll set up your portal connection and whitelist your MAC within minutes.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
            <p style={{ marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              Also:{" "}
              <Link href="/iptv-mag-box-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>MAG Box Canada</Link>{" · "}
              <Link href="/best-iptv-apps-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>All IPTV Player Apps</Link>{" · "}
              <Link href="/iptv-smarters-pro-canada" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline" }}>IPTV Smarters Pro</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
