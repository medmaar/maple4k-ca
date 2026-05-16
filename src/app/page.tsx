import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const HomePricing = dynamic(() => import("./components/HomePricing"));
const ReviewsSection = dynamic(() => import("./components/ReviewsSection"));
const HeroSection = dynamic(() => import("./components/HeroSection"));
const FaqAccordion = dynamic(() => import("./components/FaqAccordion"));

export const metadata: Metadata = {
  title: { absolute: "Best IPTV Canada 2026 — 4K Ultra HD from $9/month | Maple4K" },
  description: "Best IPTV service in Canada 2026. 4K Ultra HD, H.265/HEVC streams. Free trial available — no credit card. 25,000+ live Canadian channels, 120,000+ on-demand titles. IPTV subscription from $9/month.",
  alternates: { canonical: "https://maple4k.ca" },
};

const faqs = [
  { q: "What video quality does Maple4K deliver?", a: "Maple4K delivers True 4K Ultra HD at 3840×2160 resolution, encoded in H.265/HEVC for maximum picture clarity at lower bitrates. HDR10 and Dolby Vision are fully supported on compatible displays." },
  { q: "What internet speed do I need for 4K IPTV streaming?", a: "A stable 25 Mbps connection handles butter-smooth 4K H.265 streams. Most Canadian fibre and cable plans at 75 Mbps+ run multiple simultaneous 4K streams with zero buffering." },
  { q: "Does Maple4K support HDR — HDR10 or Dolby Vision?", a: "Yes. Where broadcasters provide HDR feeds, Maple4K streams in HDR10 and Dolby Vision. Pair it with an Apple TV 4K, Samsung QLED, or LG OLED and your display's full HDR capability engages automatically." },
  { q: "Which IPTV player works best for 4K H.265 streams?", a: "TiviMate on Android TV and Fire TV is the top choice for hardware-accelerated 4K H.265 playback with full EPG. IPTV Smarters Pro performs excellently on iOS and Apple TV 4K." },
  { q: "Can I stream 4K on multiple TVs simultaneously?", a: "Yes — multi-connection plans support 2–10 independent simultaneous streams, each capable of full 4K Ultra HD. Ideal for households with multiple 4K displays." },
  { q: "Is IPTV legal in Canada?", a: "IPTV technology is legal in Canada and is the same delivery method used by major telecoms. Maple4K operates within Canadian broadcasting standards and provides access to publicly available streams." },
  { q: "Is there a free trial to test the 4K quality?", a: "Yes — Maple4K offers a free 24h trial with no credit card required. The trial streams at full 4K quality so you can personally validate H.265 performance on your own hardware before committing." },
  { q: "Are there any hidden fees?", a: "No hidden fees. All our services are sold directly and transparently. The price you see is the price you pay." },
  { q: "What devices are compatible?", a: "Our subscriptions are compatible with Amazon Fire Stick, Formuler boxes, Apple TV, Android smartphones, Smart TVs (Samsung, LG), MAG boxes, Roku, and more." },
  { q: "How does installation work?", a: "With a Formuler box, installation is pre-configured. For any other device, we send a connection guide after payment via email in minutes." },
  { q: "Is there a referral program?", a: "Yes! Refer a friend with your referral code and earn two free months on your subscription (on a 12-month subscription purchase)." },
  { q: "Can I cancel at any time?", a: "You can stop at any time, but the subscription remains active for the paid duration without a refund. Formuler boxes include a one-year warranty." },
];

const features = [
  {
    icon: "📺",
    title: "Live TV",
    desc: "Access 25,000+ live channels including local and international Canadian networks in HD and 4K.",
  },
  {
    icon: "🎬",
    title: "Movies",
    desc: "Stream thousands of movies from all genres — from timeless classics to the latest blockbusters in stunning 4K HDR.",
  },
  {
    icon: "📡",
    title: "Series",
    desc: "Find your favourite American and Canadian series. Our library is constantly updated to satisfy every taste.",
  },
  {
    icon: "🏒",
    title: "Sports",
    desc: "Never miss a game — hockey, football, tennis and more. Watch every live sporting event wherever you are.",
  },
];

const devices = [
  "Amazon Fire Stick", "Samsung Smart TV", "LG Smart TV", "iPhone & iPad",
  "Android Phone", "Android TV Box", "MAG Box", "Apple TV",
  "Roku", "Windows PC", "Formuler", "Kodi",
];

const testimonials = [
  {
    name: "Marie D.",
    text: "I'm really impressed by the service quality! I can access all my favourite channels in high definition and watch my shows wherever I am. Being able to use my phone or tablet is a real plus. I recommend it without hesitation!",
  },
  {
    name: "Sébastien A.",
    text: "The best IPTV service I've tried so far! The movie catalogue is huge, and the 4K quality is incredible. I'm also a big sports fan, so being able to follow live events without interruption is pure joy. Truly top-notch service!",
  },
  {
    name: "Sylvain B.",
    text: "I didn't expect such a wide choice of channels and movies! I even discovered new series thanks to the selection. Being able to watch on multiple devices at the same time is really convenient for the whole family.",
  },
];

const pricingPlans = [
  {
    name: "3 Months",
    price: "$17",
    period: "/month",
    total: "$50 due at checkout",
    featured: false,
    features: ["+25,000 LIVE CHANNELS", "SD / HD / FULL HD / 4K", "+120,000 MOVIES & SERIES", "New Series (2024–2025)", "New Movies (2024–2025)", "All Devices Supported"],
  },
  {
    name: "12 Months",
    price: "$11",
    period: "/month",
    total: "$150 due at checkout",
    badge: "BEST VALUE",
    note: "+2 FREE MONTHS",
    featured: true,
    features: ["+25,000 LIVE CHANNELS", "SD / HD / FULL HD / 4K", "+120,000 MOVIES & SERIES", "New Series (2024–2025)", "New Movies (2024–2025)", "All Devices Supported"],
  },
  {
    name: "6 Months",
    price: "$12",
    period: "/month",
    total: "$85 due at checkout",
    note: "+1 FREE MONTH",
    featured: false,
    features: ["+25,000 LIVE CHANNELS", "SD / HD / FULL HD / 4K", "+120,000 MOVIES & SERIES", "New Series (2024–2025)", "New Movies (2024–2025)", "All Devices Supported"],
  },
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
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24, textAlign: "center" }}>
          {[
            { n: "25,000+", label: "Live Channels" },
            { n: "120,000+", label: "Movies & Series" },
            { n: "4K / HDR", label: "Max Resolution" },
            { n: "24H", label: "Free Trial" },
            { n: "All Devices", label: "Compatible" },
          ].map(s => (
            <div key={s.label} className="ma-init">
              <div style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 800, color: "#E8041F" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. FEATURES GRID ── */}
      <section style={{ padding: "100px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ma-init" style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="section-label">Everything You Need</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, margin: 0 }}>
              A World of Entertainment
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", marginTop: 16, fontSize: 16, maxWidth: 540, margin: "16px auto 0" }}>
              Enjoy an unmatched television experience with our internet TV service.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {features.map((f, i) => (
              <div key={f.title} className={`feature-card ma-init`} style={{ animationDelay: `${i * 80}ms` }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. EXPERIENCE SECTION ── */}
      <section style={{ padding: "100px 16px", background: "#0E1120" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          {/* Left - video mock */}
          <div className="ma-left" style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg, #1a0d1f, #0d1a25)", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 70%, rgba(232,4,31,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(63,154,174,0.1) 0%, transparent 60%)" }} />
            <div style={{ textAlign: "center", zIndex: 1, position: "relative" }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>▶</div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, margin: 0 }}>Your favourite content, anywhere</p>
            </div>
          </div>

          {/* Right - accordion */}
          <div className="ma-right">
            <p className="section-label">The Ultimate TV Experience</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, marginBottom: 8, marginTop: 0 }}>
              A World of Entertainment at Your Fingertips
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              Enjoy an unmatched TV experience with our internet streaming service. We offer access to all the most popular Canadian and international channels.
            </p>
            <ExperienceAccordion />
            <div style={{ marginTop: 32 }}>
              <Link href="/pricing" className="btn-red" style={{ display: "inline-flex" }}>
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEVICES ── */}
      <section style={{ padding: "100px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div className="ma-left">
            <p className="section-label">All Platforms</p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, marginBottom: 16, marginTop: 0 }}>
              Watch on All Your Devices
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              With our internet TV service, enjoy your favourite content on all your devices. Whether on your phone, TV, tablet or computer — as long as you have internet access, you can watch anywhere.
            </p>
            <Link href="/pricing" className="btn-red" style={{ display: "inline-flex" }}>
              Subscribe
            </Link>
          </div>
          <div className="ma-right" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {devices.map(d => (
              <div key={d} className="device-badge" style={{ textAlign: "center" }}>
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SPORTS MARQUEE ── */}
      <section style={{ padding: "48px 0", background: "#0E1120", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div style={{ marginBottom: 20, textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>Live Sports Channels</p>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track" style={{ gap: 12 }}>
            {[...sportsChannels, ...sportsChannels].map((ch, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  background: "rgba(232,4,31,0.07)",
                  border: "1px solid rgba(232,4,31,0.18)",
                  borderRadius: 12,
                  padding: "12px 22px",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 13,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                🔴 {ch}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRICING ── */}
      <section style={{ padding: "100px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ma-init" style={{ textAlign: "center", marginBottom: 64 }}>
            <p className="section-label">Recommended Plans</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, margin: 0 }}>
              Access in Minutes
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 16, fontSize: 15 }}>
              Order now and receive your access by email in just a few minutes
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "center" }}>
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`pricing-card ma-init`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "#E8041F", color: "#fff", fontSize: 10, fontWeight: 800,
                    letterSpacing: "0.1em", padding: "5px 14px", borderRadius: 20, whiteSpace: "nowrap",
                  }}>
                    {plan.badge}
                  </div>
                )}
                <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 0, marginBottom: 4 }}>{plan.name}</h3>
                {plan.note && (
                  <p style={{ color: "#E8041F", fontSize: 12, fontWeight: 700, margin: "0 0 12px", letterSpacing: "0.05em" }}>{plan.note}</p>
                )}
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, margin: "0 0 20px" }}>{plan.total}</p>
                <div style={{ marginBottom: 28 }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Comes to </span>
                  <span style={{ fontSize: 42, fontWeight: 900, color: plan.featured ? "#E8041F" : "#fff" }}>{plan.price}</span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{plan.period}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ color: "#E8041F", fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: plan.featured ? "#E8041F" : "transparent",
                    border: `2px solid ${plan.featured ? "#E8041F" : "rgba(255,255,255,0.2)"}`,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "14px 20px",
                    borderRadius: 12,
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  Subscribe
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FREE TRIAL CTA ── */}
      <section style={{ padding: "80px 16px", background: "linear-gradient(135deg, #0E1120 0%, #1a0510 50%, #0E1120 100%)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div className="ma-init">
            <p className="section-label">24H — No Credit Card</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, margin: "0 0 20px" }}>
              Try It Free!
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
              Get 24 hours of access to our internet TV service. Set it up yourself on one of your compatible devices with our step-by-step guides.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-trial" className="btn-red">
                ▶ Free Trial 24H
              </Link>
              <Link href="/pricing" className="btn-outline">
                View Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ── */}
      <section style={{ padding: "100px 16px", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="ma-init" style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="section-label">Customer Reviews</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, margin: 0 }}>
              What Our Customers Say
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="ma-init"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 20,
                  padding: 28,
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div style={{ color: "#E8041F", fontSize: 18, marginBottom: 12 }}>★★★★★</div>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.75, margin: "0 0 20px" }}>
                  "{t.text}"
                </p>
                <p style={{ fontWeight: 700, fontSize: 14, margin: 0, color: "#fff" }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ── */}
      <section style={{ padding: "100px 16px", background: "#0E1120" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="ma-init" style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="section-label">FAQ</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── 11. FINAL CTA ── */}
      <section style={{ padding: "100px 16px", textAlign: "center", background: "#0C0F1A" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }} className="ma-init">
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, margin: "0 0 20px" }}>
            Start Streaming Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Canada&apos;s only IPTV built around True 4K Ultra HD. H.265/HEVC encoded, HDR10 &amp; Dolby Vision supported — from $9/month. Try free, no credit card required.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/free-trial" className="btn-red">
              ▶ Free Trial 24H
            </Link>
            <Link href="/pricing" className="btn-outline">
              Subscribe →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── EXPERIENCE ACCORDION (inline client component workaround via server-safe HTML) ── */
function ExperienceAccordion() {
  const items = [
    { title: "Live TV", body: "Enjoy 25,000+ live channels, including local and international networks. Follow your favourite programs in high definition, whether news, entertainment, movies or live events." },
    { title: "Movies & Series in 4K", body: "Dive into an immersive cinematic universe with thousands of movies and series available in 4K. From the latest blockbusters to timeless classics, our library grows daily." },
    { title: "Live Sports Events", body: "Never miss a match! Whether it's hockey, football, tennis or other sports, our internet TV service lets you follow your favourite live sporting events wherever you are." },
    { title: "Canadian Content", body: "As a local service, we celebrate Canadian cinema and Quebec series. Discover or rediscover the best films and series produced in Canada, directly on your TV." },
    { title: "Simplicity & Flexibility", body: "With our internet TV service, enjoy intuitive navigation, great picture quality and multi-screen access. Watch on your TV, computer, tablet or smartphone, with no compromise on quality." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <details
          key={item.title}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <summary style={{
            padding: "18px 22px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 15,
            color: "#fff",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            {item.title}
            <span style={{ color: "#E8041F", fontSize: 18, fontWeight: 400 }}>+</span>
          </summary>
          <p style={{ padding: "0 22px 18px", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            {item.body}
          </p>
        </details>
      ))}
    </div>
  );
}
