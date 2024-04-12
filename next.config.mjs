/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "encrypted-tbn0.gstatic.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
