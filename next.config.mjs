/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from 'next/constants.js';

const ContentSecurityPolicyStrict = `
  default-src 'self' https://api.daily.dev/ *.cdninstagram.com/ http://*.i-code.xyz/ https://*.i-code.xyz/;
  connect-src 'self' http://*.i-code.xyz/ https://*.i-code.xyz/;
  frame-src 'self' https://www.youtube.com/ https://youtu.be/;
  script-src 'self' 'unsafe-inline' use.typekit.net/ http://*.i-code.xyz/ https://*.i-code.xyz/;
  img-src 'self' https://d1.awsstatic.com/ https://via.placeholder.com/ https://api.daily.dev/ https://res.cloudinary.com/ http://*.i-code.xyz/ https://*.i-code.xyz/;
  child-src 'self' https://www.youtube.com/ https://youtu.be/ https://*.facebook.com/ http://*.i-code.xyz/ https://*.i-code.xyz/;
  frame-ancestors 'self' https://*.facebook.com/ http://*.i-code.xyz/ https://*.i-code.xyz/;
  style-src 'unsafe-inline' p.typekit.net/ http://localhost:3000/ use.typekit.net http://*.i-code.xyz/ https://*.i-code.xyz/;
  font-src 'self' data: use.typekit.net/ http://*.i-code.xyz/ https://*.i-code.xyz/;
`;

const ContentSecurityPolicyLoose = ``;

const buildNextConfig = (phase) => {
  let ContentSecurityPolicy;
  let X_Frame_Options;

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    ContentSecurityPolicy = ContentSecurityPolicyLoose;
    X_Frame_Options = '';
  } else if (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_PRODUCTION_SERVER) {
    ContentSecurityPolicy = ContentSecurityPolicyStrict;
    X_Frame_Options = 'SAMEORIGIN';
  }

  const Headers = [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload',
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
    {
      key: 'X-Frame-Options',
      value: X_Frame_Options,
    },
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=()',
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin',
    },
    {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
    },
  ];

  console.log(process.env.BUILD_STANDALONE);

  const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.daily.dev',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: '*.localhost',
          port: '3000',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: '*.i-code.xyz',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'd1.awsstatic.com',
          pathname: '/**',
        },
      ],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: Headers,
        },
      ];
    },
    i18n: {
      locales: ['fr'],
      defaultLocale: 'fr',
    },
  };

  return nextConfig;
};

export default buildNextConfig;
