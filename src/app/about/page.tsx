import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About Maple4K — Canada's Best 4K IPTV Service | Maple4K" },
  description: "Maple4K is a Canadian IPTV service delivering 50,000+ channels + Netflix in 4K to subscribers across Canada. Learn about our mission, coverage, and why.",
  keywords: "about maple4k, maple4k iptv canada, canadian iptv service, iptv canada company, best iptv canada",
  alternates: { canonical: "https://maple4k.ca/about" },
  openGraph: {
    title: "About Maple4K — Canada's Best 4K IPTV Service",
    description: "Maple4K is a Canadian IPTV service delivering 50,000+ channels + Netflix in 4K. Serving subscribers coast to coast from $9/month.",
    url: "https://maple4k.ca/about",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Maple4K" }],
  },
  twitter: { card: "summary_large_image" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maple4K",
  url: "https://maple4k.ca",
  logo: "https://maple4k.ca/favicon.svg",
  description: "Canadian IPTV service delivering 50,000+ channels + Netflix in 4K Ultra HD to subscribers across Canada.",
  areaServed: "CA",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "French"],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "80px 16px 60px", background: "#0C0F1A" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <span style={{ background: "rgba(249,110,91,0.12)", border: "1px solid rgba(249,110,91,0.3)", color: "#E8041F", fontSize: 12, fontWeight: 700, padding: "4px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              About Us
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginTop: 20, marginBottom: 16 }}>
              About Maple4K — Canada&apos;s 4K IPTV Service
            </h1>
            <p style={{ color: "#fff", fontSize: "1.1rem", maxWidth: 700, lineHeight: 1.8 }}>
              Maple4K is a Canadian IPTV service built for Canadians. We deliver 50,000+ live TV channels, 120,000+ movies and series, and full Netflix access in True 4K Ultra HD — at a fraction of the cost of traditional cable or satellite TV.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px" }}>
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Our Mission</h2>
            <p style={{ color: "#fff", lineHeight: 1.8, marginBottom: 16 }}>
              Cable TV in Canada costs $80–$150/month and locks you into long contracts. We built Maple4K to give every Canadian access to premium entertainment — live sports, movies, international channels, and more — without the contracts, without the hardware fees, and without the inflated pricing.
            </p>
            <p style={{ color: "#fff", lineHeight: 1.8 }}>
              Our plans start at $9/month. No credit card required for the free trial. No contracts. Cancel anytime. We believe premium TV should be accessible to everyone in Canada, from Halifax to Victoria.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginBottom: 60 }}>
            {[
              { n: "50,000+", label: "Live Channels + Netflix" },
              { n: "120,000+", label: "Movies & Series" },
              { n: "4K UHD", label: "Max Streaming Quality" },
              { n: "$9/mo", label: "Starting Price" },
              { n: "24/7", label: "Customer Support" },
              { n: "10+", label: "Canadian Cities Served" },
            ].map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 900, color: "#E8041F", marginBottom: 6 }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Why us */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 24 }}>Why Canadians Choose Maple4K</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { icon: "🍁", title: "Built for Canada", desc: "Every plan includes Canadian local channels, CBC, CTV, Global, TSN, Sportsnet, and French-language channels for Québec subscribers. We cover every province." },
                { icon: "🏒", title: "No Sports Blackouts", desc: "Watch the Leafs, Canadiens, Canucks, Flames, Jets, Oilers, Senators, and every NHL, CFL, and major league game live — no blackouts, no premium sports packages, no extra fees." },
                { icon: "📺", title: "True 4K Ultra HD", desc: "We stream in H.265/HEVC True 4K at 3840×2160. HDR10 and Dolby Vision are supported on compatible displays. The picture quality is the best available for IPTV in Canada." },
                { icon: "⚡", title: "Instant Activation", desc: "After you subscribe, your login details arrive by email within minutes. Setup guides are provided for every device — Firestick, Smart TV, Android, iOS, Formuler, MAG Box, and more." },
                { icon: "💬", title: "Bilingual Support 24/7", desc: "Our customer support team speaks English and French and is available around the clock via WhatsApp and email. We respond fast because we know downtime during a game is not acceptable." },
                { icon: "🔒", title: "No Contracts, No Risk", desc: "Every plan is month-to-month or prepaid with no locked-in commitments. A free 24-hour trial is available with no credit card required so you can test the full service before paying anything." },
              ].map((item) => (
                <li key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16, background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: 26, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 700, marginBottom: 6, color: "#fff", fontSize: 16 }}>{item.title}</p>
                    <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Serving All of Canada</h2>
            <p style={{ color: "#fff", lineHeight: 1.8, marginBottom: 24 }}>
              Maple4K works anywhere in Canada with a stable internet connection of 25 Mbps or higher. We have subscribers in every province and territory. Our servers are optimized for all major Canadian ISPs including Rogers, Bell, Shaw, Telus, Videotron, Eastlink, and Bell MTS.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Toronto","Vancouver","Montreal","Calgary","Ottawa","Edmonton","Winnipeg","Hamilton","London ON","Victoria","Halifax","Quebec City"].map((city) => (
                <span key={city} style={{ background: "rgba(232,4,31,0.08)", border: "1px solid rgba(232,4,31,0.2)", borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600, color: "#fff" }}>🍁 {city}</span>
              ))}
            </div>
          </div>

          {/* Compatible devices */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16 }}>Compatible With All Your Devices</h2>
            <p style={{ color: "#fff", lineHeight: 1.8, marginBottom: 24 }}>
              Maple4K works on every major streaming device and platform. There is no proprietary hardware to buy. Use the device you already own.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
              {["Amazon Firestick","Samsung Smart TV","LG Smart TV","Apple TV 4K","iPhone & iPad","Android Phone","Android TV Box","Formuler Box","MAG Box","Roku","Windows PC","Kodi"].map((d) => (
                <div key={d} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "12px 16px", fontSize: 13, fontWeight: 600, textAlign: "center", color: "#fff" }}>{d}</div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "rgba(255,255,255,0.04)", padding: "60px 16px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16 }}>Ready to Cut the Cable Bill?</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 32, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Join thousands of Canadians who switched from cable to Maple4K. Start with a free 24h trial — no credit card required.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 40px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>▶ Free Trial 24H</a>
            <a href="/pricing" style={{ border: "2px solid rgba(249,110,91,0.4)", color: "#E8041F", padding: "16px 40px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>View Plans →</a>
          </div>
        </section>

        {/* Internal links */}
        <section style={{ padding: "48px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[["Best IPTV Canada","/best-iptv-canada"],["IPTV Subscription","/iptv-subscription"],["Free Trial","/free-trial"],["Channel List","/channels-list"],["How It Works","/how-it-works"],["Contact","/contact"]].map(([label, href]) => (
              <a key={href} href={href} style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#fff", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
