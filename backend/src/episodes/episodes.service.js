import { Episode } from "./schemas/episode";

export default {
  fetchEpisodes(page) {
    return Episode.find({})
      .populate("characters", "name")
      .limit(20)
      .skip(page * 20)
      .lean();
  },

  fetchEpisodeById(_id) {
    return Episode.findOne({ _id }).populate("characters", "name").lean();
  },

  getCount() {
    return Episode.countDocuments({});
  },
};
