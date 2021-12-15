"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = require("../auth/authentication");
const recipes_controllers_1 = require("../controllers/recipes.controllers");
const routerRecipes = (0, express_1.Router)();
routerRecipes.get('/recipes', authentication_1.authentication, recipes_controllers_1.getRecipes);
routerRecipes.get('/recipes/:id', authentication_1.authentication, recipes_controllers_1.getRecipe);
routerRecipes.post('/recipes', authentication_1.authentication, recipes_controllers_1.createRecipe);
routerRecipes.put('/recipes/:id', authentication_1.authentication, recipes_controllers_1.updateRecipe);
routerRecipes.delete('/recipes/:id', authentication_1.authentication, recipes_controllers_1.deleteRecipe);
/*
 
routerRecipes.get('/recipes/categoria/:categoria', getRecetaPorCategoria);
routerRecipes.get('/recipes/nombre/:nombre', getRecetaPorNombre);
routerRecipes.get('/recipes/ingrediente/:ingrediente', getRecetaPorIngrediente);
*/
exports.default = routerRecipes;
