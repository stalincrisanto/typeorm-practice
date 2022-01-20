import { ApolloServer } from 'apollo-server-express';
import express, { Request } from 'express';
import { createConnection } from "typeorm";
import graphiql from "graphql-playground-middleware-express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from './graphql/resolvers/Users.resolvers';
import { RecipeResolvers } from './graphql/resolvers/Recipe.resolvers';
import { CategoryResolver } from './graphql/resolvers/Category.resolvers';
import { authentication } from './auth/authentication';
import { contextCreator } from './auth/context/context-creator';
import Container from 'typedi';

const startServer = async () => {
    const app = express();
    createConnection();

    const schema = await buildSchema({
        resolvers: [UserResolver, RecipeResolvers, CategoryResolver],
        container: Container,
        authChecker: authentication
    })

    const server = new ApolloServer({
        schema,
        context: contextCreator,
        formatError: ({ message, extensions }) => {
            return { message, extensions };
        }
    })

    await server.start();
    app.get('/api', graphiql({ endpoint: '/graphql' }));
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(4000, () => {
        console.log('Server started on port 4000')
    });
}

startServer();