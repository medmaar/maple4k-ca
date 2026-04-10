import type { Metadata } from "next";
import ReferralForm from "../../components/ReferralForm";

export const metadata: Metadata = {
  title: "Referral Program | Maple4K — Refer a Friend, Get +1 Year Free",
  description:
    "Refer a friend to Maple4K and earn +1 free year of service. No limits — every successful referral adds 12 months to your account.",
  keywords:
    "Maple4K referral, refer a friend IPTV, Maple4K free year, IPTV affiliate Canada",
  alternates: { canonical: "https://maple4k.ca/referral" },
};

const steps = [
  {
    number: "01",
    title: "Refer a Friend",
    description:
      "Share your referral with a friend who hasn't used our service before. Send them your info via WhatsApp or fill out the referral form below.",
  },
  {
    number: "02",
    title: "Friend Subscribes",
    description:
      "Your friend signs up and purchases at least a 12-month subscription to Maple4K.",
  },
  {
    number: "03",
    title: "You Get +1 Year FREE",
    description:
      "Once their payment is verified, 12 months are added to your account automatically. No cap — refer as many friends as you want!",
  },
];

const rewardCards = [
  {
    title: "+1 Year Per Referral",
    desc: "Every approved referral adds 12 free months to your subscription.",
  },
  {
    title: "No Limit",
    desc: "Refer as many people as you want. Each successful referral earns another bonus year.",
  },
  {
    title: "Fast Review",
    desc: "Our team manually reviews and approves referrals quickly.",
  },
];

const rules = [
  "The referred person must purchase at least a 1-year Maple4K subscription.",
  "Your bonus is added after payment verification is completed.",
  "The referred person must be a new customer who has never used Maple4K before.",
  "Referrals are unlimited — each successful referral gives you +12 more months.",
];

export default function ReferralPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Referral Program
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Refer a Friend,{" "}
            <span className="text-red-500">Get +1 Year Free</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Share Maple4K with people you know and earn free subscription time when they join.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Unlimited referrals
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> +12 months per referral
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Fast review
            </span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How It <span className="text-red-500">Works</span>
          </h2>
          <p className="text-center text-gray-400 mb-14">
            Three simple steps to earn free service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-700 transition-colors"
              >
                <div className="text-5xl font-extrabold text-red-600 opacity-30 mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward cards */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your <span className="text-red-500">Rewards</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rewardCards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-950 border border-gray-800 rounded-2xl p-8 text-center hover:border-red-700 transition-colors"
              >
                <div className="text-red-500 text-4xl font-extrabold mb-3">★</div>
                <h3 className="text-lg font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral form */}
      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Submit Your <span className="text-red-500">Referral</span>
          </h2>
          <p className="text-center text-gray-400 mb-10 text-sm">
            Fill in your details and your friend&apos;s details below. We&apos;ll take care of the rest.
          </p>
          <ReferralForm />
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Program <span className="text-red-500">Rules</span>
          </h2>
          <div className="space-y-4">
            {rules.map((rule, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-950 border border-gray-800 rounded-xl px-6 py-5"
              >
                <span className="text-red-500 font-bold text-lg mt-0.5">{i + 1}.</span>
                <p className="text-gray-300 text-sm leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Not a Customer Yet?</h2>
          <p className="text-gray-300 mb-8">
            Try Maple4K free for 5 minutes — no credit card required. Then start referring and earn free years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/free-trial"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Get Free Trial
            </a>
            <a
              href="/pricing"
              className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
