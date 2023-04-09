module.exports = {
    Query: {
      books: (parent, args, { dataSources }, info) => {
        return dataSources.booksAPI.getBooks(args);
      },
      bookById: (parent, {id}, {dataSources}, info ) => {
        // todo id not found
        return dataSources.booksAPI.getBookById(id);
      },
      booksByGenre: (parent, {genre}, {dataSources}, info) => {
        // todo minimum char length 3
        // todo not found
        return dataSources.booksAPI.getBooksByGenre(genre)
      },
      booksByAuthor: (parent, {author}, {dataSources}, info) => {  
        // todo minimum char length 3
        // todo not found
        return dataSources.booksAPI.getBooksByAuthor(author)
      },
      // largestSeries: () => books,
      booksWithoutGenre: (parent, args, {dataSources}, info) => {
        return dataSources.booksAPI.getBooksWithoutGenre(args);
      },
      booksByTitle: (parent, {title}, {dataSources}, info) => {  
        // todo minimum char length 3
        // todo not found
        return dataSources.booksAPI.getBooksByTitle(title)
      },
      // booksByTags: () => books,
      // booksByIsRead: () => books,
    },
    Genre: {
      SCI_FI: "sci-fi",
      FANTASY: "fantasy",
      CRIME: "krimi",
      HISTORICAL_ADVENTURE: "történelmi regény",
      HISTORY: "történelem"
    }
  };