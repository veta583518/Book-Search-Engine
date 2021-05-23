const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedbooks: [Books]
  }
  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    iamge: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: Sting!, email: String!, password: String!): Auth
    saveBook(bookInput: BookInput!): User
    removeBook(bookId: ID): User
  }
  type Query {
    me: User
  }
  type Auth {
    token: ID
    user: User
  }
`;

module.exports = typeDefs;
