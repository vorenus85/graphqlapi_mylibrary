
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');
const lodashId = require("lodash-id");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./data/books.json");
const db = low(adapter);
db._.mixin(lodashId);

class BooksAPI extends DataSource {
  constructor(){
      super();
  }

  initialize(config){
    this.db = db.get("books");
  }

  getBooks(args){
    console.log(this.db)
    return this.db.filter(args).value();
  }

  getBookById(id){
    const book = this.db.filter({id: parseInt(id)}).value()
    return book[0];
  }

  getBooksByGenre(genre){
    return this.db.filter({genre}).value()
  }

  getBooksByAuthor(author){
    return this.db.filter(function(item){
      const authors = item.authors
      const result = _.filter(authors,function(authorItem){
        const result = authorItem.author.indexOf(author) !== -1
        return result
      })
      return result.length
    }).value()
  }

  getBooksByTitle(title){
    return this.db.filter(function(item){
      return item.title.indexOf(title) !== -1
    }).value()
  }

  getBooksWithoutGenre(args){
    return this.db.filter(function(item){
      return !item?.genre
    }).value()
  }

  getBooksByIsRead(args){
    const result = this.db.filter(function(item){
      return item.isRead === true
    }).value()
    return result;
  }

  getBooksByTag(tag){
    const result = this.db.filter(function(item){
      return item.tags.includes(tag)
    }).value()
    return result;
  }

}

module.exports = BooksAPI