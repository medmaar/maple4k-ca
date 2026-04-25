import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "IPTV 4K Canada — True Ultra HD Streaming Near You | Maple4K" },
  description:
    "Stream IPTV in 4K Ultra HD in Canada. H.265/HEVC encoded, HDR10 & Dolby Vision. 25,000+ channels in true 4K quality near you. Free trial — no credit card. From $9/month.",
  keywords:
    "iptv 4k, iptv 4k near me, 4k iptv canada, 4k iptv subscription, ultra hd iptv canada, h.265 iptv canada, hdr iptv canada, best iptv 4k canada",
  alternates: { canonical: "https://maple4k.ca/iptv-4k" },
  openGraph: {
    title: "IPTV 4K Canada — True Ultra HD Streaming Near You | Maple4K",
    description: "True 4K IPTV in Canada. H.265/HEVC, HDR10, Dolby Vision. Free trial from $9/month.",
    url: "https://maple4k.ca/iptv-4k",
    type: "website", siteName: "Maple4K", locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "IPTV 4K Canada – Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const faqItems = [
  { q: "What is 4K IPTV and how is it different from regular IPTV?", a: "4K IPTV streams live television at 3840×2160 resolution — four times the pixel count of 1080p HD. Maple4K uses H.265/HEVC encoding, which delivers 4K at lower bitrates than older H.264 codecs, meaning butter-smooth 4K streams even on standard Canadian fibre connections. Regular IPTV typically caps at 1080p H.264." },
  { q: "Can I get 4K IPTV near me in Canada?", a: "Yes — Maple4K serves all Canadian cities and regions. Our servers are distributed across Canada to minimize latency for subscribers from Victoria, BC to St. John's, NL. If you have a 25 Mbps+ internet connection, you can stream 4K IPTV near you with zero buffering." },
  { q: "Do I need a special TV for 4K IPTV?", a: "You need a 4K-capable display (any 4K Smart TV, 4K monitor, or 4K projector) and a device that supports hardware H.265 decoding — like Apple TV 4K, Nvidia Shield, Formuler Z8/Z10, a 4K Fire Stick (4K Max), or any modern Android TV box. On 1080p TVs, streams automatically fall back to 1080p HD." },
  { q: "How much data does 4K IPTV use?", a: "Maple4K's H.265/HEVC 4K streams use approximately 10–15 GB/hour — roughly half the data of uncompressed 4K H.264. Most Canadian internet plans are unlimited, but if you're on a capped plan, 10–15 hours of 4K streaming per day uses around 100–150 GB/month." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

export default function IPTV4KPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000", minHeight: "100vh" }}>
        <section style={{ padding: "80px 16px 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#F96E5B", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              IPTV 4K · Canada · Maple4K
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
              IPTV 4K Canada — True Ultra HD Streaming <span style={{ color: "#F96E5B" }}>Near You</span>
            </h1>
            <p style={{ color: "#000", fontSize: "1.1rem", maxWidth: 680, lineHeight: 1.7, marginBottom: 28 }}>
              Maple4K is Canada&apos;s only IPTV service delivering genuine 4K Ultra HD with H.265/HEVC encoding, HDR10, and Dolby Vision support. If you&apos;ve been searching for IPTV 4K near you, your search ends here. 25,000+ live channels at the resolution your display was built for — from $9/month.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>Try 4K Free →</a>
              <a href="/pricing" style={{ border: "2px solid rgba(249,110,91,0.5)", color: "#F96E5B", padding: "14px 36px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 60px" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>What Makes Maple4K IPTV 4K Different</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16, marginBottom: 48 }}>
            {[
              { icon: "🎥", title: "True 4K — 3840×2160", desc: "Not upscaled. Not labelled 4K. Genuine 3840×2160 streams from broadcasters who deliver in 4K. Verify on any 4K display." },
              { icon: "⚡", title: "H.265/HEVC Encoding", desc: "Half the bitrate of H.264 at equal quality. Our 4K streams use 10–15 Mbps vs 25–40 Mbps for H.264 4K. Less buffering, less data." },
              { icon: "🌈", title: "HDR10 & Dolby Vision", desc: "Full HDR support where broadcast sources provide it. Compatible with every HDR-capable TV, projector, or monitor." },
              { icon: "📍", title: "4K IPTV Near You", desc: "Servers optimized for every Canadian city. Low-latency 4K delivery whether you're in Toronto, Vancouver, Calgary, or a rural location." },
            ].map(f => (
              <div key={f.title} style={{ background: "#fff", borderRadius: 14, padding: 24, border: "1px solid rgba(63,154,174,0.15)" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
                <p style={{ fontWeight: 700, marginBottom: 8 }}>{f.title}</p>
                <p style={{ color: "#333", lineHeight: 1.7, fontSize: 14 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>4K IPTV Near Me — What Speed Do I Need?</h2>
            <p style={{ lineHeight: 1.8, marginBottom: 16 }}>For stable 4K IPTV streams in Canada, Maple4K recommends a minimum of <strong>25 Mbps</strong> for a single 4K stream. Most Canadian fibre and cable plans at 75 Mbps+ run 2–3 simultaneous 4K streams with zero buffering.</p>
            <div style={{ background: "rgba(249,110,91,0.08)", border: "1px solid rgba(249,110,91,0.25)", borderRadius: 12, padding: 20 }}>
              <p style={{ fontWeight: 700, color: "#F96E5B", marginBottom: 12 }}>Recommended Internet Speeds for 4K IPTV</p>
              <ul style={{ paddingLeft: 20, lineHeight: 2.2, fontSize: 14 }}>
                <li><strong>25 Mbps</strong> — Single 4K stream (H.265/HEVC)</li>
                <li><strong>50 Mbps</strong> — Two simultaneous 4K streams</li>
                <li><strong>100 Mbps+</strong> — 3–5 simultaneous 4K streams (multi-device plan)</li>
              </ul>
            </div>
          </div>

          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>IPTV 4K FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqItems.map(item => (
              <div key={item.q} style={{ background: "#fff", border: "1px solid rgba(63,154,174,0.1)", borderRadius: 12, padding: "20px 24px" }}>
                <p style={{ fontWeight: 700, marginBottom: 8 }}>{item.q}</p>
                <p style={{ color: "#333", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#1A3D45", padding: "60px 16px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: "#fff" }}>Stream IPTV in 4K — Free Trial Available</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>No credit card. Full 4K access for 24 hours. Plans from $9/month.</p>
          <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "16px 48px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>Try 4K IPTV Free →</a>
        </section>
      </main>
    </>
  );
}
