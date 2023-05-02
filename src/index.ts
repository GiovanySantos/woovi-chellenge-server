import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import resolvers from './graphql/resolvers';
import { GraphQLError } from 'graphql';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const certPath = path.join(__dirname, './graphql/schema.graphql');
const typeDefs = await fs.readFileSync(certPath, {
  encoding: 'utf-8',
});

async function run() {
  const server = await new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
try {
  run();
} catch (error) {
  throw new GraphQLError(error);
}
