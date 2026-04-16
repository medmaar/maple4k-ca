"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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

interface Props {
  plan: string;
}

export default function PlanOrderForm({ plan }: Props) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    country: "Canada",
    device: "",
    message: "",
  });
  const [phone, setPhone] = useState<string | undefined>("");
  const [emailWarning, setEmailWarning] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    emailjs.init("XgOQHE8VNnCyBYP1z");
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setEmailWarning(value.length > 3 && !value.includes("@"));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const result = await emailjs.send(
        "service_0e3cugb",
        "template_cuf7svm",
        {
          from_name: form.full_name || "Not provided",
          from_email: form.email || "Not provided",
          phone: phone || "Not provided",
          country: form.country,
          device: form.device || "Not specified",
          plan,
          message: form.message || "—",
          site_name: "Maple4K.ca",
        }
      );
      console.log("EmailJS success:", result);
      setStatus("success");
      setForm({ full_name: "", email: "", country: "Canada", device: "", message: "" });
      setPhone("");
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Order instructions */}
      <div style={{ marginBottom: 8, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>
          Place Your Order
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
          Please complete the form below. Make sure your details are correct so we can contact you without delay.
        </p>
        <ol style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Enter your first and last name</li>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Add your email or WhatsApp number — depending on how you prefer to be contacted</li>
          <li style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Submit the form — we will contact you within 5 minutes</li>
        </ol>
      </div>

      {/* Success banner */}
      {status === "success" && (
        <div
          className="rounded-2xl px-4 py-3 text-sm font-medium"
          style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80" }}
        >
          ✅ Order received! We&apos;ll contact you within 5 minutes.
        </div>
      )}

      {/* Error banner */}
      {status === "error" && (
        <div
          className="rounded-2xl px-4 py-3 text-sm font-medium"
          style={{ background: "rgba(253,3,34,0.1)", border: "1px solid rgba(253,3,34,0.3)", color: "#ff6b6b" }}
        >
          ❌ Something went wrong. Please try again or{" "}
          <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" className="underline">
            contact us on WhatsApp
          </a>.
        </div>
      )}

      {/* Full Name */}
      <div>
        <label style={{ display:"block", fontSize:13, color:"#79C9C5", marginBottom:6, fontWeight:600 }}>
          Full Name <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <input
          type="text"
          name="full_name"
          required
          placeholder="Your full name"
          value={form.full_name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Email */}
      <div>
        <label style={{ display:"block", fontSize:13, color:"#79C9C5", marginBottom:6, fontWeight:600 }}>
          Email Address <span style={{ color: "#fd0322" }}>*</span>
        </label>
        <input
          type="text"
          name="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {emailWarning && (
          <p className="text-xs mt-1" style={{ color: "#fbbf24" }}>
            This doesn&apos;t look like a valid email — make sure it contains @
          </p>
        )}
      </div>

      {/* Phone with flag dropdown */}
      <div>
        <label style={{ display:"block", fontSize:13, color:"#79C9C5", marginBottom:6, fontWeight:600 }}>
          Phone / WhatsApp
          <span (style={{ color:"rgba(255,255,255,0.4)", fontSize:11, marginLeft:6 }})>(optional)</span>
        </label>
        <div className="phone-input-wrapper">
          <PhoneInput
            international
            defaultCountry="CA"
            value={phone}
            onChange={setPhone}
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      {/* Country */}
      <div>
        <label style={{ display:"block", fontSize:13, color:"#79C9C5", marginBottom:6, fontWeight:600 }}>Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e", color: "#ffffff" }}
        >
          {countries.map((c) => (
            <option key={c} value={c} style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>{c}</option>
          ))}
        </select>
      </div>

      {/* Device Type */}
      <div>
        <label style={{ display:"block", fontSize:13, color:"#79C9C5", marginBottom:6, fontWeight:600 }}>Device Type</label>
        <select
          name="device"
          value={form.device}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#1a1a2e", color: "#ffffff" }}
        >
          <option value="" style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>Select your device</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d} style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>{d}</option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label style={{ display:"block", fontSize:13, color:"#79C9C5", marginBottom:6, fontWeight:600 }}>
          Notes / Message
          <span (style={{ color:"rgba(255,255,255,0.4)", fontSize:11, marginLeft:6 }})>(optional)</span>
        </label>
        <textarea
          name="message"
          placeholder="Any special requests?"
          value={form.message}
          onChange={handleChange}
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {/* Hidden plan field — passed via emailjs.send data object, not a real input */}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60"
        style={{ background: "#F96E5B" }}
      >
        {status === "loading" ? "Sending…" : "Order Now →"}
      </button>

      <p style={{ textAlign:"center", color:"rgba(255,255,255,0.55)", fontSize:12 }}>
        Secure · Login credentials sent to your email within 5 minutes
      </p>
    </form>
  );
}
