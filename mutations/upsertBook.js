const upsertBook = async (parent, { book }, { dataSources }, info) => {
  const { id, ...restOf } = book;
    if (id) {
      return await dataSources.booksAPI.updateBook(book);
    } else {
      return await dataSources.booksAPI.insertBook(book);
    }
};

export { upsertBook };