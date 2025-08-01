/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // For static deployment
  images: {
    unoptimized: true,  // For static export
  },
  basePath: '', // Add your base path if hosting in a subdirectory
  trailingSlash: true, // Recommended for static exports
}

module.exports = nextConfig