import CharactersService from "./characters.service";

const characterData = (character) => {
  return {
    ...character,
    id: character?._id,
    origin: {
      ...character.origin,
      id: character.origin?._id,
    },
    location: {
      ...character.location,
      id: character.location?._id,
    },
    episode: character.episode.map((episode) => ({
      ...episode,
      id: episode?._id,
    })),
  };
};

export default {
  Query: {
    async characters(_, args, __) {
      const { page } = args;
      const characters = await CharactersService.fetchCharacters(page - 1);
      const charactersCount = await CharactersService.getCount();
      return {
        info: {
          next: page + 1,
          prev: page - 1 || null,
          count: charactersCount,
          pages: Math.ceil(charactersCount / 20),
        },
        results: characters.map((character) => characterData(character)),
      };
    },

    async character(_, args, __) {
      const { id } = args;
      const character = await CharactersService.fetchCharacterById(id);
      return characterData(character);
    },
  },
};
