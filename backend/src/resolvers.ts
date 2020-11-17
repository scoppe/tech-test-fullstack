import { QueryResolvers } from "../gen/types-resolvers";
import { ApolloContext } from "./types";

const queryResolvers: QueryResolvers<ApolloContext> = {
  estates: async (parent, args, context) => {
    const rows = await context.mongodb.listEstates();
    return rows
      .filter(
        (row) =>
          row.AddressPostalCode &&
          row.AddressCity &&
          row.Latitude &&
          row.Longitude
      )
      .map((row) => ({
        __typename: "Estate",
        id: row._id,
        price: row.MarketValue,
        surfaceInSqm: row.AreaInSqm,
        location: {
          city: row.AddressCity!,
          postalcode: row.AddressPostalCode!,
          street: row.AddressStreet,
        },
        geopoint: {
          latitude: row.Latitude!,
          longitude: row.Longitude!,
        },
      }));
  },
};

const resolvers = {
  Query: queryResolvers,
};

export default resolvers;
