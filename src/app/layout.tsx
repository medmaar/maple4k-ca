import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
    metadataBase: new URL("https://maple4k.ca"),
    icons: { icon: "/favicon.svg" },
    title: {
        default: "Best IPTV Canada 2026 | Maple4K",
        template: "%s | Maple4K IPTV Canada",
    },
    description:
        "Best IPTV service in Canada 2026. 25,000+ live channels, 120,000+ movies & series in 4K. NHL, TSN, CTV, Sportsnet included. Plans from $9. Try free — no credit card.",
    keywords:
        "Maple4K, best IPTV Canada, IPTV subscription Canada, IPTV service Canada, Canadian IPTV 2026",
    openGraph: {
        siteName: "Maple4K",
        locale: "en_CA",
        type: "website",
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
                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-1M29399XH7" />
                  <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1M29399XH7');` }} />
                </head>
                <body
                          className="min-h-full flex flex-col"
                          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                        >
                        <Navbar />
                        <div className="flex-1">{children}</div>
                        <Footer />
                        <FloatingContact />
                </body>
          </html>
        );
}
