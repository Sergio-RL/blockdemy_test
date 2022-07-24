import { model, Schema, Types } from "mongoose";

const EpisodeSchema = new Schema({
  name: String,
  air_date: String,
  episode: String,
  characters: [
    {
      type: Types.ObjectId,
      ref: "characters",
    },
  ],
  created: Date,
});

export const Episode = model("episodes", EpisodeSchema);
