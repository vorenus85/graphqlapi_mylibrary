const booksByIsRead = async (parent, args, {dataSources}, info) => {
  return await dataSources.booksAPI.getBooksByIsRead(args);
};

export {booksByIsRead};  