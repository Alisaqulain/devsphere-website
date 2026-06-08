import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "devspheresolutions.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
