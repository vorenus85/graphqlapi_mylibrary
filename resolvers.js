const { books } = require('./queries/books');
const { bookById } = require('./queries/bookById');
const { booksByGenre } = require('./queries/booksByGenre');
const { booksByAuthor } = require('./queries/booksByAuthor');
const { booksWithoutGenre } = require('./queries/booksWithoutGenre');
const { booksByTitle } = require('./queries/booksByTitle');
const { booksByTag } = require('./queries/booksByTag');
const { booksByIsRead } = require('./queries/booksByIsRead');
const { authors } = require('./queries/authors');
const { authorById } = require('./queries/authorById');
const { upsertAuthor } = require('./mutations/upsertAuthor');
const { upsertBook } = require('./mutations/upsertBook');
const { deleteBook } = require('./mutations/deleteBook');
const { deleteAuthor } = require('./mutations/deleteAuthor');

module.exports = {
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
};