import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  // Иначе Next в dev режет /_next и HMR с телефона/по IP — NeatBackground не гидратится.
  allowedDevOrigins: ["192.168.1.105"],
};

export default nextConfig;
