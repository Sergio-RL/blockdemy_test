import LocationsService from "./locations.service";

const locationData = (location) => {
  return {
    ...location,
    id: location?._id,
    residents: location.residents.map((resident) => ({
      ...resident,
      id: resident?._id,
    })),
  };
};

export default {
  Query: {
    async locations(_, args, __) {
      const { page } = args;
      const locations = await LocationsService.fetchLocations(page - 1);
      const locationsCount = await LocationsService.getCount();
      return {
        info: {
          next: page + 1,
          prev: page - 1 || null,
          count: locationsCount,
          pages: Math.ceil(locationsCount / 20),
        },
        results: locations.map((location) => locationData(location)),
      };
    },

    async location(_, args, __) {
      const { id } = args;
      const location = await LocationsService.fetchLocationById(id);
      return locationData(location);
    },
  },
};
