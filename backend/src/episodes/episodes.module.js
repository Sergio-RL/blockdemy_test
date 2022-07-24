import Resolvers from "./models/resolvers.gql";
import Episode from "./models/episodes.model.gql";
import EpisodeResolver from "./episodes.resolver";

export default {
  resolvers: EpisodeResolver,
  typeDefs: [Episode, Resolvers].join("\n"),
};
