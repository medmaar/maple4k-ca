"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Celebrate from "@/components/Celebrate";

const WORKER_URL = "https://iptv-trial-maple4k.medmaar.workers.dev";

const countries = [
  "Canada", "United States", "United Kingdom", "Australia", "France", "Germany",
  "Spain", "Italy", "Netherlands", "Belgium", "Switzerland", "Portugal",
  "Morocco", "Algeria", "Tunisia", "Egypt", "Saudi Arabia", "United Arab Emirates",
  "Other",
];

const deviceTypes = [
  "Smart TV (Samsung / LG)",
  "Amazon Firestick",
  "Android Box",
  "Android Phone / Tablet",
  "iPhone / iPad",
  "MAG Box",
  "Apple TV",
  "PC Windows / Mac",
  "Other",
];

export default function FreeTrialForm() {
  const [form, setForm] = useState({ full_name: "", email: "", country: "Canada", device: "", message: "" });
  const [phone, setPhone] = useState<string | undefined>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.full_name,
          email: form.email,
          country: form.country,
          device: form.device,
          whatsapp: phone || "",
          notes: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Worker error");
      setStatus("success");
    } catch (err) {
      console.error("Trial error:", err);
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  };

  // Success: only the full-screen celebration (its button goes to the homepage); no inline confirmation.
  if (status === "success") {
    return <Celebrate kind="trial" email={form.email} />;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {status === "error" && (
        <div style={{ background: "rgba(253,3,34,0.1)", border: "1px solid rgba(253,3,34,0.3)", color: "#ff6b6b", borderRadius: 12, padding: "12px 16px", fontSize: 14 }}>
          Something went wrong. Please try again or{" "}
          <a href="/link/wa" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6b6b", textDecoration: "underline" }}>
            contact us on WhatsApp
          </a>.
        </div>
      )}

      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Full Name</label>
        <input type="text" name="full_name" placeholder="Your full name" value={form.full_name} onChange={handleChange} required style={inputStyle} />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Email Address</label>
        <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required style={inputStyle} />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>
          Phone / WhatsApp <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginLeft: 6 }}>(optional)</span>
        </label>
        <div className="phone-input-wrapper">
          <PhoneInput international defaultCountry="CA" value={phone} onChange={setPhone} placeholder="+1 234 567 8900" />
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Country</label>
        <select name="country" value={form.country} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e" }}>
          {countries.map(c => <option key={c} value={c} style={{ backgroundColor: "#1a1a2e" }}>{c}</option>)}
        </select>
      </div>

      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Device Type</label>
        <select name="device" value={form.device} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e" }}>
          <option value="" style={{ backgroundColor: "#1a1a2e" }}>Select your device</option>
          {deviceTypes.map(d => <option key={d} value={d} style={{ backgroundColor: "#1a1a2e" }}>{d}</option>)}
        </select>
      </div>

      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>
          Notes <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginLeft: 6 }}>(optional)</span>
        </label>
        <textarea name="message" placeholder="Any special requests?" value={form.message} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
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
        }}
      >
        {status === "loading" ? "Activating…" : "Get My Free Trial →"}
      </button>

      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
        Secure · Login credentials sent automatically to your email
      </p>
    </form>
  );
}
