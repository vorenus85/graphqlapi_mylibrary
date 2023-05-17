import { ApolloServer, gql, ApolloError} from 'apollo-server';
import dataSources from './services.js';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';


const server = new ApolloServer({ typeDefs, resolvers, dataSources });

// The `listen` method launches a web server.
server
  .listen({port: process.env.port || 4000})
  .then( ({url}) => {
    console.log(`graphQl running at ${url}`);
  });