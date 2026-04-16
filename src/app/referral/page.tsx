import type { Metadata } from "next";
import ReferralForm from "../../components/ReferralForm";

export const metadata: Metadata = {
  title: "Referral Program | Maple4K — Refer a Friend, Get +1 Year Free",
  description:
    "Refer a friend to Maple4K and earn +1 free year of service. No limits — every successful referral adds 12 months to your account.",
  keywords:
    "Maple4K referral, refer a friend IPTV, Maple4K free year, IPTV affiliate Canada",
  alternates: { canonical: "https://maple4k.ca/referral" },
};

const steps = [
  { number: "01", title: "Refer a Friend", description: "Share your referral with a friend who hasn't used our service before. Send them your info via WhatsApp or fill out the referral form below." },
  { number: "02", title: "Friend Subscribes", description: "Your friend signs up and purchases at least a 12-month subscription to Maple4K." },
  { number: "03", title: "You Get +1 Year FREE", description: "Once their payment is verified, 12 months are added to your account automatically. No cap — refer as many friends as you want!" },
];

const rewardCards = [
  { title: "+1 Year Per Referral", desc: "Every approved referral adds 12 free months to your subscription.", bg: "#1A3D45" },
  { title: "No Limit", desc: "Refer as many people as you want. Each successful referral earns another bonus year.", bg: "#3F9AAE" },
  { title: "Fast Review", desc: "Our team manually reviews and approves referrals quickly.", bg: "#F96E5B" },
];

const rules = [
  "The referred person must purchase at least a 1-year Maple4K subscription.",
  "Your bonus is added after payment verification is completed.",
  "The referred person must be a new customer who has never used Maple4K before.",
  "Referrals are unlimited — each successful referral gives you +12 more months.",
];

export default function ReferralPage() {
  return (
    <main style={{ background: "linear-gradient(135deg, #E8F4F5 0%, #ceeaed 40%, #b8e2e6 100%)", color: "#000000", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "#1A3D45", padding: "80px 16px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(249,110,91,0.2)", border: "1px solid rgba(249,110,91,0.5)", color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 18px", borderRadius: 999, marginBottom: 24 }}>
            Referral Program
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, lineHeight: 1.1, color: "#ffffff", marginBottom: 20 }}>
            Refer a Friend,{" "}<span style={{ color: "#F96E5B" }}>Get +1 Year Free</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 32, lineHeight: 1.7 }}>
            Share Maple4K with people you know and earn free subscription time when they join.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
            <span><span style={{ color: "#79C9C5" }}>✓</span> Unlimited referrals</span>
            <span><span style={{ color: "#79C9C5" }}>✓</span> +12 months per referral</span>
            <span><span style={{ color: "#79C9C5" }}>✓</span> Fast review</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 16px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#F96E5B", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Simple Process</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, marginBottom: 12, color: "#000000" }}>How It Works</h2>
          <p style={{ textAlign: "center", color: "#000000", marginBottom: 48, fontSize: 15 }}>Three simple steps to earn free service.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {steps.map((step) => (
              <div key={step.number} style={{ background: "#ffffff", border: "2px solid rgba(63,154,174,0.2)", borderRadius: 20, padding: "36px 28px", boxShadow: "0 4px 20px rgba(63,154,174,0.1)" }}>
                <div style={{ fontSize: 52, fontWeight: 900, color: "#3F9AAE", opacity: 0.25, lineHeight: 1, marginBottom: 16 }}>{step.number}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#000000" }}>{step.title}</h3>
                <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral form */}
      <section style={{ padding: "0 16px 80px" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, marginBottom: 12, color: "#000000" }}>Submit Your Referral</h2>
          <p style={{ textAlign: "center", color: "#000000", marginBottom: 36, fontSize: 14 }}>
            Fill in your details and your friend&apos;s details below. We&apos;ll take care of the rest.
          </p>
          <ReferralForm />
        </div>
      </section>

      {/* Rules */}
      <section style={{ padding: "0 16px 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, marginBottom: 40, color: "#000000" }}>Program Rules</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {rules.map((rule, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#ffffff", border: "1px solid rgba(63,154,174,0.2)", borderRadius: 14, padding: "20px 24px" }}>
                <span style={{ color: "#F96E5B", fontWeight: 900, fontSize: 18, flexShrink: 0, lineHeight: 1.4 }}>{i + 1}.</span>
                <p style={{ color: "#000000", fontSize: 14, lineHeight: 1.7 }}>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 16px", background: "#1A3D45", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, color: "#ffffff", marginBottom: 16 }}>Not a Customer Yet?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 36, fontSize: 16, lineHeight: 1.7 }}>
            Try Maple4K free — no credit card required. Then start referring and earn free years.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            <a href="/free-trial" style={{ background: "#F96E5B", color: "#fff", padding: "16px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(249,110,91,0.4)" }}>
              Get Free Trial
            </a>
            <a href="/pricing" style={{ background: "transparent", border: "2px solid #79C9C5", color: "#79C9C5", padding: "16px 36px", borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
              View Pricing →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
