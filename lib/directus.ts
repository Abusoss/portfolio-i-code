import { createDirectus, graphql, readGraphqlSdl, rest } from '@directus/sdk';
import fs from 'fs';
import path from 'path';
import { env } from 'process';

const schemaClient = createDirectus(env.DOMAIN_DIRECTUS).with(rest());

const directus = async () => {
   const result = await schemaClient.request(readGraphqlSdl('item'));
   // the file ../schema/schema.ts has a schema interface that is exported
   // write the result in that interface
   fs.writeFileSync(path.resolve(__dirname, '../schema/schema.ts'), `export interface Schema {\n${result}\n}`);

   return import('@/schema/schema').then(({ result }) => {
      console.log(result);
      type Schema = typeof result;
      return createDirectus<Schema>(env.DOMAIN_DIRECTUS).with(graphql());
   });
}

// Client with GraphQL support

// resolve and export the directus client
export default directus;