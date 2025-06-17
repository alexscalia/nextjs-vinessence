import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    // Enable optimizePackageImports for better tree shaking
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Server external packages (updated from experimental)
  serverExternalPackages: [],
  
  // Image optimization
  images: {
    // Add image optimization for wine photos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    // Optimized device sizes for common screen resolutions
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Smaller image sizes for icons and thumbnails
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize quality for better performance while maintaining visual quality
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Bundle analyzer (optional)
  // bundlePagesRouterDependencies: true,
  
  // Temporarily disable linting and type checking for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl(nextConfig);
