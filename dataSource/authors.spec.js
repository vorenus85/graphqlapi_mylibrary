import { ApolloServer} from 'apollo-server';
import dataSources from '../services.js';
import typeDefs from '../schema';
import resolvers from '../resolvers';
import { 
  UPSERT_AUTHOR_MUTATION,
  AUTHORS_QUERY,
  AUTHOR_BY_ID
} from '../testUtils'


describe('Test author queries', (db)=>{
  const testServer = new ApolloServer({ typeDefs, resolvers, dataSources });

  it('upsertAuthor mutation should return AUTHOR_SUCCESSFULLY_INSERTED', async () =>{
      const result = await testServer.executeOperation({
        query: UPSERT_AUTHOR_MUTATION,
        variables: {
          "author": {
            "author": "Sir Arthur Conan Doyle"
          }
        },
      });
      expect(result.errors).toBeUndefined();
      expect(result.data?.upsertAuthor?.success).toBe(true);
      expect(result.data?.upsertAuthor?.message).toBe('AUTHOR_SUCCESSFULLY_INSERTED');
  });

  it('upsertAuthor mutation should return AUTHOR_UPDATE_FAILED', async () =>{
    const result = await testServer.executeOperation({
      query: UPSERT_AUTHOR_MUTATION,
      variables: {
        "author": {
          "id": "99",
          "author": "Sir Arthur Conan Doyle"
        }
      },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data?.upsertAuthor?.success).toBe(false);
    expect(result.data?.upsertAuthor?.message).toBe('AUTHOR_UPDATE_FAILED');
  });

  it('upsertAuthor mutation should return AUTHOR_SUCCESSFULLY_UPDATED', async () =>{
    const result = await testServer.executeOperation({
      query: UPSERT_AUTHOR_MUTATION,
      variables: {
        "author": {
          "id": "1",
          "author": "Updated Example Author"
        }
      },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data?.upsertAuthor?.success).toBe(true);
    expect(result.data?.upsertAuthor?.message).toBe('AUTHOR_SUCCESSFULLY_UPDATED');
  });


  it('authors query should return with proper authors array', async ()=>{
      const result = await testServer.executeOperation({
        query: AUTHORS_QUERY,
        });
  
      expect(result.errors).toBeUndefined()
      expect(result.data?.authors.authorsResult.length).toBe(2);
      // check response fields!
      expect(result.data?.authors.authorsResult[0].id).toBeDefined();
      expect(result.data?.authors.authorsResult[0].author).toBeDefined();
  });

  it('AuthorById query should return with proper authors array', async ()=>{
    const result = await testServer.executeOperation({
      query: AUTHOR_BY_ID,
      variables: { "authorByIdId": "1"},
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.authorById.id).toBeDefined();
    expect(result.data?.authorById.author).toBeDefined();
  });

  // TODO deleteAuthorById

});





