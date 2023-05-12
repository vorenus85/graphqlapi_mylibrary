# graphqlapi_mylibrary
This is a graphql learning project, creating api for books.

## Getting started

### Prerequisites

In order to run project you must have installed this software on your local environment:
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node](https://nodejs.org/es/download/)

### Apollo graphQl docs
https://www.apollographql.com/blog/graphql/examples/building-a-graphql-api/

### Starting server

Clone this repository
```
$ git clone https://github.com/vorenus85/graphqlapi_mylibrary
```

Go into directory
```
$ cd graphqlapi_mylibrary
```

Install dependencies

```
$ npm install
```

Start apollo server
```
$ npm start
```

Go to http://localhost:4000/ to test queries

## Executing queries

### Fetching authors

authors

```
query {
  authors {
    ... on Author {
      id
      author
    }
    ... on Response {
      success
      message
    }
  }
}
```

Response
```js
{
    "data": {...}
}
```

authorById

```
query {
  authorById(id: "2") {
    ... on Author {
      id
      author
    }
    ... on Response {
      success
      message
    }
  }
}
```

Response
```js
{
    "data": {...}
}

### Fetching books

query books
```js
query {
  books{
    author
    title
    tags
    isRead
    id
    genre
  }
} 
```

Books response
```js
{
    "data": {...}
}
```

query bookById
```js
query {
  bookById(id: $id){
    author
    title
    tags
    isRead
    id
    genre
  }
} 
```

bookById response
```js
{
    "data": {...}
}
```

query bookByGenre
```js
query {
  bookByGenre(id: $id){
    author
    title
    tags
    isRead
    id
    genre
    id
  }
} 
```

bookByGenre response
```js
{
    "data": {...}
}
```

query bookByAuthor
```js
query {
  bookByAuthor(author: $author){
    author
    title
    tags
    isRead
    id
    genre
  }
} 
```

bookByAuthor response
```js
{
    "data": {...}
}
```

query largestSeries // get five largest series by filtering tags

largestSeries response
```js
{
    "data": {...}
}
```

query bookWithoutGenre

bookWithoutGenre response
```js
{
    "data": {...}
}
```

query bookByTitle // searching/ filtering by part ot title

```js

```

bookByTitle response
```js
{
    "data": {...}
}
```

query bookByTags
```js
query {
  bookByTags(tags: $tags){
    author
    title
    tags
    isRead
    id
    genre
  }
} 
```

bookByTags response
```js
{
    "data": {...}
}
```

query bookByIsRead
```js
query {
  bookByIsRead(isRead: $isRead){
    author
    title
    tags
    isRead
    id
    genre
  }
} 
```

bookByIsRead response
```js
{
    "data": {...}
}
```

Now you can run these queries

## Executing mutations

Now you can run these mutations