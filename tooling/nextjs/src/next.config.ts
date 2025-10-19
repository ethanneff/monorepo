import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Transpile react-native-web and shared packages
  transpilePackages: [
    'react-native-web',
    '@shared/components',
    '@shared/features',
    '@shared/utils',
  ],

  webpack: (config: {
    resolve: {
      alias: Record<string, boolean | string>;
      extensions: string[];
    };
  }) => {
    // Alias react-native to react-native-web
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    };
    // Add react-native-web extensions
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    return config;
  },
};

export default nextConfig;
