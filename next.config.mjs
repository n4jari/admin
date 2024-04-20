/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imgv3.fotor.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
