import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Your IPTV Subscription",
  description: "Complete your IPTV subscription order. Activation within 15 minutes after confirmation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://maple4k.ca/order" },
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
