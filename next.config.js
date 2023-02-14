/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  optimizeFonts: true,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === 'production' && {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig
