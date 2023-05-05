const upsertAuthor = async (parent, {author}, {dataSources}, info) => {
  const {id, ...restOf } = author;

  if(id){
    try {
      await dataSources.authorsAPI.updateAuthor(author);
      return await {success: true, message: 'AUTHOR_SUCCESSFULLY_UPDATED'};
    } catch(e){
      console.log(e);
      return {success: false, message: 'AUTHOR_UPDATE_FAILED'};
    }

  } else {
    try{
      await dataSources.authorsAPI.insertAuthor(author);
      return await {success: true, message: 'AUTHOR_SUCCESSFULLY_INSERTED'};
    } catch(e){
      console.log(e);
      return {success: false, message: 'AUTHOR_INSERT_FAILED'};
    }
  }
};

module.exports = {upsertAuthor};