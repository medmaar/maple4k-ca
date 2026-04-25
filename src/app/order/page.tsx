"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OrderContent() {
  const params = useSearchParams();
  const devices = params.get("devices") || "1";
  const duration = params.get("duration") || "1 Month";
  const price = params.get("price") || "9";

  const whatsappMsg = encodeURIComponent(
    `Hi Maple4K, I'd like to order the ${duration} plan for ${devices} device${Number(devices) > 1 ? "s" : ""} at $${price}.`
  );
  const emailSubject = encodeURIComponent(`Maple4K Order - ${duration} / ${devices} Device${Number(devices) > 1 ? "s" : ""}`);
  const emailBody = encodeURIComponent(
    `Hi,\n\nI'd like to purchase the following plan:\n\n- Duration: ${duration}\n- Devices: ${devices}\n- Price: $${price}\n\nPlease send me payment instructions.\n\nThank you!`
  );
  const telegramMsg = encodeURIComponent(
    `Hi Maple4K, I want to order the ${duration} plan for ${devices} device${Number(devices) > 1 ? "s" : ""} at $${price}.`
  );

  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000" }} className="min-h-screen py-16 px-4">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-green-600 text-black text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            You&apos;re one step away
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Complete Your <span className="text-[#F96E5B]">Order</span>
          </h1>
          <p className="text-black">
            Contact us via your preferred method below and we&apos;ll activate your subscription within minutes.
          </p>
        </div>

        {/* Plan summary */}
        <div className="bg-transparent border border-[#F96E5B] rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-[#F96E5B] mb-4">Your Selected Plan</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-black">Duration</span>
            <span className="font-bold">{duration}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-black">Devices</span>
            <span className="font-bold">{devices} {Number(devices) === 1 ? "Device" : "Devices"}</span>
          </div>
          <div className="border-t border-gray-700 mt-4 pt-4 flex justify-between items-center">
            <span className="text-black font-bold">Total</span>
            <span className="text-3xl font-extrabold text-[#F96E5B]">${price}</span>
          </div>
        </div>

        {/* Contact options */}
        <div className="space-y-4 mb-8">
          <p className="text-center text-black text-sm font-semibold uppercase tracking-wider">Choose how to order</p>

          <a
            href={`https://wa.me/17828026280?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-gray-900 bg-[#25D366] hover:brightness-110 transition text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order via WhatsApp
          </a>

          <a
            href={`https://t.me/IPTVCanadaSupport?text=${telegramMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-gray-900 bg-[#88C9F0] hover:brightness-110 transition text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Order via Telegram
          </a>

          <a
            href={`mailto:help@maple4k.ca?subject=${emailSubject}&body=${emailBody}`}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-gray-900 bg-[#F5C518] hover:brightness-110 transition text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Order via Email
          </a>
        </div>

        {/* Reassurance */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm text-black mb-8">
          <div className="bg-transparent rounded-xl p-4 border border-gray-800">
            <div className="text-2xl mb-1">⚡</div>
            <div>Instant Activation</div>
          </div>
          <div className="bg-transparent rounded-xl p-4 border border-gray-800">
            <div className="text-2xl mb-1">🔒</div>
            <div>Secure Payment</div>
          </div>
          <div className="bg-transparent rounded-xl p-4 border border-gray-800">
            <div className="text-2xl mb-1">🇨🇦</div>
            <div>Canadian Support</div>
          </div>
        </div>

        <div className="text-center">
          <a href="/pricing" className="text-[#1A3D45] hover:text-[#F96E5B] text-sm transition-colors">
            ← Back to pricing
          </a>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
export const metadata: Metadata = {
  alternates: { canonical: "https://maple4k.ca/order" },
  robots: { index: false, follow: true },
};

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="bg-transparent min-h-screen flex items-center justify-center text-black">Loading...</div>}>
      <OrderContent />
    </Suspense>
  );
}
