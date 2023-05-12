
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');
const lodashId = require('lodash-id');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./db.json');
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
    return this.db.filter(args).value();
  }

  getBookById(id){
    // todo try,catch if not find
    let result = this.db.find({id: id}).value();

    if(result){
      return result;
    }else {
      return {success: false, message: 'BOOK_NOT_FOUND'};
    }
  }

  updateBook(book){
    // todo try,catch if not find
    const newBook = this.db.find({id: book.id});
    console.log(newBook.value());

    this.db.find({id: book.id}).assign(book).value();
    return this.db.write();
  }

  insertBook(book){
    return this.db.insert(book).write();
  }

  getBooksByGenre(genre){
    // todo try,catch if not find
    return this.db.filter({genre}).value();
  }

  getBooksByAuthor(author){
    // todo try,catch if not find
    return this.db.filter(function(item){
      const authors = item.authors;
      const result = _.filter(authors,function(authorItem){
        const result = authorItem.author.indexOf(author) !== -1;
        return result;
      });
      return result.length;
    }).value();
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