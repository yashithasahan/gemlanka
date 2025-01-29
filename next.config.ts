import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ images: {
    domains: ["chariot.tours", "random.imagecdn.app"], // Add the external hostname here
  },
};

export default nextConfig;
