import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Apps & Players for Canada 2026 (14 Compared) | Maple4K" },
  description:
    "The 14 best IPTV player apps for Canada in 2026 — TiviMate, IPTV Smarters Pro, XCIPTV, Xtream IPTV, Smart4IPTV, STB Emu Pro and more. Compared, ranked, with setup links.",
  keywords:
    "iptv player, iptv app, iptvapp, xc iptv, xtream iptv, xtreme hd iptv, smart4iptv, mytvonline, implayer, iptvpro, cloud stream, forevertv, diablo iptv, pandar tv, best iptv player canada, best iptv app canada, atlaspro, beastiptv, dreamlink t2, dodo iptv, dream iptv, fast iptv, flix iptv, foxiptv, gold iptv, guru iptv, hot iptv, iplaytv, kemo iptv, king iptv, lion iptv, lux iptv, mega iptv, epic iptv, extreme iptv, eagle iptv, elon iptv, apollo iptv, alibaba iptv, b1g iptv, e vision iptv, evybuy, jellyfin iptv",
  alternates: { canonical: "https://maple4k.ca/best-iptv-apps-canada" },
  openGraph: {
    title: "Best IPTV Apps & Players for Canada 2026 (14 Compared) | Maple4K",
    description: "TiviMate, Smarters Pro, XCIPTV, Xtream IPTV, Smart4IPTV, STB Emu Pro and more — compared and ranked for Canada in 2026.",
    url: "https://maple4k.ca/best-iptv-apps-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Best IPTV Apps for Canada – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const apps = [
  { name: "TiviMate", best: "Firestick & Android TV", price: "Free / $4.99 yr Premium", note: "Best all-round EPG + catch-up, TV-first UI.", href: "/tivimate-canada" },
  { name: "IPTV Smarters Pro", best: "iPhone & Android phone", price: "Free", note: "Only major player with true native mobile apps.", href: "/iptv-smarters-pro-canada" },
  { name: "STB Emu Pro", best: "MAG-style portal fans", price: "Free / paid Pro", note: "Portal + MAC login instead of username/password.", href: "/stb-emu-canada" },
  { name: "XCIPTV", best: "Android boxes", price: "Free", note: "Xtream Codes player with a built-in VPN option and multi-screen.", href: "#xciptv" },
  { name: "Xtream IPTV / XtreamHD IPTV", best: "Android & Firestick", price: "Free", note: "Lightweight Xtream Codes players, simple and fast to set up.", href: "#xtream" },
  { name: "Smart4IPTV", best: "Samsung & LG Smart TVs", price: "Free (app store)", note: "Native Smart TV app — no sideloading, pairs via MAC + M3U.", href: "/iptv-samsung-tv-canada" },
  { name: "MyTVOnline / MyTVOnline+", best: "MAG-branded boxes", price: "Free", note: "The stock app on many MAG-style Android boxes.", href: "#mytvonline" },
  { name: "IPlayer / Implayer", best: "Simple channel lists", price: "Free", note: "Minimal, no-frills M3U/Xtream player.", href: "#implayer" },
  { name: "IPTVPro", best: "Android quick setup", price: "Free / one-time Pro", note: "Straightforward Xtream login with a clean grid guide.", href: "#iptvpro" },
  { name: "Cloud Stream", best: "Android & Firestick", price: "Free", note: "Cloud-synced playlists across devices.", href: "#cloudstream" },
  { name: "VLC Media Player", best: "Windows, Mac, any device", price: "Free, open source", note: "Universal player — paste an M3U link and play, no account needed.", href: "#vlc" },
  { name: "Kodi", best: "Power users, Android TV", price: "Free, open source", note: "Add Maple4K as an M3U source via a PVR IPTV Simple Client add-on.", href: "#kodi" },
];

const faqItems = [
  {
    q: "What is the best IPTV app for Canada in 2026?",
    a: "TiviMate for Firestick and Android TV, and IPTV Smarters Pro for iPhone and Android phones, are the two most reliable choices for Maple4K in Canada. Both are free and support full EPG, 4K playback, and multi-device use.",
  },
  {
    q: "Do I need to pay for an IPTV app separately from my subscription?",
    a: "No — the app itself (TiviMate, Smarters Pro, XCIPTV, etc.) is free or has a small one-time fee for premium features. Your channels come from your Maple4K subscription, which is entered inside the app.",
  },
  {
    q: "What's the difference between Xtream Codes login and MAC/Portal login?",
    a: "Xtream Codes uses a Server URL, Username, and Password — used by TiviMate, Smarters Pro, XCIPTV, and most modern apps. MAC/Portal login (used by STB Emu and MyTVOnline) authenticates by your device's unique MAC address instead. Maple4K supports both — just tell us which you prefer when subscribing.",
  },
  {
    q: "Can I use VLC or Kodi with Maple4K instead of a dedicated IPTV app?",
    a: "Yes. Both VLC and Kodi can play an M3U playlist link directly. It's a simpler experience with no EPG or channel categories by default, so most Canadians prefer a purpose-built app like TiviMate or Smarters Pro for daily use.",
  },
  {
    q: "Which app should I use for Samsung or LG Smart TV?",
    a: "Use Smart4IPTV — it's the standard native app for Samsung Tizen and LG webOS TVs, activated with a code and a MAC-based playlist. See our full Samsung Smart TV setup guide for exact steps.",
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
    { "@type": "ListItem", position: 2, name: "Best IPTV Apps Canada", item: "https://maple4k.ca/best-iptv-apps-canada" },
  ],
};

const bg = "#0C0F1A";
const red = "#E8041F";
const rs = { color: red } as const;

const detailSections = [
  { id: "xciptv", title: "XCIPTV", body: "XCIPTV is a free Xtream Codes player for Android boxes and phones with a built-in VPN toggle, catch-up support, and multi-screen viewing. Setup with Maple4K takes the same three fields as TiviMate: Server URL, Username, Password." },
  { id: "xtream", title: "Xtream IPTV & XtremeHD IPTV", body: "Xtream IPTV and XtremeHD IPTV are lightweight, no-frills Xtream Codes players built specifically around the Xtream Codes API — the same connection method Maple4K uses. They're a solid backup app if your primary player ever needs reinstalling." },
  { id: "mytvonline", title: "MyTVOnline / MyTVOnline+", body: "MyTVOnline (and MyTVOnline+ / MyTVOnline 3) ships pre-installed on many MAG-branded Android boxes. It connects via Portal URL + MAC address, the same way STB Emu does — request a portal connection from Maple4K to use it." },
  { id: "implayer", title: "IPlayer / Implayer", body: "A minimal M3U/Xtream player with a simple channel-list interface. Good as a lightweight backup app on older or lower-powered Android devices where a heavier app like TiviMate might lag." },
  { id: "iptvpro", title: "IPTVPro", body: "IPTVPro offers a clean grid-style guide with straightforward Xtream Codes login. A solid, no-clutter alternative if you find Smarters Pro's interface too busy." },
  { id: "cloudstream", title: "Cloud Stream", body: "Cloud Stream syncs your playlist settings across devices via the cloud, so switching from your phone to your Android TV box keeps your favourites and categories intact." },
  { id: "vlc", title: "VLC Media Player", body: "VLC can open a Maple4K M3U playlist link directly (Media → Open Network Stream → paste URL). It's the most universal option — works on Windows, Mac, Linux, and mobile — but has no EPG or channel categories, so we recommend it mainly as a fallback." },
  { id: "kodi", title: "Kodi", body: "Kodi requires the free 'PVR IPTV Simple Client' add-on, into which you paste your Maple4K M3U and EPG URLs. It's the most customizable option for power users who already run Kodi for other media, with full skin and add-on support." },
];

// Brand-name IPTV apps/providers Canadians commonly search for while shopping around.
// These are other companies' products, mentioned here only for honest comparison context —
// Maple4K does not claim any affiliation with them.
const otherApps = [
  { name: "AtlasPro", note: "A subscription IPTV service marketed mainly to French-speaking audiences. Uses standard Xtream Codes login." },
  { name: "Beast IPTV", note: "A subscription IPTV provider with its own branded app. Like most Xtream-based services, it works with any standard player too." },
  { name: "Dreamlink T2", note: "An Android set-top box (hardware), not a subscription — comparable to the Formuler boxes covered above." },
  { name: "Dodo IPTV / Dream IPTV", note: "Subscription IPTV brands using Xtream Codes. If you already have a working player like TiviMate, you don't need their dedicated app." },
  { name: "Fast IPTV / FastIPTV", note: "A lightweight Xtream Codes player app, similar in function to IPTVPro or XCIPTV." },
  { name: "Flix IPTV", note: "An Xtream Codes player app with a Netflix-style browsing layout." },
  { name: "Fox IPTV", note: "A subscription IPTV brand — not affiliated with the Fox television network." },
  { name: "Gold IPTV / Golden IPTV", note: "Subscription IPTV brands. Compare pricing and channel counts before committing to any provider." },
  { name: "Guru IPTV", note: "A subscription IPTV service using the same Xtream Codes technology as Maple4K." },
  { name: "Hot IPTV", note: "A subscription IPTV brand. Read reviews carefully — service quality varies widely between resellers using this name." },
  { name: "IPlayTV", note: "One of the few dedicated IPTV apps available on Apple TV — a good pick if TiviMate (Android-only) isn't an option for you." },
  { name: "Kemo IPTV / Kemo TV", note: "A subscription IPTV brand using standard Xtream Codes credentials." },
  { name: "King IPTV / King365", note: "Subscription IPTV brands. As with any reseller, check for a free trial before paying." },
  { name: "Lion IPTV / Lux IPTV", note: "Subscription IPTV brands common in online ads — both use standard Xtream Codes login." },
  { name: "Mega IPTV", note: "A subscription IPTV brand — verify channel lists and trial availability directly with the provider." },
  { name: "Epic IPTV / Extreme IPTV / Eagle IPTV / Elon IPTV", note: "Smaller subscription IPTV brands. All connect through the same Xtream Codes player apps listed above." },
  { name: "Apollo IPTV / Alibaba IPTV / B1G IPTV", note: "Subscription IPTV brands you may see advertised online — compare their trial terms against Maple4K's free 24-hour trial." },
  { name: "E Vision IPTV / Evybuy", note: "Subscription IPTV brands using standard Xtream Codes technology." },
  { name: "Jellyfin", note: "A free, self-hosted media server (not an IPTV provider) that some advanced users pair with their own recordings — different use case from a live TV subscription." },
];

export default function BestIptvAppsCanadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: bg, color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: bg, padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: red, fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              IPTV Apps · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, margin: "24px 0 20px", lineHeight: 1.1 }}>
              Best IPTV Apps & Players for Canada 2026
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.7)", maxWidth: 700, marginBottom: 12, lineHeight: 1.65 }}>
              An IPTV subscription like Maple4K needs a player app to watch it on. We tested and compared the 12 most popular apps Canadians use — TiviMate, IPTV Smarters Pro, XCIPTV, Smart4IPTV, STB Emu Pro, VLC, Kodi and more — so you can pick the right one for your device in seconds.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
              <Link href="/free-trial" className="btn-red">▶ Get Maple4K Free Trial</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ background: "#0E1120", padding: "60px 16px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 28 }}>IPTV Apps Compared</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 640 }}>
                <thead>
                  <tr style={{ background: "rgba(232,4,31,0.12)", borderBottom: "2px solid rgba(232,4,31,0.3)" }}>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "#fff" }}>App</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "#fff" }}>Best For</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "#fff" }}>Price</th>
                    <th style={{ padding: "14px 16px", textAlign: "left", fontWeight: 700, color: "#fff" }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {apps.map((app, i) => (
                    <tr key={app.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 700 }}>
                        <Link href={app.href} style={{ color: red, textDecoration: "none" }}>{app.name}</Link>
                      </td>
                      <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.75)" }}>{app.best}</td>
                      <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.6)" }}>{app.price}</td>
                      <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.55)" }}>{app.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Featured picks */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 28 }}>Our Top 3 Picks — With Full Setup Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { title: "TiviMate", body: "Best on Firestick & Android TV — full EPG, catch-up recording, TV-first UI.", href: "/tivimate-canada" },
                { title: "IPTV Smarters Pro", body: "Best on iPhone & Android phone — the only player with true native mobile apps.", href: "/iptv-smarters-pro-canada" },
                { title: "STB Emu Pro", body: "Best for MAG-style portal fans — connects with a Portal URL + MAC address.", href: "/stb-emu-canada" },
              ].map(card => (
                <Link key={card.title} href={card.href} style={{ textDecoration: "none" }}>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: 24, height: "100%" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 8px", color: "#fff" }}>{card.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{card.body}</p>
                    <span style={{ color: red, fontSize: 13, fontWeight: 700, marginTop: 12, display: "inline-block" }}>Full setup guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Detail sections for the rest */}
        <section style={{ padding: "60px 16px", background: "#0E1120" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 28 }}>The Rest of the Field</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {detailSections.map(sec => (
                <div key={sec.id} id={sec.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: 18 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px", color: "#fff" }}>{sec.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other brand-name apps/providers Canadians ask about */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 12 }}>Other IPTV Apps & Providers You May Have Heard Of</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, marginBottom: 28, maxWidth: 720 }}>
              While researching IPTV in Canada you&apos;ll run into dozens of other brand names online. Here&apos;s honest, brief context on the most common ones — none of these are affiliated with Maple4K, and most connect through the same Xtream Codes player apps covered above.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
              {otherApps.map(a => (
                <div key={a.name} className="device-badge" style={{ padding: "16px 18px", textAlign: "left" }}>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 6 }}>{a.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12.5, lineHeight: 1.6 }}>{a.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32 }}>IPTV Apps — FAQ</h2>
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
        <section style={{ padding: "80px 16px", background: "#0E1120", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Pick Your App, Then Get Your Free Trial</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
              No credit card needed. Get your Maple4K credentials in minutes and start streaming 50,000+ channels in 4K on any app above.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
            <p style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
              Setup guides:{" "}
              <Link href="/tivimate-canada" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>TiviMate</Link>{" · "}
              <Link href="/iptv-smarters-pro-canada" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Smarters Pro</Link>{" · "}
              <Link href="/stb-emu-canada" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>STB Emu Pro</Link>{" · "}
              <Link href="/iptv-formula" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Formuler Boxes</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
