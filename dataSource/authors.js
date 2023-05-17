
import {DataSource} from 'apollo-datasource';
import _ from 'lodash';
import db from '../adapters/authors.js';

class AuthorsAPI extends DataSource {
  constructor(){
    super();
  }

  initialize(config){
    
    this.db = db.get('authors');
  }

  getAuthors(args){
    try{
      return this.db.filter(args).value();
    } catch(e){
      console.error(e);
      return {success: false, message: 'ERROR_IN_GET_AUTHORS'};
    }
    
  }

  getAuthorById(id){
    let result;
    const author = this.db.filter({id: id}).value();

    if(author.length){
      result = author[0];
    } else {
      result = {success: false, message: 'AUTHOR_NOT_FOUND'};
    }
    return result;
  }

  updateAuthor(author){
    let result;
    const editedAuthor = this.db.find({id: author.id}).value();
    if(typeof editedAuthor !== 'undefined'){
      this.db.find({id: author.id}).assign(author).value();
      this.db.write();
      result = {success: true, message: 'AUTHOR_SUCCESSFULLY_UPDATED'};
    } else {
      result = {success: false, message: 'AUTHOR_UPDATE_FAILED'};
    }

    return result;
  }

  insertAuthor(author){
    try {
      this.db.insert(author).write();
      return {success: true, message: 'AUTHOR_SUCCESSFULLY_INSERTED'};
    } catch(e){
      console.error(e);
      return {success: false, message: 'AUTHOR_INSERT_FAILED'};
    }
    
  }

}

export default AuthorsAPI;