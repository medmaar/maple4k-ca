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
        <label className="block text-sm text-gray-400 mb-1.5">
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
        <label className="block text-sm text-gray-400 mb-1.5">
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
        <label className="block text-sm text-gray-400 mb-1.5">
          Phone / WhatsApp
          <span className="ml-2 text-gray-600 text-xs">(optional)</span>
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
        <label className="block text-sm text-gray-400 mb-1.5">Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Device Type */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Device Type</label>
        <select
          name="device"
          value={form.device}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">Select your device</option>
          {deviceTypes.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          Notes / Message
          <span className="ml-2 text-gray-600 text-xs">(optional)</span>
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
        style={{ background: "#fd0322" }}
      >
        {status === "loading" ? "Sending…" : "Order Now →"}
      </button>

      <p className="text-center text-gray-600 text-xs">
        Secure · Login credentials sent to your email within 5 minutes
      </p>
    </form>
  );
}
