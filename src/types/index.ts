import { autoCiteTypes } from './autocite';
import { gql } from 'apollo-server';

const rootTypes = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    # You can refer to all other types in your schema because they all get combined.
    autocite(url: String): AutociteResult
  }
`;

export const typeDefs = [rootTypes, autoCiteTypes];
