const booksByGenre = async (parent, {id}, {dataSources}, info ) => {
    return await dataSources.booksAPI.getBookById(id);
}

module.exports = { booksByGenre }