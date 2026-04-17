import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Maple4K – Best 4K IPTV Canada",
  description: "Refund policy for Maple4K, Canada's best 4K IPTV service. Learn about our no-refund policy and how our free trial protects you before you subscribe.",
  alternates: { canonical: "https://maple4k.ca/refund-policy" },
  openGraph: {
    title: "Refund Policy | Maple4K – Best 4K IPTV Canada",
    description: "Refund policy for Maple4K, Canada's best 4K IPTV service. Learn about our no-refund policy and how our free trial protects you.",
    url: "https://maple4k.ca/refund-policy",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RefundPolicyPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-[#F96E5B]">Refund Policy</h1>
        <p className="text-black text-sm mb-10">Last updated: March 28, 2026</p>

        {/* Summary box */}
        <div className="bg-red-950 border border-[#F96E5B] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-black mb-2">Summary</h2>
          <p className="text-black text-sm leading-relaxed">
            Due to the instant digital nature of our service, we do not offer refunds once a subscription
            has been activated. To protect you before purchase, we offer a <strong>free 24h trial with
            no credit card required</strong>. Please use the trial to verify compatibility before subscribing.
          </p>
        </div>

        <div className="space-y-10 text-black leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. No-Refund Policy</h2>
            <p className="mb-3">All sales are final. Once your IPTV subscription has been activated and credentials delivered, we are unable to offer refunds for the following reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The service is delivered digitally and immediately upon payment</li>
              <li>Activation provides instant access to all channels and content</li>
              <li>The nature of digital services makes it impossible to "return" access once granted</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Free Trial — Try Before You Buy</h2>
            <p className="mb-3">We strongly encourage all new customers to use our free 24h trial before purchasing a subscription. The trial:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Requires no credit card</li>
              <li>Gives full access to all 25,000+ channels and 120,000+ VOD titles</li>
              <li>Lets you test on all your devices</li>
              <li>Carries zero obligation to purchase</li>
            </ul>
            <p className="mt-3">
              <a href="/free-trial" className="text-[#F96E5B] hover:underline font-semibold">Get your free trial here →</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Exceptions</h2>
            <p className="mb-3">We will consider a credit or resolution (not a cash refund) in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service never activated:</strong> If you paid but never received your credentials due to a technical error on our end, you are entitled to a full refund or re-delivery.</li>
              <li><strong>Extended outage:</strong> If our service experiences a verified outage exceeding 72 consecutive hours, we will provide a pro-rated subscription extension.</li>
              <li><strong>Duplicate purchase:</strong> If you accidentally purchased the same plan twice, we will refund the duplicate charge.</li>
            </ul>
            <p className="mt-3">To submit an exception request, contact us within 7 days of the issue.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Chargebacks</h2>
            <p>Initiating a chargeback or payment dispute without first contacting us will result in immediate account termination and may be reported to payment processors. Please contact our support team first — we resolve issues quickly and fairly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. How to Contact Us</h2>
            <p className="mb-4">If you believe you qualify for an exception or have a billing concern, please reach out — we're here to help.</p>
            <div className="bg-transparent rounded-xl p-6 border border-gray-800 space-y-3">
              <p>
                <span className="text-black text-sm">WhatsApp: </span>
                <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" className="text-[#F96E5B] hover:underline">+1 (782) 802-6280</a>
              </p>
              <p>
                <span className="text-black text-sm">Telegram: </span>
                <a href="https://t.me/IPTVCanadaSupport" target="_blank" rel="noopener noreferrer" className="text-[#F96E5B] hover:underline">@IPTVCanadaSupport</a>
              </p>
              <p>
                <span className="text-black text-sm">Email: </span>
                <a href="mailto:help@maple4k.ca" className="text-[#F96E5B] hover:underline">help@maple4k.ca</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
