import { model } from "mongoose";
import { contentKeySchema, userSchema } from "../schemas/schemas";

export const ContentKeyModel = model("ContentKeyModel", contentKeySchema);
export const UserModel = model("UserModel", userSchema);

