import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Maple4K – Best 4K IPTV Canada",
  description: "Terms of service for Maple4K, Canada's leading 4K IPTV provider. Read our terms before using our IPTV service.",
  alternates: { canonical: "https://maple4k.ca/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Maple4K – Best 4K IPTV Canada",
    description: "Terms of service for Maple4K, Canada's leading 4K IPTV provider. Read our terms before using our IPTV service.",
    url: "https://maple4k.ca/terms-of-service",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function TermsOfServicePage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-[#F96E5B]">Terms of Service</h1>
        <p className="text-black text-sm mb-10">Last updated: March 28, 2026</p>

        <div className="space-y-10 text-black leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the IPTV Subscription Canada service ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Service Description</h2>
            <p>IPTV Subscription Canada provides an internet-based television streaming service offering access to live channels, video on demand, and related content. The Service requires a compatible device and a broadband internet connection.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Account Registration</h2>
            <p className="mb-3">To use our Service, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Provide accurate and complete registration information</li>
              <li>Keep your login credentials confidential</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="mt-3">You are responsible for all activity that occurs under your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Permitted Use</h2>
            <p className="mb-3">Your subscription is for personal, non-commercial use only. You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Share your account credentials with individuals outside your household</li>
              <li>Resell, redistribute, or sublicense access to the Service</li>
              <li>Use the Service for public performances or commercial broadcasts</li>
              <li>Attempt to circumvent any technical restrictions or security measures</li>
              <li>Use automated tools to access or download content from the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. Payment and Billing</h2>
            <p className="mb-3">All subscriptions are prepaid. Prices are listed in Canadian dollars (CAD) unless otherwise stated. By purchasing a subscription, you agree that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are due at the time of purchase</li>
              <li>There are no automatic renewals — you purchase the duration you choose</li>
              <li>Prices are subject to change with reasonable notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">6. Service Availability</h2>
            <p>We strive to maintain 99.9% uptime but do not guarantee uninterrupted access to the Service. We are not liable for interruptions caused by internet outages, maintenance windows, or circumstances beyond our control. We will make reasonable efforts to notify users of planned maintenance.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">7. Intellectual Property</h2>
            <p>All content available through the Service is protected by copyright and other intellectual property laws. You may not record, download, reproduce, or distribute any content from the Service without express written permission from the respective rights holders.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">8. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to the Service at any time, without notice, if you violate these Terms of Service. Upon termination for breach, no refund will be issued. We may also terminate the Service with 30 days' notice to all subscribers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, IPTV Subscription Canada shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Service. Our total liability to you shall not exceed the amount you paid for the Service in the three months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">10. Governing Law</h2>
            <p>These Terms of Service are governed by and construed in accordance with the laws of the Province of Nova Scotia and the federal laws of Canada applicable therein, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">11. Changes to Terms</h2>
            <p>We may modify these Terms of Service at any time. We will provide notice of material changes by updating the date at the top of this page. Continued use of the Service after changes take effect constitutes your acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">12. Contact</h2>
            <div className="bg-transparent rounded-xl p-6 border border-gray-800">
              <p>Email: <a href="mailto:help@maple4k.ca" className="text-[#F96E5B] hover:underline">help@maple4k.ca</a></p>
              <p className="mt-2">WhatsApp: <a href="https://wa.me/17828026280" target="_blank" rel="noopener noreferrer" className="text-[#F96E5B] hover:underline">+1 (782) 802-6280</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
