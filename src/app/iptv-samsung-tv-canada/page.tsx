import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Samsung TV Canada | Maple4K – Best 4K IPTV Canada",
  description:
    "Stream IPTV on your Samsung Smart TV in Canada with Maple4K. 25,000+ channels, 4K quality, NHL, TSN and more. Easy Tizen OS setup. Free trial available.",
  keywords:
    "IPTV Samsung TV Canada, IPTV Samsung Smart TV Canada, Samsung TV Maple4K, best IPTV Samsung Canada",
  alternates: { canonical: "https://maple4k.ca/iptv-samsung-tv-canada" },
  openGraph: {
    title: "IPTV Samsung TV Canada | Maple4K – Best 4K IPTV Canada",
    description: "Stream IPTV on your Samsung Smart TV in Canada with Maple4K. 25,000+ channels, 4K quality, NHL, TSN and more. Easy Tizen OS setup. Free trial available.",
    url: "https://maple4k.ca/iptv-samsung-tv-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and contact us via WhatsApp, Telegram, or email. We'll send your login credentials instantly." },
  { step: "2", title: "Open Samsung Smart Hub", desc: "Press the Home button on your Samsung remote and navigate to the Apps section in Smart Hub." },
  { step: "3", title: "Install an IPTV App", desc: "Search for our recommended IPTV player in the Samsung App Store and install it. We'll tell you which app to use." },
  { step: "4", title: "Enter Your Credentials", desc: "Open the app and enter the server URL, username, and password we provided. Hit connect." },
  { step: "5", title: "Enjoy 4K IPTV", desc: "Your full channel list and VOD library loads automatically. Browse and enjoy in stunning 4K." },
];

export default function IPTVSamsungPage() {
  return (
    <main className="bg-transparent min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-[#F96E5B] text-black text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Samsung Tizen Compatible
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-[#F96E5B]">Samsung TV Canada</span>
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Transform your Samsung Smart TV into the ultimate entertainment system.
            Stream 25,000+ live channels and 120,000+ movies in 4K — no set-top box needed.
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
          <h2 className="text-xl font-bold mb-6 text-black">Compatible Samsung TV Models</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Samsung QLED (all years)", "Samsung Neo QLED", "Samsung Frame TV", "Samsung Crystal UHD", "Samsung 4K UHD (2018+)", "Samsung 8K Models"].map((m) => (
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
            How to Set Up IPTV on <span className="text-[#F96E5B]">Samsung Smart TV</span>
          </h2>
          <p className="text-center text-black mb-12">
            No technical knowledge needed — setup takes about 5 minutes.
          </p>
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
            Why Choose Our IPTV for <span className="text-[#F96E5B]">Samsung TV</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Native 4K Streaming", desc: "Full 4K Ultra HD streams matched to your Samsung's panel resolution. HDR10 and HLG support included." },
              { title: "No Extra Hardware", desc: "No set-top box, no HDMI stick. Our IPTV runs directly on your Samsung's Tizen OS via a compatible app." },
              { title: "Full Remote Control", desc: "Control everything with your Samsung remote. Voice control via Bixby also works for channel search." },
              { title: "Picture-in-Picture", desc: "Watch live TV while browsing the channel guide or VOD catalog. Samsung's split-screen mode is fully supported." },
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
            Samsung IPTV <span className="text-[#F96E5B]">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Does IPTV work on all Samsung Smart TVs?", a: "Our IPTV service works on all Samsung Smart TVs running Tizen OS (2018 and newer). Older models may require a Fire Stick or Android box instead." },
              { q: "Do I need to jailbreak my Samsung TV?", a: "No jailbreak required. Our recommended apps are available directly from the Samsung App Store or via a safe sideload method that doesn't void your warranty." },
              { q: "Can I use IPTV on my Samsung TV and phone at the same time?", a: "Yes — with a 2-device or higher plan, you can stream on your Samsung TV and any other device simultaneously." },
              { q: "Will IPTV affect my Samsung TV's performance?", a: "Not at all. The IPTV app runs as a separate app and does not affect system performance or other Samsung features." },
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
          <h2 className="text-3xl font-bold mb-4">Ready for IPTV on Your Samsung TV?</h2>
          <p className="text-black mb-8">Try it free for 5 minutes — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-[#F96E5B] hover:bg-[#F96E5B] text-black px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
