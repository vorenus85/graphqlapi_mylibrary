const upsertBook = async (parent, {book}, {dataSources}, info) => {
  const {id, ...restOf } = book;

  if(id){
    try {
      await dataSources.booksAPI.updateBook(book);
      return await {success: true, message: 'BOOK_SUCCESSFULLY_UPDATED'};
    }catch(e){
      console.log(e);
      return {success: false, message: 'BOOK_UPDATE_FAILED'};
    }
  } else {
    try{
      await dataSources.booksAPI.insertBook(book);
      return await {success: true, message: 'BOOK_SUCCESSFULLY_INSERTED'};
    } catch(e){
      console.log(e);
      return {success: false, message: 'BOOK_INSERT_FAILED'};
    }
  }

  
};

export {upsertBook};