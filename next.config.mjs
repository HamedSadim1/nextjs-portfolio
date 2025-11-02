/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Compiler voor automatische optimalisatie van React code (nu stable)
  reactCompiler: true,

  // Image configuratie voor externe afbeeldingen
  images: {
    // Sta externe afbeeldingen toe van Unsplash voor project screenshots
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
export default nextConfig;
