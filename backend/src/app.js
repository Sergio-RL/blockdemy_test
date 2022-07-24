import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import mongoose from "mongoose";

import CharactersModule from "./characters/characters.module";
import EpisodesModule from "./episodes/episodes.module";
import LocationsModule from "./locations/locations.module";

import { Character } from "./characters/schemas/character";
import { Episode } from "./episodes/schemas/episode";
import { Location } from "./locations/schemas/location";

import characters from "../seeders/characters.json";
import episodes from "../seeders/episodes.json";
import locations from "../seeders/locations.json";

require("dotenv").config();

const seedDB = async () => {
  await Character.deleteMany({});
  await Episode.deleteMany({});
  await Location.deleteMany({});
  await Character.insertMany(characters);
  await Episode.insertMany(episodes);
  await Location.insertMany(locations);
};

const startServer = async (typeDefs, resolvers) => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  mongoose.connect(process.env.MONGODB_URI).then(() => {
    seedDB();
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );

  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
  );
};

const typeDefs = [
  CharactersModule.typeDefs,
  EpisodesModule.typeDefs,
  LocationsModule.typeDefs,
].join("\n");

const resolvers = {
  Query: {
    ...CharactersModule.resolvers.Query,
    ...EpisodesModule.resolvers.Query,
    ...LocationsModule.resolvers.Query,
  },
};

startServer(typeDefs, resolvers);
