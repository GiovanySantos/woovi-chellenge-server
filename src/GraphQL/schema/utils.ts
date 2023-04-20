import { EnumLanguage } from "../types/enums";
import { IContentResponse } from "../types/responses";
import { getContentKeysFromDB } from "../../database";
import { Db, Document } from "mongodb";

export const getContentKeys = async (
  keyList: string[],
  lang: EnumLanguage
): Promise<IContentResponse[]> => {
  const res: IContentResponse[] = [];

  const DBContentKeys = await getContentKeysFromDB();
  if (!DBContentKeys) return;

  keyList.forEach((key: string) => {
    const contentData: Document = DBContentKeys.find(
      (content) => content.key === key
    );
    res.push({
      key: key,
      content:
        lang === EnumLanguage.pt_BR
          ? String(contentData.pt_BR)
          : String(contentData.en_US),
    });
  });

  return res;
};

