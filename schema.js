const { gql } = require("apollo-server");
module.exports= gql`
type Book {
  id: Int!
  title: String!
  authors: [Author]
  tags: [String],
  isRead: Boolean!
  genre: Genre
}

type Author {
  id: Int!
  author: String!
}

# the convention for enum is use all capital letters!
enum Genre {
  SCI_FI
  FANTASY
  CRIME
  HISTORICAL_ADVENTURE
  HISTORY
}

type Query {
  books: [Book]
  bookById(id: Int): Book
  booksByGenre(genre: String): [Book]
  booksByAuthor(author: String): [Book]
  booksByTitle(title: String): [Book]
  booksWithoutGenre: [Book]
  booksByIsRead: [Book]
  booksByTag(tag: String): [Book]
}
`;