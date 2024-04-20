"use server"
import {
   cacheExchange,
   createClient,
   debugExchange,
   fetchExchange,
   ssrExchange,
} from 'urql';

const ssrCache = async () => {
   return ssrExchange({
      isClient: true
   })
}

const client = async () => {
   const cache = await ssrCache()
   return createClient({
      url: process.env.NODE_ENV !== 'production' ? 'http://localhost:8055/graphql' : 'https://api.i-code.xyz/graphql',
      exchanges: [debugExchange, cacheExchange, cache, fetchExchange],
   })

}
export { client, ssrCache };
