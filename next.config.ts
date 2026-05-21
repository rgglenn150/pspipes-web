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
    ],
  },

  async rewrites() {
    return [
      {
        source: '/sona-admin-dashboard/:path*',
        destination: 'http://localhost:9119/:path*',
      },
    ];
  },
};

export default nextConfig;