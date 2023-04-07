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

}

module.exports = BooksAPI