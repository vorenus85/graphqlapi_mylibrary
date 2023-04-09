const { gql } = require("apollo-server");
module.exports= gql`
type Book {
  id: Int!
  title: String!
  author: String!
  tags: [String],
  isRead: Boolean!
  genre: String
}

type Query {
  books: [Book]
  bookById(id: Int): Book
  booksByGenre(genre: String): [Book]
  booksByAuthor(author: String): [Book]
}
`;
    