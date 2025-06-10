/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/victorpage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/victorpage/' : '',
}

module.exports = nextConfig 