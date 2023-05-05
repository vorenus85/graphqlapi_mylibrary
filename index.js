const { ApolloServer, gql, ApolloError} = require('apollo-server');
const BooksAPI = require('./dataSource/books');
const AuthorsAPI = require('./dataSource/authors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');


const dataSources = () =>({
  booksAPI: new BooksAPI(),
  authorsAPI: new AuthorsAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

// The `listen` method launches a web server.
server
  .listen({port: process.env.port || 4000})
  .then( ({url}) => {
    console.log(`graphQl running at ${url}`);
  });