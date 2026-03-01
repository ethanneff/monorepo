import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Transpile react-native-web and shared packages
  transpilePackages: [
    'react-native-web',
    '@shared/components',
    '@shared/features',
    '@shared/store',
    '@shared/utils',
  ],

  // Configure compiler to target modern browsers
  compiler: {
    // Remove console logs in production
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },

  experimental: {
    optimizePackageImports: [
      '@shared/components',
      '@shared/features',
      '@shared/store',
      '@shared/utils',
    ],
  },
  turbopack: {
    resolveAlias: {
      'react-native': 'react-native-web',
      'react-native/': 'react-native-web/',
    },
    resolveExtensions: [
      '.web.ts',
      '.web.tsx',
      '.web.js',
      '.web.jsx',
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
    ],
  },
  webpack: (config, { webpack }) => {
    // Define React Native globals for web
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      }),
    );
    return config;
  },
};

export default nextConfig;
