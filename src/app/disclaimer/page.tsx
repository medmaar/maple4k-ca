import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Maple4K – Best 4K IPTV Canada",
  description:
    "Legal disclaimer for Maple4K, Canada's best 4K IPTV service. We do not host or stream any copyrighted content. All content is provided by third-party providers.",
  alternates: { canonical: "https://maple4k.ca/disclaimer" },
  openGraph: {
    title: "Disclaimer | Maple4K – Best 4K IPTV Canada",
    description: "Legal disclaimer for Maple4K, Canada's best 4K IPTV service. We do not host or stream any copyrighted content.",
    url: "https://maple4k.ca/disclaimer",
    type: "website",
    siteName: "Maple4K",
    locale: "en_CA",
    images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function DisclaimerPage() {
  return (
    <main style={{ background: "linear-gradient(to left, #daf0f2 0%, #fce8e4 100%)", color: "#000000" }} className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-[#F96E5B]">Disclaimer</h1>
        <p className="text-black text-sm mb-10">Last updated: April 4, 2026</p>

        <section className="space-y-8 text-black leading-relaxed">
          <div className="bg-transparent border border-red-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Content Disclaimer</h2>
            <p className="text-black leading-relaxed">
              Maple4K does not host or stream any copyrighted content. All content is
              provided by third-party providers. Users are responsible for ensuring they have
              the rights to view content in their jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Third-Party Content</h2>
            <p>
              Maple4K acts solely as a reseller and intermediary for third-party IPTV
              services. We do not create, produce, host, store, or transmit any video content
              ourselves. All streams, channels, and on-demand content accessible through our
              platform are delivered by independent third-party servers and providers over
              which we have no direct control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">User Responsibility</h2>
            <p className="mb-3">
              By using the Maple4K service, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are solely responsible for determining the legality of accessing any content in your jurisdiction.</li>
              <li>You will not use the service to access content you are not legally permitted to view.</li>
              <li>Maple4K bears no liability for any content accessed through third-party providers.</li>
              <li>Your use of the service is subject to the laws and regulations of your local jurisdiction.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">No Warranties</h2>
            <p>
              The service is provided &quot;as is&quot; without warranties of any kind, express or implied.
              Maple4K does not warrant that the service will be uninterrupted, error-free,
              or free of viruses or other harmful components. We disclaim all warranties to the
              fullest extent permitted by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Maple4K shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages
              arising from your use of, or inability to use, the service or any content
              accessed through it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black mb-3">Copyright Concerns</h2>
            <p>
              If you believe that copyrighted content is being made accessible through our
              platform without authorization, please contact us immediately. We take all
              copyright concerns seriously and will forward your complaint to the appropriate
              third-party provider.
            </p>
            <div className="mt-4 bg-transparent rounded-xl p-6 border border-gray-800">
              <p>Email: <a href="mailto:help@maple4k.ca" className="text-[#F96E5B] hover:underline">help@maple4k.ca</a></p>
              <p className="text-[#1A3D45] text-sm mt-2">Please include &quot;Copyright Concern&quot; in the subject line.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
