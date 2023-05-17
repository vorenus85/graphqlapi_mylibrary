const booksByTitle = async (parent, {title}, {dataSources}, info) => {
  return await dataSources.booksAPI.getBooksByTitle(title);
};

export {booksByTitle};