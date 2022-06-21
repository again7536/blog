/** @type {import('next').NextConfig} */
const nextProdConfig = {
  compiler: {
    styledComponents: true,
  },
};

const ContentSecurityPolicy =
  process.env.NODE_ENV === 'production'
    ? `
  default-src 'self';
  font-src 'self' data: ;
  img-src 'self' data: ;
`
    : `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  connect-src 'self' webpack://*;
  style-src 'unsafe-inline';
  font-src 'self' data: ;
  img-src 'self' data: ;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

const nextDevConfig = {
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:5000/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `http://localhost:5000/uploads/:path*`,
      },
    ];
  },
};

const nextConfig =
  process.env.NODE_ENV === 'production' ? nextProdConfig : nextDevConfig;

module.exports = nextConfig;
