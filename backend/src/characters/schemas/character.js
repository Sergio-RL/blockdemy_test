import { model, Schema, Types } from "mongoose";

const CharacterSchema = new Schema({
  name: String,
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    type: Types.ObjectId,
    ref: "locations",
  },
  location: {
    type: Types.ObjectId,
    ref: "locations",
  },
  image: String,
  episode: [
    {
      type: Types.ObjectId,
      ref: "episodes",
    },
  ],
  created: Date,
});

export const Character = model("characters", CharacterSchema);
