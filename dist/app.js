"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const schema_1 = require("./graphql/typeDefs/schema");
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const Auth_1 = __importDefault(require("./auth/Auth"));
const resolvers_1 = require("./graphql/resolvers/resolvers");
const startServer = async () => {
    const app = (0, express_1.default)();
    (0, typeorm_1.createConnection)();
    //,RecipeResolvers,CategoryResolver
    // const schema = await buildSchema({
    //     resolvers: [UserResolver]
    // })
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        context: Auth_1.default
    });
    await server.start();
    app.get('/api', (0, graphql_playground_middleware_express_1.default)({ endpoint: '/graphql' }));
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen(4000, () => {
        console.log('Server started on port 4000');
    });
};
startServer();
