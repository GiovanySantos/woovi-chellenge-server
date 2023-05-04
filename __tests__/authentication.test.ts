// we import a function that we wrote to create a new instance of Apollo Server

// we'll use supertest to test our server
import request from 'supertest';
import { createApolloServer } from '../src/ApolloServer';

// this is the query for our test
const queryData = {
  query: `query ContentKeys($page: String!, $lang: String!) {
    contentKeys(page: $page, lang: $lang) {
      content
      key
    }
  }`,
  variables: {
    page: 'auth_page',
    lang: 'pt_BR',
  },
};

//auth page content keys list
const authContentKeys = [
  'signin_successful',
  'welcome_message',
  'login_signup_message',
  'login_button',
  'Cadaste-se',
  'signup_button',
];

describe('Authentication e2e test', () => {
  let server, url;

  // before the tests we spin up a new Apollo Server
  beforeAll(async () => {
    // Note we must wrap our object destructuring in parentheses because we already declared these variables
    // We pass in the port as 0 to let the server pick its own ephemeral port for testing
    ({ server, url } = await createApolloServer({ port: 0 }));
  });

  // after the tests we'll stop the server
  afterAll(async () => {
    await server?.stop();
  });

  it('Testing content keys', async () => {
    const response = await request(url).post('/').send(queryData);
    authContentKeys.forEach((ck) => {
      expect(response.text).toContain(ck);
    });
  });
});
