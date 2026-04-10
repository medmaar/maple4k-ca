import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy | IPTV Subscription Canada",
  description:
    "DMCA policy for IPTV Subscription Canada. Learn how to submit a DMCA takedown notice and our process for handling copyright claims.",
  alternates: { canonical: "https://www.maple4k.ca/dmca" },
};

export default function DMCAPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-red-500">DMCA Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last updated: March 28, 2026</p>

        {/* Legal disclaimer block */}
        <div className="bg-gray-900 border border-red-700 rounded-2xl p-8 mb-10">
          <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3">Legal Disclaimer</p>
          <p className="text-gray-300 leading-relaxed">
            Maple4K is a reseller of third-party IPTV services. We do not host, store, or transmit
            any video content. All streams are provided by independent third-party servers. If you believe
            your copyrighted content is being accessed through our platform, please contact us at{" "}
            <a href="mailto:help@maple4k.ca" className="text-red-400 hover:underline">
              help@maple4k.ca
            </a>{" "}
            and we will forward your request to the appropriate provider. We respond to all valid DMCA
            notices within 72 hours.
          </p>
        </div>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p>
              IPTV Subscription Canada respects the intellectual property rights of others and
              expects users of our service to do the same. In accordance with the Digital
              Millennium Copyright Act of 1998 (DMCA) and applicable Canadian copyright law,
              we will respond expeditiously to claims of copyright infringement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Reporting Copyright Infringement</h2>
            <p className="mb-3">
              If you believe that content accessible through our service infringes your copyright,
              please send a written notice containing all of the following information to our
              designated DMCA agent:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A physical or electronic signature of the copyright owner or authorized agent.</li>
              <li>Identification of the copyrighted work(s) claimed to have been infringed.</li>
              <li>Identification of the material that is claimed to be infringing, with sufficient detail for us to locate it.</li>
              <li>Your contact information: name, address, telephone number, and email address.</li>
              <li>A statement that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">DMCA Agent Contact</h2>
            <p className="mb-2">Please send all DMCA notices to our designated agent:</p>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <p className="font-bold text-white">Maple4K — DMCA Agent</p>
              <p>Email: <a href="mailto:help@maple4k.ca" className="text-red-400 hover:underline">help@maple4k.ca</a></p>
              <p className="text-gray-400 text-sm mt-2">Please include "DMCA Notice" in the subject line.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Counter-Notification</h2>
            <p>
              If you believe your content was removed by mistake or misidentification, you may
              submit a counter-notification to our DMCA agent. The counter-notification must
              include your contact information, identification of the removed material,
              a statement under penalty of perjury that the removal was a mistake, and
              your consent to jurisdiction of your local federal court.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Repeat Infringers</h2>
            <p>
              IPTV Subscription Canada reserves the right to terminate accounts of users who
              are found to be repeat infringers of intellectual property rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Disclaimer</h2>
            <p>
              This DMCA policy is provided for informational purposes and to comply with
              applicable law. Nothing in this policy constitutes legal advice. IPTV Subscription
              Canada operates in compliance with Canadian broadcasting standards and applicable
              federal law.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
