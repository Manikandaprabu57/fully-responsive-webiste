/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fully-responsive-webiste',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig