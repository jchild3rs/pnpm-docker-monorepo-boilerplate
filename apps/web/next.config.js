const path = require('path')
const withTM = require('next-transpile-modules')(['ui']) // pass the modules you would like to see transpiled

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    runtime: 'nodejs',
    serverComponents: true
    // outputStandalone: true, // enable output tracing for tiny docker node images
    // outputFileTracingRoot: path.join(__dirname, '../../') // this includes files from the monorepo base two directories up
  },
  images: {
    domains: ['via.placeholder.com']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = withTM(nextConfig)
