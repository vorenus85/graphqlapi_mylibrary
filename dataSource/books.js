const books = require('../data/books.json');
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');

class BooksAPI extends DataSource {
  constructor(){
      super();
  }

  initialize(config){}

  getBooks(args){
    return _.filter(books,args);
  }

  getBookById(id){
    const book = _.filter(books, {id: parseInt(id)})
    return book[0];
  }

  getBooksByGenre(genre){
    return _.filter(books, {genre})
  }

  getBooksByAuthor(author){
    return _.filter(books, function(item){
      return item.author.indexOf(author) !== -1
    })
  }

}

module.exports = BooksAPI