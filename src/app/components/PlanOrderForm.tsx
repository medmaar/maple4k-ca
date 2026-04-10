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

interface Props {
  planLabel: string;
  price: number;
  whatsappNumber: string;
  emailAddress: string;
}

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
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-bold text-gray-800 text-lg">Opening WhatsApp...</p>
        <p className="text-gray-500 text-sm mt-1">
          Complete your order via WhatsApp. If it didn&apos;t open,{" "}
          <a
            href={`mailto:${emailAddress}`}
            className="underline text-red-700"
          >
            email us instead
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-xs text-gray-400 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          required
          placeholder="E.g. John"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          required
          placeholder="E.g. john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
        />
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Country
        </label>
        <select
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
        >
          <option value="">Select country</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          WhatsApp Number
        </label>
        <input
          type="tel"
          placeholder="E.g. +1 300 400 5000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#e11d2e] hover:brightness-95 active:scale-[.99] text-white font-bold text-base rounded-xl py-4 shadow-lg shadow-red-200 transition"
      >
        Submit Now →
      </button>
    </form>
  );
}
