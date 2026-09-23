import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is an M3U Playlist? IPTV M3U Guide for Canada 2026 | Maple4K",
  description:
    "What is an M3U playlist and how does it work with IPTV? A plain-English guide for Canadians covering M3U links, EPG, and which apps support them.",
  keywords: "m3u, m3u iptv, m3u list, iptv m3u list, liste m3u iptv, player m3u, m3u ip tv, iptv player m3u",
  alternates: { canonical: "https://maple4k.ca/blog/what-is-m3u-iptv-canada" },
  openGraph: {
    title: "What Is an M3U Playlist? IPTV M3U Guide for Canada 2026 | Maple4K",
    description: "A plain-English guide to M3U playlists and how they work with IPTV in Canada.",
    url: "https://maple4k.ca/blog/what-is-m3u-iptv-canada",
    siteName: "Maple4K",
    type: "article",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "What Is M3U IPTV – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Is an M3U Playlist? A Complete Beginner's Guide (2026)",
  description: "A plain-English guide to M3U playlists and how they work with IPTV in Canada.",
  image: "https://maple4k.ca/og-image.jpg",
  author: { "@type": "Person", name: "Alex Tremblay", url: "https://maple4k.ca/about" },
  publisher: {
    "@type": "Organization",
    name: "Maple4K",
    logo: { "@type": "ImageObject", url: "https://maple4k.ca/favicon.svg" },
  },
  datePublished: "2026-06-10",
  dateModified: "2026-09-20",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://maple4k.ca/blog/what-is-m3u-iptv-canada" },
};

const faqItems = [
  { q: "What does M3U stand for?", a: "M3U (\"Moving Picture Experts Group Audio Layer 3 Uniform Resource Locator\") is a simple text file format that lists media stream links. In IPTV, an M3U file lists every channel's stream URL in one place." },
  { q: "Is an M3U link the same as an IPTV subscription?", a: "No. The M3U link is just the delivery format — the list of channel URLs. Maple4K is the subscription that generates and keeps that list updated with working, licensed streams." },
  { q: "Which apps support M3U playlists?", a: "Almost every IPTV player supports M3U: VLC, Kodi (via the PVR IPTV Simple Client add-on), TiviMate, IPTV Smarters Pro, XCIPTV, and Perfect Player all accept an M3U URL directly." },
  { q: "Does an M3U link include the TV guide (EPG)?", a: "Not by itself. The M3U file lists channels; a separate EPG (XMLTV) URL provides the program guide data. Maple4K provides both links together so your app shows full schedules automatically." },
  { q: "Why does my M3U link stop working sometimes?", a: "M3U links can expire or need refreshing if a provider rotates servers, or if your subscription lapses. With Maple4K, your M3U and Xtream Codes credentials stay active for your full subscription period and refresh automatically in-app." },
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
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://maple4k.ca/blog" },
    { "@type": "ListItem", position: 3, name: "What Is M3U IPTV", item: "https://maple4k.ca/blog/what-is-m3u-iptv-canada" },
  ],
};

const red = "#E8041F";

export default function WhatIsM3uPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
        <article style={{ maxWidth: 800, margin: "0 auto", padding: "80px 16px" }}>
          <time dateTime="2026-06-10" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, display: "block", marginBottom: 16 }}>
            Updated September 20, 2026 · By Alex Tremblay
          </time>

          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
            What Is an M3U Playlist? IPTV M3U Explained (2026)
          </h1>

          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 40 }}>
            An M3U playlist is a small text file that lists the streaming links for every channel in an IPTV service. If you&apos;ve seen the term "M3U link" or "M3U list" while researching IPTV in Canada, this guide explains exactly what it is, how it works, and which apps use it.
          </p>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>The Short Answer</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
              M3U is a playlist file format, originally used for audio (like early Winamp playlists), later adopted by IPTV. Instead of songs, an IPTV M3U file lists a URL for each live TV channel. Your player app (VLC, TiviMate, Smarters Pro, etc.) reads that list and shows you a channel guide you can click through.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>M3U vs Xtream Codes vs MAC/Portal — What&apos;s the Difference?</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: 16 }}>
              There are three common ways an IPTV player connects to a subscription like Maple4K:
            </p>
            <ul style={{ color: "rgba(255,255,255,0.7)", lineHeight: 2, paddingLeft: 24 }}>
              <li><strong style={{ color: "#fff" }}>M3U link:</strong> One URL that lists every channel. Works in almost any player, including VLC, with no login screen.</li>
              <li><strong style={{ color: "#fff" }}>Xtream Codes API:</strong> A Server URL, Username, and Password. Used by TiviMate, IPTV Smarters Pro, and most modern apps — adds EPG, categories, and VOD automatically.</li>
              <li><strong style={{ color: "#fff" }}>MAC / Portal:</strong> A Portal URL tied to your device&apos;s MAC address. Used by STB Emu, MyTVOnline, and MAG-style boxes.</li>
            </ul>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginTop: 16 }}>
              Maple4K supports all three — you can request whichever format matches your app when you subscribe.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>How to Use an M3U Link</h2>
            <ol style={{ color: "rgba(255,255,255,0.7)", lineHeight: 2, paddingLeft: 24 }}>
              <li>Subscribe to Maple4K and receive your M3U URL and EPG (XMLTV) URL by email.</li>
              <li>Open your player app — in VLC: Media → Open Network Stream → paste the M3U URL. In Kodi: install the "PVR IPTV Simple Client" add-on and paste the M3U + EPG URLs in its settings.</li>
              <li>The channel list loads automatically. Add the EPG URL separately if your app supports it, to get a full program guide.</li>
            </ol>
          </section>

          <section
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${red}`,
              borderRadius: 12,
              padding: 24,
              marginBottom: 40,
            }}
          >
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 12 }}>Recommended: Use a Full Player App Instead</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
              A raw M3U link in VLC works, but it skips EPG, categories, and catch-up. For the best day-to-day experience with Maple4K, we recommend{" "}
              <Link href="/tivimate-canada" style={{ color: red }}>TiviMate</Link> on Firestick/Android TV or{" "}
              <Link href="/iptv-smarters-pro-canada" style={{ color: red }}>IPTV Smarters Pro</Link> on mobile — both use the same Maple4K subscription with a much richer interface.
            </p>
          </section>

          <section style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 20 }}>FAQ</h2>
            {faqItems.map(item => (
              <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
                <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.q}<span style={{ color: red }}>+</span>
                </summary>
                <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </details>
            ))}
          </section>

          <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/free-trial" className="btn-red">▶ Try Maple4K Free for 24H</Link>
            <Link href="/best-iptv-apps-canada" className="btn-outline">Compare IPTV Apps →</Link>
          </div>
        </article>
      </main>
    </>
  );
}
