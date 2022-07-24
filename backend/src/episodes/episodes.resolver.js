import EpisodesService from "./episodes.service";

const episodeData = (episode) => {
  return {
    ...episode,
    id: episode?._id,
    characters: episode.characters.map((character) => ({
      ...character,
      id: character?._id,
    })),
  };
};

export default {
  Query: {
    async episodes(_, args, __) {
      const { page } = args;
      const episodes = await EpisodesService.fetchEpisodes(page - 1);
      const episodesCount = await EpisodesService.getCount();
      console.log(episodes.length);
      return {
        info: {
          next: page + 1,
          prev: page - 1 || null,
          count: episodesCount,
          pages: Math.ceil(episodesCount / 20),
        },
        results: episodes.map((episode) => episodeData(episode)),
      };
    },

    async episode(_, args, __) {
      const { id } = args;
      const episode = await EpisodesService.fetchEpisodeById(id);
      return episodeData(episode);
    },
  },
};
