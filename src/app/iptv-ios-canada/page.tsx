import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV iPhone & iPad Canada | Maple4K – Best 4K IPTV Canada",
  description:
    "Stream IPTV on iPhone or iPad in Canada with Maple4K. 25,000+ channels, HD & 4K quality, NHL, TSN, CTV and more. Easy App Store setup. Free trial available.",
  keywords:
    "IPTV iPhone Canada, IPTV iPad Canada, IPTV iOS Canada, best IPTV for iPhone Canada, IPTV app Canada iOS",
  alternates: { canonical: "https://maple4k.ca/iptv-ios-canada" },
  openGraph: {
    title: "IPTV iPhone & iPad Canada | Maple4K – Best 4K IPTV Canada",
    description: "Stream IPTV on iPhone or iPad in Canada with Maple4K. 25,000+ channels, HD & 4K quality, NHL, TSN, CTV and more. Easy App Store setup. Free trial available.",
    url: "https://maple4k.ca/iptv-ios-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and contact us via WhatsApp, Telegram, or email. We send login credentials within minutes." },
  { step: "2", title: "Open the App Store", desc: "On your iPhone or iPad, open the App Store and search for our recommended IPTV player app." },
  { step: "3", title: "Install the App", desc: "Download and install the IPTV player. We'll tell you exactly which app to use after you subscribe." },
  { step: "4", title: "Enter Your Credentials", desc: "Open the app, enter the server URL, username, and password we provided, and tap Connect." },
  { step: "5", title: "Watch Anywhere", desc: "Your channels load instantly. Stream live TV and VOD on your iPhone or iPad anywhere in Canada." },
];

export default function IPTVIOSPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            iPhone · iPad · iPod Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">iPhone & iPad Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Watch Canadian TV anywhere on your iPhone or iPad. Live sports, news, movies,
            and 25,000+ channels in the palm of your hand.
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
          <h2 className="text-xl font-bold mb-6 text-gray-300">Compatible iOS Devices</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["iPhone 15 series", "iPhone 14 series", "iPhone 13 series", "iPhone 12 & older", "iPad Pro", "iPad Air", "iPad mini", "iPod Touch"].map((d) => (
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
            How to Set Up IPTV on <span className="text-red-500">iPhone & iPad</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">App Store install — no jailbreak needed.</p>
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
            IPTV Built for <span className="text-red-500">iPhone & iPad</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Watch on Any Network", desc: "Stream over Wi-Fi or mobile data (LTE/5G). Our adaptive bitrate technology reduces data usage without sacrificing quality." },
              { title: "AirPlay to Your TV", desc: "Cast any channel or VOD title directly to your Apple TV or AirPlay 2-compatible TV from your iPhone." },
              { title: "Picture in Picture", desc: "Watch live TV in a floating window while using other apps — supported on all modern iPhones and iPads." },
              { title: "HD on Every Screen", desc: "Optimized streams for Retina and Super Retina XDR displays. Crystal-clear HD quality on every iOS device." },
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
            iOS IPTV <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Do I need to jailbreak my iPhone for IPTV?", a: "No. All IPTV apps we recommend are available on the official App Store. No jailbreak is needed or recommended." },
              { q: "How much data does IPTV use on iPhone?", a: "HD streams use approximately 1.5–3 GB per hour. We recommend Wi-Fi for extended viewing, though our adaptive streaming works well on 5G." },
              { q: "Can I use my iPhone subscription on my iPad too?", a: "With a 2-device or higher plan, you can use both devices simultaneously. A single-device plan allows one stream at a time." },
              { q: "Will it work in Canada while travelling abroad?", a: "Yes. Your IPTV subscription works globally. You can watch Canadian channels from anywhere in the world on your iPhone." },
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
          <h2 className="text-3xl font-bold mb-4">Start Watching on Your iPhone Today</h2>
          <p className="text-gray-300 mb-8">Try it free for 5 minutes — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
