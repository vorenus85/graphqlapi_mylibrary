const BooksAPI = require('./dataSource/books');
const AuthorsAPI = require('./dataSource/authors');

const dataSources = () =>({
  booksAPI: new BooksAPI(),
  authorsAPI: new AuthorsAPI(),
});

module.exports = dataSources; 