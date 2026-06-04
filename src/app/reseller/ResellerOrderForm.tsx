"use client";
import { useState, useRef } from "react";

async function getEmailjs() {
  const mod = await import("@emailjs/browser");
  return mod.default;
}

const PLANS = [
  { id: "10", label: "10 Connections", price: "$300", perConn: "$30/connection", badge: "Starter", color: "#3F9AAE" },
  { id: "50", label: "50 Connections", price: "$1,250", perConn: "$25/connection", badge: "Most Popular", color: "#E8041F", popular: true },
  { id: "100", label: "100 Connections", price: "$2,300", perConn: "$23/connection", badge: "Best Value", color: "#25D366" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 12,
  padding: "12px 16px",
  color: "#fff",
  fontSize: 14,
  outline: "none",
  fontFamily: "inherit",
};

export default function ResellerOrderForm() {
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const emailjsInitialized = useRef(false);

  const selectedPlan = PLANS.find((p) => p.id === selected);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;
    setStatus("loading");
    try {
      const emailjs = await getEmailjs();
      if (!emailjsInitialized.current) {
        emailjs.init("BE3GO7hcQXUJAnRBV");
        emailjsInitialized.current = true;
      }
      await emailjs.send("service_mq69xac", "template_6gpfu3m", {
        from_name: name || "Not provided",
        from_email: email || "Not provided",
        phone: phone || "Not provided",
        country: "Canada",
        device: "—",
        plan: `Reseller — ${selectedPlan?.label} (${selectedPlan?.price}/year)`,
        message: `Reseller order:\nPlan: ${selectedPlan?.label} — ${selectedPlan?.price}/year\nName: ${name || "—"}\nPhone/WhatsApp: ${phone || "—"}\nEmail: ${email || "—"}`,
        site_name: "Maple4K.ca",
      });
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 20, padding: "56px 32px", textAlign: "center", maxWidth: 540, margin: "0 auto" }}>
        <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
        <h3 style={{ color: "#4ade80", fontWeight: 800, fontSize: 24, margin: "0 0 14px" }}>Order Received!</h3>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.7, maxWidth: 380, margin: "0 auto 20px" }}>
          We&apos;ve received your reseller order for the <strong style={{ color: "#fff" }}>{selectedPlan?.label}</strong> plan. We&apos;ll contact you via WhatsApp or email within minutes to complete setup.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)", color: "#25D366", fontSize: 13, fontWeight: 600, padding: "8px 18px", borderRadius: 999 }}>
            📱 WhatsApp reply within minutes
          </span>
          <span style={{ background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.25)", color: "#60a5fa", fontSize: 13, fontWeight: 600, padding: "8px 18px", borderRadius: 999 }}>
            📧 Email confirmation sent
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Plan cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 40 }}>
        {PLANS.map((plan) => {
          const isSelected = selected === plan.id;
          return (
            <button
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              style={{
                background: isSelected ? `rgba(${plan.color === "#E8041F" ? "232,4,31" : plan.color === "#3F9AAE" ? "63,154,174" : "37,211,102"},0.12)` : "rgba(255,255,255,0.04)",
                border: `2px solid ${isSelected ? plan.color : "rgba(255,255,255,0.1)"}`,
                borderRadius: 20,
                padding: "32px 24px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.2s ease",
                position: "relative",
                outline: "none",
              }}
            >
              {plan.popular && (
                <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#E8041F", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 999, whiteSpace: "nowrap" }}>
                  ⭐ {plan.badge}
                </span>
              )}
              {!plan.popular && (
                <span style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 999, marginBottom: 12 }}>
                  {plan.badge}
                </span>
              )}
              {plan.popular && <div style={{ height: 12 }} />}
              <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", margin: "12px 0 4px" }}>{plan.price}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginBottom: 16 }}>per year · {plan.perConn}</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 17, marginBottom: 16 }}>{plan.label}</div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: isSelected ? plan.color : "rgba(255,255,255,0.07)",
                color: isSelected ? "#fff" : "rgba(255,255,255,0.5)",
                padding: "8px 20px", borderRadius: 999, fontSize: 13, fontWeight: 700,
                transition: "all 0.2s",
              }}>
                {isSelected ? "✓ Selected" : "Select Plan"}
              </div>
            </button>
          );
        })}
      </div>

      {/* Order form — shown only after plan is selected */}
      {selected && (
        <div style={{ maxWidth: 540, margin: "0 auto", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "32px 28px" }}>
          <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
            Order: {selectedPlan?.label} — {selectedPlan?.price}/year
          </h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 24 }}>
            Enter your contact details and we&apos;ll set up your reseller panel within minutes.
          </p>

          {status === "error" && (
            <div style={{ background: "rgba(232,4,31,0.1)", border: "1px solid rgba(232,4,31,0.3)", color: "#ff6b6b", borderRadius: 12, padding: "12px 16px", fontSize: 14, marginBottom: 20 }}>
              ❌ Something went wrong. Please try again or{" "}
              <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6b6b", textDecoration: "underline" }}>
                contact us on WhatsApp
              </a>.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Full Name</label>
              <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Phone / WhatsApp</label>
              <input type="tel" placeholder="+1 782 000 0000" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Email Address</label>
              <input type="text" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%", background: "#E8041F", color: "#fff", border: "none",
                fontWeight: 800, fontSize: 16, padding: "16px", borderRadius: 14,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.7 : 1,
                boxShadow: "0 4px 20px rgba(232,4,31,0.4)",
                fontFamily: "inherit",
                marginTop: 4,
              }}
            >
              {status === "loading" ? "Sending…" : `Order ${selectedPlan?.label} — ${selectedPlan?.price} →`}
            </button>
          </form>
        </div>
      )}

      {!selected && (
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: 14 }}>
          ↑ Select a plan above to place your order
        </p>
      )}
    </div>
  );
}
