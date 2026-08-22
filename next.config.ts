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
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/our-brands", destination: "/brands", permanent: true },
      { source: "/our-products", destination: "/products", permanent: true },
      { source: "/:path+/", destination: "/:path+", permanent: true },
    ];
  },
};

export default nextConfig;
