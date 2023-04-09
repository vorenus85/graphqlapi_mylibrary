module.exports = {
    Query: {
      books: (parent, args, { dataSources }, info) => {
        return dataSources.booksAPI.getBooks(args);
      },
      bookById: (parent, {id}, {dataSources}, info ) => {
        return dataSources.booksAPI.getBookById(id);
      },
      booksByGenre: (parent, {genre}, {dataSources}, info) => {
        return dataSources.booksAPI.getBooksByGenre(genre)
      },
      booksByAuthor: (parent, {author}, {dataSources}, info) => {  
        return dataSources.booksAPI.getBooksByAuthor(author)
      },
      // largestSeries: () => books,
      // booksWithoutGenre: () => books,
      // bookByTitle: () => books,
      // booksByTags: () => books,
      // booksByIsRead: () => books,
    },
  };