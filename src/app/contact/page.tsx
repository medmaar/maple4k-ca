import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | IPTV Subscription Canada — 24/7 Canadian Support",
  description: "Contact IPTV Subscription Canada via WhatsApp, Telegram, or email. Our Canadian support team is available 24/7 in English and French.",
  alternates: { canonical: "https://www.maple4k.ca/contact" },
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
    <main className="bg-gray-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact <span className="text-red-500">Us</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Our Canadian support team is available 24/7 in English and French.
          Choose the channel that works best for you.
        </p>

        {/* Contact cards */}
        <div className="flex flex-col gap-6 mb-16">
          {channels.map((c) => (
            <div key={c.name} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{c.name}</h2>
                <p className="text-gray-400 text-sm mb-1">{c.desc}</p>
                <p className="text-gray-500 text-xs">{c.detail}</p>
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
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-6">Response Times</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-green-400 mb-1">&lt; 5 min</div>
              <div className="text-gray-400 text-sm">WhatsApp<br />During peak hours</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-400 mb-1">&lt; 15 min</div>
              <div className="text-gray-400 text-sm">Telegram<br />All hours</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-yellow-400 mb-1">&lt; 2 hrs</div>
              <div className="text-gray-400 text-sm">Email<br />All hours</div>
            </div>
          </div>
        </div>

        {/* FAQ shortcut */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Have a common question? Check our FAQ first.</p>
          <a href="/#faq" className="inline-block border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 rounded-xl font-bold transition-colors">
            View FAQ
          </a>
        </div>
      </div>
    </main>
  );
}
