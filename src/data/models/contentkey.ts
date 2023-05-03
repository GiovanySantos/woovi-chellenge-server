import { Schema, model, Document } from 'mongoose';

export interface ContentKeyDocument extends Document {
  page_name: string;
  keys: [];
}

const contentKeySchema = new Schema<ContentKeyDocument>({
  page_name: { type: String, required: true },
  keys: { type: [], required: true },
});

export const ContentKeyModel = model<ContentKeyDocument>(
  'ContentKey',
  contentKeySchema
);
