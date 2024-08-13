/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      // Add other rewrites if necessary
    ];
  },
  output: "standalone",

  // assetPrefix: "/community",
  images: {
    domains: ['kreatrwebsite.s3.ap-south-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
