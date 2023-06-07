import { DataSource } from 'apollo-datasource';
import _ from 'lodash';
import db from '../adapters/books.js';

class BooksAPI extends DataSource {
  constructor() {
    super();
    this.db = db.get('books');
  }

  handleError(message) {
    return { success: false, message };
  }

  getBooks(args) {
    try {
      return this.db.filter(args).value();
    } catch (e) {
      return this.handleError('ERROR_IN_GET_BOOKS');
    }
  }

  getBookById(id) {
    const book = this.db.filter({ id }).value();
    if (book.length) {
      return book[0];
    } else {
      return this.handleError('BOOK_NOT_FOUND');
    }
  }

  updateBook(book) {
    const editedBook = this.db.find({ id: book.id }).value();
    // console.log(editedBook);
    if (typeof editedBook !== 'undefined') {
      this.db.find({ id: book.id }).assign(book).value();
      this.db.write();
      return { success: true, message: 'BOOK_SUCCESSFULLY_UPDATED' };
    } else {
      return this.handleError('BOOK_UPDATE_FAILED');
    }
  }

  insertBook(book) {
    try {
      this.db.insert(book).write();
      return { success: true, message: 'BOOK_SUCCESSFULLY_INSERTED' };
    } catch (e) {
      return this.handleError('BOOK_INSERT_FAILED');
    }
  }

  getBooksByGenre(genre) {
    try {
      const result = this.db.filter({ genre }).value();
      if (result.length) {
        return result;
      } else {
        return this.handleError('BOOKS_WITH_GENRE_NOT_FOUND');
      }
    } catch (e) {
      return this.handleError('BOOKS_BY_GENRE_FAILED');
    }
  }

  getBooksByAuthor(author) {
    try {
      const result = this.db.filter(item => {
        const authors = item.authors;
        const filteredAuthors = _.filter(authors, authorItem => {
          return authorItem.author.includes(author);
        });
        return filteredAuthors.length;
      }).value();

      if (result.length) {
        return result;
      } else {
        return this.handleError('BOOKS_BY_AUTHOR_NOT_FOUND');
      }
    } catch (e) {
      return this.handleError('ERROR_IN_BOOKS_BY_AUTHOR');
    }
  }

  getBooksByTitle(title) {
    try {
      const result = this.db.filter(item => {
        return item.title.includes(title);
      }).value();
      return result.length ? result : this.handleError('BOOKS_BY_TITLE_NOT_FOUND');
    } catch (e) {
      return this.handleError('ERROR_IN_BOOKS_BY_TITLE');
    }
  }

  getBooksWithoutGenre() {
    try {
      const result = this.db.filter(item => !item?.genre).value();
      return result.length ? result : this.handleError('BOOKS_WITHOUT_GENRE_NOT_FOUND');
    } catch (e) {
      return this.handleError('ERROR_IN_BOOKS_WITHOUT_GENRE');
    }
  }

  getBooksByIsRead() {
    try {
      const result = this.db.filter(item => item.isRead === true).value();
      return result.length ? result : this.handleError('BOOKS_BY_IS_READ_NOT_FOUND');
    } catch (e) {
      return this.handleError('ERROR_IN_BOOKS_BY_IS_READ');
    }
  }

  getBooksByTag(tag) {
    try {
      const result = this.db.filter(item => item.tags.includes(tag)).value();
      return result.length ? result : this.handleError('BOOKS_BY_IS_TAG_NOT_FOUND');
    } catch (e) {
      return this.handleError('ERROR_IN_BOOKS_BY_TAG');
    }
  }
}

export default BooksAPI;