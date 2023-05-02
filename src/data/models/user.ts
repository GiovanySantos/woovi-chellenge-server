import { Schema, model, Document } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = model<UserDocument>('User', userSchema);
