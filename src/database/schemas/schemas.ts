import { Schema } from "mongoose";
export interface IContentDBSchema {
  page_name: string;
  keys: [];
}

export const contentKeySchema = new Schema<IContentDBSchema>({
  page_name: { type: String, required: true },
  keys: { type: [], required: false },
});

