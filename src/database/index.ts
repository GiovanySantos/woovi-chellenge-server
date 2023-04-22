import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { ContentKeyModel } from "./models/models";
dotenv.config();

const connect = async () => {
  await mongoose
    .connect(process.env.MONGODB_API as string)
    .then(() => console.log("DB connected"))
    .catch((error) => console.log(error));
};

const disconnect = async () => {
  await mongoose.connection
    .close()
    .then(() => console.log("DB Disconnected"))
    .catch((error) => console.log(error));
};

export const getContentKeysFromDB = async (page: string) => {
  const query = ContentKeyModel.where({ page_name: String(page) });
  await connect();
  const data = await query.findOne();
  await disconnect();
  return data;
};

