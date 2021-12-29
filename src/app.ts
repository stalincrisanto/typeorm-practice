// import "reflect-metadata";
// import express from 'express';
// import cors from 'cors';
// import {createConnection} from "typeorm";
// import { graphqlHTTP } from 'express-graphql';
// import { schema } from "./graphql/schema";

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

import {createConnection} from "typeorm";
import {ApolloServer} from 'apollo-server';
import { Category } from './graphql/models/Category';
import { Recipe } from './graphql/models/Recipe';
import { User } from './graphql/models/User';
import { resolvers } from './graphql/resolvers/resolvers';
import { typeDefs } from './graphql/typeDefs/schema';

createConnection();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {User, Category, Recipe}
})

server
    .listen()
    .then(({ url }) => console.log('Server running on port: 4000'))