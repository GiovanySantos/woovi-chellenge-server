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

  if (await UserModel.findOne({ email })) {
    await disconnect();
    throw new GraphQLError("email_validation_2", {
      extensions: { code: "BAD_USER_INPUT" },
    });
  }

  const user = new UserModel({
    name: name,
    email: email,
    password: password,
  });

  try {
    await user.save();
    return user;
  } catch (error) {
    return error;
  } finally {
    await disconnect();
  }
};

export const findUser = async (email: string, password: string) => {
  await connect();
  const userData = await UserModel.findOne({ email });
  await disconnect();

  if (!userData || password !== userData.password) {
    throw new GraphQLError("email_or_password_error_message", {
      extensions: { code: "BAD_USER_INPUT" },
    });
  }

  return userData;
};

