"use strict";
// import "reflect-metadata";
// import express from 'express';
// import cors from 'cors';
// import {createConnection} from "typeorm";
// import { graphqlHTTP } from 'express-graphql';
// import { schema } from "./graphql/schema";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// createConnection();
// //middlewares
// app.use(cors());
// app.use(express.json());
// app.use('/graphql', graphqlHTTP({
//     schema:schema,
//     graphiql: true,
// }));
// //rutas
// /*app.use(routerUsers);
// app.use(routerCategories);
// app.use(routerRecipes)*/
// app.listen(3000, ()=> {
//     console.log(`Servidor corriendo en puerto 3000`);
// })
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apollo_server_1 = require("apollo-server");
const Category_1 = require("./graphql/models/Category");
const Recipe_1 = require("./graphql/models/Recipe");
const User_1 = require("./graphql/models/User");
const resolvers_1 = require("./graphql/resolvers/resolvers");
const schema_1 = require("./graphql/typeDefs/schema");
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers,
    context: { User: User_1.User, Category: Category_1.Category, Recipe: Recipe_1.Recipe }
});
//server.applyMiddleware({app, path: '/graphql'});
// app.listen({port:4000}), () => {
// }
server
    .listen()
    .then(({ url }) => console.log('Server running on port: 4000'));
