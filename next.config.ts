import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure consistent URL structure without trailing slashes
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'pspipes.net',
      },
    ],
  },
};

export default nextConfig;