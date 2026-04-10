"use client";
import { useState } from "react";

const WA_NUMBER = "17828026280";
const WA_REFER_URL = `https://wa.me/${WA_NUMBER}?text=Hi%20Maple4K%2C%20I%E2%80%99m%20referring%20someone%20to%20your%20service.%20What%E2%80%99s%20the%20next%20step%3F`;

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
        body: JSON.stringify({
          yourName,
          yourWhatsApp: yourWA,
          friendName,
          friendWhatsApp: friendWA,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setYourName("");
        setYourWA("");
        setFriendName("");
        setFriendWA("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-950 border border-gray-800 rounded-2xl p-8 space-y-6"
      >
        <div>
          <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-4">
            Your Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Your First Name</label>
              <input
                type="text"
                required
                placeholder="John"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Your WhatsApp Number</label>
              <input
                type="tel"
                required
                placeholder="+1 782 000 0000"
                value={yourWA}
                onChange={(e) => setYourWA(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-4">
            Friend&apos;s Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Friend&apos;s First Name</label>
              <input
                type="text"
                required
                placeholder="Jane"
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Friend&apos;s WhatsApp Number</label>
              <input
                type="tel"
                required
                placeholder="+1 782 000 0000"
                value={friendWA}
                onChange={(e) => setFriendWA(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {status === "success" ? (
          <div className="bg-green-900 border border-green-600 rounded-xl px-6 py-4 text-green-300 text-sm font-medium text-center">
            Referral submitted! We&apos;ll review it shortly and be in touch.
          </div>
        ) : (
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white py-4 rounded-xl font-bold text-lg transition-colors"
          >
            {status === "loading" ? "Submitting…" : "Submit Referral"}
          </button>
        )}

        {status === "error" && (
          <p className="text-center text-red-400 text-sm">
            Something went wrong. Please try again or use the WhatsApp button below.
          </p>
        )}
      </form>

      {/* WhatsApp CTA */}
      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm mb-4">Prefer WhatsApp? Reach us directly:</p>
        <a
          href={WA_REFER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] hover:brightness-110 text-gray-900 font-bold px-8 py-4 rounded-xl text-sm transition"
        >
          Refer via WhatsApp
        </a>
      </div>
    </div>
  );
}
