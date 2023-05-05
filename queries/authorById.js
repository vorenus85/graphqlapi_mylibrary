const authorById = async (parent, {id}, {dataSources}, info ) => {
  return await dataSources.authorsAPI.getAuthorById(id);
};
  
module.exports = {authorById};