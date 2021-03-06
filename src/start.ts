import Logger from './utils/Logger';
import { ApolloServer, gql } from 'apollo-server';

// -------------------------------------------------------------------- configuration
process.on('SIGINT', onExit);

async function onExit() {
  process.stdout.write('\n');
  Logger.warn(`---------- Node STOP ----------`);
  process.removeAllListeners();
  process.exit();
}

process.on('uncaughtException', function (error) {
  Logger.warn('An uncaught error occurred!');
  Logger.error(error);
});

Logger.info(`---------- Node START ----------`);
// -------------------------------------------------------------------- EVENTS
// -------------------------------------------------------------------- START

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

/*
Note: If your server is deployed to an environment where NODE_ENV is set to production, GraphQL Playground and introspection will be disabled by default. To enable them, you'll need to explicitly set playground: true and introspection: true within the options to ApolloServer's constructor.
more information about that here: https://www.apollographql.com/docs/tutorial/production/
 */
