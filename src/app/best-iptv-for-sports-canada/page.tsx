import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Best IPTV for Sports in Canada 2026 — NHL, NFL, UFC, Soccer | Maple4K" },
  description:
    "The best IPTV for sports in Canada. NHL, NFL, NBA, UFC, soccer, Eurosport, beIN Sports and Sky Sports in 4K. All TSN and Sportsnet feeds. Free 24h trial from $9/month.",
  keywords:
    "best iptv for sports, iptv sport, iptv ufc, iptv nba, iptv soccer, iptv bein sport, iptv eurosport, iptv sky sports, sportz iptv, sportz tv iptv, gamma iptv, gamma iptv subscription, best iptv for hockey",
  alternates: { canonical: "https://maple4k.ca/best-iptv-for-sports-canada" },
  openGraph: {
    title: "Best IPTV for Sports in Canada 2026 | Maple4K",
    description: "NHL, NFL, NBA, UFC, soccer, Eurosport, beIN Sports and Sky Sports — all in 4K. Every TSN and Sportsnet feed included.",
    url: "https://maple4k.ca/best-iptv-for-sports-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Best IPTV for Sports Canada – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  { q: "What is the best IPTV service for watching sports in Canada?", a: "Maple4K is built around live sports coverage for Canada — every TSN and Sportsnet feed, NHL, NFL, NBA and CFL games, plus international sports like UFC, soccer, Eurosport, beIN Sports and Sky Sports, all in 4K Ultra HD from $9/month." },
  { q: "Does Maple4K cover UFC and pay-per-view events?", a: "Yes — Maple4K includes UFC events and major combat sports coverage as part of the standard subscription, with no separate pay-per-view charge on top of your plan." },
  { q: "Can I watch European soccer and international sports channels?", a: "Yes. Maple4K includes beIN Sports, Eurosport, Sky Sports and other international soccer and sports channels alongside Canadian sports networks, all within the same 50,000+ channel package." },
  { q: "Will sports look better on IPTV than cable?", a: "Yes — Maple4K streams sports in True 4K Ultra HD with H.265 encoding, noticeably sharper than standard cable HD, especially visible on fast-moving action like hockey and soccer." },
  { q: "Is there a free trial to test sports channels before subscribing?", a: "Yes — Maple4K offers a free 24-hour trial with no credit card required, so you can test live sports channels in full 4K quality before choosing a plan." },
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
    { "@type": "ListItem", position: 2, name: "Best IPTV for Sports", item: "https://maple4k.ca/best-iptv-for-sports-canada" },
  ],
};

const bg = "#0C0F1A";
const red = "#E8041F";

export default function BestIptvForSportsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main style={{ background: bg, color: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section style={{ background: bg, padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(232,4,31,0.12)", border: "1px solid rgba(232,4,31,0.3)", color: red, fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Sports IPTV · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 900, margin: "24px 0 20px", lineHeight: 1.1 }}>
              Best IPTV for Sports in Canada — NHL, NFL, UFC &amp; More in 4K
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.7)", maxWidth: 680, marginBottom: 36, lineHeight: 1.65 }}>
              Every TSN and Sportsnet feed. Every NHL, NFL, NBA and CFL game. Plus UFC, soccer, Eurosport, beIN Sports and Sky Sports — all streamed in True 4K Ultra HD from $9/month.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">View Plans →</Link>
            </div>
          </div>
        </section>

        {/* Sports covered */}
        <section style={{ background: "#0E1120", padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, marginBottom: 32 }}>Sports Coverage Included</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { icon: "🏒", title: "NHL Hockey", desc: "Every game on TSN and Sportsnet, all regional feeds, zero blackouts, streamed in True 4K H.265." },
                { icon: "🏈", title: "NFL & CFL Football", desc: "Full NFL Sunday coverage plus every CFL game, in HD and 4K on any device." },
                { icon: "🏀", title: "NBA Basketball", desc: "NBA action with stunning 4K clarity and smooth 60 FPS motion for fast-break plays." },
                { icon: "🥊", title: "UFC & Combat Sports", desc: "UFC events and major fight cards included in your subscription — no separate PPV fee." },
                { icon: "⚽", title: "Soccer & International", desc: "beIN Sports, Eurosport, Sky Sports and international soccer leagues alongside your Canadian channels." },
                { icon: "⚾", title: "MLB Baseball", desc: "Blue Jays and every MLB matchup, crystal clear in 4K on your TV or phone." },
              ].map(f => (
                <div key={f.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why sports fans choose Maple4K */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 20 }}>Why Sports Fans Choose Maple4K Over Cable</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
              Cable sports packages force you to bundle channels you don&apos;t watch just to get the ones you do. Maple4K includes every Canadian sports network and the major international ones — beIN Sports, Eurosport, Sky Sports — in a single subscription, streamed in noticeably sharper 4K Ultra HD than standard cable HD.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.7 }}>
              There are no regional blackouts on TSN or Sportsnet feeds, no separate pay-per-view charges for UFC cards, and no long-term contract — just live sports on any device, from a Fire Stick in your living room to your phone on the go. See our full <Link href="/iptv-firestick-canada" style={{ color: red, textDecoration: "underline" }}>Fire Stick setup guide</Link> or <Link href="/tivimate-canada" style={{ color: red, textDecoration: "underline" }}>TiviMate guide</Link> to get streaming in minutes.
            </p>
          </div>
        </section>

        {/* City angle */}
        <section style={{ background: "#0E1120", padding: "60px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 20 }}>Local Sports, Wherever You Are in Canada</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
              Whether you&apos;re cheering on the Maple Leafs in Toronto, the Canucks in Vancouver, the Canadiens in Montreal, or the Oilers in Edmonton, Maple4K carries every regional feed so you never miss a local broadcast.
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
              City guides: <Link href="/iptv-toronto" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>Toronto</Link> ·{" "}
              <Link href="/iptv-vancouver" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>Vancouver</Link> ·{" "}
              <Link href="/iptv-montreal" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>Montreal</Link> ·{" "}
              <Link href="/iptv-edmonton" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>Edmonton</Link> ·{" "}
              <Link href="/iptv-calgary" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>Calgary</Link> ·{" "}
              <Link href="/iptv-ottawa" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>Ottawa</Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "60px 16px", background: bg }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 800, marginBottom: 32, textAlign: "center" }}>
              Sports IPTV — Frequently Asked Questions
            </h2>
            {faqItems.map(item => (
              <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
                <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {item.q}<span style={{ color: red, fontSize: 18 }}>+</span>
                </summary>
                <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 16px", background: "#0E1120", textAlign: "center" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Never Miss a Game — Try Maple4K Free</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>No credit card for trial. Setup in minutes on any device. All sports channels included from $9/month.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
              <Link href="/pricing" className="btn-outline">Subscribe →</Link>
            </div>
            <p style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
              See also: <Link href="/blog/best-iptv-for-hockey-canada-2026" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Best IPTV for Hockey</Link> · <Link href="/channels-list" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline" }}>Full Channel List</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
