import { Document, Schema, model } from 'mongoose';

export interface ContentKeyDocument extends Document {
  page_name: string;
  keys: [];
}

const contentKeySchema = new Schema<ContentKeyDocument>({
  page_name: { type: String, required: true },
  keys: { type: [], required: false },
});

export const ContentKeyModel = model('ContentKey', contentKeySchema);
