
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');
const lodashId = require('lodash-id');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./data/books.json');
const db = low(adapter);
db._.mixin(lodashId);

class BooksAPI extends DataSource {
  constructor(){
    super();
  }

  initialize(config){
    this.db = db.get('books');
  }

  getBooks(args){
    try {
      return this.db.filter(args).value();
    } catch(e){
      console.log(e);
      return [{success: false, message: 'ERROR_IN_GET_BOOKS'}];
    }
  }

  getBookById(id){
    let result;
    const book = this.db.filter({id: id}).value();

    if(book.length){
      result = book[0];
    }else {
      return {success: false, message: 'BOOK_NOT_FOUND'};
    }
    return result;
  }

  updateBook(book){
    let result;
    const editedBook = this.db.find({id: book.id}).value();

    if(typeof editedBook !== 'undefined'){
      this.db.find({id: book.id}).assign(book).value();
      this.db.write();
      result = {success: true, message: 'BOOK_SUCCESSFULLY_UPDATED'};
    } else {
      result = {success: false, message: 'BOOK_UPDATE_FAILED'};
    }

    return result;
    
  }

  insertBook(book){
    try {
      this.db.insert(book).write();
      return {success: true, message: 'BOOK_SUCCESSFULLY_INSERTED'};
    } catch(e){
      console.error(e);
      return {success: false, message: 'BOOK_INSERT_FAILED'};
    }
  }

  getBooksByGenre(genre){
    try {
      const result = this.db.filter({genre}).value();
      if(result.length){
        return result;
      } else {
        return [{success: false, message: 'BOOKS_WITH_GENRE_NOT_FOUND'}];
      }
    } catch(e){
      console.log(e);
      return [{success: false, message: 'BOOKS_BY_GENRE_FAILED'}];
    }
    
  }

  getBooksByAuthor(author){
    try {
      const result = this.db.filter(function(item){
        const authors = item.authors;
        const result = _.filter(authors,function(authorItem){
          const result = authorItem.author.indexOf(author) !== -1;
          return result;
        });
        return result.length;
      }).value();
  
      if(result.length){
        return result;
      } else {
        return [{success: false, message: 'BOOKS_BY_AUTHOR_NOT_FOUND'}];
      }
    } catch(e) {
      console.log(e);
      return [{success: false, message: 'ERROR_IN_BOOKS_BY_AUTHOR'}];
    }
    
  }

  getBooksByTitle(title){
    // todo try,catch if not find
    return this.db.filter(function(item){
      return item.title.indexOf(title) !== -1;
    }).value();
  }

  getBooksWithoutGenre(args){
    return this.db.filter(function(item){
      return !item?.genre;
    }).value();
  }

  getBooksByIsRead(args){
    const result = this.db.filter(function(item){
      return item.isRead === true;
    }).value();
    return result;
  }

  getBooksByTag(tag){
    const result = this.db.filter(function(item){
      return item.tags.includes(tag);
    }).value();
    return result;
  }

}

module.exports = BooksAPI;