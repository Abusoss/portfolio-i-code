import { z } from 'zod';

const envSchema = z.object({
   NEXT_PUBLIC_API_URL: z.string().url(),
   NEXT_PUBLIC_DOMAIN: z.string().url(),
   NEXT_PUBLIC_DOMAIN_DATA_API: z.string().url(),
   DOMAIN: z.string().url(),
   DOMAIN_DIRECTUS: z.string().url(),
   NEXT_PUBLIC_GRAPHQL: z.string().url(),
   NEXTAUTH_URL: z.string().url(),
   NEXT_PUBLIC_NEXTAUTH_URL: z.string().url(),
   S3_URL: z.string().url().optional(),
   JWT_SECRET: z.string(),
   S3_BUCKET_NAME: z.string().optional(),
   S3_BUCKET_REGION: z.string().optional(),
});

type Env = z.infer<typeof envSchema>;

const { NEXT_PUBLIC_API_URL,NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_DOMAIN, NEXT_PUBLIC_DOMAIN_DATA_API, DOMAIN, DOMAIN_DIRECTUS, NEXTAUTH_URL, NEXT_PUBLIC_NEXTAUTH_URL, S3_URL, JWT_SECRET, S3_BUCKET_NAME, S3_BUCKET_REGION } = process.env;

const parsedEnv = envSchema.safeParse({
   NEXT_PUBLIC_API_URL,
   NEXT_PUBLIC_DOMAIN,
   NEXT_PUBLIC_DOMAIN_DATA_API,
   NEXT_PUBLIC_GRAPHQL,
   DOMAIN,
   DOMAIN_DIRECTUS,
   NEXTAUTH_URL,
   NEXT_PUBLIC_NEXTAUTH_URL,
   S3_URL,
   JWT_SECRET,
   S3_BUCKET_NAME,
   S3_BUCKET_REGION,
} as Env);

if (!parsedEnv.success) {
   console.error(parsedEnv.error);
   throw new Error('Invalid env');
}

export const env = parsedEnv.data;

declare global {
   namespace NodeJS {
      interface ProcessEnv extends Env { }
   }
}