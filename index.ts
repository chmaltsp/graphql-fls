import { AutociteApi } from './src/api/autocite';
import { CfeApi } from './src/api/cfeApi';

import { typeDefs } from './src/types';

const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    getToken: async (_source: any, _args: any, { dataSources }: any) => {
      return dataSources.cfeApi.getToken();
    },
    autocite: async (_source: any, _args: any, { dataSources }: any) => {
      const data = await dataSources.autoCiteApi.citeWebsite(_args.url);

      console.log(data);
      return dataSources.autoCiteApi.citeWebsite(_args.url);
    }
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      cfeApi: new CfeApi(),
      autoCiteApi: new AutociteApi()
    };
  }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
