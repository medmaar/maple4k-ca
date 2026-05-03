"use client";
import { useState } from "react";




const inputStyle = {
  width: "100%",
  background: "#ffffff",
  border: "2px solid rgba(63,154,174,0.25)",
  borderRadius: 10,
  padding: "12px 16px",
  fontSize: 14,
  color: "#000000",
  outline: "none",
  boxSizing: "border-box" as const,
  fontFamily: "inherit",
};

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#000000",
  marginBottom: 6,
};

export default function ReferralForm() {
  const [yourName, setYourName] = useState("");
  const [yourWA, setYourWA] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendWA, setFriendWA] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ yourName, yourWhatsApp: yourWA, friendName, friendWhatsApp: friendWA }),
      });
      if (res.ok) {
        setStatus("success");
        setYourName(""); setYourWA(""); setFriendName(""); setFriendWA("");
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ background: "#ffffff", border: "2px solid rgba(63,154,174,0.2)", borderRadius: 20, padding: 32, boxShadow: "0 4px 24px rgba(63,154,174,0.1)" }}>

        <p style={{ fontSize: 11, color: "#C03D28", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Your Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <div>
            <label style={labelStyle}>Your First Name</label>
            <input type="text" required placeholder="John" value={yourName} onChange={(e) => setYourName(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Your WhatsApp Number</label>
            <input type="tel" required placeholder="+1 782 000 0000" value={yourWA} onChange={(e) => setYourWA(e.target.value)} style={inputStyle} />
          </div>
        </div>

        <p style={{ fontSize: 11, color: "#C03D28", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Friend&apos;s Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
          <div>
            <label style={labelStyle}>Friend&apos;s First Name</label>
            <input type="text" required placeholder="Jane" value={friendName} onChange={(e) => setFriendName(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Friend&apos;s WhatsApp Number</label>
            <input type="tel" required placeholder="+1 782 000 0000" value={friendWA} onChange={(e) => setFriendWA(e.target.value)} style={inputStyle} />
          </div>
        </div>

        {status === "success" ? (
          <div style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.3)", borderRadius: 12, padding: "16px 20px", color: "#1A3D45", fontSize: 14, fontWeight: 600, textAlign: "center" }}>
            ✓ Referral submitted! We&apos;ll review it shortly and be in touch.
          </div>
        ) : (
          <button type="submit" disabled={status === "loading"} style={{ width: "100%", background: "#F96E5B", color: "#fff", padding: "16px", borderRadius: 12, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", opacity: status === "loading" ? 0.6 : 1, fontFamily: "inherit", boxShadow: "0 4px 16px rgba(249,110,91,0.35)" }}>
            {status === "loading" ? "Submitting…" : "Submit Referral"}
          </button>
        )}

        {status === "error" && (
          <p style={{ textAlign: "center", color: "#F96E5B", fontSize: 13, marginTop: 12 }}>
            Something went wrong. Please try again or use WhatsApp below.
          </p>
        )}
      </form>

      <div style={{ marginTop: 24, textAlign: "center" }}>
        <p style={{ color: "#000000", fontSize: 13, marginBottom: 16 }}>Prefer WhatsApp? Reach us directly:</p>
        <a href={'/whatsapp-contact'} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#25D366", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 12, fontSize: 14, textDecoration: "none" }}>
          Refer via WhatsApp
        </a>
      </div>
    </div>
  );
}
