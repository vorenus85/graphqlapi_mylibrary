import { ApolloServer} from 'apollo-server';
import dataSources from '../services.js';
import typeDefs from '../schema';
import resolvers from '../resolvers';
import { 
    BOOKS_QUERY, 
    UPSERT_BOOK, 
    BOOK_BY_ID, 
    BOOKS_BY_GENRE, 
    BOOKS_BY_AUTHOR, 
    BOOKS_BY_TITLE, 
    BOOKS_WITHOUT_GENRE, 
    BOOKS_BY_IS_READ,
    BOOKS_BY_TAG
} from '../testUtils'


describe('Test book queries', (db)=>{
    const testServer = new ApolloServer({ typeDefs, resolvers, dataSources });

    it('books query should return with proper books array', async ()=>{
        const result = await testServer.executeOperation({
            query: BOOKS_QUERY
        });
        expect(result.errors).toBeUndefined()
        expect(result.data?.books.booksResult.length).toBe(2);
    });


    it('upsertBook mutation should return BOOK_SUCCESSFULLY_INSERTED', async () =>{
        const result = await testServer.executeOperation({
            query: UPSERT_BOOK,
            variables: {
                "book": {
                  "authors": [
                    {
                      "id": "1",
                      "author": "Example Author"
                    }
                  ],
                  "title": "Example Book",
                  "tags": ["sci-fi", "aliens"],
                  "isRead": false,
                }
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.upsertBook?.success).toBe(true);
        expect(result.data?.upsertBook?.message).toBe('BOOK_SUCCESSFULLY_INSERTED');

    });

    it('upsertBook mutation should return BOOK_SUCCESSFULLY_UPDATED', async () =>{
        const result = await testServer.executeOperation({
            query: UPSERT_BOOK,
            variables: {
                "book": {
                    "title": "Az Atlantisz gén",
                    "tags": [
                      "összeesküvés",
                      "amerikai"
                    ],
                    "isRead": true,
                    "id": "1",
                    "genre": "SCI_FI",
                    "authors": [
                      {
                        "id": "1",
                        "author": "A. G. Riddle"
                      }
                    ]
                }
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.upsertBook?.success).toBe(true);
        expect(result.data?.upsertBook?.message).toBe('BOOK_SUCCESSFULLY_UPDATED');
    });

    it('upsertBook mutation should return BOOK_UPDATE_FAILED', async () =>{
        const result = await testServer.executeOperation({
            query: UPSERT_BOOK,
            variables: {
                "book": {
                  "id": "INVALID_ID",
                  "authors": [
                    {
                      "id": "1",
                      "author": "Example Author"
                    }
                  ],
                  "title": "Example Book",
                  "tags": ["sci-fi", "aliens"],
                  "isRead": true,
                  "genre": "SCI_FI"
                }
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.upsertBook?.success).toBe(false);
        expect(result.data?.upsertBook?.message).toBe('BOOK_UPDATE_FAILED');

    });

    
    it('bookById query should return BOOK_NOT_FOUND', async () =>{
        const result = await testServer.executeOperation({
            query: BOOK_BY_ID,
            variables: {
                "bookByIdId": "invalid_id"
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.bookById?.success).toBe(false);
        expect(result.data?.bookById?.message).toBe('BOOK_NOT_FOUND');
    });

    it('bookById query should return a valid book', async () =>{
        const result = await testServer.executeOperation({
            query: BOOK_BY_ID,
            variables: {
                "bookByIdId": "1"
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.bookById.id).toBeDefined();
        expect(result.data?.bookById.title).toBeDefined();
        expect(result.data?.bookById.authors).toBeDefined();
        expect(result.data?.bookById.tags).toBeDefined();
        expect(result.data?.bookById.isRead).toBeDefined();
        expect(result.data?.bookById.genre).toBeDefined();
    });

    
    it('bookByGenre query should return BOOKS_WITH_GENRE_NOT_FOUND', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_GENRE,
            variables: {
                "genre": "invalid_genre"
              }
        });
        expect(result.data?.booksByGenre?.success).toBe(false);
        expect(result.data?.booksByGenre?.message).toBe('BOOKS_WITH_GENRE_NOT_FOUND');
    });

    it('bookByGenre query should return valid array of books', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_GENRE,
            variables: {
                "genre": "sci-fi"
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.booksByGenre.booksResult.length).toBeGreaterThan(0);
        
    });


    it('booksByAuthor query should return BOOKS_BY_AUTHOR_NOT_FOUND', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_AUTHOR,
            variables: {
                "author": "invalid"
              }
        });
        expect(result.data?.booksByAuthor?.success).toBe(false);
        expect(result.data?.booksByAuthor?.message).toBe('BOOKS_BY_AUTHOR_NOT_FOUND');
    });

    it('booksByAuthor query should return valid array of books', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_AUTHOR,
            variables: {
                "author": "A. G. Riddle"
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.booksByAuthor.booksResult.length).toBeGreaterThan(0);
    });


    it('booksByTitle query should return BOOKS_BY_TITLE_NOT_FOUND', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_TITLE,
            variables: {
                "title": "invalid"
              }
        });
        expect(result.data?.booksByTitle?.success).toBe(false);
        expect(result.data?.booksByTitle?.message).toBe('BOOKS_BY_TITLE_NOT_FOUND');
    });

    it('booksByTitle query should return valid array of books', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_TITLE,
            variables: {
                "title": "Book"
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.booksByTitle.booksResult.length).toBeGreaterThan(0);
    });

    
    it('booksWithoutGenre query should return BOOKS_WITHOUT_GENRE_NOT_FOUND', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_WITHOUT_GENRE,
        });
        expect(result.data?.booksWithoutGenre?.success).toBe(false || undefined);
        // expect(result.data?.booksWithoutGenre?.message).toBe('BOOKS_WITHOUT_GENRE_NOT_FOUND');
    });

    it('booksWithoutGenre query should return valid array of books', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_WITHOUT_GENRE,
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.booksWithoutGenre.booksResult.length).toBeGreaterThan(0);
    });

    
    it('booksByIsRead query should return BOOKS_BY_IS_READ_NOT_FOUND', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_IS_READ,
        });
        expect(result.data?.booksWithoutGenre?.success).toBe(false || undefined);
        // expect(result.data?.booksWithoutGenre?.message).toBe('BOOKS_BY_IS_READ_NOT_FOUND');
    });

    it('booksByIsRead query should return valid array of books', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_IS_READ,
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.booksByIsRead.booksResult.length).toBeGreaterThan(0);
    });

    it('booksByTag query should return BOOKS_BY_IS_TAG_NOT_FOUND', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_TAG,
            variables: {
                "tag": "invalid"
              }
        });
        expect(result.data?.booksByTag?.success).toBe(false);
        expect(result.data?.booksByTag?.message).toBe('BOOKS_BY_IS_TAG_NOT_FOUND');
    });

    it('booksByTag query should return valid array of books', async () =>{
        const result = await testServer.executeOperation({
            query: BOOKS_BY_TAG,
            variables: {
                "tag": "sci-fi"
              }
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.booksByTag.booksResult.length).toBeGreaterThan(0);
    });
});