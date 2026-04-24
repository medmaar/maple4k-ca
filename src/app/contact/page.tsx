import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Maple4K 4K IPTV Canada — 24/7 Support",
  description: "Contact Maple4K via live chat, WhatsApp, or email. 4K streaming support team available 24/7 in English and French.",
  alternates: { canonical: "https://maple4k.ca/contact" },
};

const channels = [
  {
    name: "WhatsApp Live Chat",
    desc: "Fastest response. Chat with our 4K streaming team — typically under 5 minutes.",
    action: "Start Live Chat",
    href: "/whatsapp-contact",
    bg: "bg-[#25D366]",
    detail: "Response time: < 5 min",
  },
  {
    name: "Email",
    desc: "For technical questions, 4K device issues, or detailed inquiries.",
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Our 4K streaming support team is available 24/7 in English and French.
          Choose the channel that works best for you.
        </p>

        <div className="flex flex-col gap-6 mb-16">
          {channels.map((c) => (
            <div key={c.name} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{c.name}</h2>
                <p className="text-gray-400 text-sm mb-1">{c.desc}</p>
                <p className="text-gray-500 text-xs">{c.detail}</p>
              </div>
              <Link
                href={c.href}
                className={`${c.bg} text-gray-900 font-bold px-6 py-3 rounded-xl text-sm text-center whitespace-nowrap hover:brightness-110 transition shrink-0`}
              >
                {c.action}
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 mb-12">
          <h2 className="text-2xl font-bold mb-6">Response Times</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-green-400 mb-1">&lt; 5 min</div>
              <div className="text-gray-400 text-sm">WhatsApp Live Chat<br />During business hours</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-yellow-400 mb-1">&lt; 2 hrs</div>
              <div className="text-gray-400 text-sm">Email<br />All hours</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-lg font-bold mb-2">Your Privacy</h3>
          <p className="text-gray-400 text-sm">
            We value your privacy. When you use WhatsApp Live Chat, your phone number is only used to contact you. We never share your information with third parties.
          </p>
        </div>
      </div>
    </main>
  );
}
