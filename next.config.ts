import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Forzar la raíz correcta del workspace para Turbopack
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
