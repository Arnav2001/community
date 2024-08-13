/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/community/:path*',
        destination: '/community/:path*'
      },
    ];
  },
  
  output:"standalone",
  basePath:"/community",
  assetPrefix:"/community",

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

