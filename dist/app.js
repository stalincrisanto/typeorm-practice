"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const categories_routes_1 = __importDefault(require("./routes/categories.routes"));
const recipes_routes_1 = __importDefault(require("./routes/recipes.routes"));
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//rutas
app.use(users_routes_1.default);
app.use(categories_routes_1.default);
app.use(recipes_routes_1.default);
app.listen(3000, () => {
    console.log(`Servidor corriendo en puerto 3000`);
});
