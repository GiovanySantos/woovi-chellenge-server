import { contentDB } from "../dataSources/DBSim";
import { EnumLanguage } from "../types/enums";
import { IContentResponse } from "../types/responses";

export const getContentKeys = (
  keyList: string[],
  lang: EnumLanguage
): IContentResponse[] => {
  const res: IContentResponse[] = [];

  keyList.forEach((key: string) => {
    const contentData = contentDB.find((content) => content.key === key);
    res.push({
      key: key,
      content:
        lang === EnumLanguage.pt_BR ? contentData.pt_BR : contentData.en_US,
    });
  });

  return res;
};

