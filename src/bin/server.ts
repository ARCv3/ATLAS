import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from '../lib/graphql/typedefs';
import { resolvers } from '../lib/graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 }
});

console.log(`ATLAS graphql server is ready: ${url}`);
