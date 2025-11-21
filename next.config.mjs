/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/**/**',
      },
      {
        protocol: 'https',
        hostname: 'hdmedical.in',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/*/*/*',
      },
      {
        protocol: 'https',
        hostname: 'https://images.unsplash.com',
        pathname: '/*',
      },
    ],
  },
}

export default nextConfig;
