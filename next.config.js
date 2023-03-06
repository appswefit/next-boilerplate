/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['wefit-react-web-test.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
