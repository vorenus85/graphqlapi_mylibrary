const booksByAuthor = async (parent, {author}, {dataSources}, info) => {
  return await dataSources.booksAPI.getBooksByAuthor(author);
};

export {booksByAuthor};