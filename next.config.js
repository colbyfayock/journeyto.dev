const siteConfig = {
  siteName: 'My Product',
  gaPropertyId: 'XX-123456789-1'
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ...siteConfig,
    NEXT_PUBLIC_siteName: 'My Product'
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;