import { getContentKeysFromDB } from "../../database";
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
};

export default resolvers;

