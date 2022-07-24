import { model, Schema, Types } from "mongoose";

const LocationSchema = new Schema({
  name: String,
  type: String,
  dimension: String,
  residents: [
    {
      type: Types.ObjectId,
      ref: "characters",
    },
  ],
  created: Date,
});

export const Location = model("locations", LocationSchema);
