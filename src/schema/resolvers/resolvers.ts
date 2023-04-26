import { createUser, findUser, getContentKeysFromDB } from "../../database";
import { IContentDBSchema } from "../../database/schemas/schemas";

enum EnumLang {
  en_US = "en_US",
  pt_BR = "pt_BR",
}

interface IContentKey {
  key: string;
  pt_BR: string;
  en_US: string;
}

type ContentKeyQueryResponseType = {
  key: string;
  content: string;
};

const resolvers = {
  Query: {
    //params order(parent, args, contextValue, info)
    contentKeys: async (_, { page, lang }) => {
      const DBContentKeys: IContentDBSchema = await getContentKeysFromDB(page);
      const response: ContentKeyQueryResponseType[] = [];

      if (!DBContentKeys) return;

      DBContentKeys.keys.forEach((contentKey: IContentKey) => {
        if (lang === EnumLang.en_US) {
          response.push({ key: contentKey.key, content: contentKey.en_US });
        } else {
          response.push({ key: contentKey.key, content: contentKey.pt_BR });
        }
      });

      return response;
    },
  },

  Mutation: {
    createUser: async (_, { name, email, password }) => {
      try {
        const response = await createUser(name, email, password);
        return response;
      } catch (error) {
        throw new Error(error);
      }
    },
    getAuthUser: async (_, { email, password }) => {
      try {
        const response = await findUser(email, password);
        return response;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

export default resolvers;

