/** @type {import('next').NextConfig} */
const nextProdConfig = {
  compiler: {
    styledComponents: true,
  },
};

const nextDevConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:5000/:path*`,
      },
      {
        source: '/static/:path*',
        destination: `http://localhost:5000/:path*`,
      },
    ];
  },
};

const nextConfig =
  process.env.NODE_ENV === 'production' ? nextProdConfig : nextDevConfig;

module.exports = nextConfig;
