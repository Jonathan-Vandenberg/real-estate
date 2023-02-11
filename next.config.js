/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experiments: {
    topLevelAwait: true,
  },
  swcMinify: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "source.unsplash.com",
      "landmark-real-eastate.s3.ap-southeast-1.amazonaws.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
