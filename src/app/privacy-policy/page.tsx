import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Maple4K – Best 4K IPTV Canada",
  description: "Privacy policy for Maple4K, Canada's best 4K IPTV service. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://maple4k.ca/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Maple4K – Best 4K IPTV Canada",
    description: "Privacy policy for Maple4K, Canada's best 4K IPTV service. Learn how we collect, use, and protect your personal information.",
    url: "https://maple4k.ca/privacy-policy",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-[#F96E5B]">Privacy Policy</h1>
        <p className="text-black text-sm mb-10">Last updated: March 28, 2026</p>

        <div className="space-y-10 text-black leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Information We Collect</h2>
            <p className="mb-3">When you use IPTV Subscription Canada, we may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account information:</strong> Your name, email address, and contact details provided when you sign up or contact us.</li>
              <li><strong>Payment information:</strong> Transaction data processed through our payment providers. We do not store full credit card numbers.</li>
              <li><strong>Usage data:</strong> Information about how you use our service, including device type, IP address, and streaming activity.</li>
              <li><strong>Communications:</strong> Messages you send us via email, WhatsApp, or Telegram.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our IPTV service</li>
              <li>Process transactions and send related information</li>
              <li>Send service updates, technical notices, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns to improve user experience</li>
              <li>Detect and prevent fraudulent or unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Information Sharing</h2>
            <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers:</strong> Trusted third-party companies that assist us in operating our service (e.g., payment processors), subject to confidentiality agreements.</li>
              <li><strong>Legal requirements:</strong> When required by law, court order, or governmental authority.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate confidentiality protections.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide you with our service. You may request deletion of your data at any time by contacting us. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. Security</h2>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">6. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to improve your browsing experience. You can instruct your browser to refuse cookies, though some parts of the site may not function properly as a result.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">7. Your Rights (Canadian Residents)</h2>
            <p className="mb-3">Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent for the use of your personal information</li>
              <li>Request deletion of your personal information</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:help@maple4k.ca" className="text-[#F96E5B] hover:underline">help@maple4k.ca</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Continued use of our service after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="mt-4 bg-transparent rounded-xl p-6 border border-gray-800">
              <p>Email: <a href="mailto:help@maple4k.ca" className="text-[#F96E5B] hover:underline">help@maple4k.ca</a></p>
              <p className="mt-2">WhatsApp: <a href="/whatsapp-contact" target="_blank" rel="noopener noreferrer" className="text-[#F96E5B] hover:underline">+1 (782) 802-6280</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
