import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV with VLC, M3U & Kodi in Canada (2026 Guide) | Maple4K",
  description:
    "How to use your Maple4K IPTV subscription with VLC, an M3U playlist, or Kodi in Canada. Step-by-step setup, troubleshooting, and when to use a dedicated app instead.",
  keywords:
    "iptv vlc, ip tv vlc, iptv vlc media player, iptv vlc player, vlc ip tv, iptv m3u8, ip tv m3u, kodi iptv m3u, kodi m3u, m3u kodi, m3u player online, m3u player pc, m3u online, m3u lista, m3u checker, m3u downloader online, lxtream, lxtream player, lxtream android tv, iptv sur vlc, liste iptv m3u fr, lecteur m3u en ligne, iptv listas m3u, iptv smasters m3u, jellyfin iptv",
  alternates: { canonical: "https://maple4k.ca/blog/iptv-vlc-m3u-kodi-guide-canada" },
  openGraph: {
    title: "IPTV with VLC, M3U & Kodi in Canada (2026 Guide) | Maple4K",
    description:
      "Step-by-step: use Maple4K with VLC, an M3U playlist, or Kodi in Canada. Setup, troubleshooting, and when a dedicated app works better.",
    url: "https://maple4k.ca/blog/iptv-vlc-m3u-kodi-guide-canada",
    type: "article",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "IPTV with VLC, M3U and Kodi – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IPTV with VLC, M3U & Kodi in Canada (2026 Guide)",
  description:
    "How to use your Maple4K IPTV subscription with VLC, an M3U playlist, or Kodi in Canada — step-by-step setup and troubleshooting.",
  image: "https://maple4k.ca/og-image.jpg",
  author: { "@type": "Person", name: "Alex Tremblay", url: "https://maple4k.ca/about" },
  publisher: {
    "@type": "Organization",
    name: "Maple4K",
    logo: { "@type": "ImageObject", url: "https://maple4k.ca/og-image.jpg" },
  },
  datePublished: "2026-09-20",
  dateModified: "2026-09-25",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://maple4k.ca/blog/iptv-vlc-m3u-kodi-guide-canada" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://maple4k.ca" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://maple4k.ca/blog" },
    { "@type": "ListItem", position: 3, name: "IPTV with VLC, M3U & Kodi", item: "https://maple4k.ca/blog/iptv-vlc-m3u-kodi-guide-canada" },
  ],
};

const faqItems = [
  { q: "What is an M3U playlist?", a: "An M3U (or M3U8) file is a plain text playlist that lists the streaming links for every channel in your IPTV subscription. Media players like VLC and Kodi read this file to know which channels are available and how to load them." },
  { q: "Can I watch IPTV directly in VLC?", a: "Yes. Open VLC, go to Media → Open Network Stream, and paste your Maple4K M3U playlist URL. VLC will load your channel list. Note that VLC has no EPG (TV guide) or channel categories by default, so most Canadians use it only as a backup." },
  { q: "How do I add Maple4K to Kodi?", a: "Install the free 'PVR IPTV Simple Client' add-on from Kodi's add-on repository, then enter your Maple4K M3U playlist URL and EPG URL in its settings. Restart Kodi and your channels will appear in the Live TV section." },
  { q: "What is Lxtream and do I need it?", a: "Lxtream is another Xtream Codes-compatible IPTV player, similar to TiviMate or XCIPTV. You don't need it specifically — any Xtream Codes or M3U-compatible player works with Maple4K, including the ones covered in our IPTV apps guide." },
  { q: "Why won't my M3U playlist load or play?", a: "The most common causes are an expired subscription, a typo in the copied URL, or a firewall blocking the connection. Double-check the URL was copied in full, confirm your subscription is active, and try switching networks (e.g. mobile data) to rule out a local firewall issue." },
  { q: "Is VLC or Kodi better than a dedicated IPTV app?", a: "For daily use, a dedicated app like TiviMate or IPTV Smarters Pro is easier — you get a proper TV guide, channel categories, and catch-up recording. VLC and Kodi are best kept as a flexible backup or for advanced users who already run Kodi for other media." },
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

export default function VlcM3uKodiGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>
        <article style={{ maxWidth: 800, margin: "0 auto", padding: "80px 16px" }}>
          <time dateTime="2026-09-20" style={{ color: "#fff", fontSize: 14, display: "block", marginBottom: 16 }}>
            September 20, 2026 · Updated September 25, 2026
          </time>

          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
            IPTV with VLC, M3U &amp; Kodi in Canada (2026 Guide)
          </h1>

          <p style={{ fontSize: 18, color: "#d1d5db", lineHeight: 1.75, marginBottom: 40 }}>
            Your Maple4K subscription isn&apos;t locked to one app. It works through a standard M3U playlist and Xtream Codes connection, which means VLC, Kodi, and most third-party IPTV players can all play it. This guide covers exactly how to set each one up, and when you&apos;re better off using a purpose-built app instead.
          </p>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>What Is an M3U Playlist?</h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.75, marginBottom: 16 }}>
              An M3U (or M3U8) file is a plain-text playlist listing the streaming URL for every channel in your subscription. When you subscribe to Maple4K, you receive either a direct M3U playlist link or Xtream Codes credentials (server URL, username, password) — both point to the same channel library, just in different formats.
            </p>
            <p style={{ color: "#d1d5db", lineHeight: 1.75 }}>
              Any player that understands M3U or Xtream Codes — VLC, Kodi, TiviMate, IPTV Smarters Pro, Lxtream, and dozens of others — can load your Maple4K channels. You&apos;re never locked into one specific app.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>Setting Up IPTV in VLC (Windows, Mac, Linux, Mobile)</h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.75, marginBottom: 16 }}>
              VLC Media Player is free, open-source, and available on virtually every device — making it the fastest way to test a Maple4K subscription with zero setup:
            </p>
            <ol style={{ color: "#d1d5db", lineHeight: 2, paddingLeft: 24, marginBottom: 16 }}>
              <li>Open VLC and go to <strong style={{ color: "#fff" }}>Media → Open Network Stream</strong> (Ctrl+N on Windows).</li>
              <li>Paste the M3U playlist URL from your Maple4K welcome email into the network URL field.</li>
              <li>Click <strong style={{ color: "#fff" }}>Play</strong>. VLC loads the playlist and you can browse channels from the Playlist panel (View → Playlist).</li>
            </ol>
            <p style={{ color: "#d1d5db", lineHeight: 1.75 }}>
              VLC has no built-in TV guide (EPG) or channel categories, so scrolling through 50,000+ channels by name isn&apos;t practical for daily viewing. It&apos;s best used as a quick way to confirm your subscription works, or as an emergency backup player.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>Setting Up IPTV in Kodi</h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.75, marginBottom: 16 }}>
              Kodi needs one free add-on to handle IPTV properly:
            </p>
            <ol style={{ color: "#d1d5db", lineHeight: 2, paddingLeft: 24, marginBottom: 16 }}>
              <li>In Kodi, go to <strong style={{ color: "#fff" }}>Add-ons → Add-on Browser → PVR Clients</strong> and install <strong style={{ color: "#fff" }}>PVR IPTV Simple Client</strong>.</li>
              <li>Open the add-on&apos;s settings. Under the General tab, set M3U Play List URL to your Maple4K playlist link.</li>
              <li>Under the EPG tab, enter your Maple4K EPG (TV guide) URL, provided with your credentials.</li>
              <li>Enable the add-on and restart Kodi. Your channels appear under the <strong style={{ color: "#fff" }}>TV</strong> section with a full program guide.</li>
            </ol>
            <p style={{ color: "#d1d5db", lineHeight: 1.75 }}>
              This is the most customizable option — good for anyone who already runs Kodi on an Android TV box or Fire Stick for other media and wants live TV in the same interface.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>Lxtream and Other Xtream Codes Players</h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.75, marginBottom: 16 }}>
              Lxtream is one of several third-party apps built around the Xtream Codes API — the same connection method Maple4K uses. It works the same way as TiviMate or XCIPTV: enter your server URL, username, and password, and your full channel list and EPG load automatically. There&apos;s no need to seek out one specific app by name — any Xtream Codes-compatible player will connect to your Maple4K account the same way. For a full side-by-side comparison of the most reliable options, see our <Link href="/best-iptv-apps-canada" style={{ color: "#E8041F", textDecoration: "underline" }}>IPTV apps guide</Link>.
            </p>
          </section>

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 16 }}>Troubleshooting a Playlist That Won&apos;t Load</h2>
            <ul style={{ color: "#d1d5db", lineHeight: 2, paddingLeft: 24 }}>
              <li><strong style={{ color: "#fff" }}>Double-check the URL:</strong> M3U links are long — a single dropped character will break the playlist. Copy it directly from your welcome email rather than retyping it.</li>
              <li><strong style={{ color: "#fff" }}>Confirm your subscription is active:</strong> An expired plan will show an empty or error playlist.</li>
              <li><strong style={{ color: "#fff" }}>Try a different network:</strong> Some home routers or public Wi-Fi networks block the ports IPTV streams use. Switching to mobile data briefly will confirm whether that&apos;s the issue.</li>
              <li><strong style={{ color: "#fff" }}>Update your player:</strong> Older VLC or Kodi versions occasionally have playlist-parsing bugs fixed in later releases.</li>
            </ul>
          </section>

          <section
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #F96E5B", borderRadius: 12, padding: 24, marginBottom: 40 }}
          >
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 12 }}>Our Recommendation</h2>
            <p style={{ color: "#d1d5db", lineHeight: 1.75 }}>
              Use VLC to quickly confirm your Maple4K subscription is working, then switch to a dedicated app like TiviMate (Fire Stick / Android TV) or IPTV Smarters Pro (iPhone / Android) for everyday viewing — you&apos;ll get a proper TV guide, channel categories, and catch-up recording that neither VLC nor a bare M3U link can offer.
            </p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 24 }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {faqItems.map((item) => (
                <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
                  <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {item.q}<span style={{ color: "#E8041F", fontSize: 18 }}>+</span>
                  </summary>
                  <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <div style={{ borderTop: "1px solid #1f2937", paddingTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ color: "#fff", fontSize: 14, marginBottom: 8 }}>Related reading:</p>
            <Link href="/best-iptv-apps-canada" style={{ color: "#E8041F", textDecoration: "none", fontSize: 15 }}>
              → Best IPTV Apps &amp; Players for Canada 2026
            </Link>
            <Link href="/tivimate-canada" style={{ color: "#E8041F", textDecoration: "none", fontSize: 15 }}>
              → TiviMate Canada — Full Setup Guide
            </Link>
            <Link href="/blog/what-is-m3u-iptv-canada" style={{ color: "#E8041F", textDecoration: "none", fontSize: 15 }}>
              → What Is an M3U Playlist? IPTV M3U Explained
            </Link>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link href="/pricing" className="btn-red">
              Explore Maple4K Plans →
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
