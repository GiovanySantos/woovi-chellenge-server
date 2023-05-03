import { GraphQLError } from 'graphql';
import { ContentKeyModel } from '../models/contentkey';
import { connect, disconnect } from '../utils';

export const findContentKeys = async (page: string) => {
  await connect();
  try {
    const data = await ContentKeyModel.findOne({ page_name: page });
    return data;
  } catch (error) {
    console.log(error);
    throw new GraphQLError('Error consulting content keys');
  } finally {
    await disconnect();
  }
};
