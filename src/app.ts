import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import {createConnection} from "typeorm";
import { graphqlHTTP } from 'express-graphql';
import { schema } from "./graphql/schema";
/*import routerUsers from './routes/users.routes';
import routerCategories from "./routes/categories.routes";
import routerRecipes from "./routes/recipes.routes";*/

const app = express();
createConnection();

//middlewares
app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql: true,
}));


//rutas
/*app.use(routerUsers);
app.use(routerCategories);
app.use(routerRecipes)*/

app.listen(3000, ()=> {
    console.log(`Servidor corriendo en puerto 3000`);
})