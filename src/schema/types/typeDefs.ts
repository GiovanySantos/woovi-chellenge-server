const typeDefs = `#graphql
  type ContentKeyResponseType {
    key: String
    content: String
  }

  type Query {
    contentKeys(page: String!, lang: String!): [ContentKeyResponseType]
  }
`;

export default typeDefs;

