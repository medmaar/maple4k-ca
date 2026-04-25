import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.maple4k.ca" }],
        destination: "https://maple4k.ca/:path*",
        permanent: true,
      },
    ];
  },
  output: "export",
  images: { unoptimized: true },
};
export default nextConfig;
