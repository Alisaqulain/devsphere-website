import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match Vercel "Output Directory" (legacy Vite `dist` setting). Clear that
  // field in Vercel → Settings → Build & Development to use the default `.next`.
  distDir: "dist",
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
