import request, { Response } from 'supertest';
import { createApolloServer } from '../src/ApolloServer';
import { ApolloServer } from '@apollo/server';

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

const authContentKeys = [
  'signin_successful',
  'welcome_message',
  'login_signup_message',
  'login_button',
  'Cadaste-se',
  'signup_button',
];

describe('Should test content keys', () => {
  let server: ApolloServer;
  let url: string;
  let response: Response;

  beforeAll(async () => {
    ({ server, url } = await createApolloServer({ port: 0 }));
    response = await request(url).post('/').send(queryData);
  });

  afterAll(async () => {
    await server?.stop();
  });

  authContentKeys.forEach((ck) => {
    it(`Should test ${ck}`, () => expect(response.text).toContain(ck));
  });
});
