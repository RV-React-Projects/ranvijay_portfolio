import type { NextConfig } from 'next';

let baseUrl;

switch (process.env.NEXT_PUBLIC_STAGE?.trim()) {
  case 'DEV':
    baseUrl = 'https://google.com/';
    break;
  case 'UAT':
    baseUrl = 'https://google.com/';
    break;
  case 'PROD':
    baseUrl = 'hhttps://google.com/';
    break;
  default:
    baseUrl = 'https://google.com/';
    break;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  crossOrigin: 'anonymous',
  env: {
    baseUrl,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;
