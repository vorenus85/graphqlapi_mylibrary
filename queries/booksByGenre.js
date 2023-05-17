const booksByGenre = async (parent, {genre}, {dataSources}, info ) => {
  const result = await dataSources.booksAPI.getBooksByGenre(genre);
  return result;
};

export { booksByGenre };