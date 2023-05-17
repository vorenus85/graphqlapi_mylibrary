import BooksAPI from './dataSource/books.js';
import AuthorsAPI from './dataSource/authors.js';

const dataSources = () =>({
  booksAPI: new BooksAPI(),
  authorsAPI: new AuthorsAPI(),
});

export default dataSources; 