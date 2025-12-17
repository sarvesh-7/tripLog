const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // Increase to 5MB (or whatever you need)
    },
  },
};

export default nextConfig;