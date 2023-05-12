const upsertAuthor = async (parent, {author}, {dataSources}, info) => {
  const {id, ...restOf } = author;

  if(id){
    return await dataSources.authorsAPI.updateAuthor(author);

  } else {
    return await dataSources.authorsAPI.insertAuthor(author);
  }
};

module.exports = {upsertAuthor};