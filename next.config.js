/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/frontendmentor-tracker-dashboard',
  assetPrefix: '/frontendmentor-tracker-dashboard',
};

module.exports = nextConfig;
