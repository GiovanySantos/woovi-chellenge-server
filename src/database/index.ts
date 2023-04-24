import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { ContentKeyModel, UserModel } from "./models/models";
import { GraphQLError } from "graphql";

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
  await connect();
  const query = ContentKeyModel.where({ page_name: String(page) });
  const data = await query.findOne();
  await disconnect();
  return data;
};

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  await connect();
  const user = new UserModel({
    name: name,
    email: email,
    password: password,
  });

  if (UserModel.findOne({ email: email })) {
    throw new GraphQLError("email_in_use", {
      extensions: { code: "BAD_USER_INPUT" },
    });
  }

  try {
    await user.save();
    return user;
  } catch (error) {
    return error;
  }
};

