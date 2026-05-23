import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const ReviewsSection = dynamic(() => import("./components/ReviewsSection"));
const HeroSection    = dynamic(() => import("./components/HeroSection"));
const FaqAccordion   = dynamic(() => import("./components/FaqAccordion"));
const PricingSection = dynamic(() => import("./PricingSection"));

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Canada 2026 — 50,000+ Channels + Netflix from $9 | Maple4K" },
  description: "Best IPTV Canada 2026. 50,000+ channels + Netflix, free trial available — no credit card. IPTV subscription from $9/month. Best IPTV service in Canada with 4K Ultra HD, iptv québec, iptv box included.",
  keywords: "iptv canada, best iptv canada, iptv québec, iptv box, iptv free trial, free trial iptv, iptv from canada, iptv subscription canada, best iptv in canada, iptv providers canada, best iptv service canada, iptv near me, iptv legal, smart iptv, canadian iptv, iptv 4k, iptv firestick, iptv canada reviews, best iptv provider canada, free iptv canada",
  alternates: { canonical: "https://maple4k.ca" },
  openGraph: {
    title: "Best IPTV Canada 2026 — 50,000+ Channels + Netflix from $9 | Maple4K",
    description: "Canada's best IPTV service. 50,000+ channels + Netflix, free 24h trial, 4K Ultra HD from $9/month.",
    url: "https://maple4k.ca",
    type: "website",
  },
};

const faqs = [
  { q: "What video quality does Maple4K deliver?", a: "Maple4K delivers True 4K Ultra HD at 3840×2160 resolution, encoded in H.265/HEVC for maximum picture clarity at lower bitrates. HDR10 and Dolby Vision are fully supported on compatible displays." },
  { q: "What internet speed do I need for 4K IPTV streaming?", a: "A stable 25 Mbps connection handles butter-smooth 4K H.265 streams. Most Canadian fibre and cable plans at 75 Mbps+ run multiple simultaneous 4K streams with zero buffering." },
  { q: "Does Maple4K support HDR — HDR10 or Dolby Vision?", a: "Yes. Where broadcasters provide HDR feeds, Maple4K streams in HDR10 and Dolby Vision. Pair it with an Apple TV 4K, Samsung QLED, or LG OLED and your display's full HDR capability engages automatically." },
  { q: "Which IPTV player works best for 4K H.265 streams?", a: "TiviMate on Android TV and Fire TV is the top choice for hardware-accelerated 4K H.265 playback with full EPG. IPTV Smarters Pro performs excellently on iOS and Apple TV 4K." },
  { q: "Can I stream on multiple TVs simultaneously?", a: "Yes — plans support multiple simultaneous streams on unlimited devices, each capable of full 4K Ultra HD. Ideal for households with multiple 4K displays." },
  { q: "Is IPTV legal in Canada?", a: "IPTV technology is legal in Canada and is the same delivery method used by major telecoms. Maple4K operates within Canadian broadcasting standards and provides access to publicly available streams." },
  { q: "Is there a free trial to test the 4K quality?", a: "Yes — Maple4K offers a free 24h trial with no credit card required. The trial streams at full 4K quality so you can personally validate H.265 performance on your own hardware before committing." },
  { q: "Are there any hidden fees?", a: "No hidden fees. All our services are sold directly and transparently. The price you see is the price you pay." },
  { q: "What devices are compatible?", a: "Our subscriptions are compatible with Amazon Fire Stick, Formuler boxes, Apple TV, Android smartphones, Smart TVs (Samsung, LG), MAG boxes, Roku, and more." },
  { q: "How does installation work?", a: "With a Formuler box, installation is pre-configured. For any other device, we send a connection guide after payment via email in minutes." },
  { q: "Is there a referral program?", a: "Yes! Refer a friend with your referral code and earn two free months on your subscription (on a 12-month subscription purchase)." },
  { q: "Can I cancel at any time?", a: "You can stop at any time, but the subscription remains active for the paid duration without a refund. Formuler boxes include a one-year warranty." },
];

const features = [
  { icon: "📺", title: "Live TV", desc: "Access 50,000+ channels + Netflix including local and international Canadian networks in HD and 4K." },
  { icon: "🎬", title: "Movies", desc: "Stream thousands of movies from all genres — from timeless classics to the latest blockbusters in stunning 4K HDR." },
  { icon: "📡", title: "Series", desc: "Find your favourite American and Canadian series. Our library is constantly updated to satisfy every taste." },
  { icon: "🏒", title: "Sports", desc: "Never miss a game — hockey, football, tennis and more. Watch every live sporting event wherever you are." },
];

const devices = [
  "Amazon Fire Stick", "Samsung Smart TV", "LG Smart TV", "iPhone & iPad",
  "Android Phone", "Android TV Box", "MAG Box", "Apple TV",
  "Roku", "Windows PC", "Formuler", "Kodi",
];

const sportsChannels = [
  "TSN", "Sportsnet", "CBC Sports", "TVA Sports", "RDS", "NHL Network",
  "NFL Network", "NBA TV", "ESPN", "ESPN 2", "beIN Sports", "Sky Sports",
  "DAZN", "UFC Fight Pass", "Golf Channel", "Olympic Channel",
];

export default function HomePage() {
  return (
    <main style={{ background: "#0C0F1A", color: "#fff" }}>

      {/* ── 1. HERO ── */}
      <HeroSection />

      {/* ── 2. STATS BAR ── */}
      <section style={{ background: "#0E1120", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "28px 16px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24, textAlign: "center" }}>
          {[
            { n: "50,000+",      label: "Channels + Netflix" },
            { n: "120,000+",     label: "Movies & Series" },
            { n: "4K / HDR",     label: "Max Resolution" },
            { n: "Unlimited",    label: "Devices" },
            { n: "24H",          label: "Free Trial" },
          ].map(s => (
            <div key={s.label} className="ma-init">
              <div style={{ fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 800, color: "#E8041F" }}>{s.n}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. REVIEWS (right after hero) ── */}
      <section style={{ background: "#0C0F1A", padding: "80px 16px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ReviewsSection />
        </div>
      </section>

      {/* ── 4. PRICING (directly below reviews) ── */}
      <section style={{ padding: "80px 0 60px", background: "#0E1120" }}>
        <div className="ma-init" style={{ textAlign: "center", marginBottom: 20, padding: "0 16px" }}>
          <p className="section-label">Plans & Pricing</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, margin: 0 }}>Simple, Transparent Pricing</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 16, fontSize: 15 }}>
            Choose your plan — slide to pick connections, save more with longer durations
          </p>
        </div>
        <PricingSection />
      </section>

      {/* ── 5. FEATURES GRID ── */}
      <section style={{ padding: "100px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ma-init" style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="section-label">Everything You Need</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, margin: 0 }}>A World of Entertainment</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", marginTop: 16, fontSize: 16, maxWidth: 540, margin: "16px auto 0" }}>
              Enjoy an unmatched television experience with our internet TV service.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {features.map((f, i) => (
              <div key={f.title} className="feature-card ma-init" style={{ transitionDelay: `${i * 80}ms` }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. EXPERIENCE SECTION ── */}
      <section style={{ padding: "100px 16px", background: "#0E1120" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "center" }}>
          <div className="ma-left" style={{ position: "relative", borderRadius: 24, overflow: "hidden", minHeight: 380, border: "1px solid rgba(255,255,255,0.08)" }}>
            <img
              src="/iptv-subscription-canada-2.jpg"
              alt="Stream IPTV Canada live sports on any device — Maple4K"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 380 }}
              loading="lazy"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,15,26,0.55) 0%, transparent 60%)" }} />
          </div>
          <div className="ma-right">
            <p className="section-label">The Ultimate TV Experience</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, margin: "0 0 16px" }}>A World of Entertainment at Your Fingertips</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              Enjoy an unmatched TV experience with our internet streaming service. We offer access to all the most popular Canadian and international channels.
            </p>
            <ExperienceAccordion />
            <div style={{ marginTop: 32 }}>
              <Link href="/pricing" className="btn-red" style={{ display: "inline-flex" }}>Subscribe Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. DEVICES ── */}
      <section style={{ padding: "100px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "center" }}>
          <div className="ma-left">
            <p className="section-label">All Platforms</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, margin: "0 0 16px" }}>Watch on All Your Devices</h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              Whether on your phone, TV, tablet or computer — as long as you have internet access, you can watch anywhere, on any device.
            </p>
            <Link href="/pricing" className="btn-red" style={{ display: "inline-flex" }}>Subscribe</Link>
          </div>
          <div className="ma-right" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {devices.map(d => (
              <div key={d} className="device-badge" style={{ textAlign: "center" }}>{d}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. SPORTS MARQUEE ── */}
      <section style={{ padding: "48px 0", background: "#0E1120", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div style={{ marginBottom: 20, textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>Live Sports Channels</p>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track" style={{ gap: 12 }}>
            {[...sportsChannels, ...sportsChannels].map((ch, i) => (
              <div key={i} style={{ flexShrink: 0, background: "rgba(232,4,31,0.07)", border: "1px solid rgba(232,4,31,0.18)", borderRadius: 12, padding: "12px 22px", color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 700, whiteSpace: "nowrap" }}>
                🔴 {ch}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FREE TRIAL CTA ── */}
      <section style={{ padding: "80px 16px", background: "linear-gradient(135deg, #0E1120, #1a0510 50%, #0E1120)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }} className="ma-init">
          <p className="section-label">24H — No Credit Card</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, margin: "0 0 20px" }}>Try It Free!</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Get 24 hours of full access — set it up yourself on any compatible device using our step-by-step guides.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
            <Link href="/pricing" className="btn-outline">View Plans →</Link>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      <section style={{ padding: "100px 16px", background: "#0E1120" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="ma-init" style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="section-label">FAQ</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, margin: 0 }}>Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── 10.5 INTERNAL LINKS HUB ── */}
      <section style={{ padding: "80px 16px", background: "#0C0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="section-label">Coverage Across Canada</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, margin: 0 }}>IPTV Available in Every Canadian City</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 36 }}>
            {/* City pages */}
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#E8041F", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>By City</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  { label: "IPTV Toronto", href: "/iptv-toronto" },
                  { label: "IPTV Vancouver", href: "/iptv-vancouver" },
                  { label: "IPTV Montreal", href: "/iptv-montreal" },
                  { label: "IPTV Calgary", href: "/iptv-calgary" },
                  { label: "IPTV Ottawa", href: "/iptv-ottawa" },
                  { label: "IPTV Edmonton", href: "/iptv-edmonton" },
                  { label: "IPTV Winnipeg", href: "/iptv-winnipeg" },
                  { label: "IPTV Quebec", href: "/iptv-quebec" },
                  { label: "IPTV Halifax", href: "/iptv-halifax" },
                  { label: "IPTV Hamilton", href: "/iptv-hamilton" },
                  { label: "IPTV Victoria", href: "/iptv-victoria" },
                  { label: "IPTV Near Me", href: "/iptv-near-me" },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500 }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Device pages */}
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#E8041F", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>By Device</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  { label: "Fire Stick", href: "/iptv-firestick-canada" },
                  { label: "Android TV", href: "/iptv-android-tv-canada" },
                  { label: "Smart TV", href: "/iptv-smart-tv-canada" },
                  { label: "Apple TV", href: "/iptv-apple-tv-canada" },
                  { label: "Samsung TV", href: "/iptv-samsung-tv-canada" },
                  { label: "LG TV", href: "/iptv-lg-tv-canada" },
                  { label: "Android Phone", href: "/iptv-android-canada" },
                  { label: "iPhone & iPad", href: "/iptv-ios-canada" },
                  { label: "Roku", href: "/iptv-roku-canada" },
                  { label: "MAG Box", href: "/iptv-mag-box-canada" },
                  { label: "Windows PC", href: "/iptv-windows-canada" },
                  { label: "IPTV Box", href: "/iptv-box" },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500 }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Resources */}
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 700, color: "#E8041F", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Guides & Info</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  { label: "Best IPTV Canada", href: "/best-iptv-canada" },
                  { label: "IPTV Subscription", href: "/iptv-subscription" },
                  { label: "IPTV 4K", href: "/iptv-4k" },
                  { label: "Channels List", href: "/channels-list" },
                  { label: "How It Works", href: "/how-it-works" },
                  { label: "Free Trial", href: "/free-trial" },
                  { label: "Blog", href: "/blog" },
                  { label: "Reviews", href: "/reviews" },
                  { label: "Reseller Program", href: "/reseller" },
                ].map(link => (
                  <Link key={link.href} href={link.href} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500 }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FINAL CTA ── */}
      <section style={{ padding: "100px 16px", textAlign: "center", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }} className="ma-init">
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, margin: "0 0 20px" }}>Start Streaming Today</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Canada&apos;s only IPTV built around True 4K Ultra HD. 50,000+ channels + Netflix, HDR10 &amp; Dolby Vision — from $9/month. Try free, no credit card required.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" className="btn-red">▶ Free Trial 24H</Link>
            <Link href="/pricing" className="btn-outline">Subscribe →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ExperienceAccordion() {
  const items = [
    { title: "Live TV", body: "Enjoy 50,000+ channels + Netflix, including local and international networks. Follow your favourite programs in high definition, whether news, entertainment, movies or live events." },
    { title: "Movies & Series in 4K", body: "Dive into an immersive cinematic universe with thousands of movies and series available in 4K. From the latest blockbusters to timeless classics, our library grows daily." },
    { title: "Live Sports Events", body: "Never miss a match! Whether it's hockey, football, tennis or other sports, our internet TV service lets you follow your favourite live sporting events wherever you are." },
    { title: "Canadian Content", body: "As a local service, we celebrate Canadian cinema and series. Discover or rediscover the best films and series produced in Canada, directly on your TV." },
    { title: "Simplicity & Flexibility", body: "With our internet TV service, enjoy intuitive navigation, great picture quality and multi-screen access. Watch on your TV, computer, tablet or smartphone without compromise." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map(item => (
        <details key={item.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden" }}>
          <summary style={{ padding: "18px 22px", cursor: "pointer", fontWeight: 600, fontSize: 15, color: "#fff", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {item.title}
            <span style={{ color: "#E8041F", fontSize: 18, fontWeight: 400 }}>+</span>
          </summary>
          <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
        </details>
      ))}
    </div>
  );
}
