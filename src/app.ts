import { ApolloServer } from 'apollo-server-express';
import express, {Request} from 'express';
import { createConnection } from "typeorm";
import { Category } from './graphql/models/Category';
import { Recipe } from './graphql/models/Recipe';
import { User } from './graphql/models/User';
import { resolvers } from './graphql/resolvers/resolvers';
import { typeDefs } from './graphql/typeDefs/schema';

const startServer = async () => {
    const app = express();
    createConnection();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => ({
            token: req.headers.authorization
        })
    })
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(4000, () => {
        console.log('Server started on port 4000')
    });
}

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