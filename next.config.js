/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "source.unsplash.com",
      "landmark-real-eastate.s3.ap-southeast-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
