import request, { Response } from 'supertest';
import { createApolloServer } from '../src/ApolloServer';
import { ApolloServer } from '@apollo/server';

const mutation = `mutation {
    createUser(
      input: {
        username: "giovany",
        email: "giovany.email@teste.com",
        password: "SenhaSegura123",
      }
    ) {
      email
      username
    }
  }`;

describe('Should test authentication', () => {
  let server: ApolloServer;
  let url: string;
  let response: Response;

  beforeAll(async () => {
    ({ server, url } = await createApolloServer({ port: 0 }));
    response = await request(url).post('/').send({ query: mutation });
  });

  afterAll(async () => {
    await server?.stop();
  });

  it(`Should create user and return email and username`, () => {
    expect(response.text).toContain('Email already in use');
  });
});
