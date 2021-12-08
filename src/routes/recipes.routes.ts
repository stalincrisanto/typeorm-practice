import { Router } from "express";
import { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe } from '../controllers/recipes.controllers';

const routerRecipes = Router();

routerRecipes.get('/recipes', getRecipes);
routerRecipes.get('/recipes/:id', getRecipe);
routerRecipes.post('/recipes', createRecipe);
routerRecipes.put('/recipes/:id', updateRecipe);
routerRecipes.delete('/recipes/:id', deleteRecipe);

/*
 
routerRecipes.get('/recipes/categoria/:categoria', getRecetaPorCategoria);
routerRecipes.get('/recipes/nombre/:nombre', getRecetaPorNombre);
routerRecipes.get('/recipes/ingrediente/:ingrediente', getRecetaPorIngrediente);
*/
export default routerRecipes;