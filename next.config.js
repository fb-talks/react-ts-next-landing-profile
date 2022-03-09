/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', `tailwindui.com`]
  }
}

module.exports = nextConfig
