/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns:[
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
