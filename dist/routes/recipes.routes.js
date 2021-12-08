"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipes_controllers_1 = require("../controllers/recipes.controllers");
const routerRecipes = (0, express_1.Router)();
routerRecipes.get('/recipes', recipes_controllers_1.getRecipes);
routerRecipes.get('/recipes/:id', recipes_controllers_1.getRecipe);
routerRecipes.post('/recipes', recipes_controllers_1.createRecipe);
routerRecipes.put('/recipes/:id', recipes_controllers_1.updateRecipe);
routerRecipes.delete('/recipes/:id', recipes_controllers_1.deleteRecipe);
/*
 
routerRecipes.get('/recipes/categoria/:categoria', getRecetaPorCategoria);
routerRecipes.get('/recipes/nombre/:nombre', getRecetaPorNombre);
routerRecipes.get('/recipes/ingrediente/:ingrediente', getRecetaPorIngrediente);
*/
exports.default = routerRecipes;
