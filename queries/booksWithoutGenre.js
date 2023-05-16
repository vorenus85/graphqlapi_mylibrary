const booksWithoutGenre = async (parent, args, {dataSources}, info) => {
  return await dataSources.booksAPI.getBooksWithoutGenre(args);
};

module.exports = {booksWithoutGenre};