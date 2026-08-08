import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us on WhatsApp",
  description: "Get in touch with us on WhatsApp for fast IPTV support, trial requests, and subscription help. We respond in minutes.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://maple4k.ca/whatsapp-contact" },
};

export default function WhatsAppContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
