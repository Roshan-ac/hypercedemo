import { GraphQLClient } from "graphql-request";

// GraphQL Client setup
const GRAPHQL_ENDPOINT = "https://admin.hyperce.io/shop-api";
const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: { "Content-Type": "application/json" },
});

export default client;