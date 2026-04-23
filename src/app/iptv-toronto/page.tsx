import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "4K Ultra HD IPTV Toronto | Stream Sports & Movies in 4K | Maple4K",
  description: "Stream Toronto in stunning 4K Ultra HD with Maple4K. Watch Leafs, Raptors, Blue Jays, Reds live in 4K. H.265 codec, HDR10, 25,000+ 4K-capable channels.",
  alternates: { canonical: "https://maple4k.ca/iptv-toronto" },
};

export default function TorontoPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          4K Ultra HD IPTV in Toronto — Watch Sports & Movies in Stunning Clarity
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Forget cable's grainy HD. Stream everything in 4K Ultra HD — Maple Leafs games, Raptors basketball, Blue Jays baseball, and 25,000+ other channels. H.265 codec ensures smooth 4K on Toronto's Rogers/Bell internet.
        </p>

        <div className="bg-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Toronto Chooses 4K IPTV</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✓ <strong>Maple Leafs in 4K:</strong> See every skate, every pass, every goal in crystalline detail</li>
            <li>✓ <strong>Raptors in 4K:</strong> Watch breakaways and dunks with stunning clarity</li>
            <li>✓ <strong>Blue Jays in 4K:</strong> Baseball looks incredible in 4K — 60 FPS smooth motion</li>
            <li>✓ <strong>4K Movies & Series:</strong> Netflix, Disney, HBO-quality streaming included</li>
            <li>✓ <strong>15-25 Mbps:</strong> H.265 codec means smooth 4K on Toronto internet</li>
            <li>✓ <strong>HDR10:</strong> Enhanced colors and brightness on 4K TVs (2016+)</li>
            <li>✓ <strong>All Canadian Locals:</strong> CTV, Global, CBC in crisp HD/4K</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Best 4K Devices in Toronto</h2>
        <p className="text-gray-300 mb-4">
          Want to stream 4K in Toronto? These devices work best:
        </p>
        <ul className="space-y-2 text-gray-300 mb-8">
          <li><strong>Fire Stick 4K:</strong> $79 CAD, perfect for 4K sports</li>
          <li><strong>Samsung/LG 4K Smart TV (2016+):</strong> Built-in app, native 4K support</li>
          <li><strong>Android TV Box:</strong> Full H.265 support, best for living rooms</li>
          <li><strong>Apple TV 4K:</strong> Premium 4K option, excellent reliability</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Toronto Internet Speed for 4K</h2>
        <p className="text-gray-300 mb-4">
          Most Toronto homes have 50+ Mbps (Rogers Ignite, Bell Fibe). That's more than enough for 4K:
        </p>
        <ul className="space-y-2 text-gray-300 mb-8">
          <li>25-50 Mbps: Smooth 4K, H.265</li>
          <li>50+ Mbps: 4K + simultaneous devices</li>
          <li>Internet issue? Adaptive bitrate adjusts automatically</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Channels You Get in Toronto</h2>
        <ul className="space-y-2 text-gray-300 mb-8">
          <li>✓ All TSN channels (TSN1, TSN2, TSN3, TSN4)</li>
          <li>✓ Sportsnet, Sportsnet East, Sportsnet Ontario</li>
          <li>✓ CTV, Global, CBC (all Canadian locals)</li>
          <li>✓ 25,000+ other channels</li>
          <li>✓ Sports: NHL, NBA, NFL, CFL, UEFA, Premier League</li>
        </ul>

        <Link href="/free-trial" className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700">
          Try 4K Free for 24 Hours
        </Link>
      </div>
    </main>
  );
}
