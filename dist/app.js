"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const express_graphql_1 = require("express-graphql");
const schema_1 = require("./graphql/schema");
/*import routerUsers from './routes/users.routes';
import routerCategories from "./routes/categories.routes";
import routerRecipes from "./routes/recipes.routes";*/
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.schema,
    graphiql: true,
}));
//rutas
/*app.use(routerUsers);
app.use(routerCategories);
app.use(routerRecipes)*/
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto 3000`);
});
