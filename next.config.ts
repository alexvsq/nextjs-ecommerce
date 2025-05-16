import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL(process.env.URL_API_IMAGES!)],
  },
};

export default nextConfig;
