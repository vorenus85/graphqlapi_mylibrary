const BOOKS_QUERY = `query Books {
    books {
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

const BOOKS_BY_AUTHOR = `query BooksByAuthor($author: String) {
    booksByAuthor(author: $author) {
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

const BOOKS_BY_TITLE = `query BooksByTitle($title: String) {
    booksByTitle(title: $title) {
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

const BOOKS_WITHOUT_GENRE = `query BooksWithoutGenre {
    booksWithoutGenre {
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

  const BOOKS_BY_IS_READ = `query BooksByIsRead {
    booksByIsRead {
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

  const BOOKS_BY_TAG = `query BooksByTag($tag: String) {
    booksByTag(tag: $tag) {
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

  module.exports = {
    BOOKS_QUERY, 
    UPSERT_BOOK, 
    BOOK_BY_ID, 
    BOOKS_BY_GENRE, 
    BOOKS_BY_AUTHOR, 
    BOOKS_BY_TITLE, 
    BOOKS_WITHOUT_GENRE,
    BOOKS_BY_IS_READ,
    BOOKS_BY_TAG
}