import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "../GraphQL/schema/resolvers";
import typeDefs from "../GraphQL/schema/typeDefs";

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server);

console.log(`🚀  Server ready at: ${url}`);

