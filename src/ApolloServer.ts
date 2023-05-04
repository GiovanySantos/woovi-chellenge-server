import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import resolvers from './graphql/resolvers';
import { ListenOptions } from 'net';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const certPath = path.join(__dirname, './graphql/schema.graphql');
const typeDefs = await fs.readFileSync(certPath, {
  encoding: 'utf-8',
});

export const createApolloServer = async (
  listenOptions: ListenOptions = { port: 4000 }
) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: listenOptions,
  });

  // return the server instance and the url the server is listening on
  return { server, url };
};
