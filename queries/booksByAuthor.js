const booksByAuthor = async (parent, {author}, {dataSources}, info) => {  
    // todo minimum char length 3
    // todo not found
    return await dataSources.booksAPI.getBooksByAuthor(author)
  }

  module.exports = {booksByAuthor}