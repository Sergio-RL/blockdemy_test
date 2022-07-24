import Resolvers from "./models/resolvers.gql";
import Location from "./models/locations.model.gql";
import LocationResolver from "./locations.resolver";

export default {
  resolvers: LocationResolver,
  typeDefs: [Location, Resolvers].join("\n"),
};
