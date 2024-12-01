import { GraphQLClient } from "graphql-request";

// GraphQL Client setup
const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQLAPI;
if (!GRAPHQL_ENDPOINT) {
  throw new Error("GraphQL endpoint is not defined");
}
const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: { "Content-Type": "application/json" },
});

export default client;