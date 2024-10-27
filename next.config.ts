import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from 'next/constants.js';

const ContentSecurityPolicyStrict = `
  default-src 'self' https://api.daily.dev/ *.cdninstagram.com/ http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ http://*.i-code.xyz/ https://*.i-code.xyz/;

  connect-src 'self' http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ http://*.i-code.xyz/ https://*.i-code.xyz/ *.vercel.com api.giphy.com;

  frame-src 'self' http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ https://www.youtube.com/ https://youtu.be/ vercel.live;

  script-src 'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net/ http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ http://*.i-code.xyz/ https://*.i-code.xyz/ vercel.live *.vercel.com;

  img-src 'self' blob: data: http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ https://d1.awsstatic.com/ https://via.placeholder.com/ https://api.daily.dev/ https://res.cloudinary.com/ http://*.i-code.xyz/ https://*.i-code.xyz/ media0.giphy.com media1.giphy.com media2.giphy.com media3.giphy.com media4.giphy.com *.cloudinary.com;

  child-src 'self' http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ https://www.youtube.com/ https://youtu.be/ https://*.facebook.com/ http://*.i-code.xyz/ https://*.i-code.xyz/;

  frame-ancestors 'self' http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ https://*.facebook.com/ http://*.i-code.xyz/ https://*.i-code.xyz/;

  style-src 'self' 'unsafe-inline' http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ p.typekit.net/ http://localhost:3000/ use.typekit.net http://*.i-code.xyz/ https://*.i-code.xyz/ fonts.googleapis.com;

  font-src 'self' data: use.typekit.net/ http://directus-i-code-env-1.eba-parw6rms.eu-west-3.elasticbeanstalk.com/ http://*.i-code.xyz/ https://*.i-code.xyz/ fonts.gstatic.com;
`;

const ContentSecurityPolicyLoose = ``;

const nextConf = (phase: typeof PHASE_DEVELOPMENT_SERVER | typeof PHASE_PRODUCTION_SERVER | typeof PHASE_PRODUCTION_BUILD) => {
  let ContentSecurityPolicy;
  let X_Frame_Options;

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    ContentSecurityPolicy = ContentSecurityPolicyLoose;
    X_Frame_Options = '';
  } else {  // Cas par défaut pour éviter undefined
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

  const nextConfig: NextConfig = {
    experimental: {
      turbo: {
        resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
        rules: {
          "*.svg": {
            loaders: ["@svgr/webpack"],
            as: '*.js',
          },
        },
      },
    },
    staticPageGenerationTimeout: 120000,
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
          hostname: '*.giphy.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'd3coo6i74goucu.cloudfront.net',
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
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  };
  // return withBundleAnalyzer({
  //   enabled: process.env.ANALYZE === 'true',
  // })(nextConfig);
  return nextConfig
};

export default nextConf;
