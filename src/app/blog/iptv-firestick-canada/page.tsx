import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Install IPTV on Firestick Canada 2026 | Maple4K – Best 4K IPTV Canada",
  description:
    "Complete guide to installing Maple4K IPTV on Amazon Fire Stick in Canada. Works on Fire Stick 4K, Lite, and all Fire TV devices. Easy step-by-step setup.",
  keywords:
    "IPTV Firestick Canada, install IPTV Fire Stick Canada, how to set up IPTV Firestick Canada, IPTV Fire TV Canada",
  alternates: { canonical: "https://maple4k.ca/blog/iptv-firestick-canada" },
  openGraph: {
    title: "Install IPTV on Firestick Canada 2026 | Maple4K – Best 4K IPTV Canada",
    description: "Complete guide to installing Maple4K IPTV on Amazon Fire Stick in Canada. Works on Fire Stick 4K, Lite, and all Fire TV devices. Easy step-by-step setup.",
    url: "https://maple4k.ca/blog/iptv-firestick-canada",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const steps = [
  {
    step: "1",
    title: "Get Your IPTV Subscription",
    detail: [
      "Before installing anything, you need an active IPTV subscription. Contact IPTV Subscription Canada via WhatsApp, Telegram, or email to get started with a free 2-hour trial or a paid plan.",
      "Within a few minutes you'll receive: a server URL (M3U or Xtream Codes), a username, and a password. Keep these handy — you'll need them in Step 5.",
    ],
  },
  {
    step: "2",
    title: "Enable Apps from Unknown Sources",
    detail: [
      "On your Fire Stick home screen, go to Settings (the gear icon in the top right).",
      "Navigate to: My Fire TV → Developer Options → Apps from Unknown Sources → turn it ON.",
      "This allows you to install apps that aren't available in the Amazon App Store. Don't worry — this is safe and doesn't affect your warranty.",
    ],
  },
  {
    step: "3",
    title: "Install the Downloader App",
    detail: [
      "From the Fire Stick home screen, go to the search icon and type 'Downloader'.",
      "Install the Downloader app by AFTVnews — it's free and available in the official Amazon App Store.",
      "Open Downloader. The first time you open it, allow it to use storage when prompted.",
    ],
  },
  {
    step: "4",
    title: "Download Your IPTV Player",
    detail: [
      "Open Downloader and enter the URL we send you with your subscription. This downloads your IPTV player APK.",
      "Downloader will ask if you want to install the APK — tap Install.",
      "Once installed, tap Open to launch the app. You can also delete the APK file after installation to save storage.",
    ],
  },
  {
    step: "5",
    title: "Enter Your Credentials",
    detail: [
      "Inside the IPTV player, look for 'Add Playlist' or 'Add Account' (varies by app).",
      "Enter the server URL, username, and password from your subscription confirmation.",
      "Tap Connect or Load. Your channel list — all 25,000+ channels — will load within 30–60 seconds.",
    ],
  },
  {
    step: "6",
    title: "Set Up Your EPG (Program Guide)",
    detail: [
      "In the app settings, look for EPG or Program Guide settings.",
      "The EPG URL will be provided with your subscription. Paste it in and set the refresh interval to every 5 minutes.",
      "Once loaded, you'll see a full TV guide for all channels — just like cable TV.",
    ],
  },
  {
    step: "7",
    title: "Add to Home Screen & Enjoy",
    detail: [
      "Long-press the app icon and select 'Move to Front' to add it to your Fire Stick home screen.",
      "You can also add it to the 'Recent' section for quick access.",
      "That's it — you're ready to stream 25,000+ channels in HD and 4K on your Fire Stick.",
    ],
  },
];

export default function IPTVFirestickBlogPost() {
  return (
    <main className="bg-transparent min-h-screen">
      <article className="max-w-3xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="mb-4 flex items-center gap-3">
          <span className="bg-[#F96E5B] text-black text-xs px-3 py-1 rounded-full font-bold">Setup Guide</span>
          <span className="text-[#1A3D45] text-sm">March 5, 2026</span>
          <span className="text-[#1A3D45] text-sm">5 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          How to Install IPTV on <span className="text-[#F96E5B]">Firestick in Canada</span> (2026 Guide)
        </h1>
        <p className="text-xl text-black mb-10 leading-relaxed">
          Setting up IPTV on your Amazon Fire Stick in Canada takes about 5–10 minutes and requires
          no technical knowledge. This step-by-step guide covers everything — from enabling
          sideloading to loading your full channel list in 4K.
        </p>

        {/* Compatibility note */}
        <div className="bg-transparent border border-gray-700 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold mb-3 text-black">Compatible Devices</h2>
          <p className="text-black text-sm mb-3">This guide works for all Amazon Fire TV devices:</p>
          <div className="flex flex-wrap gap-2">
            {["Fire Stick (1st–4th gen)", "Fire Stick 4K", "Fire Stick 4K Max", "Fire Stick Lite", "Fire TV Cube", "Fire TV Edition Smart TVs"].map((d) => (
              <span key={d} className="bg-gray-800 text-black text-xs px-3 py-1 rounded-full border border-gray-700">{d}</span>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Before You Start</h2>
          <p className="text-black leading-relaxed mb-4">Make sure you have:</p>
          <ul className="list-disc pl-6 space-y-2 text-black">
            <li>Amazon Fire Stick plugged in and connected to your TV</li>
            <li>Wi-Fi internet connection (minimum 25 Mbps for HD, 50 Mbps for 4K)</li>
            <li>An active Amazon account registered on the Fire Stick</li>
            <li>An IPTV subscription (or use our free trial — no credit card needed)</li>
          </ul>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Step-by-Step: IPTV Setup on <span className="text-[#F96E5B]">Fire Stick Canada</span>
          </h2>
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="bg-transparent rounded-2xl p-6 border border-gray-800">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#F96E5B] rounded-full flex items-center justify-center font-extrabold text-black text-lg">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold pt-1">{s.title}</h3>
                </div>
                <div className="pl-14 space-y-3">
                  {s.detail.map((line, i) => (
                    <p key={i} className="text-black text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tips for the Best Experience</h2>
          <div className="space-y-4">
            {[
              { tip: "Use 5GHz Wi-Fi", desc: "If your router supports 5GHz, connect your Fire Stick to it instead of 2.4GHz. You'll get faster, more stable streams with less interference." },
              { tip: "Use an Ethernet Adapter", desc: "For the most reliable connection — especially during live sports — use an Amazon Fire Stick Ethernet adapter. Wired connections eliminate Wi-Fi congestion entirely." },
              { tip: "Clear Cache Regularly", desc: "Go to Settings > Applications > Manage Installed Applications > [your IPTV app] > Clear Cache every few weeks to keep the app running smoothly." },
              { tip: "Restart Before Big Games", desc: "Before a major NHL game or PPV event, restart your Fire Stick (Settings > My Fire TV > Restart) to ensure maximum available memory." },
              { tip: "Use the EPG", desc: "The electronic program guide makes finding content much easier. Make sure it's loaded — see Step 6 above." },
            ].map((t) => (
              <div key={t.tip} className="flex gap-4 bg-transparent rounded-xl p-5 border border-gray-800">
                <span className="text-[#F96E5B] font-bold text-lg flex-shrink-0">→</span>
                <div>
                  <span className="font-bold text-black">{t.tip}: </span>
                  <span className="text-black text-sm">{t.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Troubleshooting Common Issues</h2>
          <div className="space-y-6">
            {[
              { q: "App won't install (security error)", a: "Make sure you've enabled 'Apps from Unknown Sources' in Developer Options (Step 2). Also ensure Downloader has storage permissions." },
              { q: "Channels are buffering", a: "Check your internet speed — run a speed test on your phone. If you're getting 25+ Mbps, try switching from 2.4GHz to 5GHz Wi-Fi, or use an Ethernet adapter." },
              { q: "Channel list won't load", a: "Double-check your server URL, username, and password. Even a single character difference will prevent connection. Contact our support team via WhatsApp for help." },
              { q: "EPG not showing program info", a: "Go to app settings and manually refresh the EPG. If it still doesn't load, try deleting and re-adding the EPG URL. Our support can provide an updated URL if needed." },
            ].map((item) => (
              <div key={item.q} className="bg-transparent rounded-xl p-6 border border-gray-800">
                <h3 className="font-bold text-lg mb-3 text-[#F96E5B]">{item.q}</h3>
                <p className="text-black text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-transparent border border-[#F96E5B] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Set Up IPTV on Your Fire Stick?</h2>
          <p className="text-black mb-6">
            Start with a free 2-hour trial. No credit card. Our team will send your credentials
            within minutes and walk you through setup if needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/free-trial" className="bg-[#F96E5B] hover:bg-[#F96E5B] text-black px-8 py-3 rounded-xl font-bold transition-colors">
              Get Free Trial
            </a>
            <a href="/iptv-firestick-canada" className="border border-[#F96E5B] text-[#F96E5B] hover:bg-[#F96E5B] hover:text-black px-8 py-3 rounded-xl font-bold transition-colors">
              Firestick Plans
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
