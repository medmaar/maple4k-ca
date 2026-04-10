import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Windows PC Canada 2026 | Best IPTV for Windows & Mac",
  description:
    "Stream IPTV on Windows PC or Mac in Canada. 25,000+ channels, 4K quality, NHL, TSN, CTV and more. Works with VLC, IPTV Smarters, and more. Try free today.",
  keywords:
    "IPTV Windows Canada, IPTV PC Canada, IPTV computer Canada, IPTV Mac Canada, best IPTV for PC Canada",
  alternates: { canonical: "https://www.maple4k.ca/iptv-windows-canada" },
};

const steps = [
  { step: "1", title: "Subscribe & Get Credentials", desc: "Choose a plan and contact us via WhatsApp, Telegram, or email. Your login details arrive within minutes." },
  { step: "2", title: "Download an IPTV Player", desc: "Install a free IPTV player on your PC. We recommend IPTV Smarters Pro for Windows or VLC Media Player for a lightweight option." },
  { step: "3", title: "Add Your Playlist", desc: "Open the IPTV player and add your M3U playlist URL or Xtream Codes credentials that we provide." },
  { step: "4", title: "Load Your Channels", desc: "The player fetches your full channel list and EPG automatically. This takes about 30 seconds on first load." },
  { step: "5", title: "Watch Full Screen", desc: "Press F11 for full screen and enjoy 25,000+ channels directly on your PC or laptop display." },
];

export default function IPTVWindowsPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-4 font-bold uppercase tracking-wider">
            Windows · Mac · Linux
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            IPTV for <span className="text-red-500">Windows PC Canada</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Watch Canadian TV on your Windows PC, Mac, or laptop. No hardware needed —
            just download a free player and enter your credentials. Setup in 5 minutes.
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

      {/* Supported platforms */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6 text-gray-300">Supported Platforms & Players</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Windows 10 / 11", "macOS (all versions)", "Ubuntu / Linux", "IPTV Smarters Pro", "VLC Media Player", "Kodi", "GSE IPTV", "OTT Navigator"].map((d) => (
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
            How to Set Up IPTV on <span className="text-red-500">Windows PC</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">No technical knowledge needed — works on any computer.</p>
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
            Why Watch IPTV on <span className="text-red-500">Your PC</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Multi-Monitor Support", desc: "Watch IPTV on one monitor while working on another. PC offers flexibility no other device can match." },
              { title: "Free Player Options", desc: "VLC is completely free and plays any IPTV stream. No subscription for the player itself — only our IPTV service." },
              { title: "Record Live TV", desc: "Most PC IPTV players support DVR recording directly to your hard drive. Record any live channel for later viewing." },
              { title: "Connect to Any Display", desc: "Connect your PC to your TV via HDMI and use it as a full home theater IPTV system with your keyboard and mouse." },
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
            PC IPTV <span className="text-red-500">FAQ</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "What is the best free IPTV player for Windows?", a: "IPTV Smarters Pro offers the best experience with EPG integration. VLC is a great free alternative if you prefer a lightweight player." },
              { q: "Does IPTV work on Mac?", a: "Yes. IPTV Smarters is available for macOS, and VLC works on all Mac versions. Our M3U playlist is compatible with any player on macOS." },
              { q: "Do I need a fast computer to run IPTV?", a: "No. Any PC made after 2015 can handle HD IPTV streams. 4K requires a more capable GPU, but HD works on virtually any modern computer." },
              { q: "Can I use a VPN with IPTV on PC?", a: "Yes. VPN is fully compatible. We recommend connecting to a Canadian server for the best performance, especially for live sports." },
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
          <h2 className="text-3xl font-bold mb-4">Start Watching IPTV on Your PC Today</h2>
          <p className="text-gray-300 mb-8">Try it free for 5 minutes — no credit card required.</p>
          <a href="/free-trial" className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-colors">
            Get Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
