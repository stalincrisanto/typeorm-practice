import { ApolloServer } from 'apollo-server-express';
import express, {Request} from 'express';
import { createConnection } from "typeorm";
import { typeDefs } from './graphql/typeDefs/schema';
import graphiql from "graphql-playground-middleware-express";
import { buildSchema } from 'type-graphql';
import { UserResolver } from './graphql/resolvers/Users.resolvers';
import { RecipeResolvers } from './graphql/resolvers/Recipe.resolvers';
import { CategoryResolver } from './graphql/resolvers/Category.resolvers';
import { authentication } from './auth/authentication';
import { contextCreator } from './auth/context/context-creator';

const startServer = async () => {
    const app = express();
    createConnection();

    const schema = await buildSchema({
        resolvers: [UserResolver,RecipeResolvers,CategoryResolver],
        authChecker: authentication
    })

    const server = new ApolloServer({
        typeDefs,
        schema,
        context: contextCreator
    })

    await server.start();
    app.get('/api',graphiql({endpoint:'/graphql'}));
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(4000, () => {
        console.log('Server started on port 4000')
    });
}

startServer();