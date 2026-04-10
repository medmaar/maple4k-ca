import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Roku Canada 2026 | Best IPTV for Roku Streaming Stick",
  description:
    "Stream IPTV on Roku in Canada. 25,000+ channels, HD & 4K quality, NHL, TSN, CTV and more. Easy channel store setup. Try free today.",
  keywords:
    "IPTV Roku Canada, Roku Maple4K, best IPTV for Roku Canada, Roku streaming Maple4K",
  alternates: { canonical: "https://www.maple4k.ca/iptv-roku-canada" },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and contact us via WhatsApp, Telegram, or email. Your credentials arrive within minutes." },
  { step: "2", title: "Add a Private Channel", desc: "Go to my.roku.com on a browser, sign in, and add the private channel code we provide to your Roku account." },
  { step: "3", title: "Install on Your Roku", desc: "Open the Roku Channel Store on your device and find the newly added private channel. Install it." },
  { step: "4", title: "Enter Your Credentials", desc: "Open the IPTV channel on your Roku, enter your server URL, username, and password, and connect." },
  { step: "5", title: "Start Watching", desc: "Your full channel list and EPG load automatically. Use your Roku remote to browse and enjoy." },
];

export default function IPTVRokuPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Roku Stick · Roku TV · Roku Ultra
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">Roku Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Watch Canadian TV on any Roku device. Simple private channel setup,
            no jailbreak, no sideloading. Works on all Roku sticks and Roku TVs.
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

      {/* Compatible devices */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-gray-300">Compatible Roku Devices</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Roku Express", "Roku Streaming Stick", "Roku Streaming Stick 4K", "Roku Ultra", "Roku Ultra LT", "Roku TV (all brands)", "Roku Smart Soundbar"].map((d) => (
              <span key={d} className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Setup guide */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How to Set Up IPTV on <span className="text-red-500">Roku</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Private channel setup — clean and straightforward.</p>
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
            Why Roku is a <span className="text-red-500">Great IPTV Device</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Affordable & Accessible", desc: "Roku devices start at under $40, making them the most affordable way to get IPTV on your TV in Canada." },
              { title: "4K HDR on Roku Ultra", desc: "The Roku Streaming Stick 4K and Roku Ultra support 4K HDR10+ streams for a premium picture quality." },
              { title: "Simple Remote", desc: "Roku's simple remote with dedicated shortcut buttons makes navigating channels and VOD fast and easy." },
              { title: "No Account Lock-In", desc: "Your Roku private channel works regardless of your Roku account region. Watch Canadian content anywhere." },
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
            Roku IPTV <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Does IPTV work on all Roku models?", a: "Yes, IPTV works on all Roku models running Roku OS 9.2 or newer. The Roku Streaming Stick 4K and Ultra offer the best performance." },
              { q: "Do I need to jailbreak my Roku?", a: "No jailbreak required. Roku's private channel feature allows installing IPTV apps cleanly through the official Roku website." },
              { q: "Can I use my Roku and phone at the same time?", a: "Yes — with a 2-device or higher plan, you can stream on your Roku and any other device simultaneously." },
              { q: "Which Roku model is best for IPTV in Canada?", a: "The Roku Streaming Stick 4K is our top pick — great 4K HDR performance, compact design, and excellent value for Canadians." },
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
          <h2 className="text-3xl font-bold mb-4">Ready for IPTV on Your Roku?</h2>
          <p className="text-gray-300 mb-8">Try it free for 5 minutes — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
