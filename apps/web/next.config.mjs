/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@nexteranga/ui"],
  serverExternalPackages: ["@prisma/client", "@prisma/client-runtime-utils"],
};

export default nextConfig;
