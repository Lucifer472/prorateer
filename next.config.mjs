/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.drivingexamexpert.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
