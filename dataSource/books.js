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
      const authors = item.authors
      const result = _.filter(authors, function(authorItem){
        const result = authorItem.author.indexOf(author) !== -1
        return result
      })
      return result.length
    })
  }

  getBooksByTitle(title){
    return _.filter(books, function(item){
      return item.title.indexOf(title) !== -1
    })
  }

  getBooksWithoutGenre(args){
    return _.filter(books, function(item){
      return !item?.genre
    })
  }

  getBooksByIsRead(args){
    const result = _.filter(books, function(item){
      return item.isRead === true
    })
    return result;
  }

  getBooksByTag(tag){
    const result = _.filter(books, function(item){
      return item.tags.includes(tag)
    })
    return result;
  }

}

module.exports = BooksAPI