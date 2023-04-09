module.exports = {
    Query: {
      books: (parent, args, { dataSources }, info) => {
        return dataSources.booksAPI.getBooks(args);
      },
      bookById: (parent, {id}, {dataSources}, info ) => {
        const result = dataSources.booksAPI.getBookById(id);
        return result;
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
      booksByTag: (parent, {tag}, {dataSources}, info) => {
        return dataSources.booksAPI.getBooksByTag(tag);
      },
      booksByIsRead: (parent, args, {dataSources}, info) => {
        return dataSources.booksAPI.getBooksByIsRead(args);
      },
    },
    Genre: {
      SCI_FI: "sci-fi",
      FANTASY: "fantasy",
      CRIME: "krimi",
      HISTORICAL_ADVENTURE: "történelmi regény",
      HISTORY: "történelem"
    },
  };