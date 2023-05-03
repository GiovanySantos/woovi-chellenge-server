import { getContentKeys } from '../data/controllers/contentKeyController';
import { createUser } from '../data/controllers/userController';
import { Resolvers } from '../generated/graphql';

const resolvers: Resolvers = {
  Query: {
    //params order(parent, args, contextValue, info)
    contentKeys: async (_, { page, lang }) => {
      const response = await getContentKeys(page, lang);
      return response;
    },
  },

  Mutation: {
    //params order(parent, args, contextValue, info)
    createUser: async (_, { input }) => {
      const { username, email, password } = input;
      const response = await createUser(username, email, password);
      return response;
    },
  },
};

export default resolvers;
