import Resolvers from "./models/resolvers.gql";
import Character from "./models/character.model.gql";
import CharacterResolver from "./characters.resolver";

export default {
  resolvers: CharacterResolver,
  typeDefs: [Resolvers, Character].join("\n"),
};
