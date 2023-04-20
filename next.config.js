/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use output: export instead of next export
  output: {
    dir: 'out',
  },
  images: {
    // Disable Image Optimization API
    unoptimized: true,
    domains: ['imgtr.ee'],
  },
};

module.exports = nextConfig;
