import {
  ContentKey,
  DBContentKey,
  DBContentKeyList,
} from '../../types/ContentKeysTypes';
import { EnumLang } from '../../types/Enums';
import * as contentKeysService from '../services/contentKeysService';

export const getContentKeys = async (
  page: string,
  lang: string
): Promise<ContentKey[]> => {
  const result: DBContentKeyList = await contentKeysService.findContentKeys(
    page
  );

  return result.keys.map((key: DBContentKey) => {
    return {
      key: key.key,
      content: lang === EnumLang.pt ? key.pt_BR : key.en_US,
    };
  });
};
