import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How IPTV Works in Canada | Setup Guide — IPTV Subscription Canada",
  description:
    "Learn how IPTV works in Canada. Simple 3-step setup, compatible devices, internet requirements, and everything you need to start streaming today.",
  keywords:
    "how does IPTV work Canada, how to set up Maple4K, IPTV setup Canada, IPTV explained Canada",
  alternates: { canonical: "https://www.maple4k.ca/how-it-works" },
};

const steps = [
  {
    step: "1",
    title: "Choose a Plan",
    desc: "Pick the subscription duration and number of devices that suits your household. All plans include every channel — no tiered content.",
    detail: "Plans start at $9/month for 1 device. Multi-device plans are available for families. Start with a free 2-hour trial if you want to test first.",
    cta: { label: "View Plans", href: "/pricing" },
  },
  {
    step: "2",
    title: "Get Your Credentials",
    desc: "After subscribing, our team sends you login details within minutes — a server URL, username, and password.",
    detail: "Contact us via WhatsApp, Telegram, or email. Our Canadian support team is available 24/7 and typically responds in under 5 minutes.",
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    step: "3",
    title: "Install & Watch",
    desc: "Download a free IPTV player app on your device, enter your credentials, and start streaming instantly.",
    detail: "We'll tell you exactly which app to install for your device and walk you through setup if needed. Most users are watching within 10 minutes.",
    cta: { label: "Supported Devices", href: "#devices" },
  },
];

const devices = [
  { name: "Amazon Fire Stick", desc: "All generations including 4K and Lite", guide: "/iptv-firestick-canada" },
  { name: "Samsung Smart TV", desc: "All Tizen-based models (2018+)", guide: "/iptv-samsung-tv-canada" },
  { name: "LG Smart TV", desc: "webOS models (2016+)" },
  { name: "Android TV / Box", desc: "Nvidia Shield, Chromecast with Google TV, any Android TV device" },
  { name: "iPhone & iPad", desc: "iOS 13 and newer" },
  { name: "Android Phone & Tablet", desc: "Android 6.0 and newer" },
  { name: "Windows PC", desc: "Windows 10 and 11 via IPTV player app" },
  { name: "Mac", desc: "macOS 11 Big Sur and newer" },
  { name: "MAG Box", desc: "MAG 250, 254, 256, 322, 324, and newer" },
  { name: "Formuler", desc: "Z8, Z10, Z Alpha, and all Formuler devices" },
];

const requirements = [
  { label: "SD / 480p", speed: "5 Mbps" },
  { label: "HD / 720p", speed: "10 Mbps" },
  { label: "Full HD / 1080p", speed: "25 Mbps" },
  { label: "4K Ultra HD", speed: "50 Mbps" },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            How <span className="text-red-500">IPTV Works</span> in Canada
          </h1>
          <p className="text-xl text-gray-300">
            Three simple steps. No technician required. Start watching in minutes.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="flex-shrink-0 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center font-extrabold text-white text-2xl">
                  {s.step}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{s.title}</h2>
                  <p className="text-gray-300 mb-3">{s.desc}</p>
                  <p className="text-gray-400 text-sm mb-4">{s.detail}</p>
                  <a
                    href={s.cta.href}
                    className="inline-block border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors"
                  >
                    {s.cta.label} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is IPTV */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            What Exactly <span className="text-red-500">Is IPTV?</span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              IPTV stands for <strong>Internet Protocol Television</strong>. Instead of receiving
              TV signals via a coaxial cable or satellite dish, IPTV delivers live television
              and on-demand content over your regular internet connection.
            </p>
            <p>
              Think of it like Netflix or YouTube — but for live TV. You open an app, browse a
              channel guide with 25,000+ channels, and press play. The stream comes from our
              servers directly to your device over the internet in real time.
            </p>
            <p>
              Because it uses the internet, IPTV works on <strong>any internet-connected device</strong> —
              your TV, phone, tablet, or computer — and you can watch from anywhere in Canada
              with a good connection.
            </p>
          </div>
        </div>
      </section>

      {/* Devices */}
      <section id="devices" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Compatible <span className="text-red-500">Devices</span>
          </h2>
          <p className="text-center text-gray-400 mb-10">
            Our IPTV service works on virtually every screen you own.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {devices.map((d) => (
              <div key={d.name} className="bg-gray-900 rounded-xl p-5 border border-gray-800 flex items-start gap-4">
                <span className="text-green-400 text-xl mt-0.5">✓</span>
                <div>
                  <div className="font-bold text-white">{d.name}</div>
                  <div className="text-gray-400 text-sm">{d.desc}</div>
                  {d.guide && (
                    <a href={d.guide} className="text-red-400 text-xs hover:underline mt-1 inline-block">
                      Setup guide →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internet requirements */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Internet Speed <span className="text-red-500">Requirements</span>
          </h2>
          <p className="text-center text-gray-400 mb-10">
            Any standard Canadian broadband connection is more than sufficient.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {requirements.map((r) => (
              <div key={r.label} className="bg-gray-950 rounded-xl p-5 border border-gray-800 text-center">
                <div className="text-2xl font-extrabold text-red-500 mb-1">{r.speed}</div>
                <div className="text-gray-400 text-sm">{r.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">
            The average Canadian internet speed is 200+ Mbps — well above what&apos;s needed even for 4K on multiple devices simultaneously.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Common <span className="text-red-500">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: "Do I need to install any hardware?", a: "No. If you already have a Fire Stick, Smart TV, phone, or computer, you're ready. No dish, no cable box, no technician visit required." },
              { q: "Will IPTV work with my existing internet plan?", a: "Yes. Any standard Canadian internet plan from Bell, Rogers, Telus, Shaw, Videotron, or any ISP with at least 25 Mbps will work perfectly for HD streaming." },
              { q: "Can I watch on multiple TVs at the same time?", a: "Yes — choose a 2, 3, 4, or 5 device plan. Each device streams independently. One person can watch hockey in the living room while another watches a movie in the bedroom." },
              { q: "Does IPTV work outside Canada?", a: "Your subscription works anywhere in the world with a decent internet connection. Travel to Europe, the US, or anywhere and still access all your Canadian channels." },
              { q: "What happens if a channel goes down?", a: "Our servers maintain multiple redundant streams for each channel. If one stream has issues, the system automatically switches to a backup. Our 24/7 support team also monitors the service around the clock." },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Try it free for 5 minutes. No credit card, no commitment. Our team will have you set up in minutes.
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
    </main>
  );
}
