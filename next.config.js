/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fully-responsive-webiste',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/fully-responsive-webiste/',
}

module.exports = nextConfig