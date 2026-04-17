import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV LG TV Canada | Maple4K – Best 4K IPTV Canada",
  description:
    "Stream IPTV on your LG Smart TV in Canada with Maple4K. 25,000+ channels, 4K quality, NHL, TSN, CTV and more. Easy webOS setup. Free trial available.",
  keywords:
    "IPTV LG TV Canada, IPTV LG Smart TV Canada, LG webOS Maple4K, best IPTV for LG TV Canada",
  alternates: { canonical: "https://maple4k.ca/iptv-lg-tv-canada" },
  openGraph: {
    title: "IPTV LG TV Canada | Maple4K – Best 4K IPTV Canada",
    description: "Stream IPTV on your LG Smart TV in Canada with Maple4K. 25,000+ channels, 4K quality, NHL, TSN, CTV and more. Easy webOS setup. Free trial available.",
    url: "https://maple4k.ca/iptv-lg-tv-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
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
    <main className="bg-transparent min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-[#F96E5B] text-black text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            LG webOS Compatible
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-[#F96E5B]">LG Smart TV Canada</span>
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Turn your LG Smart TV into Canada&apos;s ultimate streaming hub.
            Stream 25,000+ live channels and 120,000+ movies in 4K — no extra box needed.
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

      {/* Compatible models */}
      <section className="py-12 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-black">Compatible LG TV Models</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["LG OLED (all years)", "LG QNED", "LG NanoCell", "LG UHD 4K (2018+)", "LG 8K Models", "LG C-Series / G-Series"].map((m) => (
              <span key={m} className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-black">
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
            How to Set Up IPTV on <span className="text-[#F96E5B]">LG Smart TV</span>
          </h2>
          <p className="text-center text-black mb-12">No technical skills needed — takes about 5 minutes.</p>
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
            Why Our IPTV is <span className="text-[#F96E5B]">Perfect for LG TV</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "OLED & QNED Optimized", desc: "True 4K streams that take full advantage of LG's OLED and QNED displays with deep blacks and vivid colours." },
              { title: "No Extra Hardware", desc: "Runs natively on LG's webOS. No HDMI sticks or set-top boxes required — just your TV and remote." },
              { title: "Magic Remote Compatible", desc: "Use LG's Magic Remote pointer to navigate channels and search VOD intuitively, just like a mouse." },
              { title: "ThinQ AI Support", desc: "Use LG ThinQ voice commands to search for channels, switch inputs, and control playback hands-free." },
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
            LG TV IPTV <span className="text-[#F96E5B]">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Does IPTV work on all LG Smart TVs?", a: "Our service works on all LG Smart TVs running webOS (2018 and newer). Older LG TVs may require an Android box or Fire Stick." },
              { q: "Do I need to sideload any apps?", a: "Most supported apps are available directly from the LG Content Store. For older models, we provide a safe sideload method that does not void your warranty." },
              { q: "Can I watch on my LG TV and phone at the same time?", a: "Yes — with a 2-device or higher plan you can stream on multiple devices simultaneously." },
              { q: "Does IPTV support LG's 4K and 8K resolution?", a: "Yes. We stream up to 4K Ultra HD. Our servers automatically match the stream quality to your TV's resolution and your internet speed." },
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
          <h2 className="text-3xl font-bold mb-4">Ready for IPTV on Your LG TV?</h2>
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
