const typeDefs = `#graphql
  type ContentKeyResponseType {
    key: String
    content: String
  }

  type CreateUserResponseType {
    successfull: Boolean
  }

  type User {
    name: String
    email: String
  }

  type Query {
    contentKeys(page: String!, lang: String!): [ContentKeyResponseType]!
  }

  type Mutation {
    getAuthUser(email: String!, password: String!): User!
    createUser(name: String!, email: String!, password: String!): User!
  }
`;

export default typeDefs;

