import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kings-international.net" }],
        destination: "https://kings-international.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
