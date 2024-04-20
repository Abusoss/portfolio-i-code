import type { introspection } from '@/schema/graphql-env.d.ts';
import { initGraphQLTada } from 'gql.tada';

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    DateTime: string;
    JSON: any;
  };
}>();

export { readFragment } from 'gql.tada';
export type { FragmentOf, ResultOf, VariablesOf } from 'gql.tada';
