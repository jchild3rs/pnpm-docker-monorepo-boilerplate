const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    // runtime: 'nodejs',
    serverComponents: true,
    outputStandalone: true, // enable output tracing for tiny docker node images
    outputFileTracingRoot: path.join(__dirname, '../../'), // this includes files from the monorepo base two directories up
  },
  images: {
    domains: ['via.placeholder.com'],
  },
}

module.exports = nextConfig
