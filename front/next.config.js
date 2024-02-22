/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: `/products/${1}`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
