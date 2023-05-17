const authorById = async (parent, {id}, {dataSources}, info ) => {
  return await dataSources.authorsAPI.getAuthorById(id);
};
  
export {authorById};