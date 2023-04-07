module.exports = {
    Query: {
      books: (parent, args, { dataSources }, info) => {
        return dataSources.booksAPI.getBooks(args)
      },
      bookById: (parent, {id}, {books}, info ) => {
        return books.filter(book => book.id === id)
      },
      // bookByGenre: () => books,
      // bookByAuthor: () => books,
      // largestSeries: () => books,
      // bookWithoutGenre: () => books,
      // bookByTitle: () => books,
      // bookByTags: () => books,
      // bookByIsRead: () => books,
    },
  };