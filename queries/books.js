const books = async (parent, args, { dataSources }, info) => {
  return await dataSources.booksAPI.getBooks(args);
};

export {books};