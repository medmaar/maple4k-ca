import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400','500','600','700'], display: 'optional', variable: '--font-quicksand', preload: true });
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

import Animations from "./components/Animations";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A3D45",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://maple4k.ca"),
    alternates: { canonical: "https://maple4k.ca", languages: { "en-CA": "https://maple4k.ca", "x-default": "https://maple4k.ca" } },
    icons: { icon: "/favicon.svg" },
    title: {
        default: "Best IPTV Canada — 4K Streaming from $9 | Maple4K",
        template: "%s | Maple4K — Best IPTV Canada",
    },
    description:
        "Canada's premium 4K IPTV service. H.265/HEVC encoded, HDR10 & Dolby Vision support. 25,000+ live channels, 120,000+ movies & series. Plans from $9. Try free — no credit card.",
    keywords:
        "iptv canada, iptv subscription, iptv service, iptv legal, best iptv in canada, free trial iptv, smart iptv, iptv from canada, iptv in canada, online iptv, canadian iptv, iptv canadian, iptv for canada, Maple4K, 4K IPTV Canada, best iptv canada, iptv 4k, iptv formula, canada iptv, best iptv provider canada, best iptv canada 2026, iptv canada reviews",
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
          <html lang="en" className={`h-full ${quicksand.variable}`}>
                <head>
                  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                  {/* Preconnect to Google Fonts CDN */}
                  {/* Preload LCP hero — matches direct <img> src exactly */}
                  <link rel="preload" as="image" href="/hero-mobile.webp" type="image/webp" fetchPriority="high" />
                  {/* Critical above-fold CSS inlined — hero renders without waiting for CSS file */}
                  <style dangerouslySetInnerHTML={{ __html: `
                    *,*::before,*::after{box-sizing:border-box}
                    html{height:100%;scroll-behavior:smooth}
                    body{background:#E8F4F5;color:#000;margin:0;min-height:100%;display:flex;flex-direction:column;font-family:system-ui,sans-serif}
                    nav{position:sticky;top:0;z-index:50;background:#1A3D45;border-bottom:2px solid rgba(121,201,197,.25);height:68px;display:flex;align-items:center}
                    main>section:first-child{position:relative;padding:110px 16px 100px;text-align:center;overflow:hidden;min-height:600px;display:flex;align-items:center}
                    main>section:first-child>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:70% 30%;z-index:0;opacity:1!important;transform:none!important}
                    .flex-1{flex:1}
                  `}} />
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSearchSchema) }} />
                  {/* GTM deferred — does not block rendering */}
                  <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1M29399XH7');window.addEventListener('load',function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-1M29399XH7';document.head.appendChild(s);},{once:true});` }}></script>
                </head>
                <body
                          className={`min-h-full flex flex-col ${quicksand.className}`}
                        >
                        <Navbar />
                        <div className="flex-1">{children}</div>
                        <Footer />
                        <FloatingContact />
                        <Animations />
                </body>
          </html>
        );
}
