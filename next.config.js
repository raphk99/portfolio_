/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages (project site: username.github.io/repo-name)
  basePath: '/portfolio_',
  assetPrefix: '/portfolio_',
  trailingSlash: true,
}

module.exports = nextConfig
