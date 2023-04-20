import { model } from "mongoose";
import { contentKeySchema } from "../schemas/schemas";
import { IContentResponse } from "../../GraphQL/types/responses";

export const ContentKeyModel = model<IContentResponse>(
  "ContentKeyModel",
  contentKeySchema
);

