import { GraphQLClient } from 'graphql-request';

// Instantiate a new client with your Hygraph endpoint
const hygraph = new GraphQLClient(
  'https://api-us-west-2.hygraph.com/v2/clmgfi3e20jim01uhcxskde9j/master'
);

export default hygraph;