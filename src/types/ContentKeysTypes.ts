export type ContentKey = {
  key: string;
  content: string;
};

export type DBContentKey = {
  key: string;
  pt_BR: string;
  en_US: string;
};

export type DBContentKeyList = {
  page_name: string;
  keys: DBContentKey[];
};
