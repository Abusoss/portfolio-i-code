/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'api.daily.dev',
            port: '',
            pathname: '/**',
         },

         {
            protocol: 'http',
            hostname: '*.localhost',
            port: '3000',
            pathname: '/**',
         },
         //  res.cloudinary.com
         {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**',
         },
         //  via.placeholder.com
         {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
         },
         //  d1.awsstatic.com
         {
            protocol: 'https',
            hostname: 'd1.awsstatic.com',
            port: '',
            pathname: '/**',
         },
      ]
   },
   async headers() {
      return [
         {
            source: '/(.*)',
            headers: [
               {
                  key: 'X-Frame-Options',
                  value: 'SAMEORIGIN',
               },
            ],
         },
      ];
   },
};

export default nextConfig;
