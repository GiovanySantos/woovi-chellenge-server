import { model } from "mongoose";
import { contentKeySchema } from "../schemas/schemas";

export const ContentKeyModel = model("ContentKeyModel", contentKeySchema);

