import type { Metadata } from "next";
import PlanOrderForm from "../PlanOrderForm";

export const metadata: Metadata = {
  title: "3 Device IPTV Plans | Maple4K Canada",
  description:
    "Stream on 3 devices simultaneously. Maple4K IPTV plans for 3 connections from $27/month. 25,000+ channels, 4K, NHL, TSN, CTV included.",
  alternates: { canonical: "https://maple4k.ca/pricing/3-devices" },
};

const plans = [
  { label: "1 Month",   price: 27  },
  { label: "3 Months",  price: 75  },
  { label: "6 Months",  price: 105 },
  { label: "12 Months", price: 135 },
];

export default function ThreeDevicesPage() {
  return (
    <main style={{ background: "#10131E", color: "#fff", minHeight: "100vh" }}>
      <section
        className="py-20 px-4"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(253,3,34,0.13) 0%, transparent 65%), #10131E",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(253,3,34,0.12)",
                border: "1px solid rgba(253,3,34,0.28)",
                color: "#fd0322",
              }}
            >
              Maple4K · 3 Devices
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              3 Device IPTV Plans
            </h1>
            <p className="text-gray-400 text-sm mt-3">
              Stream on 3 devices at the same time. Select a plan below and fill out the form to order.
            </p>
          </div>

          {plans.map((plan) => (
            <div key={plan.label} className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-1">
                {plan.label} —{" "}
                <span style={{ color: "#fd0322" }}>${plan.price}</span>
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                Login credentials sent to your email within 24 hours.
              </p>
              <div
                className="rounded-3xl p-6 md:p-8 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <PlanOrderForm plan={`3 Devices - ${plan.label} — $${plan.price}`} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
