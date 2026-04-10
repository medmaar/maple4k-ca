import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV LG TV Canada 2026 | Best IPTV for LG Smart TV (webOS)",
  description:
    "Stream IPTV on your LG Smart TV in Canada. 25,000+ channels, 4K quality, NHL, TSN, CTV and more. Easy webOS setup. Try free today.",
  keywords:
    "IPTV LG TV Canada, IPTV LG Smart TV Canada, LG webOS Maple4K, best IPTV for LG TV Canada",
  alternates: { canonical: "https://www.maple4k.ca/iptv-lg-tv-canada" },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and contact us via WhatsApp, Telegram, or email. We send your credentials within minutes." },
  { step: "2", title: "Open LG Content Store", desc: "Press the Home button on your LG remote and navigate to the LG Content Store (or webOS Store on newer models)." },
  { step: "3", title: "Install an IPTV App", desc: "Search for our recommended IPTV player and install it. We'll guide you to the right app for your LG model." },
  { step: "4", title: "Enter Your Login Details", desc: "Open the app, enter the server URL, username, and password we provided, and tap Connect." },
  { step: "5", title: "Enjoy 4K IPTV", desc: "Your full channel list and VOD library loads automatically. Browse, search, and watch in stunning 4K." },
];

export default function IPTVLGTVPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            LG webOS Compatible
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">LG Smart TV Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Turn your LG Smart TV into Canada&apos;s ultimate streaming hub.
            Stream 25,000+ live channels and 120,000+ movies in 4K — no extra box needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/free-trial" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Get Free Trial
            </a>
            <a href="/pricing" className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Compatible models */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-gray-300">Compatible LG TV Models</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["LG OLED (all years)", "LG QNED", "LG NanoCell", "LG UHD 4K (2018+)", "LG 8K Models", "LG C-Series / G-Series"].map((m) => (
              <span key={m} className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Setup guide */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How to Set Up IPTV on <span className="text-red-500">LG Smart TV</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">No technical skills needed — takes about 5 minutes.</p>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-extrabold text-white">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Our IPTV is <span className="text-red-500">Perfect for LG TV</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "OLED & QNED Optimized", desc: "True 4K streams that take full advantage of LG's OLED and QNED displays with deep blacks and vivid colours." },
              { title: "No Extra Hardware", desc: "Runs natively on LG's webOS. No HDMI sticks or set-top boxes required — just your TV and remote." },
              { title: "Magic Remote Compatible", desc: "Use LG's Magic Remote pointer to navigate channels and search VOD intuitively, just like a mouse." },
              { title: "ThinQ AI Support", desc: "Use LG ThinQ voice commands to search for channels, switch inputs, and control playback hands-free." },
            ].map((f) => (
              <div key={f.title} className="bg-gray-950 rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            LG TV IPTV <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Does IPTV work on all LG Smart TVs?", a: "Our service works on all LG Smart TVs running webOS (2018 and newer). Older LG TVs may require an Android box or Fire Stick." },
              { q: "Do I need to sideload any apps?", a: "Most supported apps are available directly from the LG Content Store. For older models, we provide a safe sideload method that does not void your warranty." },
              { q: "Can I watch on my LG TV and phone at the same time?", a: "Yes — with a 2-device or higher plan you can stream on multiple devices simultaneously." },
              { q: "Does IPTV support LG's 4K and 8K resolution?", a: "Yes. We stream up to 4K Ultra HD. Our servers automatically match the stream quality to your TV's resolution and your internet speed." },
            ].map((item) => (
              <div key={item.q} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3 text-red-400">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready for IPTV on Your LG TV?</h2>
          <p className="text-gray-300 mb-8">Try it free for 5 minutes — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
