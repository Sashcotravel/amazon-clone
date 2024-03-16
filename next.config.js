/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['logos-world.net', 'media.graphassets.com']
  }
};

module.exports = nextConfig;
