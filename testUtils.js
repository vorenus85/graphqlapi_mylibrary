const BOOKS_QUERY = `query Books {
  books {
    ... on Books {
      booksResult {
        id
        title
        authors {
          id
          author
        }
        tags
        isRead
        genre
      }
    }
    ... on Response {
      success
      message
    }
  }
}`

const UPSERT_BOOK = `mutation UpsertBook($book: BookInput) {
    upsertBook(book: $book) {
      success
      message
    }
  }`;

const BOOK_BY_ID = `query BookById($bookByIdId: String) {
    bookById(id: $bookByIdId) {
      ... on Book {
        id
        title
        authors {
          id
          author
        }
        tags
        isRead
        genre
      }
      ... on Response {
        success
        message
      }
    }
  }`;

const BOOKS_BY_GENRE = `query BooksByGenre($genre: String) {
  booksByGenre(genre: $genre) {
    ... on Books {
      booksResult {
        id
        title
        authors {
          id
          author
        }
        tags
        isRead
        genre
      }
    }
    ... on Response {
      success
      message
    }
  }
}`;

const BOOKS_BY_AUTHOR = `query BooksByAuthor($author: String) {
  booksByAuthor(author: $author) {
    ... on Books {
      booksResult {
        id
        title
        authors {
          id
          author
        }
        tags
        isRead
        genre
      }
    }
    ... on Response {
      success
      message
    }
  }
}`;

const BOOKS_BY_TITLE = `query BooksByTitle($title: String) {
  booksByTitle(title: $title) {
    ... on Books {
      booksResult {
        id
        title
        authors {
          id
          author
        }
        tags
        isRead
        genre
      }
    }
    ... on Response {
      success
      message
    }
  }
}`;

const BOOKS_WITHOUT_GENRE = `query BooksWithoutGenre {
  booksWithoutGenre {
    ... on Books {
      booksResult {
        id
        title
        authors {
          id
          author
        }
        tags
        isRead
        genre
      }
    }
    ... on Response {
      success
      message
    }
  }
}`;

  const BOOKS_BY_IS_READ = `query BooksByIsRead {
    booksByIsRead {
      ... on Books {
        booksResult {
          id
          title
          authors {
            id
            author
          }
          tags
          isRead
          genre
        }
      }
      ... on Response {
        success
        message
      }
    }
  }`;

  const BOOKS_BY_TAG = `query BooksByTag($tag: String) {
    booksByTag(tag: $tag) {
      ... on Books {
        booksResult {
          id
          title
          authors {
            id
            author
          }
          tags
          isRead
          genre
        }
      }
      ... on Response {
        success
        message
      }
    }
  }`;

  const UPSERT_AUTHOR_MUTATION = `mutation UpsertAuthor($author: AuthorInput) {
    upsertAuthor(author: $author) {
      success
      message
    }
  }`

  const AUTHORS_QUERY = `query Authors {
    authors {
      ... on Authors {
        authorsResult {
          id
          author
        }
      }
      ... on Response {
        success
        message
      }
    }
  }`

  const AUTHOR_BY_ID = `query AuthorById($authorByIdId: String) {
    authorById(id: $authorByIdId) {
      ... on Author {
        id
        author
      }
      ... on Response {
        success
        message
      }
    }
  }`

  module.exports = {
    BOOKS_QUERY, 
    UPSERT_BOOK, 
    BOOK_BY_ID, 
    BOOKS_BY_GENRE, 
    BOOKS_BY_AUTHOR, 
    BOOKS_BY_TITLE, 
    BOOKS_WITHOUT_GENRE,
    BOOKS_BY_IS_READ,
    BOOKS_BY_TAG,
    UPSERT_AUTHOR_MUTATION,
    AUTHORS_QUERY,
    AUTHOR_BY_ID,
}