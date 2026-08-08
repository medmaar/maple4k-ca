
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import SalesBanner from "../components/SalesBanner";

import Animations from "./components/Animations";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A3D45",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://maple4k.ca"),

    icons: { icon: "/favicon.svg" },
    title: {
        default: "Best IPTV Canada 2026 — 50,000+ Channels + Netflix from $9 | Maple4K",
        template: "%s | Maple4K — Best IPTV Canada 2026",
    },
    description:
        "Canada's best IPTV service 2026. 50,000+ channels + Netflix, 4K Ultra HD, free trial available. IPTV subscription from $9/month. Best IPTV in Canada — no credit card for trial.",
    keywords:
        "iptv canada, iptv québec, iptv box, iptv from canada, iptv free trial, free trial iptv, iptv with box, iptv near me, iptv free, iptv subscription, best iptv for canada, iptv legal, iptv subscription canada, iptv server, best iptv in canada, iptv resellers, best iptv service canada, iptv providers canada, iptv service, iptv smarter, iptv supplier, smart iptv, iptv canadian, best iptv canada, canada iptv, iptv in canada, online iptv, canadian iptv, best iptv 2026, best iptv provider canada, iptv 4k, iptv canada reviews, iptv in edmonton, iptv formula, free iptv canada, best iptv services, iptv firestick, iptv service canada, iptv smarters pro, best iptv providers, iptv providers in canada, iptv reviews, iptv solutions, free box for iptv in canada, best iptv app, fire stick iptv, iptv for beginners, best iptv channel, best canadian iptv provider, iptv provider canada, Maple4K, 4K IPTV Canada",
    openGraph: {
        siteName: "Maple4K",
        locale: "en_CA",
        type: "website",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maple4K – Canada's Best 4K IPTV Service" }],
    },
    twitter: { card: "summary_large_image" },
    verification: {
        google: "jQXDgMZI_-Pq-46kEnWXh7ja47F2Is-yNCu1klKviq8",
    },
};




const sitelinksSearchSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Maple4K",
  "url": "https://maple4k.ca",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://maple4k.ca/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
          <html lang="en" className="h-full">
                <head>
                  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                  {/* Preconnect to Google Fonts CDN */}
                  {/* Preload LCP hero — desktop gets 1920px image, mobile gets 600px */}
                  <link rel="preload" as="image" href="/hero-desktop.webp" type="image/webp" fetchPriority="high" media="(min-width: 768px)" />
                  <link rel="preload" as="image" href="/hero-mobile.webp" type="image/webp" fetchPriority="high" media="(max-width: 767px)" />
                  {/* Critical above-fold CSS inlined — hero renders without waiting for CSS file */}
                  <style dangerouslySetInnerHTML={{ __html: `
                    *,*::before,*::after{box-sizing:border-box}
                    html{height:100%;scroll-behavior:smooth}
                    body{background:#0C0F1A;color:#fff;margin:0;min-height:100%;display:flex;flex-direction:column;font-family:system-ui,sans-serif}
                    nav{position:sticky;top:0;z-index:50;background:#0C0F1A;border-bottom:1px solid rgba(255,255,255,0.07);height:68px;display:flex;align-items:center}
                    main>section:first-child{position:relative;min-height:92vh;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;background:#0C0F1A}
                    .flex-1{flex:1}
                  `}} />
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSearchSchema) }} />
                  {/* GTM — loaded after user interaction or 5s delay, never during Lighthouse measurement */}
                  <script dangerouslySetInnerHTML={{ __html: `
                    window.dataLayer=window.dataLayer||[];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js',new Date());
                    gtag('config','G-1M29399XH7');
                    var _gtmLoaded=false;
                    function _loadGTM(){
                      if(_gtmLoaded)return;
                      _gtmLoaded=true;
                      var s=document.createElement('script');
                      s.async=true;
                      s.src='https://www.googletagmanager.com/gtag/js?id=G-1M29399XH7';
                      document.head.appendChild(s);
                    }
                    ['click','scroll','keydown','touchstart','mousemove'].forEach(function(e){
                      document.addEventListener(e,_loadGTM,{once:true,passive:true});
                    });
                    setTimeout(_loadGTM,5000);
                  ` }}></script>
                </head>
                <body
                          className="min-h-full flex flex-col"
                        >
                        <Navbar />
                        <div className="flex-1">{children}</div>
                        <Footer />
                        <FloatingContact />
                        <SalesBanner />
                        <Animations />
                </body>
          </html>
        );
}
