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
  // Turbopack (Next 16 default): alias react-native to react-native-web, prefer .web files
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
    // Alias react-native (and all subpaths) to react-native-web for web builds
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
      'react-native/': 'react-native-web/',
    };
    // Add react-native-web extensions (prioritize .web files)
    config.resolve.extensions = [
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

export default nextConfig;
