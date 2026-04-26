import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

import Animations from "./components/Animations";

export const metadata: Metadata = {
    metadataBase: new URL("https://maple4k.ca"),
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
        images: [{ url: "/favicon.svg", width: 512, height: 512, alt: "Maple4K – Best 4K IPTV Canada" }],
    },
    twitter: { card: "summary_large_image" },
    verification: {
        google: "jQXDgMZI_-Pq-46kEnWXh7ja47F2Is-yNCu1klKviq8",
    },
};


const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maple4K",
  "url": "https://maple4k.ca",
  "email": "help@maple4k.ca",
  "address": { "@type": "PostalAddress", "addressCountry": "CA", "addressRegion": "QC", "addressLocality": "Laval" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "312",
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.5706,
    "longitude": -73.7474
  },
  "areaServed": {
    "@type": "Country",
    "name": "Canada"
  },
  "priceRange": "$9-$100"
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
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSearchSchema) }} />
                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-1M29399XH7"></script>
                  <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1M29399XH7');` }}></script>
                </head>
                <body
                          className="min-h-full flex flex-col"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
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
