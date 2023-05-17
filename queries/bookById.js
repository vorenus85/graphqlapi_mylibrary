const bookById = async (parent, {id}, {dataSources}, info ) => {
  return await dataSources.booksAPI.getBookById(id);
};

export {bookById};