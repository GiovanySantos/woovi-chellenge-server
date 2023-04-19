import { Schema } from "mongoose";

export interface IContentDBSchema {
  key: string;
  pt_BR: string;
  en_US: string;
}

export const contentKeySchema = new Schema<IContentDBSchema>({
  key: { type: String, required: true },
  pt_BR: { type: String, required: false },
  en_US: { type: String, required: false },
});

