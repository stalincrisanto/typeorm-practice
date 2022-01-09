"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
//import { resolvers } from './graphql/resolvers/resolvers';
const schema_1 = require("./graphql/typeDefs/schema");
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const type_graphql_1 = require("type-graphql");
const Users_resolvers_1 = require("./graphql/resolvers/Users.resolvers");
const authentication_1 = require("./auth/authentication");
const context_creator_1 = require("./auth/context/context-creator");
const startServer = async () => {
    const app = (0, express_1.default)();
    (0, typeorm_1.createConnection)();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [Users_resolvers_1.UserResolver],
        authChecker: authentication_1.authentication
    });
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        schema,
        context: context_creator_1.contextCreator
    });
    await server.start();
    app.get('/api', (0, graphql_playground_middleware_express_1.default)({ endpoint: '/graphql' }));
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen(4000, () => {
        console.log('Server started on port 4000');
    });
};
startServer();
