import { ApolloServer} from 'apollo-server';
// import dataSources from './services.js';
import typeDefs from './schema';
import resolvers from './resolvers';

const dataSources = () => ({
  authorsAPI: {
    getAuthors: () => {
      return [{id: '1', author: 'Simon Scarrow'}, {id: '2', author: 'George Simenon'}];
    },
    getAuthorById: (id) => {
      return {id: '1', author: 'Simon Scarrow'};
    }
  }
});

describe('Test author queries', ()=>{
  const testServer = new ApolloServer({ typeDefs, resolvers, dataSources });

  it('authors query should return with proper authors array', async ()=>{
      const result = await testServer.executeOperation({
      query: `query {
                  authors {
                      ... on Author {
                          id 
                          author
                      }
                      ... on Response {
                        success
                        message
                      }
                  }
              }`,
      });
  
      expect(result.errors).toBeUndefined()
      expect(result.data?.authors.length).toBe(2);
      // check response fields!
      expect(result.data?.authors[0].id).toBeDefined();
      expect(result.data?.authors[0].author).toBeDefined();
  });

  it('AuthorById query should return with proper authors array', async ()=>{
    const result = await testServer.executeOperation({
      query: `query 
              AuthorById($authorByIdId: String) {
                authorById(id: $authorByIdId) {
                  ... on Author {
                    id 
                    author
                }
                ... on Response {
                  success
                  message
                }
              }
            }`,
      variables: { "authorByIdId": "1"},
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.authorById.id).toBeDefined();
    expect(result.data?.authorById.author).toBeDefined();
  });

  /*
  it('AuthorById query should return error array', async ()=>{
    expect(false.toBe(true))
  });
  */

})





