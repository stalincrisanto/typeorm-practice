import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import {createConnection} from "typeorm";
import routerUsers from './routes/users.routes';
import routerCategories from "./routes/categories.routes";
import routerRecipes from "./routes/recipes.routes";

const app = express();
createConnection();

//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use(routerUsers);
app.use(routerCategories);
app.use(routerRecipes)

app.listen(3000, ()=> {
    console.log(`Servidor corriendo en puerto 3000`);
})