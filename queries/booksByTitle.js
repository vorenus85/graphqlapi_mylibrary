const booksByTitle = async (parent, {title}, {dataSources}, info) => {
  return await dataSources.booksAPI.getBooksByTitle(title);
};

module.exports = {booksByTitle};