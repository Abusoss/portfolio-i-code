/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  query: 'Query';
  mutation: never;
  subscription: 'Subscription';
  types: {
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'Home': { name: 'Home'; type: { kind: 'OBJECT'; name: 'Home'; ofType: null; } }; 'Home_by_version': { name: 'Home_by_version'; type: { kind: 'OBJECT'; name: 'version_Home'; ofType: null; } }; }; };
    'Home': { kind: 'OBJECT'; name: 'Home'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'status': { name: 'status'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'date_created': { name: 'date_created'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; } }; 'date_created_func': { name: 'date_created_func'; type: { kind: 'OBJECT'; name: 'datetime_functions'; ofType: null; } }; 'date_updated': { name: 'date_updated'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; } }; 'date_updated_func': { name: 'date_updated_func'; type: { kind: 'OBJECT'; name: 'datetime_functions'; ofType: null; } }; 'Hero_description': { name: 'Hero_description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'Hero_title': { name: 'Hero_title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'ID': unknown;
    'String': unknown;
    'Date': unknown;
    'datetime_functions': { kind: 'OBJECT'; name: 'datetime_functions'; fields: { 'year': { name: 'year'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'month': { name: 'month'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'week': { name: 'week'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'day': { name: 'day'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'weekday': { name: 'weekday'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'hour': { name: 'hour'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'minute': { name: 'minute'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'second': { name: 'second'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; }; };
    'Int': unknown;
    'version_Home': { kind: 'OBJECT'; name: 'version_Home'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'status': { name: 'status'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'date_created': { name: 'date_created'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; } }; 'date_created_func': { name: 'date_created_func'; type: { kind: 'OBJECT'; name: 'datetime_functions'; ofType: null; } }; 'date_updated': { name: 'date_updated'; type: { kind: 'SCALAR'; name: 'Date'; ofType: null; } }; 'date_updated_func': { name: 'date_updated_func'; type: { kind: 'OBJECT'; name: 'datetime_functions'; ofType: null; } }; 'Hero_description': { name: 'Hero_description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'Hero_title': { name: 'Hero_title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'Subscription': { kind: 'OBJECT'; name: 'Subscription'; fields: { 'Home_mutated': { name: 'Home_mutated'; type: { kind: 'OBJECT'; name: 'Home_mutated'; ofType: null; } }; }; };
    'Home_mutated': { kind: 'OBJECT'; name: 'Home_mutated'; fields: { 'key': { name: 'key'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'event': { name: 'event'; type: { kind: 'ENUM'; name: 'EventEnum'; ofType: null; } }; 'data': { name: 'data'; type: { kind: 'OBJECT'; name: 'Home'; ofType: null; } }; }; };
    'EventEnum': { kind: 'ENUM'; name: 'EventEnum'; type: 'create' | 'update' | 'delete'; };
    'Boolean': unknown;
  };
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}