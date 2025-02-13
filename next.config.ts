import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Enable remote patterns for next/image
  images: {
    // Allow all remote patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  }
};

export default nextConfig;
