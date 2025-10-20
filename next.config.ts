import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/doc-agil',
  assetPrefix: '/doc-agil/',
  images: {
    unoptimized: true
  },
  trailingSlash: true
};

export default nextConfig;