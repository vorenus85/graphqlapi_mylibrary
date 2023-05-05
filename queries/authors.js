const authors = async (parent, args, { dataSources }, info) => {
  return await dataSources.authorsAPI.getAuthors(args);
};

module.exports = {authors};