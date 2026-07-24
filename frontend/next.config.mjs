/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.DIST_DIR || '.next',
  images: {
    remotePatterns: [
      {
        // Payload (Sarapis multi-brand CMS) — hero/media for blog + articles
        protocol: 'https',
        hostname: 'next.sarapis.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sarapis.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'updates.wegov.nyc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wegov.nyc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.basemaps.cartocdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'unnyc.wegov.nyc',
          },
        ],
        destination: 'https://wegov.nyc/unnyc/:path*',
        permanent: true,
      },
      // The primer draft was promoted to be the main /unnyc hub (and its
      // crosswalk sub-page to /unnyc/crosswalk); keep old draft links working.
      {
        source: '/unnyc/primer/crosswalk',
        destination: '/unnyc/crosswalk',
        permanent: true,
      },
      {
        source: '/unnyc/primer',
        destination: '/unnyc',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: 'https://updates.wegov.nyc/:path*',
        },
        {
          source: '/:path*/',
          destination: 'https://updates.wegov.nyc/:path*/',
        },
      ],
    };
  },
};

export default nextConfig;
