const AuthorBook = require('./models/userModel');

const { buildSchema } = require('graphql');

var schema = buildSchema(`
input BookInput {
bookTitle: String
authorName: String
}
type Book {
id: ID!
bookTitle: String
authorName: String
}
type Query {
getBook(id: ID!): Book
getBooks: [Book!]!
getBookByAuthor(authorName: String!): [Book!]!
}
type Mutation {
createBook(input: BookInput): Book
updateBook(id: ID!, input: BookInput): Book
deleteBook(id: ID!): Book
}
`);
const root = {
    getBook: async ({ id }) => {
      try {
        const book = await AuthorBook.findById(id);
        if (!book) {
          throw new Error('No book exists with id ' + id);
        }
        return book;
      } catch (error) {
        throw new Error('Error get book by id: ' + error.message);
      }
    },
    getBooks: async () => {
      try {
        const books = await AuthorBook.find();
        return books;
      } catch (error) {
        throw new Error('Error get books: ' + error.message);
      }
    },
    getBookByAuthor: async ({ authorName }) => {
      try {
        const books = await AuthorBook.find({authorName});
        return books;
      } catch (error) {
        throw new Error('Error get book by author: ' + error.message);
      }
    },
    createBook: async ({ input }) => {
      try {
        const book = await AuthorBook.create(input);
        return book;
      } catch (error) {
        throw new Error('Error creating book: ' + error.message);
      }
    },
    updateBook: async ({ id, input }) => {
      try {
        const book = await AuthorBook.findByIdAndUpdate(id, input, { new: true });
        if (!book) {
          throw new Error('No book exists with id: ' + id);
        }
        return book;
      } catch (error) {
        throw new Error('Error updating book: ' + error.message);
      }
    },
    deleteBook: async ({ id }) => {
      try {
        const book = await AuthorBook.findByIdAndDelete(id);
        if (!book) {
          throw new Error('No book exists with id ' + id);
        }
        return book;
      } catch (error) {
        throw new Error('Error deleting book: ' + error.message);
      }
    }
  };
  


   
module.exports = { schema, root };