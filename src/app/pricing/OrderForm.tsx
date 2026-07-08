"use client";
import { useState, FormEvent } from "react";

const COUNTRIES = [
  "Canada","United States","United Kingdom","Australia","France","Germany",
  "Belgium","Switzerland","Netherlands","Spain","Italy","Portugal","Sweden",
  "Norway","Denmark","Finland","Ireland","New Zealand","UAE","Qatar","Kuwait",
  "Saudi Arabia","Morocco","Algeria","Tunisia","Senegal","Cameroon","Ivory Coast",
  "Lebanon","Israel","Jordan","Turkey","Brazil","Mexico","Colombia","Argentina",
  "Other",
];

interface Props { planLabel: string; price: number; whatsappNumber: string; emailAddress: string; }

export default function PlanOrderForm({ planLabel, price, whatsappNumber, emailAddress }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Maple4K!\n\nI'd like to order the ${planLabel} plan at $${price}.\n\nName: ${name}\nEmail: ${email}\nCountry: ${country}\nWhatsApp: ${phone || "—"}\n\nPlease send me payment instructions. Thank you!`
    );
    window.open(`/link/wa?msg=${msg}`, "_blank");
    setSubmitted(true);
  }

  /* ── SUCCESS: form fully replaced by confirmation ── */
  if (submitted) {
    return (
      <div style={{
        background: "rgba(34,197,94,0.06)",
        border: "1px solid rgba(34,197,94,0.25)",
        borderRadius: 20,
        padding: "48px 32px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
        <h3 style={{ fontWeight: 800, fontSize: 22, margin: "0 0 12px", color: "#4ade80" }}>
          Order Received!
        </h3>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 20px", maxWidth: 380, marginLeft: "auto", marginRight: "auto" }}>
          Thank you! We will contact you shortly via{" "}
          <span style={{ color: "#25D366", fontWeight: 700 }}>WhatsApp</span>{" "}
          or{" "}
          <span style={{ color: "#60a5fa", fontWeight: 700 }}>email</span>{" "}
          to complete the process and send your login credentials.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.25)", color: "#25D366", fontSize: 13, fontWeight: 600, padding: "8px 18px", borderRadius: 999 }}>
            📱 WhatsApp reply within minutes
          </span>
          <span style={{ background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.25)", color: "#60a5fa", fontSize: 13, fontWeight: 600, padding: "8px 18px", borderRadius: 999 }}>
            📧 Email confirmation sent
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginTop: 20 }}>
          Didn&apos;t open WhatsApp?{" "}
          <a href={`mailto:${emailAddress}`} style={{ color: "#60a5fa", textDecoration: "underline" }}>Email us instead</a>
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12,
    padding: "12px 16px", color: "#fff", fontSize: 14, outline: "none",
    fontFamily: "inherit",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>First Name *</label>
        <input type="text" required placeholder="E.g. John" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
      </div>
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Email Address *</label>
        <input type="email" required placeholder="E.g. john@example.com" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
      </div>
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Country</label>
        <select required value={country} onChange={e => setCountry(e.target.value)} style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e" }}>
          <option value="">Select country</option>
          {COUNTRIES.map(c => <option key={c} value={c} style={{ backgroundColor: "#1a1a2e" }}>{c}</option>)}
        </select>
      </div>
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>WhatsApp Number <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>(optional)</span></label>
        <input type="tel" placeholder="E.g. +1 300 400 5000" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} />
      </div>
      <button type="submit" style={{ width: "100%", background: "#E8041F", color: "#fff", border: "none", fontWeight: 800, fontSize: 16, padding: 16, borderRadius: 14, cursor: "pointer", boxShadow: "0 4px 20px rgba(232,4,31,0.4)", fontFamily: "inherit" }}>
        Submit Now →
      </button>
    </form>
  );
}
