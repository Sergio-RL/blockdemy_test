import { Character } from "./schemas/character";

export default {
  fetchCharacters(page) {
    return Character.find({})
      .populate("origin", "name")
      .populate("location", "name")
      .populate("episode", "name")
      .limit(20)
      .skip(page * 20)
      .lean();
  },

  fetchCharacterById(_id) {
    return Character.findOne({ _id })
      .populate("origin", "name")
      .populate("location", "name")
      .populate("episode", "name")
      .lean();
  },

  getCount() {
    return Character.countDocuments({});
  },
};
