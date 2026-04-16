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
        default: "Canada's Premium 4K IPTV | Maple4K",
        template: "%s | Maple4K 4K IPTV Canada",
    },
    description:
        "Canada's premium 4K IPTV service. H.265/HEVC encoded, HDR10 & Dolby Vision support. 25,000+ live channels, 120,000+ movies & series. Plans from $9. Try free — no credit card.",
    keywords:
        "Maple4K, 4K IPTV Canada, Ultra HD IPTV, H.265 HEVC IPTV Canada, HDR IPTV 2026, Dolby Vision IPTV Canada",
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

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
          <html lang="en" className="h-full">
                <head>
                  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
