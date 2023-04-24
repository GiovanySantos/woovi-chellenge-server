import { Schema } from "mongoose";
export interface IContentDBSchema {
  page_name: string;
  keys: [];
}

export const contentKeySchema = new Schema<IContentDBSchema>({
  page_name: { type: String, required: true },
  keys: { type: [], required: false },
});

export const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

