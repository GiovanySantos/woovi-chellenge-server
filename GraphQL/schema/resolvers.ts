import { IContentRequest } from "../types/requests";
import { getContentKeys } from "./utils";

const resolvers = {
  Query: {
    //params order(parent, args, contextValue, info)
    contentKeys: async (_, { keyList, lang }: IContentRequest) => {
      return getContentKeys(keyList, lang);
    },
  },
};

export default resolvers;

