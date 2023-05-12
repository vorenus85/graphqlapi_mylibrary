const { gql } = require('apollo-server');
module.exports= gql`
type Book {
  id: String!
  title: String!
  authors: [Author]
  tags: [String],
  isRead: Boolean
  genre: Genre
}

type Author {
  id: String!
  author: String!
}

type Response {
  success: Boolean!
  message: String!
}

union AuthorResponse = Author | Response

union BookResponse = Book | Response

input AuthorInput {
  id: String
  author: String
}

input BookInput {
  id: String
  authors: [AuthorInput]
  title: String
  tags: [String],
  isRead: Boolean
  genre: Genre
}

# the convention for enum is use all capital letters!
enum Genre {
  SCI_FI
  FANTASY
  CRIME
  HISTORICAL_ADVENTURE
  HISTORY
}

# todo authorById, authorByName query

type Query {
  authors: [AuthorResponse]
  authorById(id: String): AuthorResponse
  books: [Book]
  bookById(id: String): Book
  booksByGenre(genre: String): [Book]
  booksByAuthor(author: String): [Book]
  booksByTitle(title: String): [Book]
  booksWithoutGenre: [Book]
  booksByIsRead: [Book]
  booksByTag(tag: String): [Book]
}

type Mutation {
  upsertAuthor(author: AuthorInput): Response
  upsertBook(book: BookInput): Response
  deleteAuthor(id: String): Response
  deleteBook(id: String): Response
}
`;