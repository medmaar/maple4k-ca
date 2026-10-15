import type { Metadata } from "next";
import ReferralForm from "../../components/ReferralForm";
import SimpleFaq from "../../components/SimpleFaq";
import ExtraSections from "../../components/ExtraSections";

export const metadata: Metadata = {
  title: { absolute: "Referral Program — Refer a Friend, Get 6 Months Free" },
  description:
    "Refer a friend to Maple4K and earn 6 free months of service. No limits — every successful referral adds 6 months to your account.",
  keywords: "Maple4K referral, refer a friend IPTV, Maple4K 6 free months, IPTV affiliate Canada, iptv referral",
  alternates: { canonical: "https://maple4k.ca/referral" },
  openGraph: { title: "Referral Program — Refer a Friend, Get 6 Months Free", description: "Refer a friend to Maple4K and earn 6 free months of service. No limits — every successful referral adds 6 months to your account.", url: "https://maple4k.ca/referral", type: "website", siteName: "Maple4K", locale: "en_CA", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Referral Program — Refer a Friend, Get 6 Months Free – Maple4K" }] },
  twitter: { card: "summary_large_image", title: "Referral Program — Refer a Friend, Get 6 Months Free", description: "Refer a friend to Maple4K and earn 6 free months of service. No limits — every successful referral adds 6 months to your account.", images: ["/og-image.jpg"] },
};

const steps = [
  { number: "01", title: "Refer a Friend", description: "Share your referral with a friend who hasn't used our service before. Send them your info via WhatsApp or fill out the referral form below." },
  { number: "02", title: "Friend Subscribes", description: "Your friend signs up and purchases at least a 12-month subscription to Maple4K." },
  { number: "03", title: "You Get 6 Months FREE", description: "Once their payment is verified, 6 months are added to your account automatically. No cap — refer as many friends as you want!" },
];

const rewardCards = [
  { title: "+6 Months Per Referral", desc: "Every approved referral adds 6 free months to your subscription.", bg: "#1A3D45" },
  { title: "No Limit", desc: "Refer as many people as you want. Each successful referral earns another 6 free months.", bg: "#3F9AAE" },
  { title: "Fast Review", desc: "Our team manually reviews and approves referrals quickly.", bg: "#F96E5B" },
];

const rules = [
  "The referred person must purchase at least a 1-year Maple4K subscription.",
  "Your bonus is added after payment verification is completed.",
  "The referred person must be a new customer who has never used Maple4K before.",
  "Referrals are unlimited — each successful referral gives you +6 more months.",
];


const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Refer a Friend to Maple4K and Earn 6 Free Months",
  "step": [
    {"@type":"HowToStep","position":1,"name":"Refer a Friend","text":"Share your referral code or info with a friend who hasn't used Maple4K before."},
    {"@type":"HowToStep","position":2,"name":"Friend Subscribes","text":"Your friend purchases at least a 12-month Maple4K subscription."},
    {"@type":"HowToStep","position":3,"name":"Get 6 Months FREE","text":"Once their payment is verified, 6 months are added to your account automatically."}
  ]
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Home","item":"https://maple4k.ca"},
    {"@type":"ListItem","position":2,"name":"Referral Program","item":"https://maple4k.ca/referral"}
  ]
};
export default function ReferralPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <main style={{ background: "#0C0F1A", color: "#fff", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#0C0F1A", padding: "32px 16px 24px", minHeight: "auto" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 24, padding: "28px 24px", boxShadow: "0 8px 32px rgba(26,61,69,0.25)", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "rgba(249,110,91,0.18)", border: "1px solid rgba(249,110,91,0.4)", color: "#E8041F", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 999, marginBottom: 20 }}>
              Referral Program
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: 16 }}>
              Refer a Friend, <span style={{ color: "#E8041F" }}>Get 6 Months Free</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginBottom: 20 }}>
              Share Maple4K with people you know and earn free subscription time when they join.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 20px", fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
              <span><span style={{ color: "#79C9C5" }}>✓</span> Unlimited referrals</span>
              <span><span style={{ color: "#79C9C5" }}>✓</span> +6 months per referral</span>
              <span><span style={{ color: "#79C9C5" }}>✓</span> Fast review</span>
            </div>
          </div>
        </div>
      </section>

      {/* Referral form */}
      <section id="refer" style={{ padding: "0 16px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <ReferralForm />
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "16px 16px 56px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#E8041F", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Simple Process</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#fff" }}>How It Works</h2>
          <p style={{ textAlign: "center", color: "#fff", marginBottom: 32, fontSize: 15 }}>Three simple steps to earn free service.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {steps.map((step) => (
              <div key={step.number} style={{ background: "rgba(255,255,255,0.05)", border: "2px solid rgba(63,154,174,0.2)", borderRadius: 20, padding: "36px 28px", boxShadow: "0 4px 20px rgba(63,154,174,0.1)" }}>
                <div style={{ fontSize: 52, fontWeight: 900, color: "#3F9AAE", opacity: 0.25, lineHeight: 1, marginBottom: 16 }}>{step.number}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#fff" }}>{step.title}</h3>
                <p style={{ color: "#fff", fontSize: 14, lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section style={{ padding: "0 16px 56px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, marginBottom: 28, color: "#fff" }}>Program Rules</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {rules.map((rule, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "20px 24px" }}>
                <span style={{ color: "#E8041F", fontWeight: 900, fontSize: 18, flexShrink: 0, lineHeight: 1.4 }}>{i + 1}.</span>
                <p style={{ color: "#fff", fontSize: 14, lineHeight: 1.7 }}>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "56px 16px", background: "rgba(255,255,255,0.05)", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, color: "#ffffff", marginBottom: 16 }}>Not a Customer Yet?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
            Try Maple4K free — no credit card required. Then start referring and earn free months.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <a href="/free-trial" style={{ background: "#E8041F", color: "#fff", padding: "16px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(249,110,91,0.4)" }}>
              Get Free Trial
            </a>
            <a href="/pricing" style={{ background: "transparent", border: "2px solid #79C9C5", color: "#79C9C5", padding: "16px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
              View Pricing →
            </a>
          </div>
        </div>
      </section>

      <SimpleFaq title="Referral Program \u2014 FAQ" items={[{"q": "How does the Maple4K referral program work?", "a": "Refer a friend who has never used Maple4K. When they purchase at least a 1-year subscription and your referral is approved, +6 months are added to your account."}, {"q": "Is there a limit to how many people I can refer?", "a": "No. Referrals are unlimited — each successful referral gives you another 6 months."}, {"q": "Who counts as a new customer?", "a": "The referred person must be a new customer who has never used Maple4K before."}, {"q": "How do I submit a referral?", "a": "Send your friend's details via WhatsApp or fill in the referral form on this page. The team reviews and approves referrals quickly."}]} />
      <ExtraSections path="/referral" />
      </main>
    </>
  );
}