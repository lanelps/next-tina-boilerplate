/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: `/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/**`,
      },
      {
        protocol: "https",
        hostname: "sydneyreviewofbooks.com",
        port: "",
        pathname: `/wp-content/uploads/**`,
      },
    ],
  },
};

export default nextConfig;
