import { Location } from "./schemas/location";

export default {
  fetchLocations(page) {
    return Location.find({})
      .populate("residents", "name")
      .limit(20)
      .skip(page * 20)
      .lean();
  },

  fetchLocationById(_id) {
    return Location.findOne({ _id }).populate("residents", "name").lean();
  },

  getCount() {
    return Location.countDocuments({});
  },
};
