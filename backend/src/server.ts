import path from "path";
import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import resolvers from "./resolvers";
import { getApolloContext } from "./context";

const typeDefs = importSchema(path.resolve(__dirname, "./schema.graphql"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: getApolloContext(),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
