import { gql }from 'apollo-server';

export default gql`
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

type Authors {
  authorsResult: [Author]
}

type Books {
  booksResult: [Book]
}

union SingleAuthorResponse = Author | Response

union SingleBookResponse = Book | Response

union AuthorsResponse = Authors | Response

union BooksResponse = Books | Response

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

# todo authorByName query

type Query {
  authors: AuthorsResponse
  authorById(id: String): SingleAuthorResponse
  books: BooksResponse
  bookById(id: String): SingleBookResponse
  booksByGenre(genre: String): BooksResponse
  booksByAuthor(author: String): BooksResponse
  booksByTitle(title: String): BooksResponse
  booksWithoutGenre: BooksResponse
  booksByIsRead: BooksResponse
  booksByTag(tag: String): BooksResponse
}

type Mutation {
  upsertAuthor(author: AuthorInput): Response
  upsertBook(book: BookInput): Response
  deleteAuthor(id: String): Response
  deleteBook(id: String): Response
}
`;