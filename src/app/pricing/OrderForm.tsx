"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const countries = [
  "Canada", "United States", "United Kingdom", "Australia", "France", "Germany",
  "Spain", "Italy", "Netherlands", "Belgium", "Switzerland", "Portugal", "Sweden",
  "Norway", "Denmark", "Finland", "Poland", "Czech Republic", "Austria", "Ireland",
  "New Zealand", "South Africa", "Nigeria", "Ghana", "Kenya", "Morocco", "Algeria",
  "Tunisia", "Senegal", "Cameroon", "Côte d'Ivoire", "Egypt", "Saudi Arabia",
  "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Lebanon",
  "Iraq", "Iran", "Pakistan", "India", "Bangladesh", "Sri Lanka", "Nepal",
  "Philippines", "Malaysia", "Singapore", "Indonesia", "Thailand", "Vietnam",
  "China", "Hong Kong", "Taiwan", "Japan", "South Korea", "Brazil", "Mexico",
  "Argentina", "Colombia", "Chile", "Peru", "Venezuela", "Ecuador", "Bolivia",
  "Uruguay", "Paraguay", "Guatemala", "Honduras", "El Salvador", "Costa Rica",
  "Panama", "Dominican Republic", "Cuba", "Haiti", "Jamaica", "Trinidad and Tobago",
  "Other",
];

interface Props {
  plan: string;
  price: number;
  devices: number;
}

export default function OrderForm({ plan, price, devices }: Props) {
  const [form, setForm] = useState({ name: "", email: "", country: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("XgOQHE8VNnCyBYP1z");
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("service_0e3cugb", "template_cuf7svm", {
        from_name: form.name || "Not provided",
        from_email: form.email || "Not provided",
        phone: form.whatsapp || "Not provided",
        country: form.country,
        device: "Not specified",
        plan: `${plan} — ${devices} device${devices > 1 ? "s" : ""} — $${price}`,
        message: "—",
        site_name: "Maple4K.ca",
      });
    } catch {
      // Still show success to user even if email fails
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-green-400 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold mb-2">Order Received!</h3>
        <p className="text-gray-400 text-sm mb-1">
          Thanks, <span className="text-white font-semibold">{form.name}</span>. We&apos;ll contact you shortly on WhatsApp or email.
        </p>
        <p className="text-gray-500 text-xs mt-4">
          Usually activated within 15 minutes. Check WhatsApp and your inbox.
        </p>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">First Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your first name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Country</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          style={{ ...inputStyle, backgroundColor: "#1a1a2e", color: "#ffffff" }}
        >
          <option value="" style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>Select your country</option>
          {countries.map((c) => (
            <option key={c} value={c} style={{ backgroundColor: "#1a1a2e", color: "#ffffff" }}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">WhatsApp Number</label>
        <input
          type="tel"
          name="whatsapp"
          placeholder="+1 234 567 8900"
          value={form.whatsapp}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <input type="hidden" name="plan" value={`${plan} — ${devices} device${devices > 1 ? "s" : ""} — $${price}`} />
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white py-4 rounded-2xl font-bold text-base transition-all hover:brightness-110 disabled:opacity-60 mt-2"
        style={{ background: "#fd0322" }}
      >
        {loading ? "Submitting…" : "Submit Order →"}
      </button>
      <p className="text-center text-gray-600 text-xs">
        Secure · We&apos;ll contact you via WhatsApp or email to activate.
      </p>
    </form>
  );
}
