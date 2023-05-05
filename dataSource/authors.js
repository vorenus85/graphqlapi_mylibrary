
const {DataSource} = require('apollo-datasource');
const _ = require('lodash');
const lodashId = require('lodash-id');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./data/authors.json');
const db = low(adapter);
db._.mixin(lodashId);

class AuthorsAPI extends DataSource {
  constructor(){
    super();
  }

  initialize(config){
    this.db = db.get('authors');
  }

  getAuthors(args){
    return this.db.filter(args).value();
  }

  getAuthorById(id){
    // todo try,catch if not find
    const author = this.db.filter({id: parseInt(id)}).value();
    return author[0];
  }

  updateAuthor(author){
    // todo try,catch if not find
    return this.db.find({id: author.id}).assign(author).write();
  }

  insertAuthor(author){
    return this.db.insert(author).write();
  }

}

module.exports = AuthorsAPI;