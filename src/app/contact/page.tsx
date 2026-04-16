import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Maple4K – Best 4K IPTV Canada",
  description: "Contact Maple4K via WhatsApp, Telegram, or email. Canada's best 4K IPTV support team is available 24/7 in English and French.",
  alternates: { canonical: "https://maple4k.ca/contact" },
  openGraph: {
    title: "Contact | Maple4K – Best 4K IPTV Canada",
    description: "Contact Maple4K via WhatsApp, Telegram, or email. Canada's best 4K IPTV support team is available 24/7 in English and French.",
    url: "https://maple4k.ca/contact",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

const channels = [
  {
    name: "WhatsApp",
    desc: "Fastest response. Chat with our team directly — typically under 5 minutes.",
    action: "Message on WhatsApp",
    href: "https://wa.me/17828026280?text=Hi%20Maple4K%2C%20I%27m%20interested%20in%20your%20service.",
    bg: "bg-[#25D366]",
    detail: "+1 (782) 802-6280",
  },
  {
    name: "Telegram",
    desc: "Join our support channel for quick help and service announcements.",
    action: "Open Telegram",
    href: "https://t.me/IPTVCanadaSupport",
    bg: "bg-[#229ED9]",
    detail: "@IPTVCanadaSupport",
  },
  {
    name: "Email",
    desc: "For detailed inquiries, billing questions, or DMCA notices.",
    action: "Send an Email",
    href: "mailto:help@maple4k.ca",
    bg: "bg-[#F5C518]",
    detail: "help@maple4k.ca",
  },
];

export default function ContactPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact <span className="text-[#F96E5B]">Us</span>
        </h1>
        <p className="text-black text-lg mb-12">
          Our Canadian support team is available 24/7 in English and French.
          Choose the channel that works best for you.
        </p>

        {/* Contact cards */}
        <div className="flex flex-col gap-6 mb-16">
          {channels.map((c) => (
            <div key={c.name} className="bg-transparent rounded-2xl p-6 border border-gray-800 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{c.name}</h2>
                <p className="text-black text-sm mb-1">{c.desc}</p>
                <p className="text-[#1A3D45] text-xs">{c.detail}</p>
              </div>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`${c.bg} text-gray-900 font-bold px-6 py-3 rounded-xl text-sm text-center whitespace-nowrap hover:brightness-110 transition shrink-0`}
              >
                {c.action}
              </a>
            </div>
          ))}
        </div>

        {/* Response times */}
        <div className="bg-transparent rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-6">Response Times</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-green-400 mb-1">&lt; 5 min</div>
              <div className="text-black text-sm">WhatsApp<br />During peak hours</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-400 mb-1">&lt; 15 min</div>
              <div className="text-black text-sm">Telegram<br />All hours</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-yellow-400 mb-1">&lt; 2 hrs</div>
              <div className="text-black text-sm">Email<br />All hours</div>
            </div>
          </div>
        </div>

        {/* FAQ shortcut */}
        <div className="text-center">
          <p className="text-black mb-4">Have a common question? Check our FAQ first.</p>
          <a href="/#faq" className="inline-block border border-[#F96E5B] text-[#F96E5B] hover:bg-[#F96E5B] hover:text-black px-8 py-3 rounded-xl font-bold transition-colors">
            View FAQ
          </a>
        </div>
      </div>
    </main>
  );
}
