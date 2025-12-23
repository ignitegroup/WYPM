/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/wypm',
  assetPrefix: '/wypm',
  images: {
    domains: ['localhost', 'yflreljnlceexebvwyee.supabase.co'],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
