import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Android Canada 2026 | Best IPTV App for Android Phone & Tablet",
  description:
    "Stream IPTV on your Android phone or tablet in Canada. 25,000+ channels, HD & 4K quality, NHL, TSN, CTV and more. Easy APK install. Try free today.",
  keywords:
    "IPTV Android Canada, IPTV Android phone Canada, IPTV Android tablet Canada, best IPTV app Android Canada",
  alternates: { canonical: "https://www.maple4k.ca/iptv-android-canada" },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and contact us via WhatsApp, Telegram, or email. Credentials arrive within minutes." },
  { step: "2", title: "Allow Unknown Sources", desc: "Go to Settings > Security and enable 'Install Unknown Apps' so you can sideload our IPTV app." },
  { step: "3", title: "Download the IPTV App", desc: "Download the APK file we send you, or find our recommended app on the Google Play Store." },
  { step: "4", title: "Enter Your Credentials", desc: "Open the app, enter the server URL, username, and password we sent, and tap Connect." },
  { step: "5", title: "Watch Anywhere in Canada", desc: "Your full channel list and VOD library load instantly. Stream on the go over Wi-Fi or mobile data." },
];

export default function IPTVAndroidPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Android Phone · Android Tablet
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">Android Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Watch Canadian TV on any Android phone or tablet. Live sports, news, and
            25,000+ channels wherever you are — on Wi-Fi or 5G.
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
          <h2 className="text-xl font-bold mb-6 text-gray-300">Works on All Android Devices</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Samsung Galaxy (all models)", "Google Pixel", "OnePlus", "Xiaomi", "Motorola", "LG Android Phones", "Sony Xperia", "Any Android 5.0+"].map((d) => (
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
            How to Set Up IPTV on <span className="text-red-500">Android</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">5 minutes to full access on any Android device.</p>
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
            IPTV Designed for <span className="text-red-500">Android Users</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Any App You Want", desc: "Android supports the widest range of IPTV apps. Use IPTV Smarters Pro, TiviMate, GSE IPTV, or our dedicated app — your choice." },
              { title: "Cast to Your TV", desc: "Use Chromecast built-in to cast any channel or movie from your Android phone to your big screen TV instantly." },
              { title: "5G Ready", desc: "Our adaptive streaming works perfectly on 5G connections. Enjoy HD live sports without buffering on mobile data." },
              { title: "Picture in Picture", desc: "Android's PiP mode lets you watch live TV in a floating window while using other apps on your phone." },
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
            Android IPTV <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Which IPTV app is best for Android?", a: "We recommend IPTV Smarters Pro or TiviMate for the best experience. Both support Xtream Codes and offer excellent EPG integration." },
              { q: "Is the IPTV app on the Google Play Store?", a: "Some of our recommended apps are on the Play Store. Others may require APK sideloading — we provide a safe, virus-free download link." },
              { q: "How much data does IPTV use on Android?", a: "SD streams use roughly 700 MB/hour, HD uses 1.5–3 GB/hour. We recommend Wi-Fi for extended sessions." },
              { q: "Can I use IPTV on two Android phones at once?", a: "Yes — with a 2-device or higher plan, you can stream on multiple devices simultaneously, including two Android phones." },
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
          <h2 className="text-3xl font-bold mb-4">Start Watching on Your Android Today</h2>
          <p className="text-gray-300 mb-8">Try it free for 5 minutes — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
