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

### Fetching books

query books
```js
query {
  books{
    author
    title
    tags
    isRead
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
  }
} 
```

bookById response
```js
{
    "data": {...}
}
```

query bookByAuthor
```js
query {
  bookById(author: $author){
    author
    title
    tags
    isRead
  }
} 
```

bookById response
```js
{
    "data": {...}
}
```

query bookByTitle // searching/ filtering by part ot title

https://www.apollographql.com/blog/graphql/filtering/how-to-search-and-filter-results-with-graphql/
https://www.apollographql.com/blog/apollo-client/how-to-filter-and-search-using-variables-in-apollo-client/

using Input Type

```js

```

bookById response
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
  }
} 
```

bookByTags response
```js
{
    "data": {...}
}
```

Now you can run these queries

## Executing mutations

Now you can run these mutations