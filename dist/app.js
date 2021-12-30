"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const resolvers_1 = require("./graphql/resolvers/resolvers");
const schema_1 = require("./graphql/typeDefs/schema");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    (0, typeorm_1.createConnection)();
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        context: ({ req }) => ({
            token: req.headers.authorization
        })
    });
    yield server.start();
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen(4000, () => {
        console.log('Server started on port 4000');
    });
});
startServer();
// import "reflect-metadata";
// import express from 'express';
// import cors from 'cors';
// import {createConnection} from "typeorm";
// import { graphqlHTTP } from 'express-graphql';
// import { schema } from "./graphql/schema";
//import { Request } from 'express';
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
