const booksByTag = async (parent, {tag}, {dataSources}, info) => {
  return await dataSources.booksAPI.getBooksByTag(tag);
};

export {booksByTag};