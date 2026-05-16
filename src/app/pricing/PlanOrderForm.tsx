"use client";
import { useState, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

async function getEmailjs() {
  const mod = await import("@emailjs/browser");
  return mod.default;
}

const countries = [
  "Canada", "United States", "United Kingdom", "Australia", "France", "Germany",
  "Spain", "Italy", "Netherlands", "Belgium", "Switzerland", "Portugal", "Sweden",
  "Norway", "Denmark", "Finland", "Poland", "Czech Republic", "Austria", "Ireland",
  "New Zealand", "South Africa", "Nigeria", "Ghana", "Kenya", "Morocco", "Algeria",
  "Tunisia", "Egypt", "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait",
  "Bahrain", "Oman", "Jordan", "Lebanon", "Iraq", "Iran", "Pakistan", "India",
  "Bangladesh", "Sri Lanka", "Philippines", "Malaysia", "Singapore", "Indonesia",
  "Thailand", "Vietnam", "China", "Hong Kong", "Taiwan", "Japan", "South Korea",
  "Brazil", "Mexico", "Argentina", "Colombia", "Chile", "Peru", "Venezuela",
  "Dominican Republic", "Jamaica", "Trinidad and Tobago", "Other",
];

const deviceTypes = [
  "Smart TV (Samsung / LG)",
  "Amazon Firestick",
  "Android Box",
  "Android Phone / Tablet",
  "iPhone / iPad",
  "MAG Box",
  "Apple TV",
  "Other",
];

interface Props { plan: string; }

export default function PlanOrderForm({ plan }: Props) {
  const [form, setForm] = useState({ full_name: "", email: "", country: "Canada", device: "", message: "" });
  const [phone, setPhone] = useState<string | undefined>("");
  const [emailWarning, setEmailWarning] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const emailjsInitialized = useRef(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === "email") setEmailWarning(value.length > 3 && !value.includes("@"));
  }

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
        from_name: form.full_name || "Not provided",
        from_email: form.email || "Not provided",
        phone: phone || "Not provided",
        country: form.country,
        device: form.device || "Not specified",
        plan,
        message: form.message || "—",
        site_name: "Maple4K.ca",
      });
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
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
  };

  /* ── SUCCESS: form completely hidden, only confirmation shown ── */
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
          Order Received!
        </h3>
        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: "0 0 20px", maxWidth: 380, marginLeft: "auto", marginRight: "auto" }}>
          Thank you! We will contact you shortly via{" "}
          <span style={{ color: "#25D366", fontWeight: 700 }}>WhatsApp</span>{" "}
          or{" "}
          <span style={{ color: "#60a5fa", fontWeight: 700 }}>email</span>{" "}
          to complete the process and send your login credentials.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 8 }}>
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
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      {/* Instructions */}
      <div style={{ marginBottom: 8, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>Place Your Order</h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
          Please complete the form below. Make sure your details are correct so we can contact you without delay.
        </p>
        <ol style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Enter your first and last name</li>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Add your email or WhatsApp number</li>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Submit — we will contact you within minutes</li>
        </ol>
      </div>

      {/* Error banner */}
      {status === "error" && (
        <div style={{ background: "rgba(253,3,34,0.1)", border: "1px solid rgba(253,3,34,0.3)", color: "#ff6b6b", borderRadius: 12, padding: "12px 16px", fontSize: 14 }}>
          ❌ Something went wrong. Please try again or{" "}
          <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" style={{ color: "#ff6b6b", textDecoration: "underline" }}>
            contact us on WhatsApp
          </a>.
        </div>
      )}

      {/* Full Name */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>
          Full Name <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <input type="text" name="full_name" required placeholder="Your full name" value={form.full_name} onChange={handleChange} style={inputStyle} />
      </div>

      {/* Email */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>
          Email Address <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <input type="text" name="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} style={inputStyle} />
        {emailWarning && <p style={{ color: "#fbbf24", fontSize: 12, marginTop: 4 }}>This doesn&apos;t look like a valid email — make sure it contains @</p>}
      </div>

      {/* Phone */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>
          Phone / WhatsApp <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginLeft: 6 }}>(optional)</span>
        </label>
        <div className="phone-input-wrapper">
          <PhoneInput international defaultCountry="CA" value={phone} onChange={setPhone} placeholder="+1 234 567 8900" />
        </div>
      </div>

      {/* Country */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Country</label>
        <select name="country" value={form.country} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e" }}>
          {countries.map(c => <option key={c} value={c} style={{ backgroundColor: "#1a1a2e" }}>{c}</option>)}
        </select>
      </div>

      {/* Device */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>Device Type</label>
        <select name="device" value={form.device} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e" }}>
          <option value="" style={{ backgroundColor: "#1a1a2e" }}>Select your device</option>
          {deviceTypes.map(d => <option key={d} value={d} style={{ backgroundColor: "#1a1a2e" }}>{d}</option>)}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label style={{ display: "block", fontSize: 13, color: "#79C9C5", marginBottom: 6, fontWeight: 600 }}>
          Notes / Message <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginLeft: 6 }}>(optional)</span>
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
          transition: "all 0.2s ease",
          fontFamily: "inherit",
        }}
      >
        {status === "loading" ? "Sending…" : "Order Now →"}
      </button>

      <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
        Secure · Login credentials sent to your email within minutes
      </p>
    </form>
  );
}
