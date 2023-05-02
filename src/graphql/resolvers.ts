import { createUser } from '../data/controllers/userController';
import { Resolvers } from '../generated/graphql';
// import {
//   ContentKeyQueryResponseType,
//   IContentKey,
//   EnumLang,
// } from './types/types';

const resolvers: Resolvers = {
  Query: {
    //params order(parent, args, contextValue, info)
    // contentKeys: async (_, { page, lang }) => {
    //   const DBContentKeys: IContentDBSchema = await getContentKeysFromDB(page);
    //   const response: ContentKeyQueryResponseType[] = [];
    //   if (!DBContentKeys) return;
    //   DBContentKeys.keys.forEach((contentKey: IContentKey) => {
    //     if (lang === EnumLang.en_US) {
    //       response.push({ key: contentKey.key, content: contentKey.en_US });
    //     } else {
    //       response.push({ key: contentKey.key, content: contentKey.pt_BR });
    //     }
    //   });
    //   return response;
    // },
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const { username, email, password } = input;
      const response = await createUser(username, email, password);
      return response;
    },
    // authenticateUser: async (_, { email, password }) => {
    //   try {
    //     const response = await searchUser(email, password);
    //     return response;
    //   } catch (error) {
    //     throw new Error(error);
    //   }
    // },
  },
};

export default resolvers;
