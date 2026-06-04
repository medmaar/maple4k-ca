"use client";
import { useState, useRef } from "react";

async function getEmailjs() {
  const mod = await import("@emailjs/browser");
  return mod.default;
}

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "2px solid rgba(63,154,174,0.25)",
  borderRadius: 10,
  padding: "12px 16px",
  fontSize: 14,
  color: "#fff",
  outline: "none",
  boxSizing: "border-box" as const,
  fontFamily: "inherit",
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#79C9C5",
  marginBottom: 6,
};

export default function ReferralForm() {
  const [yourName, setYourName] = useState("");
  const [yourWA, setYourWA] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendWA, setFriendWA] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const emailjsInitialized = useRef(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const emailjs = await getEmailjs();
      if (!emailjsInitialized.current) {
        emailjs.init("BE3GO7hcQXUJAnRBV");
        emailjsInitialized.current = true;
      }
      await emailjs.send("service_mq69xac", "template_6gpfu3m", {
        from_name: yourName || "Not provided",
        from_email: "referral@maple4k.ca",
        phone: yourWA || "Not provided",
        country: "—",
        device: "—",
        plan: "Referral Program",
        message: `Referral submission:\n\nReferring customer: ${yourName || "—"}\nTheir WhatsApp: ${yourWA || "—"}\n\nFriend's name: ${friendName || "—"}\nFriend's WhatsApp: ${friendWA || "—"}`,
        site_name: "Maple4K.ca",
      });
      setStatus("success");
      setYourName(""); setYourWA(""); setFriendName(""); setFriendWA("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{
        background: "rgba(34,197,94,0.06)",
        border: "1px solid rgba(34,197,94,0.25)",
        borderRadius: 20,
        padding: "48px 32px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
        <h3 style={{ color: "#4ade80", fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>
          Referral Submitted!
        </h3>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, maxWidth: 360, margin: "0 auto" }}>
          Thank you! We&apos;ll review your referral and be in touch via WhatsApp within minutes.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ background: "rgba(255,255,255,0.05)", border: "2px solid rgba(63,154,174,0.2)", borderRadius: 20, padding: 32, boxShadow: "0 4px 24px rgba(63,154,174,0.1)" }}>

        {status === "error" && (
          <div style={{ background: "rgba(232,4,31,0.1)", border: "1px solid rgba(232,4,31,0.3)", color: "#ff6b6b", borderRadius: 12, padding: "12px 16px", fontSize: 14, marginBottom: 20 }}>
            ❌ Something went wrong. Please try again or use WhatsApp below.
          </div>
        )}

        <p style={{ fontSize: 11, color: "#E8041F", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Your Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
          <div>
            <label style={labelStyle}>Your First Name</label>
            <input type="text" placeholder="John" value={yourName} onChange={(e) => setYourName(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Your WhatsApp Number</label>
            <input type="tel" placeholder="+1 782 000 0000" value={yourWA} onChange={(e) => setYourWA(e.target.value)} style={inputStyle} />
          </div>
        </div>

        <p style={{ fontSize: 11, color: "#E8041F", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Friend&apos;s Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 28 }}>
          <div>
            <label style={labelStyle}>Friend&apos;s First Name</label>
            <input type="text" placeholder="Jane" value={friendName} onChange={(e) => setFriendName(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Friend&apos;s WhatsApp Number</label>
            <input type="tel" placeholder="+1 782 000 0000" value={friendWA} onChange={(e) => setFriendWA(e.target.value)} style={inputStyle} />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            width: "100%", background: "#E8041F", color: "#fff", padding: "16px",
            borderRadius: 12, fontWeight: 700, fontSize: 16, border: "none",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            opacity: status === "loading" ? 0.6 : 1,
            fontFamily: "inherit",
            boxShadow: "0 4px 16px rgba(232,4,31,0.35)",
          }}
        >
          {status === "loading" ? "Submitting…" : "Submit Referral →"}
        </button>
      </form>

      <div style={{ marginTop: 24, textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 16 }}>Prefer WhatsApp? Reach us directly:</p>
        <a
          href="https://wa.me/17828026280?text=Hi%20Maple4K!%20I%20want%20to%20submit%20a%20referral."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#25D366", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 12, fontSize: 14, textDecoration: "none" }}
        >
          📱 Refer via WhatsApp
        </a>
      </div>
    </div>
  );
}
