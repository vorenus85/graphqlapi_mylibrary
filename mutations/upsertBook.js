const upsertBook = async (parent, { book }, { dataSources }, info) => {
  const { id, ...restOf } = book;

  try {
    if (id) {
      await dataSources.booksAPI.updateBook(book);
      return { success: true, message: 'BOOK_SUCCESSFULLY_UPDATED' };
    } else {
      await dataSources.booksAPI.insertBook(book);
      return { success: true, message: 'BOOK_SUCCESSFULLY_INSERTED' };
    }
  } catch (e) {
    console.log(e);
    const errorMessage = id ? 'BOOK_UPDATE_FAILED' : 'BOOK_INSERT_FAILED';
    return { success: false, message: errorMessage };
  }
};

export { upsertBook };