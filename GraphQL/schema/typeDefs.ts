const typeDefs = `#graphql
  type ContentKeyResponseType {
    key: String
    content: String
  }

  type Query {
    contentKeys(keyList: [String]!, lang: String!): [ContentKeyResponseType]
  }
`;

export default typeDefs;

