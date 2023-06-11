import { books } from'./queries/books.js';
import { bookById } from'./queries/bookById.js';
import { booksByGenre } from'./queries/booksByGenre.js';
import { booksByAuthor } from'./queries/booksByAuthor.js';
import { booksWithoutGenre } from'./queries/booksWithoutGenre.js';
import { booksByTitle } from'./queries/booksByTitle.js';
import { booksByTag } from'./queries/booksByTag.js';
import { booksByIsRead } from'./queries/booksByIsRead.js';
import { authors } from'./queries/authors.js';
import { authorById } from'./queries/authorById.js';
import { upsertAuthor } from'./mutations/upsertAuthor.js';
import { upsertBook } from'./mutations/upsertBook.js';
import { deleteBook } from'./mutations/deleteBook.js';
import { deleteAuthor } from'./mutations/deleteAuthor.js';

export default {
  Query: {
    books,
    bookById,
    booksByGenre,
    booksByAuthor,
    // largestSeries: () => books, // TODO
    booksWithoutGenre,
    booksByTitle,
    booksByTag,
    booksByIsRead,
    authors,
    authorById
  },
  Mutation: {
    upsertAuthor,
    upsertBook,
    deleteBook,
    deleteAuthor,
  },
  Genre: {
    SCI_FI: 'sci-fi',
    FANTASY: 'fantasy',
    CRIME: 'krimi',
    HISTORICAL_ADVENTURE: 'történelmi regény',
    HISTORY: 'történelem'
  },
  SingleBookResponse: {
    __resolveType(obj) {
      // eslint-disable-next-line no-prototype-builtins
      if(obj.hasOwnProperty('success')){
        return 'Response';
      }
      return 'Book';
    }
  },
  SingleAuthorResponse: {
    __resolveType(obj) {
      // eslint-disable-next-line no-prototype-builtins
      if(obj.hasOwnProperty('success')){
        return 'Response';
      }
      return 'Author';
    }
  },
  BooksResponse: {
    __resolveType(obj) {
      // eslint-disable-next-line no-prototype-builtins
      if(obj.hasOwnProperty('success')){
        return 'Response';
      }
      return 'Books';
    }
  },
  AuthorsResponse: {
    __resolveType(obj) {
      // eslint-disable-next-line no-prototype-builtins
      if(obj.hasOwnProperty('success')){
        return 'Response';
      }
      return 'Authors';
    }
  }
};