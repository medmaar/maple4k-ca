import type { Metadata } from "next";
import PlanOrderForm from "../pricing/PlanOrderForm";

export const metadata: Metadata = {
  title: "Maple4K Free Trial | Try 24 Hours Free — No Credit Card",
  description:
    "Get a free 24-hour Maple4K trial. Access 25,000+ live channels, NHL, TSN, CTV and 120,000+ movies with no credit card required. Instant activation.",
  keywords:
    "Maple4K free trial, free Maple4K, IPTV trial Canada, try Maple4K",
  alternates: { canonical: "https://www.maple4k.ca/free-trial" },
};

const included = [
  { title: "25,000+ Live Channels", desc: "Every Canadian channel including TSN, Sportsnet, CTV, CBC, Global and hundreds of US and international channels." },
  { title: "120,000+ Movies & Series", desc: "Full access to our entire VOD library — the same content paying subscribers enjoy." },
  { title: "4K Ultra HD Quality", desc: "Stream in stunning 4K resolution with Dolby audio where available." },
  { title: "All Canadian Sports", desc: "Live NHL, NFL, NBA, MLB, UFC, F1, and Premier League with TSN, Sportsnet, and CBC Sports." },
  { title: "All Devices", desc: "Test on Fire Stick, Smart TV, iPhone, Android, or your computer — all at once." },
  { title: "EPG & Catch-Up TV", desc: "Full electronic program guide and catch-up TV so you never miss a show." },
];

export default function FreeTrialPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            No Credit Card Required
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Maple4K <span className="text-red-500">Free Trial</span> — 24 Hours Free
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Try Canada&apos;s #1 IPTV service completely free for 24 hours. No credit card,
            no commitment, no risk. Get instant access to all 25,000+ channels the moment
            you sign up.
          </p>

          <div className="flex flex-col items-center gap-4 max-w-xs mx-auto mb-8">
            <a
              href="https://wa.me/17828026280?text=Hi%20Maple4KTV%2C%20I%27m%20interested%20in%20your%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 rounded-2xl font-bold text-gray-900 bg-[#25D366] hover:brightness-110 transition text-lg"
            >
              WhatsApp Free Trial
            </a>
            <a
              href="mailto:help@maple4k.ca"
              className="w-full text-center py-4 rounded-2xl font-bold text-gray-900 bg-[#F5C518] hover:brightness-110 transition text-lg"
            >
              Email Free Trial
            </a>
            <a
              href="https://t.me/IPTVCanadaSupport"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 rounded-2xl font-bold text-gray-900 bg-[#88C9F0] hover:brightness-110 transition text-lg"
            >
              Telegram Free Trial
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Fast activation · Human support · No obligation
          </p>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            Request Your <span className="text-red-500">Free Trial</span>
          </h2>
          <p className="text-center text-gray-400 mb-8 text-sm">
            Fill out the form below and we&apos;ll activate your 24-hour trial within minutes.
          </p>
          <PlanOrderForm plan="Free Trial" />
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What&apos;s Included in Your <span className="text-red-500">Free Trial</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Full access — the same experience as our paid subscribers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div key={item.title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No credit card section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why No <span className="text-red-500">Credit Card</span>?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            We believe you should be able to test our service completely risk-free before
            spending a single dollar. That&apos;s why our free trial requires no payment
            information — no auto-renewals, no surprise charges, no strings attached.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Once your 24-hour trial ends, if you&apos;re happy with the service (and we&apos;re
            confident you will be), simply contact us to subscribe. Plans start at just
            $9 CAD/month.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> No credit card</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> No auto-renewal</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Instant activation</span>
            <span className="flex items-center gap-2"><span className="text-green-400">✓</span> Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Free Trial <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "How do I get the free trial?", a: "Simply contact us via WhatsApp, Telegram, or email above. Our team will activate your trial within minutes — usually under 5 minutes during business hours." },
              { q: "Does the free trial include all channels?", a: "Yes. Your 24-hour trial gives you full access to all 25,000+ live channels, 120,000+ VOD titles, and all sports packages — no restrictions." },
              { q: "How many devices can I use during the trial?", a: "Your trial includes one simultaneous connection. If you want to test on multiple devices, let us know and we can arrange that." },
              { q: "What happens after 24 hours?", a: "Your trial simply stops. There are no charges, no cancellation required. If you'd like to continue, contact us to choose a plan." },
              { q: "Is a credit card required to start the trial?", a: "Absolutely not. No payment information is needed. The trial is 100% free with zero obligation to subscribe afterwards." },
            ].map((item) => (
              <div key={item.q} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3 text-red-400">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
