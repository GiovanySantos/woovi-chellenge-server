import { createApolloServer } from './ApolloServer';

// another file and call it elsewhere.
if (process.env.NODE_ENV !== 'test') {
  const { url } = await createApolloServer();
  console.log(`🚀 Query endpoint ready at ${url}`);
}
