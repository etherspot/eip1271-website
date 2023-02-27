/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/etherspot/eip1271-website",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
