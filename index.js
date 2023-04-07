const { ApolloServer, gql, ApolloError} = require('apollo-server');
const books = require('./data/books.json');
const typeDefs = require('./schema');

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server
    .listen({port: process.env.port || 4000})
    .then( ({url}) => {
    console.log(`graphQl running at ${url}`);
});