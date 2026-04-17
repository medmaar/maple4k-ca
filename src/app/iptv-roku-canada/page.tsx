import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Roku Canada | Maple4K – Best 4K IPTV Canada",
  description:
    "Stream IPTV on Roku in Canada with Maple4K. 25,000+ channels, HD & 4K quality, NHL, TSN, CTV and more. Easy private channel setup. Free trial available.",
  keywords:
    "IPTV Roku Canada, Roku Maple4K, best IPTV for Roku Canada, Roku streaming Maple4K",
  alternates: { canonical: "https://maple4k.ca/iptv-roku-canada" },
  openGraph: {
    title: "IPTV Roku Canada | Maple4K – Best 4K IPTV Canada",
    description: "Stream IPTV on Roku in Canada with Maple4K. 25,000+ channels, HD & 4K quality, NHL, TSN, CTV and more. Easy private channel setup. Free trial available.",
    url: "https://maple4k.ca/iptv-roku-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
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
    <main className="bg-transparent min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-[#F96E5B] text-black text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Roku Stick · Roku TV · Roku Ultra
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-[#F96E5B]">Roku Canada</span>
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Watch Canadian TV on any Roku device. Simple private channel setup,
            no jailbreak, no sideloading. Works on all Roku sticks and Roku TVs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/free-trial" className="bg-[#F96E5B] hover:bg-[#F96E5B] text-black px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Get Free Trial
            </a>
            <a href="/pricing" className="border border-[#F96E5B] text-[#F96E5B] hover:bg-[#F96E5B] hover:text-black px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Compatible devices */}
      <section className="py-12 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-black">Compatible Roku Devices</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Roku Express", "Roku Streaming Stick", "Roku Streaming Stick 4K", "Roku Ultra", "Roku Ultra LT", "Roku TV (all brands)", "Roku Smart Soundbar"].map((d) => (
              <span key={d} className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-black">
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
            How to Set Up IPTV on <span className="text-[#F96E5B]">Roku</span>
          </h2>
          <p className="text-center text-black mb-12">Private channel setup — clean and straightforward.</p>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 bg-transparent rounded-2xl p-6 border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F96E5B] rounded-full flex items-center justify-center font-extrabold text-black">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-black text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Roku is a <span className="text-[#F96E5B]">Great IPTV Device</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Affordable & Accessible", desc: "Roku devices start at under $40, making them the most affordable way to get IPTV on your TV in Canada." },
              { title: "4K HDR on Roku Ultra", desc: "The Roku Streaming Stick 4K and Roku Ultra support 4K HDR10+ streams for a premium picture quality." },
              { title: "Simple Remote", desc: "Roku's simple remote with dedicated shortcut buttons makes navigating channels and VOD fast and easy." },
              { title: "No Account Lock-In", desc: "Your Roku private channel works regardless of your Roku account region. Watch Canadian content anywhere." },
            ].map((f) => (
              <div key={f.title} className="bg-transparent rounded-2xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-black text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Roku IPTV <span className="text-[#F96E5B]">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Does IPTV work on all Roku models?", a: "Yes, IPTV works on all Roku models running Roku OS 9.2 or newer. The Roku Streaming Stick 4K and Ultra offer the best performance." },
              { q: "Do I need to jailbreak my Roku?", a: "No jailbreak required. Roku's private channel feature allows installing IPTV apps cleanly through the official Roku website." },
              { q: "Can I use my Roku and phone at the same time?", a: "Yes — with a 2-device or higher plan, you can stream on your Roku and any other device simultaneously." },
              { q: "Which Roku model is best for IPTV in Canada?", a: "The Roku Streaming Stick 4K is our top pick — great 4K HDR performance, compact design, and excellent value for Canadians." },
            ].map((item) => (
              <div key={item.q} className="bg-transparent rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3 text-[#F96E5B]">{item.q}</h3>
                <p className="text-black text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready for IPTV on Your Roku?</h2>
          <p className="text-black mb-8">Try it free for 5 minutes — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-[#F96E5B] hover:bg-[#F96E5B] text-black px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    
        {/* SEO Internal Links */}
        <section style={{ padding: "48px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ textAlign: "center", color: "#000000", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>Other Canadian cities we serve:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 16 }}>
              <a href="/iptv-toronto" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Toronto</a>
              <a href="/iptv-vancouver" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Vancouver</a>
              <a href="/iptv-montreal" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Montreal</a>
              <a href="/iptv-calgary" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Calgary</a>
              <a href="/iptv-ottawa" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Ottawa</a>
              <a href="/iptv-edmonton" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>🍁 IPTV Edmonton</a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              <a href="/pricing" style={{ background: "#F96E5B", color: "#fff", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>View Plans</a>
              <a href="/free-trial" style={{ background: "#3F9AAE", color: "#fff", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Free Trial</a>
              <a href="/channels-list" style={{ background: "rgba(63,154,174,0.1)", border: "1px solid rgba(63,154,174,0.25)", borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 600, color: "#1A3D45", textDecoration: "none" }}>Channel List</a>
            </div>
          </div>
        </section>
      </main>
  );
}
