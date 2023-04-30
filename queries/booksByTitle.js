const booksByTitle = async (parent, {title}, {dataSources}, info) => {  
    // todo minimum char length 3
    // todo not found
    return await dataSources.booksAPI.getBooksByTitle(title)
};

module.exports = {booksByTitle}