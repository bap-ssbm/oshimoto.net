/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      'drive.google.com',
      "lh3.googleusercontent.com"
    ],
  },
}

module.exports = nextConfig
