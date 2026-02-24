import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/beatopia",
  assetPrefix: "/beatopia/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
