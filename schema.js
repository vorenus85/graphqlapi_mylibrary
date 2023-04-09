const { gql } = require("apollo-server");
module.exports= gql`
type Book {
  id: Int!
  title: String!
  author: String!
  tags: [String],
  isRead: Boolean!
  genre: Genre
}

# create author type && json!

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