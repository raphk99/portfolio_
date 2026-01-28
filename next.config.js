/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory (e.g., username.github.io/repo-name),
  // uncomment and set the basePath:
  // basePath: '/portfolio_',
  // trailingSlash: true,
}

module.exports = nextConfig
