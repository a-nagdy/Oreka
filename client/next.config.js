const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["student.valuxapps.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
        pathname: "/data/products/**",
      },
    ],
  },
};

module.exports = nextConfig;
