import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-16 px-4 border-t" style={{ background: "#1A3D45", borderColor: "rgba(121,201,197,0.2)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-12 mb-12 border-b" style={{ borderColor: "rgba(121,201,197,0.2)" }}>
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Canada&apos;s #1 IPTV subscription service. 25,000+ live channels,
              120,000+ movies &amp; series in 4K. Serving all of Canada.
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <a href="mailto:help@maple4k.ca" className="text-sm text-gray-400 hover:text-[#79C9C5] transition-colors">help@maple4k.ca</a>
            <div className="mt-3 text-gray-500 text-sm leading-relaxed">
              <p className="text-gray-400 font-medium text-xs uppercase tracking-wider mb-1">Address</p>
              <p>1599 Blvd. Saint-Martin O</p>
              <p>Laval, QC H7S 1N1</p>
              <p>Canada</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Pages</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Home</Link>
              <Link href="/pricing" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Pricing</Link>
              <Link href="/channels-list" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Channels</Link>
              <Link href="/free-trial" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Free Trial</Link>
              <Link href="/blog" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Blog</Link>
              <Link href="/reseller" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Reseller</Link>
              <Link href="/referral" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Referral</Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">IPTV Services</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/best-iptv-canada" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Best IPTV Canada</Link>
              <Link href="/iptv-4k" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">IPTV 4K</Link>
              <Link href="/iptv-subscription" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">IPTV Subscription</Link>
              <Link href="/smart-iptv" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Smart IPTV</Link>
              <Link href="/iptv-formula" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">IPTV Formuler</Link>
              <Link href="/free-trial" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Free IPTV Trial</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">By Device</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-firestick-canada" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Firestick</Link>
              <Link href="/iptv-android-tv-canada" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Android TV</Link>
              <Link href="/iptv-smart-tv-canada" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Smart TV</Link>
              <Link href="/iptv-apple-tv-canada" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Apple TV</Link>
              <Link href="/iptv-mag-box-canada" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">MAG Box</Link>
              <Link href="/iptv-samsung-tv-canada" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Samsung TV</Link>
              <Link href="/iptv-lg-tv-canada" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">LG TV</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">By City</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/iptv-toronto" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Toronto</Link>
              <Link href="/iptv-vancouver" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Vancouver</Link>
              <Link href="/iptv-montreal" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Montreal</Link>
              <Link href="/iptv-calgary" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Calgary</Link>
              <Link href="/iptv-ottawa" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Ottawa</Link>
              <Link href="/iptv-edmonton" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Edmonton</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Legal</p>
            <div className="flex flex-col gap-2.5 mb-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Terms of Service</Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Refund Policy</Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-[#79C9C5] text-sm transition-colors">Disclaimer</Link>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">
              Maple4K does not host or stream any copyrighted content.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>© 2026 Maple4K. All rights reserved.</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>help@maple4k.ca</p>
        </div>
      </div>
    </footer>
  );
}
