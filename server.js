const { ApolloServer, gql } = require('apollo-server');
const data = require('./userdata.json');

const resolvers = {
  Query: {
    userData: () => data,
  },
};

const typeDefs = gql`
  type UsersData {
    id: Int
    name: String
    email: String
    profession: String
  }

  type Query {
    userData: [UsersData]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
