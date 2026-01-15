import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure consistent URL structure without trailing slashes
  trailingSlash: false,

  // Redirect www to non-www for canonical URL consistency
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.pspipes.net',
          },
        ],
        destination: 'https://pspipes.net/:path*',
        permanent: true,
      },
    ];
  },

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
};

export default nextConfig;
