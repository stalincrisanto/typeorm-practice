import { Router } from "express";
import { authentication } from "../auth/authentication";
import { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe } from '../controllers/recipes.controllers';


const routerRecipes = Router();

routerRecipes.get('/recipes', authentication, getRecipes);
routerRecipes.get('/recipes/:id', authentication, getRecipe);
routerRecipes.post('/recipes', authentication, createRecipe);
routerRecipes.put('/recipes/:id', authentication, updateRecipe);
routerRecipes.delete('/recipes/:id', authentication, deleteRecipe);

/*
 
routerRecipes.get('/recipes/categoria/:categoria', getRecetaPorCategoria);
routerRecipes.get('/recipes/nombre/:nombre', getRecetaPorNombre);
routerRecipes.get('/recipes/ingrediente/:ingrediente', getRecetaPorIngrediente);
*/
export default routerRecipes;